export type AppChartType = 'LINE' | 'BAR' | 'PIE';

export interface ChartDataPoint {
  group_by_value: string;
  count: number;
}

export interface ChartDataResponse {
  result: ChartDataPoint[];
}
