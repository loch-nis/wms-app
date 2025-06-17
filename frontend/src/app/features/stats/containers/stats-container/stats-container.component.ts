import { Component, computed, inject, signal } from '@angular/core';
import { ChartTypeSelectorPresenterComponent } from '../../components/chart-type-selector-presenter/chart-type-selector-presenter.component';
import { AppChartType, ChartDataPoint } from '../../models/stats.model';
import { GroupBySelectorPresenterComponent } from '../../components/group-by-selector-presenter/group-by-selector-presenter.component';
import { attributeLabels, Ware } from '../../../../core/models/ware.model';
import { LineChartPresenterComponent } from '../../components/line-chart-presenter/line-chart-presenter.component';
import { BarChartPresenterComponent } from '../../components/bar-chart-presenter/bar-chart-presenter.component';
import { PieChartPresenterComponent } from '../../components/pie-chart-presenter/pie-chart-presenter.component';
import { chartLabels } from '../../shared/chart-config';
import { ApexChart, ApexOptions, ChartType } from 'ng-apexcharts';
import { rxResource } from '@angular/core/rxjs-interop';
import { StatsService } from '../../stats.service';


@Component({
	selector: 'app-stats-container',
	imports: [
    ChartTypeSelectorPresenterComponent,
    GroupBySelectorPresenterComponent,
    LineChartPresenterComponent,
    BarChartPresenterComponent,
    PieChartPresenterComponent
],
	templateUrl: './stats-container.component.html',
})
export class StatsContainerComponent {
	readonly chartType = signal<AppChartType | undefined>(undefined);
	readonly groupBy = signal<keyof Ware | undefined>(undefined);

	private readonly chartTypesWithGroupByOption: AppChartType[] = ['BAR', 'PIE'];

	private readonly statsService = inject(StatsService);

	readonly chartDataResource = rxResource({
		params: () => ({
			chartType: this.chartType() ?? 'LINE',
			groupBy: this.groupBy(),
		}),
		stream: ({ params }) =>
			this.statsService.getStats(params)
	});
	
	// todo remove this raw thing. And perhaps use hasValue check again cos safer.
	readonly chartData = computed<ChartDataPoint[] | []>(() => {
		const raw = this.chartDataResource.value()?.result ?? [];
		return [...raw];
	});

	readonly chartTitle = computed<ApexTitleSubtitle>(() => {
		const type = this.chartType();
		const group = this.groupBy();
		if (!type)
			return { text: '', align: 'left' };

		let text = chartLabels[type];

		if (group) text += ` grouped by ${attributeLabels[group].toLowerCase()}`;

		return { text, align: 'left' };

	});

	readonly chartHasGroupByOption = computed<boolean>(() => {
		const ct = this.chartType();
		if (ct === undefined) return false;
		return this.chartTypesWithGroupByOption.includes(ct);
	});


	readonly isChartReady = computed(() =>
		this.chartSeries()[0]?.data.length > 0
	);

	readonly chartSeries = computed<ApexAxisChartSeries>(() => [{
		name: 'Count',
		data: this.chartData().map(d => d.count),
	}]);

	readonly chartXaxis = computed<ApexXAxis>(() => ({
		categories: this.chartData().map(d => d.group_by_value)
	}));

	readonly chartConfig = computed<ApexChart>(() => ({
		height: 350,
		type: (this.chartType()?.toLowerCase() as ChartType) ?? 'line',
		zoom: {
			enabled: false
		}
	}));

	// todo perhaps?:
	/* Move your presenter imports to a grouped alias (if this grows)

	Like ChartPresenterComponents = [LineChartPresenterComponent, BarChart..., ...]

	Not needed now, but useful in scale-ups */

}
