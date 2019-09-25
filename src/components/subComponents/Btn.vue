<template>
	<button
		class="button text_center br_radius br_none inline-block undecorated h:undecorated"
		:class="buttonStyles"
		@click="onClick()"
	>
		<i class="far p-r_2" v-if="icon" :class="iconStyle"></i>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "Btn",
	props: {
		size: {
			type: String,
			default: ""
		},
		icon: { type: Boolean, default: false },
		state: {
			type: String,
			default: "error"
		}
	},
	methods: {
		onClick() {
			this.$emit("click");
		}
	},
	computed: {
		iconStyle() {
			let classes = "";
			switch (this.state) {
				case "error":
					classes = "fa-times";
					break;
				case "success":
					classes = "fa-check";
					break;
				case "warning":
					classes = "fa-exclamation-triangle";
					break;
				default:
					break;
			}
			return classes;
		},
		buttonStyles() {
			let size = "";
			switch (this.size) {
				case "small":
					size = "p-y_2 p-x_3 font_n2 font_n3:md";
					break;
				case "large":
					size = "p-y_3 p-x_4 font_1 font_2:md";
					break;
				default:
					size = "p-y_2 p-x_3 font_n1 font_0:md";
					break;
			}
			let state = "";
			switch (this.state) {
				case "error":
					state = "c_white h:c_white bg_alert-n1 h:bg_alert-n3";
					break;
				case "warning":
					state = "c_white h:c_white bg_warning-n1 h:bg_warning-n3";
					break;
				case "sucess":
					state = "c_white h:c_white bg_sucess-n1 h:bg_sucess-n3";
					break;
				case "secondary":
					state = "c_black h:c_black bg_secondary-3 h:bg_secondary-1";
					break;

				default:
					state = "c_white h:c_white bg_primary h:bg_primary-n2";
					break;
			}
			return size + " " + state;
		}
	}
};
</script>

