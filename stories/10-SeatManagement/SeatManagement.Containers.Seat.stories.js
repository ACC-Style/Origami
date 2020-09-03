import { action } from "@storybook/addon-actions";

import Seat from "../../src/components/SeatManagement/Containers/Seat.Seat.vue";


export default {
	title: "SeatManagement/Containers/Seats",
	component: { Seat },
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		info: true
	},
	excludeStories: ["purchaserData", "methods"]
};
export const methods = {};
export const purchaserData = {};



export const seat = () => {
	return {
		components: {
			Seat
		},
		template: `
      <div>
         <h1>Seats</h1>
         <Seat/>
      </div>
      `
	};
};
