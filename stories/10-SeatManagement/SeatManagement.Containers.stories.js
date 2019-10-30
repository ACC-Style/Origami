import { action } from "@storybook/addon-actions";
import StatefullIcon from "../../src/components/subComponents/StatefullIcon.vue";

export default {
	title: "SeatManagement/Containers",
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
			StatefullIcon
		},
		template: `
      <div>
      <h1>Contract Container</h1>
      <div class="flex br_solid br_1 br_black-3 font_ui">
	<div class="flex_shrink"><StatefullIcon class="font_3" :state="'success'" style="width:100px;height:100%"/></div>
	<div class="flex_auto flex flex_column p-x_4 p-y_3 font_1">
      <div class="flex_shrink c_primary-n1 font_2"><strong>Contract ID:</strong>[ ID ]</div>      
      <div class="flex_shrink">
         <ul class="ul_none font_0">
            <li class="p-r_2 p-y_2 inline"><strong>Bundles:</strong></li>
            <li class="p-r_2 p-y_2 inline">[Bundle Name]</li>
            <li class="p-r_2 p-y_2 inline">[Bundle Name]</li>
         </ul>
      </div>
		<div class="flex_shrink font_0"><strong>Term:</strong>[ Term ]</div>
		<div class="flex_shrink font_0"><strong>Amount:</strong>[ Amount ]</div>
		<div class="flex_shrink font_0">
			<strong>Purchased:</strong>[ Purchase_Date ]
      </div>
	</div>
	<div class="flex_auto flex flex_column font_n1 p_3">
   <div class="flex_shrink font_1">
      <strong>Next Payment:</strong>[ Purchase_Date ]
   </div>
		<div class="flex_shrink">
			<strong>Last Payment:</strong>[ Purchase_Date ]
		</div>
		<div class="flex_shrink"><strong>Expires:</strong>[ Purchase_Date ]</div>
	</div>
	<div class="flex_auto">
		
	</div>
</div>
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
		template: `<div>
                                                            <h1>Group</h1>
                                                            <ul> 
                                                               <li>User</li>
                                                               <li>Email</li>
                                                               <li>Accepted Bundles</li>
                                                               <li>State</li>
                                                               <li>Date of Acceptance</li>
                                                               <li>time left seat cool down</li>
                                                            </ul>
                                                            <ul>
                                                               <li>Request Again</li>
                                                               <li>Extend Seat</li>
                                                               <li>Retire Seat</li>
                                                            </ul>
                                                         </div>`
	};
};
