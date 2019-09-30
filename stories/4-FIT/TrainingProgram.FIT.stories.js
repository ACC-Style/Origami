import {
	action
} from "@storybook/addon-actions";
import FIT from "../../src/components/FIT/TrainingProgram.FIT";

export default {
	title: "FIT/FIT",
	parameters: {
		componentSubtitle: "A Fellow in Training"
	},
	excludeStories: [ "fit" ]
};
export const fit = {
	"id": 752843,
	"fullName": "Min Grishukov",
	"endDate": "1/28/2019",
	"email": "mgrishukov0@zdnet.com",
	"birthday": "8/23/2019",
	"address": {
		"institution": "Nader-Orn",
		"street_1": "95866 Summerview Street",
		"streee_2": null,
		"city": "San Antonio",
		"state": null,
		"zip": "78291"
	}
};
export const basic = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' @click='removeClick'/>",
		methods: {
			removeClick: action( "remove clicked" )
		},
		data: () => ( {
			fit
		} )
	};
};
export const missingEndDate = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' />",
		methods: {},
		data: () => ( {
			fit: {
				...fit,
				endDate: ""
			}
		} )
	};
};
export const missingBirthday = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' />",
		methods: {},
		data: () => ( {
			fit: {
				...fit,
				birthday: ""
			}
		} )
	};
};
export const missingBoth = () => {
	return {
		components: {
			FIT
		},
		template: "<FIT v-bind='fit' />",
		methods: {},
		data: () => ( {
			fit: {
				...fit,
				birthday: "",
				endDate: ""
			}
		} )
	};
};