import { action } from "@storybook/addon-actions";
import FIT from "../../src/components/FIT/TrainingProgram.FIT";

export default {
	title: "FIT/FIT",
	parameters: {
		componentSubtitle: "A Fellow in Training"
	},
	excludeStories: ["fit"]
};
export const fit = {
	ID: 234,
	fullName: "Micheal Simons PHD, FACC",
	endDate: "30/09/2019",
	email: "msimons@fakeemail.com",
	birthday: "09/12/1985",
	address: {
		institution: "American College of Cardiology",
		street_1: "1000 Beacher Street",
		street_2: "Apt 543",
		city: "Washington",
		state: "DC",
		zip: "20006"
	}
};
export const basic = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' @click='removeClick'/>",
		methods: { removeClick: action("remove clicked") },
		data: () => ({ fit })
	};
};
export const missingEndDate = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' />",
		methods: {},
		data: () => ({ fit: { ...fit, endDate: "" } })
	};
};
export const missingBirthday = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' />",
		methods: {},
		data: () => ({ fit: { ...fit, birthday: "" } })
	};
};
