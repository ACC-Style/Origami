import { action } from "@storybook/addon-actions";

import Administrator from "../../src/components/FIT/TrainingProgram.administrator";

export default {
	title: "FIT/Administrator",
	component: Administrator,
	parameters: {
		componentSubtitle: "Administrator of Training Program",
		notes: true,
		 
	},
	excludeStories: ["adminData", "methods"],
	methods: {
		deleteAdmin: action("Delete Admin")
	}
};
export const adminData = {
	name: "John Smith PHD",
	institution: "The American College of Cadiology",
	readOnly: true,
	adminType: "Director"
};
export const methods = { deleteAdmin: action("Delete Admin") };
export const readOnly = () => {
	return {
		components: {
			Administrator
		},
		template: "<Administrator  v-bind='adminData' @click='deleteAdmin'/>",
		methods: methods,
		data: () => ({
			adminData
		})
	};
};
export const editable = () => {
	return {
		components: {
			Administrator
		},
		template: "<Administrator v-bind='adminData' @click='deleteAdmin'/>",
		methods: methods,
		data: () => ({
			adminData: { ...adminData, readOnly: false }
		})
	};
};
