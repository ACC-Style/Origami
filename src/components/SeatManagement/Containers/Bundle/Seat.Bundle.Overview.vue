<template>
	<section
		class="relative font_ui z_1 m-r_n5:md"
		@mouseenter="hoverEffectOn"
		@mouseleave="hoverEffectOff"
	>
		<div
			data-target="hover-indicator"
			:class="hoverIndicatorStyles"
			class="absolute t_0 r_0 b_0 br_1 br_primary-2 br_solid l_auto bg_primary-3 c_primary-n1 inline-block p-x_3:md p-x_2 z_0 flex flex_column justify_around shadow_n1  transition_1"
		>
			<i class="fa fa-arrow-right font_0:md font_n3"></i>
		</div>
		<div
			class="br_solid br_black-2 br_1 flex flex_row:md flex_column p-y_3 p-x_4 transition_1 z_2 m-r_5:md m-r_4"
			:class="hoverDataStyles"
		>
			<div class="flex_auto">
				<h3 class="font_3 font_display m-t_2 lh_1 m-b_0">{{ name }}</h3>
				<a
					v-bind:href="productURL"
					target="_blank"
					class="link font_n2 font_medium c_primary h:c_primary-n2 block lh_1 m-y_2"
					>product page</a
				>
			</div>
			<div
				class="flex_auto flex_none:md w_20:lg w_40:md w_100 m-l_auto flex flex_column justify_around"
			>
				<MicroSeatChart
					:all="all"
					:filled="filled"
					:locked="locked"
					:requested="requested"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import MicroSeatChart from "../../Charts/Seat.MicroSeatChart.vue";
export default {
	props: {
		name: {
			type: String,
			default: "Missing Label",
		},
		productURL: {
			type: String,
			default: "",
		},
		all: {
			type: Number,
			default: 0,
		},
		filled: {
			type: Number,
			default: 0,
		},
		requested: {
			type: Number,
			default: 0,
		},
		locked: {
			type: Number,
			default: 0,
		},
	},
	components: {
		MicroSeatChart,
	},
	data() {
		return {
			hoverDataStyles: "br_black-2 bg_white",
			hoverIndicatorStyles: "r_5:md r_4",
		};
	},
	methods: {
		hoverEffectOn: function () {
			this.hoverDataStyles = "br_primary-2 bg_primary-5";
			this.hoverIndicatorStyles = "r_0";
		},
		hoverEffectOff: function () {
			this.hoverDataStyles = "br_black-2 bg_white";
			this.hoverIndicatorStyles = "r_5:md r_4";
		},
	},
};
</script>

<style scoped></style>
