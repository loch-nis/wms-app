import { ApexOptions, ApexStroke } from "ng-apexcharts";
import { AppChartType } from "../models/stats.model";

export const chartTypes: AppChartType[] = ['LINE', 'BAR', 'PIE'];

export const chartLabels: Record<AppChartType, string> = {
	LINE: 'Line chart',
	BAR: 'Bar chart',
	PIE: 'Pie chart',
};


export const defaultChartOptions: ApexOptions = {
	series: [
		{
			name: "",
			data: []
		}
	],
	chart: {
		height: 350,
		type: "line",
		zoom: {
			enabled: false
		}
	},
	xaxis: {
		categories: []
	},
	title: {
		text: "",
		align: "left"
	},
	grid: {
		row: {
			colors: ["#f3f3f3", "transparent"], 
			opacity: 0.5
		}
	},
	stroke: {
		curve: "smooth"
	},
}

export const defaultChartStroke: ApexStroke = {
	curve: "smooth"
}