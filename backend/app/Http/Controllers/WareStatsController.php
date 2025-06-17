<?php

namespace App\Http\Controllers;

use App\Services\WareStatsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;

class WareStatsController extends Controller
{
    public function __construct(private WareStatsService $service) {}

    public function index(Request $request): JsonResponse
    {
        //todo validation

        $chartType = $request->query('chart_type');
        $groupBy = $request->query('group_by');
        /* $start = $request->query('start');
        $end = $request->query('end'); */

        // for testing:
        $start = '2025-01';
        $end = '2025-12';

        $startDate = Carbon::createFromFormat('Y-m', $start)->startOfMonth();
        $endDate = Carbon::createFromFormat('Y-m', $end)->startOfMonth();

        // todo make start end optional / or better yet, just give them a default of the current year
        $data = match ($chartType) {
        'LINE' => $this->service->getLineChartData($startDate, $endDate),
        'BAR'  => $this->service->getBarChartData($startDate, $endDate, $groupBy),
        'PIE'  => $this->service->getPieChartData($startDate, $endDate, $groupBy),
        default => [],
    };

        return response()->json(['result'=>$data]);
    }
}