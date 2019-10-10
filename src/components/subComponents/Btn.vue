<template>
	<button
		class="button text_center br_none inline-block w_auto"
		@click="onClick()"
		:class="[buttonStyles,{'is-active':isActive}]"
	>
		<span class="flex">
			<span class="flex_auto p-x_2" v-if="hasSlotData">
				<slot></slot>
			</span>
			<span class="flex_shrink flex flex_column self_center" v-if="icon">
				<i class="far flex_shrink" :class="[iconStyles]"></i>
			</span>
		</span>
	</button>
</template>

<script>
export default {
	name: "Btn",
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
				case "secondary":
					stateStyle =
						"c_black bg_secondary-3 h:bg_secondary-1 h:c_white a:c_secondary-4 a:bg_secondary-n3";
					if (this.isDisabled) stateStyle = "bg_secondary-4";
					break;
				case "none":
					stateStyle = this.isDisabled
						? "c_secondary bg_tansparent"
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

