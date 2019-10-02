import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import AddressBlock from "../../src/components/subComponents/AddressBlock.vue";

export default {
	title: "Basic/Address",
	component: AddressBlock,
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
export const addressContent = () => ({
	components: {
		AddressBlock
	},
	template: "<AddressBlock v-bind='address' />",
	methods: {
		action: action("clicked")
	},
	data: () => ({
		address
	})
});
