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
        // todo validation

        $chartType = $request->query('chart_type');
        $groupBy = $request->query('group_by');
        $startMonth = $request->query('start_month');
        $endMonth = $request->query('end_month');

        $startDate = Carbon::createFromFormat('Y-m', $startMonth)->startOfMonth();
        $endDate = Carbon::createFromFormat('Y-m', $endMonth)->startOfMonth();

        // todo figure out how to structure these chartData-methods for it to be clean and DRY.
        $data = match ($chartType) {
        'LINE' => $this->service->getLineChartData($startDate, $endDate),
        'BAR'  => $this->service->getBarChartData($startDate, $endDate, $groupBy),
         'PIE'  => $this->service->getPieChartData($startDate, $endDate, $groupBy),
        default => [],
    };

        return response()->json(['result'=>$data]);
    }
}