import { action } from "@storybook/addon-actions";
import Result from "../../src/components/GLSearch/GLSearch.Result";

export default {
	title: "GLSearch/Result",
	component: Result,
	parameters: {
		componentSubtitle: "Guideline Search Result",
		notes: true,
		info: true
	},
	excludeStories: ["resultData", "methods"]
};
export const resultData = {};
export const methods = { click: action("click") };
export const basic = () => {
	return {
		components: {
			Result
		},
		template: "<Result  v-bind='resultData' @click='click'/>",
		methods: methods,
		data: () => ({
			resultData
		})
	};
};
