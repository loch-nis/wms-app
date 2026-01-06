import { Component, computed, inject, signal } from '@angular/core';
import { AppChartType, ChartDataPoint } from '../../models/stats.model';
import { SelectorPresenterComponents } from '../../components/presenters';
import { ChartPresenterComponents } from '../../components/presenters';
import { attributeLabels, Ware } from '../../../../core/models/ware.model';
import { chartLabels } from '../../shared/chart-config';
import { ApexChart, ChartType } from 'ng-apexcharts';
import { rxResource } from '@angular/core/rxjs-interop';
import { StatsService } from '../../stats.service';
import {
  FIRST_MONTH_OF_CURRENT_YEAR,
  LAST_MONTH_OF_CURRENT_YEAR,
} from '../../components/month-range-selector-presenter/month-range-selector-presenter.component';

@Component({
  selector: 'app-stats-container',
  imports: [SelectorPresenterComponents, ChartPresenterComponents],
  templateUrl: './stats-container.component.html',
})
export class StatsContainerComponent {
  readonly chartType = signal<AppChartType | undefined>(undefined);
  readonly groupBy = signal<keyof Ware | undefined>(undefined);
  readonly startMonth = signal<string>(FIRST_MONTH_OF_CURRENT_YEAR);
  readonly endMonth = signal<string>(LAST_MONTH_OF_CURRENT_YEAR);

  private readonly chartTypesWithGroupByOption: AppChartType[] = ['BAR', 'PIE'];

  private readonly statsService = inject(StatsService);

  readonly chartDataResource = rxResource({
    params: () => ({
      chartType: this.chartType() ?? 'LINE',
      startMonth: this.startMonth(),
      endMonth: this.endMonth(),
      groupBy: this.groupBy(),
    }),
    stream: ({ params }) => this.statsService.getStats(params),
  });

  readonly chartHasGroupByOption = computed<boolean>(() => {
    const chartType = this.chartType();
    if (chartType === undefined) return false;
    return this.chartTypesWithGroupByOption.includes(chartType);
  });

  readonly chartData = computed<ChartDataPoint[] | []>(() =>
    this.chartDataResource.hasValue()
      ? this.chartDataResource.value().result
      : [],
  );

  readonly chartTitle = computed<ApexTitleSubtitle>(() => {
    const type = this.chartType();
    const group = this.groupBy();
    if (!type) return { text: '', align: 'left' };

    let text = chartLabels[type];

    if (group) text += ` grouped by ${attributeLabels[group].toLowerCase()}`;

    return { text, align: 'left' };
  });

  readonly isChartReady = computed(
    () => this.chartSeries()[0]?.data.length > 0,
  );

  readonly chartSeries = computed<ApexAxisChartSeries>(() => [
    {
      name: 'Count',
      data: this.chartData().map((d) => d.count),
    },
  ]);

  readonly chartXaxis = computed<ApexXAxis>(() => ({
    categories: this.chartData().map((d) => d.group_by_value),
  }));

  readonly chartConfig = computed<ApexChart>(() => ({
    height: 350,
    type: (this.chartType()?.toLowerCase() as ChartType) ?? 'line',
    zoom: {
      enabled: false,
    },
  }));
}
