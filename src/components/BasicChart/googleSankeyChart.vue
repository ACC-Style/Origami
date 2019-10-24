<template>
	<div>
		<GChart
			:settings="{packages: ['sankey']}"
			:data="chartData"
			:options="chartOptions"
			:createChart="(el, google) => new google.visualization.Sankey(el)"
			@ready="onChartReady"
		/>
	</div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
	components: {
		GChart
	},
	props: {
		chartData: {
			type: Array,
			default: () => [
				["To", "From", "Weight"],
				["A", "X", 5],
				["A", "Y", 7],
				["A", "Z", 6],
				["B", "X", 2],
				["B", "Y", 9],
				["B", "Z", 4]
			]
		},
		chartOptions: {
			type: Object,
			default: () => {
				return {
					title: "Seat Allocation to Groups",
					subtitle: "Sales, Expenses, and Profit: 2014-2017"
				};
			}
		}
	},
	data() {
		return {
			chartsLib: null
			// Array will be automatically processed with visualization.arrayToDataTable function
		};
	},
	methods: {
		onChartReady(chart, google) {
			this.chartsLib = google;
		}
	}
};
</script>

<style lang="scss" scoped>
</style>