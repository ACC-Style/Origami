<template>
	<section
		class="relative font_ui z_1 h:cursor_pointer"
		@mouseenter="hoverEffectOn"
		@mouseleave="hoverEffectOff"
	>
		<div
			data-target="hover-indicator"
			:class="hoverIndicatorStyles"
			class="absolute t_0 r_0 b_0 br_1 br_primary-2 br_solid l_auto bg_primary-3 c_primary-n1 inline-block p-x_3:md p-x_2 p-t_3 z_0 flex flex_column justify_around:md justify_start shadow_n1 transition_1"
		>
			<i class="fa fa-arrow-right font_0:md font_n3"></i>
		</div>
		<div
			class="br_solid br_black-2 br_1 transition_1 z_2 m-r_5:md m-r_4 m-r_0:touch"
			:class="hoverDataStyles"
		>
			<slot >
                
            </slot>
			<div class="br_solid br_black-2 br-t_1 shadow_n1 p_2  p-x_3 bg_primary-5 text_right display_none block:touch">
				navigate to <i class="fa fa-arrow-right font_0:md font_n3"></i>
			</div>
		</div>
	</section>
</template>

<script>
export default {

	data() {
		return {
			hoverDataStyles: "br_black-2 bg_white",
			hoverIndicatorStyles: "r_5:md r_4",
		};
	},
	methods: {
		hoverEffectOn: function () {
			this.hoverDataStyles = "br_primary-2 bg_primary-5";
			this.hoverIndicatorStyles = "r_0:md r_0";
		},
		hoverEffectOff: function () {
			this.hoverDataStyles = "br_black-2 bg_white";
			this.hoverIndicatorStyles = "r_5:md r_4";
		},
	},
};
</script>

<style scoped>
	.h\:cursor_pointer:hover{
		cursor:pointer;
	}
	@media (hover: none) {
		.m-r_0\:touch{
			margin-right:0 !important;
		}
   		.block\:touch{
		display:block !important;
		}
}
</style>
