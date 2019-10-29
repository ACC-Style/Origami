import { action } from "@storybook/addon-actions";
import Accordion from "../../src/components/BasicContainer/Accordion.vue";

export default {
	title: "Basic/Accordion",
	component: Accordion,
	excludeStories: []
};

export const basic = () => ({
	components: {
		Accordion
	},
	template: `
					<Accordion>
						<template v-slot:header>Toggle Headline</template>
						<template v-slot:content>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden</template>
					</Accordion>
					`,
	methods: {
		action: action("clicked")
	},
	data: () => ({})
});
