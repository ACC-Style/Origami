<template>
	<div class="fits m_3">
		<div v-if="!finishedLoading" class>
			<div class="text_center font_ui p_3 c_secondary-3">Loading ...</div>
			<div class="flex p_1 br_1 br_solid br_secondary-4">
				<div
					class="lorem-status flex_shrink flex toggle_handle p_3 br_secondary-5 br-r_1 br_solid self_stretch"
				>
					<i
						class="far fa-plus-square vertical-align_middle flex_grow-0 m_auto self_center c_secondary-5"
					></i>
				</div>
				<div class="lorem-status flex_shrink m_2 lorem-loader"></div>
				<div class="flex_auto m_2">
					<h2 class="lorem-loader font_ui font_1 m-t_2" style="max-width:400px">&nbsp;</h2>
					<p class="lorem-loader font_n2 m-y_2" style="max-width:250px">&nbsp;</p>
					<p class="lorem-loader font_n3 m-y_2" style="max-width:150px">&nbsp;</p>
				</div>
				<div class="flex_shrink m-y_4 m-x_5 br_radius lorem-loader lorem-button">&nbsp;</div>
			</div>
			<div class="flex p_1 br_1 br_solid br_secondary-4">
				<div
					class="lorem-status flex_shrink flex toggle_handle p_3 br_secondary-5 br-r_1 br_solid self_stretch"
				>
					<i
						class="far fa-plus-square vertical-align_middle flex_grow-0 m_auto self_center c_secondary-5"
					></i>
				</div>
				<div class="lorem-status flex_shrink m_2 lorem-loader"></div>
				<div class="flex_auto m_2">
					<h2 class="lorem-loader font_ui font_1 m-t_2" style="max-width:400px">&nbsp;</h2>
					<p class="lorem-loader font_n2 m-y_2" style="max-width:250px">&nbsp;</p>
					<p class="lorem-loader font_n3 m-y_2" style="max-width:150px">&nbsp;</p>
				</div>
				<div class="flex_shrink m-y_4 m-x_5 br_radius lorem-loader lorem-button">&nbsp;</div>
			</div>
		</div>
		<div v-if="finishedLoading && fits.length == 0">
			<article class="m_5 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_secondary-5 font_ui">
				<h1 class="font_regular p_3 font_2 text_center br-b_1 br_solid br_secondary-4">
					<i class="far fa-exclamation-triangle"></i> You have No Fellows in your Training Program
					<i class="far fa-exclamation-triangle"></i>
				</h1>
				<p
					class="font_0 p-y_3 lh_3"
				>Please search via email to add people to your training program.</p><p>As you enter your new Fellows in Training they will receive an email invitation to register for ACC membership, but some may have an already existing member account.</p><p class="bg_warning p_4 c_white m-t_3 br_radius font_0 font_display"> <span class="block text_center font_1">If the invited individual is listed as a different member type </span><small class="block text_center p-b_3 font_italic">(not an FIT account)</small> The training end date field of that user will be disabled and ACC staff will be notified. The account will remain on your list and say Pending Review. Staff will notify you once the account is updated.</p>
			</article>
		</div>
		<div v-if="finishedLoading && fits.length != 0" class="br_solid br_1 br-b_0 br_secondary-4">
			<FIT v-for="fit in fits" :key="'fit_'+fit.id" v-bind="fit" @removeFIT="$emit('removeFIT', fit)" />
		</div>
	</div>
</template>

<script>
import FIT from "./TrainingProgram.FIT";
export default {
	name: "ListFIT",
	props: {
		fits: {
			type: Array,
			default: () => []
		},
		finishedLoading: { type: Boolean, default: false }
	},
	components: { FIT },
	methods: {
		removeFIT() {
			this.$emit("removeFIT", id);
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="css" scoped>
.lorem-status {
	width: 2.5rem;
}
.lorem-button {
	width: 8rem;
}
</style>