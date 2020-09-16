<template>
	<section class="bg_white font_ui font_0">
		<header
			data-attr="accordion-header"
			@click="toggle"
			:class="{ 'is-active': expanded }"
			class="font_n1 flex c_primary"
		>
			<div class="flex_shrink flex column justify_center   ">
				<i
					class="fas fa-fw  flex_auto self_center "
					:class="toggleClass"
				></i>
			</div>
			<div class="flex_auto  p-y_3 p-x_2 p-l_3">
				<slot name="header">read more ...</slot>
			</div>
		</header>
		<transitionExpand>
			<div class="">
				<article
				v-if="expanded"
				data-attr="accordion-content"
				class="transition_2 origin_tl p_4  br-t_1 br_dotted br_primary f"
			>
				<slot class="" name="content">No Content Passed</slot>
			</article></div>
		</transitionExpand>
	</section>
</template>

<script>
import transitionExpand from "../subComponents/TransitionExpand.vue";

export default {
	name: "ChildAccordion",
	data() {
		return {
			expanded: false
		};
	},
	components:{transitionExpand},
	computed: {
		toggleClass(){
			if(this.expanded){
				return "fa-minus";
			}
			else
			{
				return "fa-plus";
			}
		}
	},
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
