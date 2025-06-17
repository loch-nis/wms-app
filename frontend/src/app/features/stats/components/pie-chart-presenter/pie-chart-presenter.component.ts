import { Component, input } from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { defaultChartOptions } from '../../shared/chart-config';

@Component({
	selector: 'app-pie-chart-presenter',
	imports: [ChartComponent],
	templateUrl: './pie-chart-presenter.component.html',
})
export class PieChartPresenterComponent {
		chartOptions = input<ApexOptions>(defaultChartOptions); 
}
