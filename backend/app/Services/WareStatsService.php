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


}