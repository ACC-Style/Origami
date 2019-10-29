import { action } from "@storybook/addon-actions";
import Accordion from "../../src/components/BasicContainer/Accordion.vue";

export default {
	title: "Basic/Accordion",
	component: Accordion,
	excludeStories: ["address"]
};
export const address = {
	institution: "American College of Cardiology",
	street_1: "1000 Beacher Street",
	street_2: "Apt 543",
	city: "Washington",
	state: "DC",
	zip: "20006"
};
export const defualt = () => ({
	components: {
		Accordion
	},
	template: "<Accordion v-bind='address' />",
	methods: {
		action: action("clicked")
	},
	data: () => ({
		address
	})
});
