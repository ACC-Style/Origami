<template>
	<Accordion>
		<template v-slot:header>
			<h2 class="font_display m_0">{{ participation.title }}</h2>
		</template>
		<template v-slot:content>
			<div class="font_copy">
				<p class="c_primary m-t_0 lh_2  p-x_3 ">
					{{ participation.subTitle }}
				</p>
				<div
					class="bg_primary c_white font_0 font_n1:md font_bold display_none flex:md"
				>
					<td class="flex_auto w_30:md">Registry</td>
					<td class="flex_auto w_30:md">Participation</td>
					<td class="flex_auto w_40:md">Associated Services</td>
				</div>
				<section
					class="flex flex_column flex_row:md"
					v-for="(metric, index) in participation.data"
					:key="index"
					v-bind:class="{ 'bg_black-1': isEven(index) }"
				>
					<div
						class="flex_shrink w_30:md  p_3:md p-t_3 p-x_3 font_0 font_1:md c_primary"
					>
						{{ metric.label }}
						<a
							class="font_n1 vertical-align_top m-l_2"
							v-if="metric.helperText"
							:title="metric.helperText"
							><i class="fas fa-info-circle"></i
						></a>
					</div>
					<div
						class="font_bold w_30:md flex_shrink p_3:md p-x_3 font_1 font_0:md"
					>
						{{ metric.value }}
					</div>
					<div
						class="c_primary-n4 font_n1 w_40:md flex_auto p-x_3 p_3:md "
					>
						<p class="max-w_40 lh_2 m-t_0">
							{{ metric.associatedServices }}
						</p>
					</div>
				</section>
			</div>
		</template>
	</Accordion>
</template>

<script>
import Accordion from "../BasicContainer/Accordion.vue";
export default {
	props: {
		participation: {
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
		}
	}
};
</script>

<style scoped></style>
