import { action } from "@storybook/addon-actions";

import InputEmail from "../../src/components/BasicForms/Input.Email.vue";

export default {
	title: "Form/Inputs/Email",
	component: InputEmail,
	parameters: {
		componentSubtitle:
			"email inputs can be used for just capturing a secondary input or turn on the user name feature to check if it is unique",
		 
	},
	excludeStories: ["templateEmail"]
};
export const templateEmail = `
    <InputEmail :icon="icon" :required="required">{{label}}</InputEmail>
`;
export const email = () => {
	return {
		components: { InputEmail },
		template: templateEmail,
		data: () => ({
			label: "Email",
			icon: "fa-at",
			required: true
		})
	};
};

export const username = () => {
	return {
		components: { InputEmail },
		template: templateEmail,
		data: () => ({
			label: "User Name",
			icon: "fa-user",
			required: false,
			errorMessage: "Usernames are emails and this doesn't seem to be an email."
		})
	};
};
