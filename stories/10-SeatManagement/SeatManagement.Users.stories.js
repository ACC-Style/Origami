import { action } from "@storybook/addon-actions";

export default {
	title: "SeatManagement/Users",
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		info: true
	},
	excludeStories: ["purchaserData", "methods"]
};
export const methods = {};
export const purchaserData = {};
export const purchaser = () => {
	return {
		template: `
         <div>
            <h1>Purchaser</h1>
            <ul> 
               <li>Name</li>
               <li>Email</li>
               <li>Last Login</li>
            </ul>
            <ul>
               <li>Remove</li>
            </ul>
         </div>
      `
	};
};
export const groupAdmin = () => {
	return {
		template: `
         <div>
            <h1>Group Admin</h1>
            <ul> 
               <li>Name</li>
               <li>Last Login</li>
               <li>State of Acceptance</li>
               <li>Email</li>
               <li>Associated Groups</li>
                <li>Associated Bundles</li>
            </ul>
            <ul>
               <li>Remove</li><li>Remove Bundle</li>
            </ul>
         </div>
    `
	};
};
export const Consumer = () => {
	return {
		template: `
         <div>
            <h1>Consumer</h1>
            <ul> 
               <li>Name</li>
               <li>Last Login</li>
               <li>State of Acceptance</li>
               <li>Email</li>
               <li>Associated Bundles</li>
            </ul>
            <ul>
               <li>Remove Bundle</li> <li>Remove</li>
            </ul>
         </div>
    `
	};
};
