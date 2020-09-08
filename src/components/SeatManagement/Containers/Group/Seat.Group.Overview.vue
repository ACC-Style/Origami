<template>
	<HoverContainer>
		<div class="flex flex_row:md p_3">
			<div class="flex_auto flex flex_column justify_start justify_between:lg flex_row:lg">
				<div class="flex_shrink m-l_3">
				<h3 class="font_4 font_display m-t_2 lh_1 m-b_0">{{ name }} <a href="" class="c_primary h:c_primary-n3 p_2 font_1"><i class="fas fa-pencil"></i></a></h3>
				<ul class="ul_none flex flex_column flex_row:lg font_n1 justify_start">
					<span class="m-r_3">admin:</span>
					<li class="m-r_3 flex_shrink" v-for="user in admin" :key="user.id"><a :href="user.id" class="c_primary h:c_primary-n3 h:underline undecorated"> <i class="fas fa-user-crown font-size_down p_2"></i>{{user.name}}</a></li>
				</ul>
			</div>
			<div class="flex_shrink m-r_4 p_3 c_black text_right:lg font_2:lg font_1">
				<div class="nowrap">{{ bundles.length }} Bundles</div>
				<ul
					class="font_n2 ul_none flex flex_wrap:lg flex_column flex_row:lg justify_end:lg"
					
				>
					<li class="flex_shrink m-r_2" v-for="bundle in bundles"
					:key="bundle.id">
						<a
							:href="bundle.id"
							class="link c_primary h:c_priamry-n1"
							>{{ bundle.name }}</a
						>
					</li>
				</ul>
			</div>
			</div>
			<div
				class="flex_auto w_40:lg"
			>
				<SeatChart :bundles="bundles" />
			</div>
		</div>
	</HoverContainer>
</template>

<script>
import HoverContainer from '../SubContainers/hoverContainer.vue';
import SeatChart from "../../Charts/Seat.ReadableSeatChart.vue";
export default {
	components: {
		SeatChart,HoverContainer
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
	methods: {
		URL: function (id) {
			return "" + id + "";
		},
	},
};
</script>

<style scoped></style>
