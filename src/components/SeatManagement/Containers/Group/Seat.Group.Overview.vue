<template>
	<section
		class="relative font_ui z_1 m-r_n5"
		@mouseenter="hoverEffectOn"
		@mouseleave="hoverEffectOff"
	>
		<div
			data-target="hover-indicator"
			:class="hoverIndicatorStyles"
			class="absolute t_0 r_0 b_0 br_1 br_primary-2 br_solid l_auto bg_primary-3 c_primary-n1 inline-block p-x_3 z_0 flex flex_column justify_around shadow_n1 transition_1"
		>
			<i class="fa fa-arrow-right"></i>
		</div>
		<div
			class="br_solid br_black-2 br_1 flex flex_row p-y_3 p-l_4 p-r_3 transition_1 z_2 m-r_5"
			:class="hoverDataStyles"
		>
			<div class="flex_auto">
				<h3 class="font_3 font_display m-t_2 lh_1 m-b_0">{{ name }}</h3>
				<ul class="ul_none" v-for="user in admin" :key="user.id">
					<li class="float_left p-r_3"><a :href="user.id" class="link">{{user.name}}</a></li>
				</ul>
			</div>
			<div class="flex_auto m-r_4 p_3 c_black text_right font_2">
				<div class="nowrap">{{ bundles.length }} Bundles</div>
				<ul
					class="font_n3 ul_none"
					v-for="bundle in bundles"
					:key="bundle.id"
				>
					<li class="float_right m-x_2">
						<a
							:href="bundle.id"
							class="link c_primary h:c_priamry-n1"
							>{{ bundle.name }}</a
						>
					</li>
				</ul>
			</div>
			<div
				class="flex_auto flex_none:md w_40:lg w_60:md m-l_auto flex flex_column justify_around"
			>
				<SeatChart :bundles="bundles" />
			</div>
		</div>
	</section>
</template>

<script>
import SeatChart from "../../Charts/Seat.ReadableSeatChart.vue";
export default {
	components: {
		SeatChart,
	},
	props: {
		name: {
			type: String,
			default: "Missing Name",
		},
		id: {
			type: String,
			default: null,
		},
		admin: {
			type: Array,
			default: () => [{ name: "No Admin", id: undefined }],
		},
		bundles: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			hoverDataStyles: "br_black-2 bg_white",
			hoverIndicatorStyles: "r_5",
		};
	},
	methods: {
		hoverEffectOn: function () {
			this.hoverDataStyles = "br_primary-2 bg_primary-5";
			this.hoverIndicatorStyles = "r_0";
		},
		hoverEffectOff: function () {
			this.hoverDataStyles = "br_black-2 bg_white";
			this.hoverIndicatorStyles = "r_5";
		},
		URL: function (id) {
			return "" + id + "";
		},
	},
};
</script>

<style scoped></style>
