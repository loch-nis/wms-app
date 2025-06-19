import { ApexAxisChartSeries, ApexChart, ApexGrid, ApexStroke, ApexTitleSubtitle, ApexXAxis } from "ng-apexcharts";
import { AppChartType } from "../models/stats.model";

export const chartTypes: AppChartType[] = ['LINE', 'BAR', 'PIE'];

export const chartLabels: Record<AppChartType, string> = {
	LINE: 'Line chart',
	BAR: 'Bar chart',
	PIE: 'Pie chart',
};

export const defaultChartSeries: ApexAxisChartSeries = [{
		name: '',
		data: [],
	}
]

export const defaultChartXaxis: ApexXAxis = {
	categories: []
}

export const defaultChartConfig: ApexChart = {
	height: 350,
	type: "line",
	zoom: {
		enabled: false
	}
}
export const defaultChartTitle: ApexTitleSubtitle = {
	text: "",
	align: "left"
}




export const defaultChartStroke: ApexStroke = {
	curve: "smooth"
}

export const defaultChartGrid: ApexGrid = {
	row: {
		colors: ["#f3f3f3", "transparent"], 
		opacity: 0.5
	}
}

