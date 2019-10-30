<template>
	<div class="br_solid br_1 br_black-2 font_ui p-t_3">
		<div class="flex">
			<div class="flex_auto flex flex_column-reverse flex_row:md p-x_4 p-y_3 font_1">
				<div class="flex_auto m-t_n3:md font_1 lh_0">
					<!-- <strong class="font_n2 opacity_5 uppercase lh_0">Bundles</strong> -->
					<ul class="ul_none block m-l_n2 m-l_n3:md font_display">
						<transition v-for="(bundle) in contract.bundle" :key="bundle.id">
							<li
								class="m-t_3 m-t_0:md p_3 p-x_5 inline-block text_left m-r_3 bg_secondary-5 shadow_2 h:bg_primary-n1 h:shadow-2 h:c_white"
							>
								<span class="block font_2">{{bundle.name}}</span>
								<strong class="font_n2 opacity_7 uppercase m-t_2 block font_italic">seats ({{bundle.seats}})</strong>
							</li>,
						</transition>
					</ul>
				</div>
				<div class="flex_shrink c_primary-n1 lh_0 text_right:md text_center m-t_n3:md m-b_4:sm">
					<strong class="font_n2 opacity_5 uppercase lh_0">Contract #</strong>
					<span class="font_2 block">{{ contract.id }}</span>
				</div>
			</div>
		</div>
		<div class="flex flex_column flex_row:md p-y_3 bg_shade-5 shadow_n1">
			<div class="flex flex_auto p-y_3 m-l_4 font_n1">
				<div class="flex_auto text_right text_left:md">
					<div class="p-x_3">
						<strong>Amount:</strong>
						{{contract.amount}}
					</div>
					<div class="p-x_3">
						<strong>Purchased:</strong>
						{{ contract.date_purchase}}
					</div>
				</div>
				<div class="flex_auto">
					<div class="p-x_3">
						<strong>Term:</strong>
						{{ contract.term}} years
					</div>
					<div class="p-x_3">
						<strong>Expires:</strong>
						{{ contract.date_expiration}}
					</div>
				</div>
			</div>
			<div class="flex_auto m-t_3 m-t_0:md font_2 c_shade-n5 bg_white-8 shadow_1 m-x_4">
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
			<div class="flex_auto m-t_3 m-t_0:md font_2 c_shade-n5 bg_white-8 shadow_1 m-x_4">
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
	</div>
</template>

<script>
import StatefullIcon from "../../subComponents/StatefullIcon.vue";

export default {
	components: {
		StatefullIcon
	}, data() {
		return {

		}
	},
	props: {
		contract: {
			type: Object,
			default: () => {
				return {
					"id": "9501150317",
					"status": "not paid",
					"seatTotal": 73,
					"term": 3,
					"amount": "$3644.01",
					"date_paymentDue": "9/11/2020",
					"date_lastPayment": "12/18/2018",
					"date_expiration": "5/1/2019",
					"date_purchase": "4/8/2019",
					"institution": {
						"name": "Voyatouch",
						"id": "9580767043",
						"purchaser": {
							"id": "1455678721",
							"name": "Florri MacKeeg",
							"email": "fmackeeg0@blogger.com"
						}
					},
					"bundle": [
						{
							"id": "3333333333-p",
							"name": "OmegaSap",
							"seats": 99
						},
						{
							"id": "1111111111-p",
							"name": "Cardio+",
							"seats": 77
						}
					]
				};
			}
		}
	},

}
</script>

<style lang="scss" scoped>
</style>