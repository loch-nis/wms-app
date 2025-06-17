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

        $filled = $this->fillInZeroes($startDate, $endDate, $counts);

        return $filled->toArray();
    }

    private function getCountsByMonth(Carbon $startDate, Carbon $endDate): Collection
    {
        $dayAfterEndDate = $endDate->copy()->addMonth();

        return DB::table('wares')
            ->whereDate('created_at', '>=', $startDate)
            ->whereDate('created_at', '<', $dayAfterEndDate)
            ->selectRaw("DATE_FORMAT(created_at, '%Y-%m') as group_by_value, COUNT(*) as count")
            ->groupBy('group_by_value')
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


    // todo fix
    /* public function getBarChartData(?string $groupBy, array $filters): array
    {
        if (!$groupBy) {
            return []; // or throw validation exception
        }

        // Step 1: Fetch counts grouped by the requested field
        $results = DB::table('wares')
            ->when($filters['begin'], fn($q) =>
                $q->whereDate('created_at', '>=', $start)
            )
            ->when($filters['end'], fn($q) =>
                $q->whereDate('created_at', '<', $end->copy()->addMonth())
            )
            ->selectRaw("`$groupBy` as group_by_value, COUNT(*) as count")
            ->groupBy('group_by_value')
            ->pluck('count', 'group_by_value'); // e.g. [3 => 12, 1 => 5]

        // Step 2: Optionally fill in known values with 0
        // This is optional and depends on whether you want to show all placements
        // even those with 0 entries in the date range
        $distinctValues = DB::table('wares')
            ->distinct()
            ->orderBy($groupBy)
            ->pluck($groupBy);

        $filled = $distinctValues->map(fn($value) => [
            'group_by_value' => $value,
            'count' => (int) ($results[$value] ?? 0),
        ]);

        return $filled->toArray();
    } */
}