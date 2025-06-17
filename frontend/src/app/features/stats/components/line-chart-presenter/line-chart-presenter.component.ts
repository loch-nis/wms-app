import { Component, computed, input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ChartComponent } from "ng-apexcharts";
import { defaultChartStroke } from '../../shared/chart-config';

@Component({
	selector: 'app-line-chart-presenter',
	imports: [ChartComponent],
	templateUrl: './line-chart-presenter.component.html',
})
export class LineChartPresenterComponent {
	
	readonly chartSeries = input<ApexAxisChartSeries>([{
			name: '',
			data: [],
		}
	]);
	readonly chartXaxis = input<ApexXAxis>({
		categories: []
	});

	readonly chartConfig = input<ApexChart>({
		height: 350,
		type: "line",
		zoom: {
			enabled: false
		}
	});
	readonly chartTitle = input<ApexTitleSubtitle>({
		text: "",
		align: "left"
	});

	readonly chartStroke = defaultChartStroke;
	// todo grid default
/* 

	readonly series = computed(() => this.chartSeries());
	readonly xaxis = computed(() => this.chartXaxis());
	readonly base = computed(() => this.chartConfig());
	readonly title = computed(() => this.chartTitle()); */
}
