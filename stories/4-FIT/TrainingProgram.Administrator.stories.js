import { action } from "@storybook/addon-actions";

import Administrator from "../../src/components/FIT/TrainingProgram.administrator";

export default {
	title: "FIT/Administrator",
	component: Administrator,
	parameters: {
		componentSubtitle: "A Fellow in Training"
	}
};
export const basic = () => {
	return {
		components: {
			Administrator
		},
		template: "<Administrator />",
		methods: {},
		data: () => ({})
	};
};
