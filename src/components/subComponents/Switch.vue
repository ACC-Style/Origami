<template>
	<div class="switch">
		<input class="switch-input" type="checkbox" name="exampleSwitch" v-model="checked" id="switchID" />
		<label class="switch-paddle br_radius" for="switchID">
			<span class="display_none">Small Portions Only</span>
		</label>
		<label for="switchID" class="c_black inline-block">
			<slot></slot>
		</label>
	</div>
</template>

<script>
export default {
	name: "toggleSwitch",
	props: {
		size: {
			type: String,
			default: "medium"
		},
		icon: { type: Boolean, default: false },
		state: {
			type: String,
			default: "primary"
		},
		isDisabled: { type: Boolean, default: false }
	},
	data() {
		return {
			isActive: false,
			checked: false
		};
	},
	methods: {
		onClick() {
			if (!this.isDisabled) {
				this.$emit("click", this.checked);
			}
		}
	},
	computed: {
		hasSlotData() {
			return this.$slots.default;
		},
		iconStyles() {
			let classes = "";
			switch (this.state) {
				case "add":
					classes = "fa-plus m-t_1";
					break;
				case "error":
					classes = "fa-times m-t_1";
					break;
				case "success":
					classes = "fa-check m-t_1";
					break;
				case "warning":
					classes = "fa-exclamation-triangle m-t_1";
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
				case "medium":
					size = "p-y_2 p-x_3 font_n1 font_0:md";
					break;
				case "large":
					size = "p-y_3 p-x_4 font_1 font_2:md";
					break;
				default:
					size = "p-y_2 p-x_3 font_n1 font_0:md";
					break;
			}
			let stateStyle = "";
			switch (this.state) {
				case "error":
					stateStyle =
						"c_white h:c_white bg_alert-n1 h:bg_alert-n3 a:bg_alert-n4 br_alert-n3";
					if (this.isDisabled) stateStyle = "bg_alert-4";
					break;
				case "warning":
					stateStyle =
						"c_white h:c_white bg_warning-n1 h:bg_warning-n3 a:bg_warning-n4 br_warning-n3";
					if (this.isDisabled) stateStyle = "bg_warning-4";
					break;
				case "success":
					stateStyle =
						"c_white h:c_white bg_success-n1 h:bg_success-n3 a:bg_success-n4 br_success-n3";
					if (this.isDisabled) stateStyle = "bg_success-4";
					break;
				case "shade":
					stateStyle =
						"c_black bg_shade-3 h:bg_shade-1 h:c_white a:c_shade-4 a:bg_shade-n3";
					if (this.isDisabled) stateStyle = "bg_shade-4";
					break;
				case "secondary":
					stateStyle =
						"c_black bg_secondary-3 h:bg_secondary-1 h:c_white a:c_secondary-4 a:bg_secondary-n3";
					if (this.isDisabled) stateStyle = "bg_secondary-4";
					break;
				case "none":
					stateStyle = this.isDisabled
						? "c_shade bg_tansparent"
						: "undecorated h:underline c_black-7 h:c_black bg_tansparent";
					break;
				default:
					stateStyle =
						"c_white h:c_white bg_primary h:bg_primary-n2 a:bg_primary-n4";
					if (this.isDisabled) stateStyle = "bg_primary-4";
					break;
			}
			if (this.isDisabled) {
				stateStyle += " c_black-3 disabled";
			}
			return size + " " + stateStyle;
		}
	}
};
</script>
<style scoped>
.switch {
	position: relative;
	height: 32px;
	height: 2rem;
	margin-bottom: 16px;
	margin-bottom: 1rem;
	outline: 0;
	color: white;
	font-size: 14px;
	font-size: 0.875rem;
	font-weight: bold;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.switch-input {
	position: absolute;
	margin-bottom: 0;
	opacity: 0;
}

.switch-paddle {
	display: block;
	position: relative;
	width: 64px;
	width: 4rem;
	height: 32px;
	height: 2rem;
	background: #cacaca;
	color: inherit;
	font-weight: inherit;
	cursor: pointer;
	transition: all 0.25s ease-out;
}
input + .switch-paddle {
	margin: 0;
}
.switch-paddle::after {
	display: block;
	position: absolute;
	top: 4px;
	top: 0.25rem;
	left: 4px;
	left: 0.25rem;
	width: 24px;
	width: 1.5rem;
	height: 24px;
	height: 1.5rem;
	transform: translate3d(0, 0, 0);
	background: white;
	content: "";
	transition: all 0.25s ease-out;
	border-radius: inherit;
}
input:checked ~ .switch-paddle {
	background: #198dae;
}
input:checked ~ .switch-paddle::after {
	left: 36px;
	left: 2.25rem;
}
[data-whatinput="mouse"] input:focus ~ .switch-paddle {
	outline: 0;
}

.switch-inactive,
.switch-active {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

.switch-active {
	display: none;
	left: 8%;
}
input:checked + label > .switch-active {
	display: block;
}

.switch-inactive {
	right: 15%;
}
input:checked + label > .switch-inactive {
	display: none;
}
.switch.tiny,
.switch.tiny .switch-paddle {
	height: 24px;
	height: 1.5rem;
}
.switch.tiny .switch-paddle {
	width: 48px;
	width: 3rem;
	font-size: 10px;
	font-size: 0.625rem;
}
.switch.tiny .switch-paddle::after {
	top: 4px;
	top: 0.25rem;
	left: 4px;
	left: 0.25rem;
	width: 16px;
	width: 1rem;
	height: 16px;
	height: 1rem;
}
.switch.tiny input:checked ~ .switch-paddle::after {
	left: 28px;
	left: 1.75rem;
}
.switch.small,
.switch.small .switch-paddle {
	height: 28px;
	height: 1.75rem;
}
.switch.small .switch-paddle {
	width: 56px;
	width: 3.5rem;
	font-size: 12px;
	font-size: 0.75rem;
}
.switch.small .switch-paddle::after {
	top: 4px;
	top: 0.25rem;
	left: 4px;
	left: 0.25rem;
	width: 20px;
	width: 1.25rem;
	height: 20px;
	height: 1.25rem;
}
.switch.small input:checked ~ .switch-paddle::after {
	left: 32px;
	left: 2rem;
}
.switch.large,
.switch.large .switch-paddle {
	height: 40px;
	height: 2.5rem;
}
.switch.large .switch-paddle {
	width: 80px;
	width: 5rem;
	font-size: 16px;
	font-size: 1rem;
}
.switch.large .switch-paddle::after {
	top: 4px;
	top: 0.25rem;
	left: 4px;
	left: 0.25rem;
	width: 32px;
	width: 2rem;
	height: 32px;
	height: 2rem;
}
.switch.large input:checked ~ .switch-paddle::after {
	left: 44px;
	left: 2.75rem;
}
</style>
