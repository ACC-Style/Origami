<template>
	<Accordion>
		<template v-slot:header>
			<h2 class="font_display m_0 font_2 lh_1">{{ metric.title }}</h2>
		</template>
		<template v-slot:content class="">
			<div class="font_copy p_4:md">
				<p class="c_primary m-t_0 lh_2  p-x_4 p-t_4 p-x_3:md">
					{{ metric.subtitle }}
				</p>
				<section
					class="flex flex_row-reverse flex_row:md"
					v-for="(element, index) in metric.data"
					:key="index"
					v-bind:class="{ 'bg_primary-5': isEven(index) }"
				>
					<div class="flex_auto w_60 p-x_3 font_1:md lh_3 font_0 c_black">
						<p class="max-w_50 lh_2">
							{{ element.label }}
							<a
								class="font_n1 vertical-align_top m-l_2 c_secondary"
								v-if="element.helperText"
								:title="element.helperText"
							>
								<i class="fas fa-info-circle"></i>
							</a>
						</p>
					</div>
					<div
						class="font_bold flex_auto p_3:md p-t_4:md p-x_2 font_1 font_0:md flex text_center w-grid_2 w-grid_3:md bg_black-1"
					>
						<div
							class="font_0 font_2:md flex_auto self_center display_none:md block"
							v-if="element.type == 'star'"
						>
						<span class="font_2 font_3:md flex_auto self_center">{{ element.value }}</span><br><i class="fas fa-star c_warning"></i>'s
						</div>
						<div
							class="font_0 font_2:md flex_auto self_center display_none block:md"
							v-if="element.type == 'star'"
						>
							<i
								class="fa-star p-l_2 flex_auto"
								v-for="index in 5"
								:key="index"
								v-bind:class="star(element.value, index)"
							></i>
						</div>
						<div
							class="font_2 font_3:md flex_auto self_center"
							v-if="element.type == 'number'"
						>
							{{ element.value }}
						</div>
					</div>
				</section>
			</div>
		</template>
	</Accordion>
</template>

<script>
import Accordion from "../BasicContainer/Accordion.vue";

export default {
	name: "metricTable",
	props: {
		metric: {
			type: Object,
			required: true
		}
	},
	components: {
		Accordion
	},
	data() {
		return {};
	},
	methods: {
		isEven(value) {
			if (value % 2 == 0) return true;
			else return false;
		},
		star(value, index) {
			return value >= index
				? "fas c_warning text-shadow_black-1 star-" + index
				: "far c_black-3 star-" + index;
		}
	}
};
</script>

<style scoped></style>
