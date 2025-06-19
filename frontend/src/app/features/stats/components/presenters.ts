import { BarChartPresenterComponent } from "./bar-chart-presenter/bar-chart-presenter.component";
import { ChartTypeSelectorPresenterComponent } from "./chart-type-selector-presenter/chart-type-selector-presenter.component";
import { MonthRangeSelectorPresenterComponent } from "./month-range-selector-presenter/month-range-selector-presenter.component";
import { GroupBySelectorPresenterComponent } from "./group-by-selector-presenter/group-by-selector-presenter.component";
import { LineChartPresenterComponent } from "./line-chart-presenter/line-chart-presenter.component";
import { PieChartPresenterComponent } from "./pie-chart-presenter/pie-chart-presenter.component";


export const ChartPresenterComponents = [
    LineChartPresenterComponent,
    BarChartPresenterComponent,
    PieChartPresenterComponent,
]

export const SelectorPresenterComponents = [
    ChartTypeSelectorPresenterComponent,
    MonthRangeSelectorPresenterComponent,
    GroupBySelectorPresenterComponent,
]