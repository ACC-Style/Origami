<template>
	<div class="flex font_ui br_solid br-b_1 br_secondary-4 h:bg_primary-5" v-on:click="function(){isSelected = !isSelected}">
					<div
				class="flex_shrink flex toggle_handle p_3 br_secondary-3 br-r_1 br_solid h:bg_secondary-4 self_stretch"
				
			>
				<i class="far vertical-align_middle flex_grow-0 self_center"	:class="[isSelected ?'fa-square' : 'fa-check-square']" ></i>
			</div>
		<div class="flex_auto p-y_2 p-x_4">
			<div class="font_0">{{email}}</div>
			<div class="font_n2 c_primary-n3">{{dateOfRequest}}</div>
		</div>
		<div class="flex_shrink p-y_2 p-x_2 self_center">			
			<Btn :state="'secondary'" :icon="false" size:="'small'" @click="resendRequest()">Resend</Btn>
		</div>
		<div class="flex_shrink p-y_2 p-x_2 self_center">
			<Btn :state="'error'" :icon="true"  size:="'small'" @click="cancelRequest()">Cancel</Btn>
		</div>
	</div>
</template>

<script>
import Btn from "../subComponents/Btn";

export default {
	name: "FitRequest",
	components: { Btn },
	props: {
		email: {
			type: String,
			default: "no.one@fakeemail.com"
		},
		dateOfRequest: {
			type: String,
			default: "01/20/2000"
		}
	},
	methods: {
		cancelRequest() {
			this.$emit("cancelRequest");
		},
		resendRequest() {
			this.$emit("resendRequest");
		}
	},
	data() {
		return {
			isSelected:"false"
		};
	}
};
</script>

<style lang="scss" scoped>
</style>