<template>
	<section class="bg_white font_ui">
		<header
			data-attr="accordion-header"
			@click="toggle"
			:class="{ 'is-active': expanded }"
			class="br_black-3 br_solid br_1 bg_black-1 flex"
		>
			<div class="flex_grow flex column justify_center font-size_up p-x_3 p-x_4:md bg_primary-4 br_black-2 br_solid br-r_1 ">
				<i
					class="fas fa-fw icon-toggle_plus-minus flex_auto self_center a:c_primary-n4 c_primary-n1"
					:class="{ 'is-active': expanded }"
				></i>
			</div>
			<div class="flex_auto  p-y_3 p-x_2 p-l_3">
				<slot name="header">No Content Passed</slot>
			</div>
		</header>
		<transition
			name="slide-down"
			mode
			enter-active-class="ease_in"
			leave-active-class="ease_out"
			enter-class="opacity_0 scale_Y-0"
			enter-to-class="opacity_none scale_Y-100"
			leave-class="opacity_none scale_Y-100"
			leave-to-class="opacity_0 scale_Y-0"
			:duration="1000"
		>
			<article
				v-if="expanded"
				data-attr="accordion-content"
				class="br_black-3 br_solid br_1 font_0 br-t_0 transition_2 origin_tl"
			>
				<slot name="content">No Content Passed</slot>
			</article>
		</transition>
	</section>
</template>

<script>
export default {
	name: "Accordion",
	data() {
		return {
			expanded: false
		};
	},
	methods: {
		toggle() {
			this.expanded = !this.expanded;
		}
	}
};
</script>

<style lang="css" scoped>
.scale_Y-50 {
	transform: scaleY(0.5);
}
</style>
