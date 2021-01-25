import { action } from "@storybook/addon-actions";
import Bundle from "../../src/components/SeatManagement/Containers/Bundle/Seat.Bundle.Overview.vue";


export default {
	title: "SeatManagement/Containers/Bundles",
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		 
	},
	excludeStories: ["purchaserData", "methods"]
};
export const methods = {};
export const purchaserData = {};



export const bundle = () => {
	return {
		components:{Bundle},
		template: `<Bundle v-bind="bundle"/>`,
		data() {
			return {
				bundle: {
					id: "3333333333-p",
					name: "OmegaSap",
					productURL:"https://google.com",
					all: 250,
					filled: 123,
					requested:20,
					locked:12
				 }
			}
		},
	};
};