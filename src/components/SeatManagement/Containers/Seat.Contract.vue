<template>
	<section >
		<div v-if="contracts==undefined">
			<ContractLoading/>
		</div>
		<div v-else-if="contracts.length > 0">
			<div data-target="contracts_container" v-for="(contract, index) in contracts" :key="index">
				<Contract :contract="contract" />
			</div>
		</div>
		<div v-else>
			<h3 class="font_display font_4">You don't seem to have any contracts</h3>
		</div>
	</section>
</template>

<script>

import Contract from "./Contract/Seat.Contract.vue";
import ContractLoading from "./Contract/Seat.Contract.Loading.vue";

export default {
	components: {
		Contract,ContractLoading

	},
	data() {
		return {};
	},
	props: {
		contracts: {
			type: Array,
			default: undefined
		},
	}
};
</script>

<style lang="scss" scoped>
</style>