import { Component, input } from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { defaultChartOptions } from '../../shared/chart-config';

@Component({
	selector: 'app-bar-chart-presenter',
	imports: [ChartComponent],
	templateUrl: './bar-chart-presenter.component.html',
})
export class BarChartPresenterComponent {
	chartOptions = input<ApexOptions>(defaultChartOptions); 
}
