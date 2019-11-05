<template>
	<section>
		<div class="flex font_display p_3 flex_column flex_row:md">
			<div class="flex_auto font_3">
				{{contract.nickname}}
				<i class="c_primary fa-pencil far fas font_n1 vertical-align_middle"></i>
			</div>
			<div class="flex_shrink c_primary-n1 lh_0 text_right:md text_left m-t_n3:md m-b_4:sm">
				<strong class="font_n2 opacity_5 uppercase lh_0 display_none block:md">Contract #</strong>
				<span class="font_1 font_2:md block">{{ contract.id }}</span>
			</div>
		</div>
		<div class="br_solid br_1 br_black-2 font_ui">
			<div class="flex flex_column-reverse flex_row:md p-y_3">
				<div class="flex flex_auto p-y_3 m-l_4 font_n1 m-t_3 m-t_0:md">
					<div class="flex_auto text_right text_left:md">
						<div class="p-x_3">
							<strong class="p-r_2">Amount:</strong>
							{{contract.amount}}
						</div>
						<div class="p-x_3">
							<strong class="p-r_2">Purchased:</strong>
							{{ contract.date_purchase}}
						</div>
					</div>
					<div class="flex_auto">
						<div class="p-x_3">
							<strong class="p-r_2">Term:</strong>
							{{ contract.term}} years
						</div>
						<div class="p-x_3">
							<strong class="p-r_2">Expires:</strong>
							{{ contract.date_expiration}}
						</div>
					</div>
				</div>
				<div
					class="flex_auto m-t_3 m-t_0:md font_2 c_shade-n5 shadow_1 m-x_4 bg_shade-5 br_1 br_solid br_black-2"
				>
					<div class="flex self_center w_100">
						<div class="flex_auto p-l_5 p_r-3 p-b_3 text_right">
							<span class="block text_right">{{contract.date_lastPayment}}</span>
							<strong class="font_n2 opacity_5 uppercase lh_0 block text_right">Last Payment</strong>
						</div>
						<div class="flex_shrink m-l_4">
							<StatefullIcon class="font_1 shadow_n1" :state="'success'" style="height:100%" />
						</div>
					</div>
				</div>
				<div
					class="flex_auto m-t_3 m-t_0:md font_2 c_shade-n5 shadow_1 m-x_4 bg_shade-5 br_1 br_solid br_black-2"
				>
					<div class="flex self_center w_100">
						<div class="flex_auto p-l_5 p_r-3 p-b_3 text_right">
							<span class="block text_right">{{ contract.date_paymentDue}}</span>
							<strong class="font_n2 opacity_5 uppercase lh_0 block text_right">Next Payment</strong>
						</div>
						<div class="flex_shrink m-l_4">
							<StatefullIcon class="font_1 shadow_n1" :state="'success'" style="height:100%" />
						</div>
					</div>
				</div>
			</div>
			<div class="bg_shade-5 br_1 br_black-2 br_solid c_shade-n5 font_2 m-t_0:md p-t_3:md shadow_n1">
				<ul class="ul_none block font_display p-x_3 p-x_4:md p-b_3 p-t_3 p-y_3:md font_1">
					<transition v-for="(bundle) in contract.bundle" :key="bundle.id">
						<li
							class="bg_white-8 br_none inline-block m-t_0:md m-b_3 p-x_5 p_3 shadow_2 text_left flex flex_column flex_row:md"
						>
							<div class="flex_auto">
								<div class>
									<span class="inline-block font_2 m-l_n4 m-r_3">
										<i class="fas fa-plus-square c_primary h:c_primary-n3"></i>
									</span>
									<span class="inline-block font_2">{{bundle.name}}</span>
									<strong
										class="font_n1 opacity_7 uppercase m-t_2 inline-block font_light"
									>seats ({{bundle.seats}})</strong>
								</div>

								<ul class="font_0 ul_none p-t_4 p-b_2">
									<li class="br-b_1 br_primary-3 br_dotted font_bold flex font_n1 w_100 p-b_2">
										<span class="font_ui w_50:md p-x_3">Group Name</span>
										<span class="w_20 w_10:md text_right p-x_3">Total</span>
										<span class="w_20 w_10:md text_right p-x_3">Filled</span>
										<span class="w_20 w_10:md text_right p-x_3">Requested</span>
										<span class="w_20 w_10:md text_right p-x_3">Empty</span>
										<span class="w_20 w_10:md text_right c_alert-n3 p-x_3">Locked</span>
									</li>
									<li class="p-y_2 flex w_100">
										<span
											class="font_ui w_50:md c_primary h:underline overflow_hidden m-l_3"
											data-type="name"
										>Group Name A</span>
										<span class="w_20 w_10:md text_right" data-type="seats.total">50</span>
										<span class="w_20 w_10:md text_right" data-type="seats.filled">25</span>
										<span class="w_20 w_10:md text_right" data-type="seats.requested">10</span>
										<span class="w_20 w_10:md text_right" data-type="seats.empty">12</span>
										<span
											class="w_20 w_10:md text_right c_alert-n3 font_bold m-r_3"
											data-type="seats.locked"
										>3</span>
									</li>
									<li class="p-y_2 flex w_100 bg_black-2">
										<span
											class="font_ui w_50:md c_primary h:underline overflow_hidden m-l_3"
											data-type="name"
										>Group Name B</span>
										<span class="w_20 w_10:md text_right" data-type="seats.total">100</span>
										<span class="w_20 w_10:md text_right" data-type="seats.filled">60</span>
										<span class="w_20 w_10:md text_right" data-type="seats.requested">30</span>
										<span class="w_20 w_10:md text_right" data-type="seats.empty">3</span>
										<span
											class="w_20 w_10:md text_right c_alert-n3 font_bold m-r_3"
											data-type="seats.locked"
										>7</span>
									</li>
									<li class="p-y_2 flex w_100">
										<span
											class="font_ui w_50:md c_primary h:underline overflow_hidden m-l_3"
											data-type="name"
										>Group Name C</span>
										<span class="w_20 w_10:md text_right" data-type="seats.total">100</span>
										<span class="w_20 w_10:md text_right" data-type="seats.filled">60</span>
										<span class="w_20 w_10:md text_right" data-type="seats.requested">30</span>
										<span class="w_20 w_10:md text_right" data-type="seats.empty">3</span>
										<span
											class="w_20 w_10:md text_right c_alert-n3 font_bold m-r_3"
											data-type="seats.locked"
										>7</span>
									</li>
								</ul>
								<div class="text_right">
									<a href class="font_n1 c_primary">
										<i class="fas fa-wrench p-r_3"></i>Manage Seat Allocation of Bundle
									</a>
								</div>
							</div>
							<div class="flex_shrink display_none inline-block:md">
								<gChart
									:settings="{packages:['pie']}"
									:chartType="'PieChart'"
									:chartOptions="chartOptions"
									:chartData="chartData"
								/>
							</div>
						</li>
					</transition>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import StatefullIcon from "../../subComponents/StatefullIcon.vue";
