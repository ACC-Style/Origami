<template>
	<article class="result font_ui br_1 br_black-2 br_1 br_solid shadow_1">
		<header class="br-t_3 br_solid br_primary m-t_n1 m-x_n1">
			<aside class="flex relative" v-if="type == 'recommendation'">
				<div class="flex_auto">
					<span class="p-y_3 block font_n2 m-x_4 p-t_4 uppercase c_primary font_bold">recommendation</span>
				</div>
			</aside>
		</header>
		<main class="result-content p-x_4 p-b_4 font_copy font_0 lh_3">
			<div
				class="br_2 br_black-2 br_radius br_solid flex float_right m-b_2 m-t_n4 m-x_4 r_3 t_2 font_display font_bold lh_0"
			>
				<div class="flex_shrink p_3 br-tl_radius br-bl_radius m-r_1" :class="[corStyle]">{{ranking.cor}}</div>
				<div class="flex_shrink p_3 br-tr_radius br-br_radius" :class="[loeStyle]">{{ranking.loe}}</div>
			</div>
			<div class="inline">{{content}}</div>
		</main>
		<aside class="m-x_3 p_2 bg_secondary-5 lh_3 m-b_3">
			<div
				@click="showExtra = !showExtra"
				class="m_n2 p_2 p-x_3 bg_black-2 h:bg_primary h:c_white font_n2"
			>
				<i class="fas fa-plus-square"></i> show supporting text and references
			</div>
			<section class="black-9 p-x_3 font_n1 max-w_4" v-if="showExtra">
				<h4 class="font_0 m_0 m-y_3">Supporting Text:</h4>
				<p v-html="supportingText">supporting text here</p>
			</section>
			<section class="black-9 p-x_3 font_n1 max-w_4" v-if="showExtra">
				<h4 class="font_0 m_0 m-y_3">References:</h4>
				<ul class="ul_none">
					<li class="m-b_2" v-for="(ref,index) in references" :key="'ref_' + index">{{ref}}</li>
				</ul>
			</section>
		</aside>
		<footer
			class="result-docuemnt bg_secondary-5 font_n2 br-t_1 br_black-2 p-t_3 p-x_3 br_solid p-b_2"
		>
			<div
				class="document-title font_slab font_0 c_secondary font_n1 nowrap overflow_ellipsis"
			>{{documentTitle}}</div>
			<div>
				<ul class="ul_none overflow_ellipsis flex c_secondary-n2 nowrap">
					<li
						class="flex_shrink max-w_1 overflow_ellipsis inline-block vertical-align_middle"
						v-for="(bookmark,index) in sections"
						:key="index+'_bookmark'"
					>
						<i class="fas fa-chevron-right font_n3 p_2 c_secondary-1" v-if="index != 0"></i>
						{{bookmark}}
					</li>
					<li class="c_primary">Recommendation</li>
				</ul>
			</div>
			<nav class="m-l_n2 m-b_2">
				<BTN class="br_radius m-r_2" :state="'none'" :size="'tiny'">
					<i class="fas fa-share-square m-r_3"></i>
					<span>FULL DOC</span>
				</BTN>
				<BTN class="br_radius m-r_2" :state="'none'" :size="'tiny'">
					<i class="fas fa-file-pdf m-r_3"></i>
					<span>PDF</span>
				</BTN>
				<BTN class="br_radius m-r_2" :state="'none'" :size="'tiny'">
					<i class="fas fa-share-alt m-r_3"></i>
					<span>HUB</span>
				</BTN>
			</nav>
			<aside
				class="font_n2 c_secondary-n1 bg_black-2 m-x_n3 m-b_n2 p_2 p-x_3 br-t_1 br_solid br_black-2 shadow_n1"
			>
				<div class="flex flex_nowrap nowrap">
					<strong class="flex_shrink p-r_2">
						<i class="fas fa-quote-right m-r_2"></i>&nbsp;
						<span class="inline-block:md display_none">cite document:</span>
					</strong>
					<span class="flex_auto overflow_ellipsis">{{documentTitle}}</span>
				</div>
			</aside>
		</footer>
	</article>
</template>

<script>
import BTN from "../subComponents/Btn";
export default {
	name: "SearchResult",
	components: {
		BTN
	},
	props: {
		type: { type: String },
		content: { type: String },
		documentTitle: { type: String },
		sections: { type: Array },
		ranking: { type: Object },
		pointOfCare: { type: String },
		Condition: { type: String },
		supportingText: { type: String, default: "missing supporting text" },
		references: { type: Array }
	},
	data() {
		return {
			showExtra: false
		};
	},
	computed: {
		loeStyle() {
			return "bg_cor-IIB";
		},
		corStyle() {
			return "bg_loe-A";
		}
	}
};
</script>

<style lang="scss" scoped>
</style>