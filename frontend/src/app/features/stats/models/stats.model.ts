export type AppChartType = 'LINE' |'BAR' | 'PIE';


export interface ChartDataPoint {
  group_by_value: string; 
  // todo I think I will have it be the month for the line chart
  // and the name of the ware/category for the bar/pie charts? Or smt??
  count: number;
}

export interface ChartDataResponse {
  result: ChartDataPoint[];
}