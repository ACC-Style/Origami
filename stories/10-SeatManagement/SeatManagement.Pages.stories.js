import { action } from "@storybook/addon-actions";
import StatefullIcon from "../../src/components/subComponents/StatefullIcon.vue";
import Contract from "../../src/components/SeatManagement/Containers/Seat.Contract.vue";
import GroupContainer from "../../src/components/SeatManagement/Containers/Seat.Group.vue";
import GroupOverview from "../../src/components/SeatManagement/Containers/Group/Seat.Group.Overview.vue";
import Seat from "../../src/components/SeatManagement/Containers/Seat.Seat.vue";
import Btn from "../../src/components/subComponents/Btn.vue";
import SideNavItem from "../../src/components/SeatManagement/Navigation/Seat.SideNav.NavItem.vue";
import SideNavList from "../../src/components/SeatManagement/Navigation/Seat.SideNav.SideNavList.vue";

export default {
	title: "SeatManagement/Pages",
	component: { Contract, StatefullIcon, Seat, Btn,SideNavItem,SideNavList },
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		info: true,
	},
	excludeStories: ["sideNavigationNodes", "methods","sideNavigationUsers"],
};
export const methods = {};
export const sideNavigationNodes = {
	label: "Root",
	type: "",
	pageID: -1,
	nodes: [
		{
			label: "Company Profile",
			type: "profile",
			pageID: 0,
		},
		{
			label: "Contracts",
			type: "contracts",
			pageID: 0,
			nodes: [
				{
					label: "CardioSource+",
					type: "contract",
					pageID: 12345,
				},
			],
		},
		{
			label: "Bundles",
			type: "bundles",
			pageID: 0,
			nodes: [
				{
					label: "EchoSap",
					type: "bundle",
					pageID: 12345,
					nodes: [
						{
							label: "ClickSap",
							type: "subbundle",
							pageID: 12345,
						},
						{
							label: "PopSap",
							type: "subbundle",
							pageID: 12345,
						},
					],
				},
				{
					label: "CathSap",
					type: "bundle",
					pageID: 12345,
				},
			],
		},
		{
			label: "Groups",
			type: "groups",
         pageID: 0,
         isActive:true,
			nodes: [
				{
					label: "Default",
					type: "group",
					pageID: 12345,
				},
				{
					label: "Eastern Hospitals",
					type: "group",
					pageID: 12345,
				},
				{
					label: "Western Hospitals",
					type: "group",
					pageID: 12345,
				},
				{
					label: "Central Hospitals",
					type: "group",
					pageID: 12345,
				},
			],
		},
	],
};
export const sideNavigationUsers = {
	label: "Root",
	type: "",
	pageID: -1,
	nodes: [
		{
			label: "All",
			type: "users-all",
			pageID: 1351,
      },
      {
			label: "Admin",
			type: "admin",
			pageID: 1351,
      },
      {
			label: "Group Admin",
			type: "group-admin",
			pageID: 1351,
      },
      {
			label: "Subscription Holders",
			type: "user",
			pageID: 1351,
		},
	],
};
export const contract = () => {
	return {
		components: {
			StatefullIcon,
			Contract,
		},
		template: `
      <div>
      <Contract/>
      </div>
    `,
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
                     `,
	};
};
export const group = () => {
	return {
		components: { GroupContainer, SideNavList},
      template: `
      <div class="flex p_4">
      <div class="flex_none w_15  br-r_1 br_solid br_primary-4 p-r_4 p-t_5">
      <SideNavList :label="node.label" :type="node.type" :pageID="node.pageID" :isActive="node.isActive"  :nodes="node.nodes"/>
      <h3 class="c_primary br-b_1 br_solid br_primary">Users</h3> 
      <SideNavList :label="users.label" :type="users.type" :pageID="users.pageID" :isActive="users.isActive"  :nodes="users.nodes"/>  
      </div>
      <div class="flex_auto p-x_5">
         <h1 class="m-t_0">Groups</h1>
         <GroupContainer :groups="groups" />
      </div>
      <div class="flex_auto max-w_25  br-l_1 br_solid br_primary-4"></div>
      </div>
      `,	
      data: () => ({
         node:sideNavigationNodes,
         users:sideNavigationUsers,
			groups: [
            {
					name: "Default",
					id: 12645,
					admin: [
						{ name: "R2D2", id: 53 },
					],
					bundles: [
						
					],
				},
				{
					name: "Easter Hospitals",
					id: 12645,
					admin: [
						{ name: "Han Solo", id: 53 },
						{ name: "Darth Mal", id: 1564 },
					],
					bundles: [
						{
							id: "3333333333-p",
							name: "EchoSAP",
							productURL: "https://google.com",
							all: 250,
							filled: 123,
							requested: 20,
							locked: 12,
						},
						{
							id: "1111111111-p",
							name: "ACRED+",
							productURL: "https://google.com",
							all: 205,
							filled: 100,
							requested: 45,
							locked: 18,
						},
					],
				},
				{
					name: "Western Hospitals",
					id: 12645,
					admin: [
						{ name: "Han Solo", id: 53 },
						{ name: "Darth Mal", id: 1564 },
					],
					bundles: [
						{
							id: "3333333333-p",
							name: "OmegaSap",
							productURL: "https://google.com",
							all: 190,
							filled: 70,
							requested: 20,
							locked: 12,
						},
						{
							id: "1111111111-p",
							name: "Cardio+",
							productURL: "https://google.com",
							all: 300,
							filled: 50,
							requested: 22,
							locked: 19,
						},
					],
				},			{
					name: "Central Hospitals",
					id: 12645,
					admin: [
						{ name: "Han Solo", id: 53 },
						{ name: "Darth Mal", id: 1564 },
					],
					bundles: [
						{
                     id: "3333333333-p",
                     name: "EchoSAP",
                     productURL: "https://google.com",
                     all: 250,
                     filled: 123,
                     requested: 20,
                     locked: 12,
                 },
                 {
                     id: "1111111111-p",
                     name: "ACRED+",
                     productURL: "https://google.com",
                     all: 205,
                     filled: 100,
                     requested: 45,
                     locked: 18,
                 },
					],
				},
			],
}),

	};
};

export const user = () => {
	return {
		components: {
			Seat, SideNavList
		},
		template: `
      <div class="flex p_4">
         <div class="flex_none w_15  br-r_1 br_solid br_primary-4 p-r_4 p-t_5">
         <SideNavList :label="node.label" :type="node.type" :pageID="node.pageID" :isActive="node.isActive"  :nodes="node.nodes"/>
         <h3 class="c_primary br-b_1 br_solid br_primary">Users</h3> 
         <SideNavList :label="users.label" :type="users.type" :pageID="users.pageID" :isActive="users.isActive"  :nodes="users.nodes"/>  
         </div>
         <div class="flex_auto p-x_5">
            <h1 class="m-t_0">Users</h1>
            <GroupContainer :groups="groups" />
         </div>
         <div class="flex_auto max-w_25  br-l_1 br_solid br_primary-4"></div>
      </div>
      `,
      data: () => ({
         node:sideNavigationNodes,
         users:sideNavigationUsers,
			groups: [
            {
					name: "Default",
					id: 12645,
					admin: [
						{ name: "R2D2", id: 53 },
					],
					bundles: [
						
					],
				},
				{
					name: "Easter Hospitals",
					id: 12645,
					admin: [
						{ name: "Han Solo", id: 53 },
						{ name: "Darth Mal", id: 1564 },
					],
					bundles: [
						{
							id: "3333333333-p",
							name: "EchoSAP",
							productURL: "https://google.com",
							all: 250,
							filled: 123,
							requested: 20,
							locked: 12,
						},
						{
							id: "1111111111-p",
							name: "ACRED+",
							productURL: "https://google.com",
							all: 205,
							filled: 100,
							requested: 45,
							locked: 18,
						},
					],
				},
				{
					name: "Western Hospitals",
					id: 12645,
					admin: [
						{ name: "Han Solo", id: 53 },
						{ name: "Darth Mal", id: 1564 },
					],
					bundles: [
						{
							id: "3333333333-p",
							name: "OmegaSap",
							productURL: "https://google.com",
							all: 190,
							filled: 70,
							requested: 20,
							locked: 12,
						},
						{
							id: "1111111111-p",
							name: "Cardio+",
							productURL: "https://google.com",
							all: 300,
							filled: 50,
							requested: 22,
							locked: 19,
						},
					],
				},			{
					name: "Central Hospitals",
					id: 12645,
					admin: [
						{ name: "Han Solo", id: 53 },
						{ name: "Darth Mal", id: 1564 },
					],
					bundles: [
						{
                     id: "3333333333-p",
                     name: "EchoSAP",
                     productURL: "https://google.com",
                     all: 250,
                     filled: 123,
                     requested: 20,
                     locked: 12,
                 },
                 {
                     id: "1111111111-p",
                     name: "ACRED+",
                     productURL: "https://google.com",
                     all: 205,
                     filled: 100,
                     requested: 45,
                     locked: 18,
                 },
					],
				},
			],
}),
	};
};
