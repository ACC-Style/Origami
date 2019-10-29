<template>
	<section>
		<header data-attr="accordion-header" @click="toggle" :class="{'active':expanded}">
			<i class="fas fa-fw icon-toggle_caret-circle-right-down"></i>
			<slot name="header"></slot>
		</header>
		<article data-attr="accordion-content" v-if="expanded">
			<slot name="content"></slot>
		</article>
	</section>
</template>

<script>
export default {
	data() {
		return {
			expanded: true
		};
	},
	methods: {
		toggle() {
			this.expanded = !this.expanded;
		}
	}
};
</script>

<style lang="scss" scoped>
</style>