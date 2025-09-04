import { Component, input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ChartComponent } from "ng-apexcharts";
import { defaultChartConfig, defaultChartGrid, defaultChartSeries, defaultChartStroke, defaultChartTitle, defaultChartXaxis } from '../../shared/chart-config';


@Component({
	selector: 'app-bar-chart-presenter',
	imports: [ChartComponent],
	templateUrl: './bar-chart-presenter.component.html',
})
export class BarChartPresenterComponent {
	readonly chartSeries = input<ApexAxisChartSeries>(defaultChartSeries);
	readonly chartXaxis = input<ApexXAxis>(defaultChartXaxis);
	readonly chartConfig = input<ApexChart>(defaultChartConfig);
	readonly chartTitle = input<ApexTitleSubtitle>(defaultChartTitle);

	readonly chartStroke = defaultChartStroke;
	readonly chartGrid = defaultChartGrid;
}
