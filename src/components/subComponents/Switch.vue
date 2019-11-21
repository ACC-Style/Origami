<template>
	<div class="switch flex font_ui" :class="[switchSize,{'is-active':checked}]">
		<input class="switch-input" type="checkbox" name="exampleSwitch" v-model="checked" id="switchID" />
		<label class="switch-paddle br_round flex_shrink" for="switchID" :class="[paddleStyles]">
			<span class="display_none">Small Portions Only</span>
		</label>
		<label for="switchID" class="inline-block flex_auto flex flex_row" :class="[labelStyle]">
			<span class="flex_auto self_center">
				<slot></slot>
			</span>
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
		isDisabled: { type: Boolean, default: false },
		isChecked: { type: Boolean, default: true }
	},
	data() {
		return {
			isActive: false,
			checked: this.isChecked
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
		switchSize() {
			let size = "";
			switch (this.size) {
				case "tiny":
					size = "tiny";
					break;
				case "small":
					size = "small";
					break;
				case "medium":
					size = "";
					break;
				case "large":
					size = "large";
					break;
				default:
					size = "large";
					break;
			}
			return size;
		},
		labelStyle() {
			let size = "";
			switch (this.size) {
				case "tiny":
					size = "font_n1 p-l_3";
					break;
				case "small":
					size = "font_0 p-l_3";
					break;
				case "large":
					size = "font_2 p-l_3";
					break;
				default:
					size = "font_1 p-l_3";
					break;
			}
			let stateStyle = "";
			switch (this.state) {
				case "error":
					stateStyle = "";
					break;
				case "warning":
					stateStyle = "";
					break;
				case "success":
					stateStyle = "";
					break;
				case "shade":
					stateStyle = "c_black";
					break;
				case "secondary":
					stateStyle = "";
					break;
				default:
					stateStyle = "c_black";
					break;
			}
			if (this.isDisabled) {
				stateStyle += "disabled opacity_3";
			}
			return stateStyle + " " + size;
		},
		paddleStyles() {
			let stateStyle = "";
			switch (this.state) {
				case "error":
					stateStyle = "";
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
			return stateStyle;
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
