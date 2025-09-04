import { Component, model } from '@angular/core';
import { AppChartType } from '../../models/stats.model';
import { FormsModule } from '@angular/forms';
import { chartLabels, chartTypes } from '../../shared/chart-config';

@Component({
	selector: 'app-chart-type-selector',
	imports: [FormsModule],
	templateUrl: './chart-type-selector-presenter.component.html',
})
export class ChartTypeSelectorPresenterComponent {
	chartType = model<AppChartType | undefined>(undefined);

	readonly chartTypes = chartTypes;
	readonly chartLabels = chartLabels;
}

