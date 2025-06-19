export type AppChartType = 'LINE' |'BAR' | 'PIE';


export interface ChartDataPoint {
  // todo I think I will have this group_by_value be the month for the line chart
  // and the name of the ware/category for the bar/pie charts? Or something??
  group_by_value: string; 
  count: number;
}

export interface ChartDataResponse {
  result: ChartDataPoint[];
}