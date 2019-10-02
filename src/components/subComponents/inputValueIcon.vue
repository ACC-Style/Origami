<template>
	<label
		class="value-space br_solid br-w_1 p_3 texture_light"
		v-bind:class="areaStyle"
		:for="inputNameTarget"
	>
		<i class="fal" v-bind:class="icon"></i>
	</label>
</template>

<script>
export default {
	name: "valueIcon",
	props: {
		inputNameTarget: { type: String },
		state: { type: String, default: "" },
		icon: { type: String, default: "fa-check" }
	},
	computed: {
		areaStyle() {
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
				case "secondary":
					styles += " c_black bg_secondary-3 ";
					break;
				case "info":
					styles += " bg_info-4 br_info c_info ";
					break;
				case "accent":
					styles += " c_black bg_accent-n2 ";
					break;
					return styles;
				default:
					styles += " c_black bg_secondary-3 br_secondary-2";
					break;
			}
			return styles;
		}
	}
};
</script>
