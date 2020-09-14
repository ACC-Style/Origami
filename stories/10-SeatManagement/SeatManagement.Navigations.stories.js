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
	excludeStories: ["sideNavigationNodes"]
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
export const SideNav =()=>({
    components:{
        SideNavList
        },
    template:`<SideNavList class="max-w_20" :label="node.label" :type="node.type" :pageID="node.pageID" :isActive="node.isActive"  :nodes="node.nodes"/>`,
	data: () => ({
		node:sideNavigationNodes
	}),

});

export const ListItem = () => {
	return {
        components: { SideNavItem},
        template: `
        <ul class="ul_none max-w_30">
        <li><SideNavItem :type="'company'" :isActive="false" :level="0" :label="'Company Profile'"/></li>
        <li><SideNavItem :type="'contracts'" :isActive="false" :level="0" :label="'Contracts'"/></li>
        <li><SideNavItem :type="'bundles'" :isActive="false" :isChildActive="true" :level="0" :label="'Bundles'" :hasChildren="true"/>
            <ul class="ul_none">
                <li><SideNavItem :type="'bundles'" :isActive="false" :level="1" :label="'Bundle'"/></li>
                <li><SideNavItem :type="'bundles'" :isActive="false" :level="1" :label="'Bundle'"/></li>
                <li><SideNavItem :type="'bundles'" :isActive="false" :isChildActive="true" :level="1" :label="'Bundle'" :hasChildren="true"/>
                <ul class="ul_none">
                    <li><SideNavItem :type="'subbundle'" :isActive="true" :level="2" :label="'Sub Bundle'"/></li>
                </ul>
            </li>
            </ul>
        </li>
        <li><SideNavItem  :type="'groups'":isActive="false" :level="0" :label="'Gropus'"/>
            <ul class="ul_none">
                <li><SideNavItem :type="'group'" :isActive="false" :level="1" :label="'Group a'"/></li>
                <li><SideNavItem :type="'group'" :isActive="false" :level="1" :label="'Group b'"/></li>
                <li><SideNavItem :type="'group'" :isActive="false" :isChildActive="false" :level="1" :label="'Group c'"/></li>
            </ul>
        </li>
    </ul>`
	};
};
export const ParentItem = () => {
	return {
        components: { SideNavItem },
        template: `<SideNavItem :isActive="false" :level="0" :label="'Parent Item'"/>`
	};
};

export const ChildItem = () => {
	return {
        components: { SideNavItem },
        template: `<SideNavItem :isActive="false" :level="1" :label="'Child Item'"/>`
	};
};
export const GrandChild = () => {
	return {
        components: { SideNavItem },
        template: `<SideNavItem :isActive="false" :level="2" :label="'Granchild Item'"/>`
	};
};
