import { action } from "@storybook/addon-actions";
import FIT from "../../src/components/FIT/TrainingProgram.FIT";

export default {
	title: "FIT/FIT",
	component: FIT,
	parameters: {
		componentSubtitle: "A Fellow in Training",
		notes:
			"Fit is a container of information about the ACC Logged in User that is attached to a Training Program",
		info: true
	},
	excludeStories: ["fit", "methods"]
};
export const methods = {
	removeFIT: action("remove clicked ")
};
export const fit = {
	id: "752843",
	pendingReview: false,
	fullName: "Min Grishukov",
	endDate: "1/28/2019",
	email: "mgrishukov0@zdnet.com",
	birthday: "8/23/2019",
	address: {
		institution: "Nader-Orn",
		street_1: "95866 Summerview Street",
		streee_2: null,
		city: "San Antonio",
		state: null,
		zip: "78291"
	}
};
export const basic = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' @removeFIT='removeFIT'/>",
		methods: methods,
		data: () => ({
			fit
		})
	};
};
export const missingEndDate = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' />",
		methods: methods,
		data: () => ({
			fit: {
				...fit,
				endDate: ""
			}
		})
	};
};
export const missingBirthday = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' />",
		methods: methods,
		data: () => ({
			fit: {
				...fit,
				birthday: ""
			}
		})
	};
};
export const missingBoth = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' />",
		methods: methods,
		data: () => ({
			fit: {
				...fit,
				birthday: "",
				endDate: ""
			}
		})
	};
};
export const pendingReview = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' />",
		methods: methods,
		data: () => ({
			fit: {
				...fit,
				pendingReview: true
			}
		})
	};
};
