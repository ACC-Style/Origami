import { action } from "@storybook/addon-actions";

import inputText from "../../src/components/BasicForms/Input.Text.vue";

export default {
	title: "Form/Inputs/Text",
	component: inputText,
	parameters: {
		componentSubtitle:
			"email inputs can be used for just capturing a secondary input or turn on the user name feature to check if it is unique",
		info: true
	},
	excludeStories: ["inputTextComponent"]
};
export const inputTextComponent = `
    <inputText>{{label}}</inputText>
`;
export const basic = () => {
	return {
		components: { inputText },
		template: inputTextComponent,
		data: () => ({
			label: "Type Some Text",
			required: true
		})
	};
};
