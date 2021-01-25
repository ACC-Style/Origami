import { action } from "@storybook/addon-actions";
import StatefullIcon from "../../src/components/subComponents/StatefullIcon.vue";
import Contract from "../../src/components/SeatManagement/Containers/Seat.Contract.vue";

import GroupContainer from "../../src/components/SeatManagement/Containers/Seat.Group.vue";
import GroupOverview from "../../src/components/SeatManagement/Containers/Group/Seat.Group.Overview.vue"
import Seat from "../../src/components/SeatManagement/Containers/Seat.Seat.vue";
import Btn from "../../src/components/subComponents/Btn.vue";

export default {
	title: "SeatManagement/Containers/Groups",
	component: { Contract, StatefullIcon, Seat, Btn },
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		 
	},
	excludeStories: ["purchaserData", "methods"]
};
export const methods = {};
export const purchaserData = {};


export const groupOverview = () => {
	return {
		components: {
			StatefullIcon,
			GroupOverview
		},
		template: `
            <GroupOverview :name="name" :admin="admin" :bundles="bundles"/>
          `,
          data: () => ({
            name: "Group A",
            id:12645,
            admin: [{name:"Han Solo", id:53},{name:"Darth Mal", id:1564}],
            bundles: [
               {
                  id: "3333333333-p",
                  name: "OmegaSap",
                  productURL:"https://google.com",
                  all: 250,
                  filled: 123,
                  requested:20,
                  locked:12
               },
               {
                  id: "1111111111-p",
                  name: "Cardio+",
                  productURL:"https://google.com",
                  all: 205,
                  filled:100,
                  requested:45,
                  locked:3
               }
            ]
         }),   
	};
};

export const List = () => {
	return {
      components:{GroupContainer},
		template: `<GroupContainer :groups="groups" />`,
               data: () => ({
                  groups:[{
                     name: "Group B",
                     id:12645,
                     admin: [{name:"Han Solo", id:53},{name:"Darth Mal", id:1564}],
                     bundles: [
                        {
                           id: "3333333333-p",
                           name: "EchoSAP",
                           productURL:"https://google.com",
                           all: 250,
                           filled: 123,
                           requested:20,
                           locked:12
                        },
                        {
                           id: "1111111111-p",
                           name: "ACRED+",
                           productURL:"https://google.com",
                           all: 205,
                           filled:100,
                           requested:45,
                           locked:18
                        }
                     ]
                  },{
                     name: "Group A",
                     id:12645,
                     admin: [{name:"Han Solo", id:53},{name:"Darth Mal", id:1564}],
                     bundles: [
                        {
                           id: "3333333333-p",
                           name: "OmegaSap",
                           productURL:"https://google.com",
                           all: 190,
                           filled: 70,
                           requested:20,
                           locked:12
                        },
                        {
                           id: "1111111111-p",
                           name: "Cardio+",
                           productURL:"https://google.com",
                           all: 300,
                           filled:50,
                           requested:22,
                           locked:19
                        }
                     ]
                  }]
               }),  
	};
};
export const ListLoading = () => {
	return {
      components:{GroupContainer},
		template: `<GroupContainer :groups="groups" />`,
               data: () => ({
                  groups:undefined
               }),  
	};
};
export const ListEmpty = () => {
	return {
      components:{GroupContainer},
		template: `<GroupContainer :groups="groups" />`,
               data: () => ({
                  groups:[]
               }),  
	};
};

