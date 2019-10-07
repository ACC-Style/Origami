<template>
	<article class="result font_ui br_1 br_secondary-3 br_1 br_solid shadow_1">
		<header class="br-t_3 br_solid br_primary m-t_n1 m-x_n1">
			<aside class="flex relative">
				<div class="flex_auto">
					<span class="p_2 font_n3 m-x_3 uppercase c_primary font_bold">recomendation</span>
					<div class="p-x_3 font_slab c_acc font_1">Title of recomendation</div>
				</div>
				<div class="flex t_2 r_3 flex_shrink br_solid br_black-2 br_radius br_2 absolute">
					<div class="bg_cor-IIB flex_shrink p_2 p-x_3 br-tl_radius br-bl_radius m-r_1">II</div>
					<div class="bg_loe-A flex_shrink p_2 p-x_3 br-tr_radius br-br_radius">B</div>
				</div>
			</aside>
		</header>
		<main class="result-content p-x_4 p-b_2 font_0">
			<p
				class="m-y_3"
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam alias explicabo impedit eius, ducimus nihil animi sapiente placeat ullam sequi, hic quod, dolor et. Maiores, illum animi!</p>
		</main>
		<nav class="flex p-x_4 p-b_3 font_n1">
			<BTN class="br_radius br_secondary-4 br_solid br_1" :state="'none'" :size="'tiny'">
				<i class="fas fa-save"></i>
				<span>SAVE</span>
			</BTN>
			<BTN class="br_radius br_secondary-4 br_solid br_1" :state="'none'" :size="'tiny'">
				<i class="fas fa-file-pdf"></i>
				<span>SHARE</span>
			</BTN>
			<BTN class="br_radius br_secondary-4 br_solid br_1" :state="'none'" :size="'tiny'">
				<i class="fas fa-print"></i>
				<span>PRINT</span>
			</BTN>
		</nav>
		<footer class="result-docuemnt font_n2 br-t_1 br_primary-n1 br_dashed m-x_3 p-b_3">
			<div class="document-title font_slab font_n1 c_primary-n3 nowrap overflow_ellipsis">
				<i class="fas icon-toggle_chevron-up-down"></i> International Organization for Standardization. (2016). Occupational health and safety management systems—Requirements
				with Heart
			</div>
			<div
				class="result-document-publish-date font_n2 c_secondary-2 font_italic"
			>Focused Update: March 15, 2018</div>
			<nav class="flex">
				<BTN class="br_radius flex_shrink m-r_2" :state="'none'" :size="'tiny'">
					<i class="fas fa-share-square m-r_3"></i>
					<span>FULL DOC</span>
				</BTN>
				<BTN class="br_radius flex_shrink m-r_2" :state="'none'" :size="'tiny'">
					<i class="fas fa-file-pdf m-r_3"></i>
					<span>PDF</span>
				</BTN>
				<BTN class="br_radius flex_shrink m-r_2" :state="'none'" :size="'tiny'">
					<i class="fas fa-share-alt m-r_3"></i>
					<span>HUB</span>
				</BTN>
			</nav>
		</footer>
		<aside class="font_n2 c_secondary-n2 bg_secondary-5 p_2 p-x_3 br-t_1 br_solid br_secondary-2">
			<div class="flex flex_nowrap">
				<strong class="flex_shrink">
					<i class="fas fa-quote-right m-r_2"></i>cite document:&nbsp;
				</strong>
				<span
					class="flex_auto"
				>International Organization for Standardization. (2016). Occupational health and safety management systems—Requirements with Heart</span>
			</div>
		</aside>
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
		propName: {
			type: Number,
			default: 0
		}
	}
};
</script>

<style lang="scss" scoped>
</style>