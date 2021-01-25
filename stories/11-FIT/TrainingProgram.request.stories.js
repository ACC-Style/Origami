import { action } from "@storybook/addon-actions";

import Request from "../../src/components/FIT/TrainingProgram.request";

export default {
	title: "FIT/Request",
	component: Request,
	parameters: {
		componentSubtitle: "A Fellow in Training",
		 
	}
};
export const basic = () => {
	return {
		components: {
			Request
		},
		template:
			"<Request @cancelRequest='cancelRequest' @resendRequest='resendRequest'/>",
		methods: {
			cancelRequest: action("Cancel the Request"),
			resendRequest: action("Resend the Request")
		},
		data: () => ({})
	};
};
