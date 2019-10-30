import { action } from "@storybook/addon-actions";
import StatefullIcon from "../../src/components/subComponents/StatefullIcon.vue";
import Contract from "../../src/components/SeatManagement/Containers/Seat.Contract.vue";
import Seat from "../../src/components/SeatManagement/Containers/Seat.Seat.vue";
import Btn from "../../src/components/subComponents/Btn.vue";

export default {
	title: "SeatManagement/Containers",
	component: { Contract, StatefullIcon, Seat, Btn },
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		info: true
	},
	excludeStories: ["purchaserData", "methods"]
};
export const methods = {};
export const purchaserData = {};

export const contract = () => {
	return {
		components: {
			StatefullIcon,
			Contract
		},
		template: `
      <div>
      <h1 class="font_display">Contract Container</h1>
      <Contract/>
      </div>
    `
	};
};
export const bundle = () => {
	return {
		template: `
         <div>
               <h1>Bundle</h1>
               <ul> 
                  <li>Seat Count</li>
                  <li>Experation Date</li>                 
                  <li>Associated Contract</li>                 
                  <li>Seat Capacity</li>
                  <li>Partictians</li>
                  <li class="ul_none">
                  <ul> 
                     <li>Group</li>              
                     <li>Seat Capacity</li>
                     <li>Admin</li>
                     </ul>
                     </li>
                     </ul>
                     <ul>
                     <li>Partician Bundle</li>
                     </ul>
                     </div>
                     `
	};
};
export const group = () => {
	return {
		template: `<div>
                                                            <h1>Group</h1>
                                                            <ul> 
                                                               <li>Identification</li>
                                                               <li>Bundles</li>
                                                               <li>Group Admins</li>
                                                               <li>Experation Date</li>
                                                               <li>Associated Groups</li>
                                                               <li>Associated Groups</li>
                                                            </ul>
                                                            <ul>
                                                               <li>Add Admin</li>
                                                               <li>Change Partition</li>
                                                               <li>Add Consumer</li>
                                                            </ul>
                                                         </div>`
	};
};

export const seats = () => {
	return {
		components: {
			Seat,
			Btn,
			StatefullIcon
		},
		template: `
      <div>
         <h1>Seats</h1>
         <Seat/>
      </div>
      `
	};
};
