import { action } from "@storybook/addon-actions";
import SideNavItem from "../../src/components/SeatManagement/Navigation/Seat.SideNav.NavItem.vue";
import SideNavList from "../../src/components/SeatManagement/Navigation/Seat.SideNav.SideNavList.vue";


export default {
	title: "SeatManagement/Navigation",
    components: { SideNavItem,SideNavList },
	parameters: {
		componentSubtitle: "Navigation Elements that Route Users to Specific Sections of the Application",
		notes: true,
		info: true
	},
	excludeStories: ["sideNavigationNodes","sideNavigationUsers",]
};


export const SideNav =()=>({
    components:{
        SideNavList
        },
    template:`<SideNavList class="max-w_20" :label="node.label" :type="node.type" :pageID="node.pageID" :isActive="node.isActive"  :nodes="node.nodes"/>`,
	data: () => ({
		node:sideNavigationNodes
	}),

});
export const UserNav =()=>({
    components:{
        SideNavList
        },
    template:`<SideNavList class="max-w_20" :label="node.label" :type="node.type" :pageID="node.pageID" :isActive="node.isActive"  :nodes="node.nodes"/>`,
	data: () => ({
		node:sideNavigationUsers
	}),

});

export const CompanyProfile = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationNodes.nodes[0]
        }),
	};
};
export const Contracts = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationNodes.nodes[1]
        }),
	};
};
export const Bundles = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationNodes.nodes[2]
        }),
	};
};
export const Bundle = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationNodes.nodes[2].nodes[0]
        }),
	};
};
export const SubBundle = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationNodes.nodes[2].nodes[0].nodes[0]
        }),
	};
};
export const Groups = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationNodes.nodes[3]
        }),
	};
};
export const Group = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationNodes.nodes[3].nodes[0]
        }),
	};
};


export const AllUsers = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationUsers.nodes[0]
        }),
	};
};
export const Admin = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationUsers.nodes[1]
        }),
	};
};
export const GroupAdmin = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationUsers.nodes[2]
        }),
	};
};
export const SubscriptionHolders = () => {
	return {
        components: {SideNavItem},
        template: `<SideNavItem v-bind="node"/>`,
        data: () => ({
            node:sideNavigationUsers.nodes[3]
        }),
	};
};
export const sideNavigationNodes = {
    "label": "Root",
    "type": "",
    "pageID": -1,
    "nodes":[
        {
            "label": "Company Profile",
            "type": "profile",
            "pageID": 0
        },
        {
            "label": "Contracts",
            "type": "contracts",
            "pageID": 0,
            "nodes": [
                {
                    "label": "CardioSource+",
                    "type": "contract",
                    "pageID": 12345
                }
            ]
        },
        {
            "label": "Bundles",
            "type": "bundles",
            "pageID": 0,
            "nodes": [
                {
                    "label": "EchoSap",
                    "type": "bundle",
                    "pageID": 12345,
                    "nodes": [
                        {
                            "label": "ClickSap",
                            "type": "subbundle",
                            "pageID": 12345
                        },
                        {
                            "label": "PopSap",
                            "type": "subbundle",
                            "pageID": 12345,
                            "isActive": true
                        }
                    ]
                },
                {
                    "label": "CathSap",
                    "type": "bundle",
                    "pageID": 12345,
                }
            ]
        },
        {
            "label": "Groups",
            "type": "groups",
            "pageID": 0,
            "nodes": [
                {
                    "label": "Default",
                    "type": "group",
                    "pageID": 12345,

                },
                {
                    "label": "Eastern Hospitals",
                    "type": "group",
                    "pageID": 12345,

                },
                {
                    "label": "Western Hospitals",
                    "type": "group",
                    "pageID": 12345,

                },
                {
                    "label": "Central Hospitals",
                    "type": "group",
                    "pageID": 12345,

                }
            ]
        }
    ]
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