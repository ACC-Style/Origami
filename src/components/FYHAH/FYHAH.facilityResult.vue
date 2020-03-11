<template>
	<article
		class="br_1 br_black-2 br_solid font_0 font_ui p_4 shadow_bevel-light"
	>
		<header class="flex p-b_4 justify_between">
			<h1 class="font_2 font_display m_0 flex_auto">
				<span>{{ facility.BrandedName }}</span>
				<small
					class="font_n1 c_primary"
					v-if="facility.Distance != null"
					>{{ facility.Distance }} miles</small
				>
			</h1>
			<a
				class="a:bg_accent-n1 a:c_white bg_shade-5 br_2 br_solid br_white-3 c_black flex_shrink h:bg_primary h:c_white h:underline-none inline-block m-r_2 p-y_2 p-r_4 p-l_3  text_center"
				@click="compareToggle()"
				v-bind:class="{
					'is-active active': compareActive,
					shadow_2: !compareActive
				}"
			>
				<i
					class="fal fa-fw icon-toggle_check-sqaure icon-toggle_check-square"
				></i>
				<span class="add alt-short-text a:_none">Compare</span>
				<span class="remove alt-short-text display_none a:_inline-block"
					>Remove</span
				>
			</a>
		</header>
		<div class="flex flex_column flex_row:md">
			<div class="br-r_1 flex_grow font_0 m-r_4:md w_20 max-w_30">
				<address class="m-t_3">
					<!-- http://microformats.org/wiki/hcard -->
					<ul class="ul_none lh_1 font_0">
						<li class="m-b_1 m-b_3:md facility-address font_1">
							<div class="block" v-if="facility.Address1 !== ''">
								<span class="street-address">{{
									facility.Address1
								}}</span>
							</div>
							<div class="block" v-if="facility.Address2 != ''">
								<span class="street-address">{{
									facility.Address2
								}}</span>
							</div>
							<div class="block">
								<span
									class="locality"
									v-if="facility.City != ''"
									>{{ facility.City }}</span
								>,
								<span class="state-name">
									<abbr>{{ facility.State }}</abbr>
								</span>
								<span class="postal-code">{{
									facility.Zip
								}}</span>
							</div>
						</li>
						<li class="m-b_1 m-b_2:md facility-google-map">
							<a
								class="block c_secondary h:c_primary h:underline"
								:href="
									'https://www.google.com/maps/place/' +
										facility.GoogleAddress
								"
								target="_blank"
							>
								<i class="fa-fw fa-map-marker fa-pin fas"></i
								>Get Directions
							</a>
						</li>
						<li
							class="m-b_1 m-b_2:md facility-web-URL"
							v-if="facility.WebURL != ''"
						>
							<a
								class="website c_secondary h:c_primary h:underline"
								target="_blank"
								:href="facility.WebURL"
							>
								<i class="fas fa-fw fa-globe"></i>
								website
							</a>
						</li>
						<li
							class="m-b_1 m-b_3:md facility-phone"
							v-if="facility.Phone != ''"
						>
							<a
								tel="+18002574737"
								:href="'tel:+' + facility.Phone"
								class="tel c_secondary h:c_primary h:underline"
							>
								<i class="fas fa-fw fa-phone"></i>
								<span class="text">{{ facility.Phone }}</span>
							</a>
						</li>
					</ul>
				</address>
			</div>
			<div class="flex_auto m-t_0:md m-t_4">
				<div
					class="font_0 font_bold br-b_1 br_solid br_primary-3 p-b_2 m-b_3"
				>
					Cardiac Services
					<a
						href="https://www.cardiosmart.org/resources/pr-glossary"
						target="_blank"
						class="c_secondary h:c_primary h:underline"
					>
						<i class="fas fa-fw fa-question-circle"></i>
					</a>
				</div>
				<ul
					class="font_n1 gap-x_4 gap-y_2 grid lh_2 template-x_15 ul_none "
				>
					<li
						class="facility-service p-l_4 p-r_3 text-indent_n1"
						v-for="(service, index) in services"
						:key="'service_' + index"
					>
						{{ service }}
					</li>
				</ul>
			</div>
		</div>
		<footer
			class="br-t_1 br_secondary-5 br_solid flex justify_between m-t_3 p-t_3 result-footer flex_row-reverse"
		>
			<a
				class="a:bg_accent bg_shade-5 br_2 br_solid br_white-3 c_black flex_grow h:bg_primary h:c_white h:underline-none inline-block m-r_2 p-y_2 p_4 shadow_overlap-light text_center"
			>
				<span class="add alt-short-text">Profile</span>
				<i class="fa fa-fw icon-toggle_arrow-circle"></i>
			</a>
		</footer>
	</article>
</template>

<script>
export default {
	props: {
		facility: {
			type: Object,
			required: true
		},
		services: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			compareActive: false
		};
	},
	methods: {
		compareToggle() {
			this.compareActive = !this.compareActive;
		}
	}
};
</script>

<style scoped></style>
