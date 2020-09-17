<template>
	<Btn @click="onClick()" :size="size" :state="state" :corner="corner" :isDisabled="isDisabled" :shadow="shadow" isActivatable="isActive">
		<slot class="" name="active" v-if="isActive">ON</slot>
		<slot class="" name="notActive" v-if="!isActive">OFF</slot>
	</Btn>
</template>
<script>
import Btn from "./Btn.vue";
export default {
	name: "BtnToggle",
	components: { Btn },
	props: {
		size: { type: String },
		state: { type: String },
		corner: { type: String },
		isDisabled: { type: Boolean },
		shadow: { type: Boolean },
		isActive:{ type: Boolean, default:true }
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
};
</script>

