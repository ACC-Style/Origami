<template>
	<div id="inputEmail" class="question font_ui">
		<label
			for="email"
			v-bind:class="{
				c_alert: inputState == 'alert',
				c_warning: inputState == 'warning'
			}"
			class="label-holder flex font_0 font_bold p-y_2"
		>
			<span class="text cell flex_shrink">
				<slot></slot>
			</span>
			<span v-if="required" class="required-holder flex_shrink">
				<i class="fas fa-asterisk c_warning font_n3 vertical-align_top"></i>
			</span>
		</label>
		<div class="input-holder flex self_end shadow_overlap-light">
			<ValueIcon
				v-if="icon"
				class="flex_shrink"
				:state="inputState"
				:icon="icon"
				inputNameTarget="'text'"
			/>
			<input
				id="text"
				name="text"
				v-on:change="onChange(text)"
				class="br_1 p-y_2 br_solid flex_auto p-x_4 lh_3"
				type="text"
				v-model="text"
				required="required"
				:class="{
					'br_alert-n1': inputState == 'error',
					'br_warning-n1': inputState == 'warning',
					'br_info-n1': inputState == 'info',
					'br_success-n1': inputState == 'success',
					'br_black-2 ': inputState == ''
				}"
			/>
			<div
				class="optional br_0 br_solid br-b_1 p-y_3 flex_shrink p-x_3 lh_3"
				v-if="!required"
				:class="{
					'br_alert-n1 c_alert': inputState == 'error',
					'br_warning-n1 c_warning': inputState == 'warning',
					'br_info-n1 c_primary': inputState == 'info',
					'br_success-n1 c_primary': inputState == 'success',
					' br_shade c_primary ': inputState == ''
				}"
			>
				<small>optional</small>
			</div>
		</div>
		<messageHolder :state="inputState">{{ stateMessage }}</messageHolder>
	</div>
</template>

<script>
import messageHolder from "../subComponents/InputMessageHolder.vue";
import stateIcon from "../subComponents/StatefullIcon";
import ValueIcon from "../subComponents/inputValueIcon";

export default {
	name: "inputEmail",
	props: {
		value: { type: String, default: "" },
		icon: { type: String, default: "" },
		required: { type: Boolean, default: true },
		state: { type: String, default: "" }
	},
	data() {
		return {
			text: this.value,
			inputState: this.state,
			stateMessage: ""
		};
	},
	computed: {
		inputStyles() {
			let styles = "";
			switch (this.state) {
				case "error":
					styles += " bg_alert-4 br_alert c_alert ";
					break;
				case "warning":
					styles += " bg_warning-4 br_warning c_warning ";
					break;
				case "success":
					styles += " bg_sucess-4 br_sucess c_sucess ";
					break;
				case "shade":
					styles += " c_black bg_shade-3 ";
					break;
				case "info":
					styles += " bg_info-4 br_info c_info ";
					break;
				case "accent":
					styles += " c_black bg_accent-n2 ";
					break;
					return styles;
				default:
					styles += " c_black bg_shade-3 br_shade-2";
					break;
			}
			return styles;
		}
	},
	components: {
		messageHolder,
		stateIcon,
		ValueIcon
	},
	methods: {
		onChange: function(value) {
			console.log(value);
			if (value == "") {
				this.inpusttState = "error";
				this.stateMessage = "You didn't seem to type anything.";
				this.$emit("update:text", "");
			} else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
				this.inputState = "";
				this.$emit("update:text", value);
			} else {
				this.inputState = "error";
				this.stateMessage = "This is not an email.";
				this.$emit("update:text", "");
			}
		}
	}
};
</script>

<style scoped>
.question .input:focus {
	border: inherit;
	background: inherit;
}
</style>
