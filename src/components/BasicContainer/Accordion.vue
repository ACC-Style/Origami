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
		<transitionExpand>
			<article
				v-if="expanded"
				data-attr="accordion-content"
				class="br_black-3 br_solid br_1 font_0 br-t_0 transition_2 origin_tl"
			>
				<slot name="content">No Content Passed</slot>
			</article>
		</transitionExpand>
	</section>
</template>

<script>
import transitionExpand from "../subComponents/TransitionExpand.vue";

export default {
	name: "Accordion",
	data() {
		return {
			expanded: false
		};
	},
	components:{transitionExpand},
	methods: {
		toggle() {
			this.expanded = !this.expanded;
		},
		enter(element) {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      // Trigger the animation.
      // We use `requestAnimationFrame` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
	}
};
</script>

<style lang="css" scoped>
.scale_Y-50 {
	transform: scaleY(0.5);
}
.scale_Y-100 {
	transform: scaleY(1);
}
.scale_Y-0 {
	transform: scaleY(0);
}

</style>
