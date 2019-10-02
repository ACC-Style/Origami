<template>
	<button
		class="button text_center br_none flex inline-block undecorated h:undecorated"
		@click="onClick()"
		:class="[buttonStyles,{'is-active':isActive}]"
	>
		<span class="display_none inline:md flex_auto p-x_2">
			<slot></slot>
		</span>
		<span class="flex_shrink flex flex_column self_center" v-if="icon">
			<i class="far flex_shrink" :class="[iconStyles]"></i>
		</span>
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
			default: "primary"
		},
		isActivatable: { type: Boolean, default: false },
		isDisabled: { type: Boolean, default: false }
	},
	data() {
		return {
			isActive: false
		};
	},
	methods: {
		onClick() {
			if (!this.isDisabled) {
				this.$emit("click");
				if (this.isActivatable) {
					this.onActivate();
				}
			}
		},
		onActivate() {
			this.isActive = !this.isActive;
			if (this.isActive) {
				this.$emit("isActive");
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
					state =
						"c_white h:c_white bg_alert-n1 h:bg_alert-n3 a:bg_alert-n4";
					if (this.isDisabled) state = "bg_alert-4";
					break;
				case "warning":
					state =
						"c_white h:c_white bg_warning-n1 h:bg_warning-n3 a:bg_warning-n4";
					if (this.isDisabled) state = "bg_warning-4";
					break;
				case "success":
					state =
						"c_white h:c_white bg_success-n1 h:bg_success-n3 a:bg_success-n4";
					if (this.isDisabled) state = "bg_success-4";
					break;
				case "secondary":
					state =
						"c_black bg_secondary-3 h:bg_secondary-1 h:c_white a:c_secondary-4 a:bg_secondary-n3";
					if (this.isDisabled) state = "bg_secondary-4";
					break;

				default:
					state =
						"c_white h:c_white bg_primary h:bg_primary-n2 a:bg_primary-n4";
					if (this.isDisabled) state = "bg_primary-4";
					break;
			}
			if (this.isDisabled) {
				state += " c_black-3 disabled";
			}
			return size + " " + state;
		}
	}
};
</script>

