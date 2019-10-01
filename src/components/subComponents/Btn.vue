<template>
	<button
		class="button text_center br_none inline-block undecorated h:undecorated"
		@click="onClick()"
		:class="[buttonStyles,{'is-active':isActive}]"
	>
		<i class="far" v-if="icon" :class="[iconStyles,{'p-r_2 p-l_1 faw':hasSlotData}]"></i>
		<slot class="m-l_3 display_none inline:md"></slot>
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
		isActivatable: { type: Boolean, default: false }
	},
	data() {
		return {
			isActive: false
		};
	},
	methods: {
		onClick() {
			this.$emit("click");
			if (this.isActivatable) {
				this.onActivate();
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
					break;
				case "warning":
					state =
						"c_white h:c_white bg_warning-n1 h:bg_warning-n3 a:bg_warning-n4";
					break;
				case "success":
					state =
						"c_white h:c_white bg_success-n1 h:bg_success-n3 a:bg_success-n4";
					break;
				case "secondary":
					state =
						"c_black bg_secondary-3 h:bg_secondary-1 h:c_white a:c_secondary-4 a:bg_secondary-n3";
					break;

				default:
					state =
						"c_white h:c_white bg_primary h:bg_primary-n2 a:bg_primary-n4";
					break;
			}
			return size + " " + state;
		}
	}
};
</script>

