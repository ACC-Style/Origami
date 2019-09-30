<template>
	<div class="fits m_3 br_solid br_1 br-b_0 br_secondary-4">
		<div v-for="fit in fits" :key="'fit_'+fit.id">
			<FIT v-bind="fit" />
		</div>
	</div>
</template>

<script>
import FIT from "./TrainingProgram.FIT";
export default {
	name: "ListFIT",
	props: {
		fits: {}
	},
	components: { FIT },
	methods: {},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
</style>