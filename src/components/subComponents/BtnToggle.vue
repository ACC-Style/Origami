<template>
	<button
		class="button text_center br_none inline-block undecorated h:undecorated"
		@click="onClick()"
		:class="[buttonStyles,{'is-active':isActive}]"
	>
		<i class="far" v-if="icon && isActive" :class="[iconStyles,iconActive]"></i>
		<i class="far" v-if="icon && !isActive" :class="[iconStyles,iconNotActive]"></i>
		<slot class="m-l_3 display_none inline:md" name="activeText" v-if="isActive">ON</slot>
		<slot class="m-l_3 display_none inline:md" name="notActiveText" v-if="!isActive">OFF</slot>
	</button>
</template>

<script>
export default {
	name: "BtnToggle",
	props: {
		size: {
			type: String,
			default: ""
		},
		icon: { type: Boolean, default: false },
		iconActive: { type: String, default: "fa-check-square" },
		iconNotActive: { type: String, default: "fa-square" },
		state: {
			type: String,
			default: "primary"
		},
		isDisabled: { type: Boolean, default: false },
		defaultActiveState: { type: Boolean, defualt: false }
	},
	data() {
		return {
			isActive: this.defaultActiveState
		};
	},
	methods: {
		onClick() {
			if (!this.isDisabled) {
				this.isActive = !this.isActive;
				this.isActive
					? this.$emit("clickActive")
					: this.$emit("clickNotActive");
				this.$emit("click");
			}
		}
	},
	computed: {
		iconStyles() {
			let classes = "";
			switch (this.state) {
				case "add":
					classes = "";
					break;
				case "error":
					classes = "";
					break;
				case "success":
					classes = "";
					break;
				case "warning":
					classes = "";
					break;
				default:
					break;
			}
			return classes;
		},
		buttonStyles() {
			let size = "";
			switch (this.size) {
				case "tiny":
					size = "p-y_2 p-x_2 font_n3 font_n3:md";
					break;
				case "small":
					size = "p-y_2 p-x_3 font_n2 font_n2:md";
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
					state = this.isDisabled
						? " bg_alert-4"
						: "c_white h:c_white bg_alert-n1 h:bg_alert-n3 a:bg_alert-n4";
					break;
				case "warning":
					state = this.isDisabled
						? " bg_warning-4"
						: "c_white h:c_white bg_warning-n1 h:bg_warning-n3 a:bg_warning-n4";
					break;
				case "success":
					state = this.isDisabled
						? " bg_success-4"
						: "c_white h:c_white bg_success-n1 h:bg_success-n3 a:bg_success-n4";
					break;
				case "shade":
					state = this.isDisabled
						? " bg_shade-4"
						: "c_black bg_shade-3 h:bg_shade-1 h:c_white a:c_shade-4 a:bg_shade-n3";
					break;
				case "secondary":
					state = this.isDisabled
						? " bg_secondary-4"
						: "c_black bg_secondary-3 h:bg_secondary-1 h:c_white a:c_secondary-4 a:bg_secondary-n3";
					break;

				default:
					state = this.isDisabled
						? " bg_primary-4"
						: "c_white h:c_white bg_primary h:bg_primary-n2 a:bg_primary-n4";
					break;
			}
			if (this.isDisabled) {
				state += "  c_black-3  disabled";
			}
			return size + " " + state;
		}
	}
};
</script>

