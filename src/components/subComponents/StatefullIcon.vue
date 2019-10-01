<template>
	<div class="p-x_3 flex" :class="areaStyle">
		<i class="far fa-fw vertical-align_middle flex-grow_0 self_center m_auto" :class="iconStyle"></i>
	</div>
</template>

<script>
export default {
	name: "statefullIcon",
	props: {
		state: { type: String, default: "" }
	},
	computed: {
		iconStyle() {
			let classes = "";
			switch (this.state) {
				case "error":
					classes = "fa-times c_white";
					break;
				case "success":
					classes = "fa-check";
					break;
				case "warning":
					classes = "fa-exclamation-triangle c_white";
					break;
				case "info":
					classes = "fa-info-circle c_black-8";
					break;
				case "accent":
					classes = "fa-info-square c_white";
					break;
				default:
					break;
			}
			return classes;
		},
		areaStyle() {
			let state = "texture_light";
			switch (this.state) {
				case "error":
					state += "c_white bg_alert-n1";
					break;
				case "warning":
					state += "c_white bg_warning-n1";
					break;
				case "sucess":
					state += "c_white bg_sucess-n1";
					break;
				case "secondary":
					state += "c_black bg_secondary-3";
					break;				
				case "info":
					state += "c_black bg_info-3";
					break;
				case "accent":
					state += "c_black bg_accent";
					break;

				default:
					state = "display_none";
					break;
			}
			return state;
		}
	}
};
</script>