import gChart from "../../BasicChart/googleChart.vue";

export default {
	components: {
		StatefullIcon,
		gChart
	},
	data() {
		return {};
	},
	props: {
		contract: {
			type: Object,
			default: () => {
				return {
					id: "9501150317",
					nickname: "Contract 2018",
					status: "not paid",
					seatTotal: 73,
					term: 3,
					amount: "$3644.01",
					date_paymentDue: "9/11/2020",
					date_lastPayment: "12/18/2018",
					date_expiration: "5/1/2019",
					date_purchase: "4/8/2019",
					institution: {
						name: "Voyatouch",
						id: "9580767043",
						purchaser: {
							id: "1455678721",
							name: "Florri MacKeeg",
							email: "fmackeeg0@blogger.com"
						}
					},
					bundle: [
						{
							id: "3333333333-p",
							name: "OmegaSap",
							seats: 250
						},
						{
							id: "1111111111-p",
							name: "Cardio+",
							seats: 205
						}
					]
				};
			}
		},
		chartOptions: {
			type: Object,
			default: () => {
				return {
					title: "Total Seat Allocation",
					subtitle: "Sales, Expenses, and Profit: 2014-2017",
					is3D: false,
					height: 300,
					legend: "none",
					pieSliceText: "label",
					pieSliceTextStyle: { color: "#000", fontSize: "16" },
					slices: {
						0: { offset: 0.1, color: "#a3d1df" },
						1: { offset: 0.01, color: "#f0cd9f" },
						2: { offset: 0.01, color: "#9cd0ab" },
						3: { offset: 0.01, color: "#7a0e0e", textStyle: { color: "#fff" } }
					},
					pieStartAngle: -90
				};
			}
		},
		chartData: {
			type: Array,
			default: () => {
				return [
					["Status", "Count"],
					["unused", 10],
					["requested", 30],
					["filled", 90],
					["locked", 21]
				];
			}
		}
	}
};
</script>

<style lang="scss" scoped>
</style>