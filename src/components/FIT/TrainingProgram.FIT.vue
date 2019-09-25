<template>
	<section class="font_0 font_ui br_solid br-b_1 br_secondary-4">
		<div class="primaryData flex">
			<div
				class="flex_shrink flex toggle_handle p_3 br_secondary-3 br-r_1 br_solid h:bg_secondary-4 self_stretch"
				@click="function(){showSecondaryInfo = !showSecondaryInfo}"
			>
				<i class="far fa-plus-square vertical-align_middle flex_grow-0 self_center"></i>
			</div>
			<StatusIcon
				v-if="statusOfRecord.state != ''"
				class="flex_shrink status_icon"
				:state="statusOfRecord.state"
			></StatusIcon>
			<div class="flex_auto p-l_3 p-y_3 lh_1">
				<span class="fullName">{{fullName}}</span>
				<a class="block email font_n2 c_primary h:underline">{{email}}</a>
				<div class="statusMessage font_n3 font_bold" v-if="statusOfRecord.state != ''">
					<span
						class="c_alert"
						v-if="statusOfRecord.state == 'error' && statusOfRecord.message == 'missingEndDate'"
					>Missing End Date</span>
					<span
						class="c_warning"
						v-if="statusOfRecord.state == 'warning' && statusOfRecord.message == 'missingBirthday'"
					>Missing Birthday</span>
				</div>
			</div>
			<div class="flex_shrink actions p-r_3 p-y_2 text_right">
				<Btn class :size="'small'" :state="'error'" :icon="true" @click="$emit('click')">Remove</Btn>
				<div class="flex_shrink endDate font_n2 text_center font_italic c_primary-n3">
					<span class="font_bold">end date:</span>
					{{endDate}}
					<span
						class="c_alert font_bold"
						v-if="statusOfRecord.state == 'error' && statusOfRecord.message == 'missingEndDate'"
					>Missing End Date</span>
				</div>
			</div>
		</div>
		<div
			class="secondaryData br_solid p_4 p-y_3 br-t_1 br_secondary-4 shadow_n1 texture_light"
			v-if="showSecondaryInfo"
		>
			<div class="flex">
				<addressBlock class="flex_auto" v-bind="address"></addressBlock>
			</div>
			<div class="flex font_n1">
				<div class="birthday flex_auto">
					<strong>Birthday:</strong>
					{{birthday}}
					<span
						class="c_warning font_bold"
						v-if="statusOfRecord.state == 'warning' && statusOfRecord.message == 'missingBirthday'"
					>Missing End Date</span>
				</div>
				<div class="endDate flex_auto">
					<strong>End Date:</strong>
					{{endDate}}
					<span
						class="c_alert font_bold"
						v-if="statusOfRecord.state == 'error' && statusOfRecord.message == 'missingEndDate'"
					>Missing End Date</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Btn from "../subComponents/Btn";
import AddressBlock from "../subComponents/AddressBlock";
import StatusIcon from "../subComponents/StatefullIcon";

export default {
	name: "FIT",
	components: {
		Btn,
		AddressBlock,
		StatusIcon
	},
	props: {
		ID: {
			type: Number,
			default: 0
		},
		fullName: {
			type: String,
			default: "Jacob Micheals, PHD, FACC"
		},
		endDate: {
			type: String,
			default: "04/04/2000"
		},
		email: {
			type: String,
			default: "email@abc.com"
		},

		birthday: {
			type: String,
			default: "10/22/1958"
		},
		address: {
			type: Object,
			default: function() {
				return { institution: "missing" };
			}
		}
	},
	methods: {
		removeFit() {
			$emit("removeFIT");
		},
		updatedBirthday() {
			$emit("update:Brithday");
		},
		updateEndDate() {
			$emit("update:endDate");
		}
	},
	computed: {
		statusOfRecord() {
			let status = { state: "", message: "" };
			if (this.birthday == "") {
				status.state = "warning";
				status.message = "missingBirthday";
			}
			if (this.endDate == "") {
				(status.state = "error"), (status.message = "missingEndDate");
			}
			return status;
		}
	},
	data() {
		return {
			showSecondaryInfo: false
		};
	}
};
</script>

<style lang="scss" scoped>
</style>