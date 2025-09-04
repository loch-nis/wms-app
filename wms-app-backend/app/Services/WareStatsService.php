<?php

namespace App\Services;

use \Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

class WareStatsService 
{
    public function getLineChartData(Carbon $startDate, Carbon $endDate): array
    {
        $counts = $this->getCountsByMonth($startDate, $endDate);
        logger()->info('GROUPED COUNTS:', $counts->all());

        $filled = $this->fillInZeroes($startDate, $endDate, $counts);

        return $filled->toArray();
    }

    private function getCountsByMonth(Carbon $startDate, Carbon $endDate): Collection
    {
        $dayAfterEndDate = $endDate->copy()->addMonth();

        $groupExpr = $this->monthlyGroupByExpr('created_at');

        // todo I believe this can be done with less code..
        // or perhaps sqlite just forces it to be this way?
        return DB::table('wares')
            ->whereDate('created_at', '>=', $startDate)
            ->whereDate('created_at', '<', $dayAfterEndDate)
            ->select(DB::raw($groupExpr . ' as group_by_value'), DB::raw('COUNT(*) as count'))
            ->groupBy(DB::raw($groupExpr))
            ->get()
            ->pluck('count', 'group_by_value');
    }

    private function fillInZeroes(Carbon $startDate, Carbon $endDate, Collection $counts): Collection
    {
        $filled = collect();
        $current = $startDate->copy();

        while ($current->lte($endDate)) {
            $month = $current->format('Y-m');
            $filled->push([
                'group_by_value' => $month,
                'count' => (int) ($counts[$month] ?? 0),
            ]);
            $current->addMonth();
        }

        return $filled;
    }


    // TODO something like this but split and made SRP:
    /* public function getChartData(
    Carbon $startDate,
    Carbon $endDate,
    string $groupByField,
    string $chartType
): array {
    $query = DB::table('wares')
        ->whereDate('created_at', '>=', $startDate)
        ->whereDate('created_at', '<=', $endDate);

    if ($groupByField === 'month') {
        $query->selectRaw("DATE_FORMAT(created_at, '%Y-%m') as group_by_value, COUNT(*) as count")
              ->groupBy('group_by_value');

        $rawCounts = $query->pluck('count', 'group_by_value');
        return $this->fillInZeroes($startDate, $endDate, $rawCounts)->toArray();
    }

    // For non-time-based grouping
    $rawCounts = $query->selectRaw("$groupByField as group_by_value, COUNT(*) as count")
                       ->groupBy('group_by_value')
                       ->pluck('count', 'group_by_value');

    // No zero-fill needed
    return $rawCounts
        ->map(fn($count, $value) => ['group_by_value' => $value, 'count' => $count])
        ->values()
        ->toArray();
}
 */


    private function monthlyGroupByExpr(string $column): string
    {
        $driver = DB::getDriverName();
        return $driver === 'sqlite'
            ? "strftime('%Y-%m', $column)"
            : "DATE_FORMAT($column, '%Y-%m')";
    }

}