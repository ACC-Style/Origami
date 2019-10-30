<template>
	<div class="br_solid br_1 br_black-2 font_ui p-y_3">
		<div class="font_2 text_left p-x_3">
			<div class="flex">
				<div class="flex_shrink">
					<StatefullIcon class="font_1 shadow_n1" :state="'success'" style="height:100%" />
				</div>
				<div class="flex_shrink">
					<Btn class="font_1 shadow_n1" :state="'secondary'" style="height:100%">
						<i class="fas fa-envelope"></i>
					</Btn>
				</div>
				<div class="flex_auto p-l_3">
					<span class="block">{{seat.user.name}}</span>
					<strong class="font_n2 opacity_5 uppercase lh_0 block">Name</strong>
				</div>
			</div>
		</div>
		<div class>
			<span class="block font_ text_right">{{seat.date_lockedTill}}</span>
			<strong class="font_n2 opacity_5 uppercase lh_0 block text_right">Locked Untill</strong>
		</div>
		<div class>
			<span class="block font_ text_right">{{seat.date_accepted}}</span>
			<strong class="font_n2 opacity_5 uppercase lh_0 block text_right">Accepted</strong>
		</div>
		<div class>
			<span class="block font_ text_right">{{seat.date_invite}}</span>
			<strong class="font_n2 opacity_5 uppercase lh_0 block text_right">Invited</strong>
		</div>

		<Btn :state="primary" :icon="false" :size="small" @click="action">
			<i class="fas fa-sync-alt"></i> Request Again
		</Btn>
		<Btn :state="'error'" :icon="true" :size="small" @click="action">Remove</Btn>
		<Btn :state="'secondary'" :icon="false" :size="small" :isDisabled="true" @click="action">
			<i class="fas fa-lock"></i> Locked
		</Btn>
	</div>
</template>

<script>
import StatefullIcon from "../../subComponents/StatefullIcon.vue";
import Btn from "../../subComponents/Btn.vue";

export default {
	components: {
		StatefullIcon, Btn
	}, data() {
		return {

		}
	}, methods: {
		action() {

		},
	},
	props: {
		seat: {
			type: Object,
			default: () => {
				return {
					"seat_number": 1,
					"seat_status": "requested",
					"date_invite": "2018-11-14 04:31:36 UTC",
					"date_accepted": "2018-11-22 04:31:36 UTC",
					"date_lockedTill": "2019-11-22 04:31:36 UTC",
					"user": {
						"name": "Beale Pedrozzi",
						"id": "5293956316",
						"email": "bpedrozzi0@4shared.com"
					},
					"bundle": {
						"id": "3333333333-p",
						"name": "OmegaSap"
					},
					"contract": {
						"id": "1502221939"
					},
					"group": {
						"id": "8597317842",
						"name": "hospitals_midwest"
					}
				};
			}
		}
	},

}
</script>

<style lang="scss" scoped>
</style>