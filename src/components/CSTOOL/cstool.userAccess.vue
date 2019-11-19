<template>
	<div class="flex font_ui br-b_1 br_solid br_shade-4">
		<div class="flex_auto">
			<span class="font_bold block">{{full_name}}</span>
			<span class="font_n2 c_primary block">{{search_by}}</span>
		</div>
		<div class="flex_auto flex" v-for="productObject in products" v-bind:key="productObject.product">
			<div class="flex_auto">
				<label for="id+'_checkbox_'+ productObject.product">
					<input type="checkbox" name id />
					{{productObject.name}}
				</label>
			</div>
		</div>
		<StatusIcon :state="status" class="flex_shrink" />
	</div>
</template>

<script>
import StatusIcon from "../subComponents/StatefullIcon";
export default {
	name: "user",
	components: {
		StatusIcon
	},
	props: {
		id: { type: Number },
		full_name: { type: String },
		search_by: { type: String },
		products: { type: Array }
	},
	computed: {
		status() {
			return "success";
		}
	}
};
</script>

<style lang="scss" scoped>
</style>