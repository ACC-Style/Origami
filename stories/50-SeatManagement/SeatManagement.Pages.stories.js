import { action } from "@storybook/addon-actions";
import StatefullIcon from "../../src/components/subComponents/StatefullIcon.vue";
import Contract from "../../src/components/SeatManagement/Containers/Seat.Contract.vue";
import GroupContainer from "../../src/components/SeatManagement/Containers/Seat.Group.vue";
import GroupOverview from "../../src/components/SeatManagement/Containers/Group/Seat.Group.Overview.vue";
import Seat from "../../src/components/SeatManagement/Containers/Seat.Seat.vue";
import Btn from "../../src/components/subComponents/Btn.vue";
import SideNavItem from "../../src/components/SeatManagement/Navigation/Seat.SideNav.NavItem.vue";
import SideNavList from "../../src/components/SeatManagement/Navigation/Seat.SideNav.SideNavList.vue";
import SeatList from "../../src/components/SeatManagement/Containers/Seat.Seat.vue";
import SingleSeat from "../../src/components/SeatManagement/Containers/Seat/Seat.SingleSeat.Overview.vue";
import SingleSeatLoading from "../../src/components/SeatManagement/Containers/Seat/Seat.SingleSeat.Loading.vue";
import UserChart from "../../src/components/SeatManagement/Charts/Seat.ReadableUserChart.vue";
import UsersList from "../../src/components/SeatManagement/Containers/Seat.Users.vue";
import SingleUser from "../../src/components/SeatManagement/Containers/User/Seat.SingleUser.Overview.vue";
import SingleUserLoading from "../../src/components/SeatManagement/Containers/User/Seat.SingleUser.Loading.vue";


export default {
	title: "SeatManagement/Pages",
	component: { Contract, StatefullIcon,UserChart, Seat, Btn,SideNavItem,SideNavList,SeatList ,SingleSeat, SingleSeatLoading,UsersList ,SingleUser, SingleUserLoading },
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,

	},
	excludeStories: ["UserData","sideNavigationNodes", "methods","sideNavigationUsers","SeatData"],
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
      <div class="flex_shrink  br-r_1 br_solid br_primary-4 p-r_4 p-t_5">
      <SideNavList :label="node.label" :type="node.type" :pageID="node.pageID" :isActive="node.isActive"  :nodes="node.nodes"/>
      <h3 class="c_primary br-b_1 br_solid br_primary">Users</h3> 
      <SideNavList class="" :label="users.label" :type="users.type" :pageID="users.pageID" :isActive="users.isActive"  :nodes="users.nodes"/>  
      </div>
      <div class="flex_auto p-x_4">
         <h1 class="m-t_0">Groups</h1>
         <GroupContainer :groups="groups" />
      </div>
      <div class="flex_auto max-w_25  br-l_1 br_solid br_primary-4 display_none"></div>
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
			Seat, SideNavList,UsersList,UserChart
		},
		template: `
      <div class="flex p_4">
         <div class="flex_none w_15  br-r_1 br_solid br_primary-4 p-r_4 p-t_5">
         <div class="fixed:md"><SideNavList   :label="node.label" :type="node.type" :pageID="node.pageID" :isActive="node.isActive"  :nodes="node.nodes"/>
         <h3 class="c_primary br-b_1 br_solid br_primary">Users</h3> 
         <SideNavList :label="usersNav.label" :type="usersNav.type" :pageID="usersNav.pageID" :isActive="usersNav.isActive"  :nodes="usersNav.nodes"/> </div> 
         </div>
         <div class="flex_auto p-x_5">
            <h1 class="m-t_0">Users</h1>
            <UsersList class="" :users="userlist" />
         </div>
         <div class="flex_auto max-w_25  br-l_1 br_solid br_primary-4"><UserChart class="fixed:md"  :users="userlist"/></div>
      </div>
      `,
      data: () => ({
         node:sideNavigationNodes,
		 usersNav:sideNavigationUsers,
		 userlist:UserData

}),
	};
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

export const SeatData =  [{
	"id": 1,
	"date_invite": "2019-06-05 00:38:30 UTC",
	"date_accepted": "2019-06-25 00:38:30 UTC",
	"date_lockedTill": "2020-06-25 00:38:30 UTC",
	"date_removed": null,
	"status": "filled",
	"user": {
	  "name": "Kris Cerro",
	  "id": "4516489198",
	  "email": "kcerro0@java.com"
	},
	"bundle": {
	  "id": "3333333333-p",
	  "name": "OmegaSap"
	},
	"contract": {
	  "id": "2936064598"
	},
	"group": {
	  "id": "9478943543",
	  "name": "hospital_southern"
	}
  }, {
	"id": 2,
	"date_invite": "2019-06-16 02:52:55 UTC",
	"date_accepted": "2019-06-23 02:52:55 UTC",
	"date_lockedTill": "2020-06-23 02:52:55 UTC",
	"date_removed": "2020-01-03 02:52:55 UTC",
	"status": "requested",
	"user": {
	  "name": "Johnathan Shiril",
	  "id": "6360832918",
	  "email": "jshiril1@a8.net"
	},
	"bundle": {
	  "id": "000000000-p",
	  "name": "Acred360"
	},
	"contract": {
	  "id": "7931628295"
	},
	"group": {
	  "id": "1776518408",
	  "name": "hospital_eastcoast"
	}
  }, {
	"id": 3,
	"date_invite": "2019-05-06 02:26:33 UTC",
	"date_accepted": "2019-05-26 02:26:33 UTC",
	"date_lockedTill": "2020-05-26 02:26:33 UTC",
	"date_removed": "2019-07-10 02:26:33 UTC",
	"status": "requested",
	"user": {
	  "name": "Elvyn Jervoise",
	  "id": "0165943864",
	  "email": "ejervoise2@house.gov"
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "9488668663"
	},
	"group": {
	  "id": "4097433448",
	  "name": "hospital_eastcoast"
	}
  }, {
	"id": 4,
	"date_invite": "2019-02-21 21:43:26 UTC",
	"date_accepted": "2019-03-11 21:43:26 UTC",
	"date_lockedTill": "2020-03-11 21:43:26 UTC",
	"date_removed": "2019-04-27 21:43:26 UTC",
	"status": "empty",
	
	"user": {
	  "name": null,
	  "id": null,
	  "email": null
	},
	"contract": {
	  "id": "4881784761"
	},
	"group": {
	  "id": "2171460550",
	  "name": "default"
	}
  }, {
	"id": 5,
	"date_invite": "2019-10-07 22:51:30 UTC",
	"date_accepted": "2019-10-29 22:51:30 UTC",
	"date_lockedTill": "2020-10-29 22:51:30 UTC",
	"date_removed": "2020-05-11 22:51:30 UTC",
	"status": "locked",
	"user": {
	  "name": "Hallie Gath",
	  "id": "7124182260",
	  "email": "hgath4@shop-pro.jp"
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "0577188003"
	},
	"group": {
	  "id": "1814409180",
	  "name": "default"
	}
  }, {
	"id": 6,
	"date_invite": "2019-09-09 17:50:09 UTC",
	"date_accepted": "2019-10-04 17:50:09 UTC",
	"date_lockedTill": "2020-10-04 17:50:09 UTC",
	"date_removed": "2019-11-15 17:50:09 UTC",
	"status": "empty",
	"user": {
	  "name": null,
	  "id": null,
	  "email": null
	},
	"bundle": {
	  "id": "000000000-p",
	  "name": "Acred360"
	},
	"contract": {
	  "id": "2465546338"
	},
	"group": {
	  "id": "7700962619",
	  "name": "hospitals_midwest"
	}
  }, {
	"id": 7,
	"date_invite": "2019-07-18 00:35:07 UTC",
	"date_accepted": "2019-08-01 00:35:07 UTC",
	"date_lockedTill": "2020-08-01 00:35:07 UTC",
	"date_removed": "2019-09-19 00:35:07 UTC",
	"status": "locked",
	"user": {
	  "name": "Arthur Bolus",
	  "id": "1397704671",
	  "email": "abolus6@soup.io"
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "3263736476"
	},
	"group": {
	  "id": "1003225300",
	  "name": "hospital_southern"
	}
  }, {
	"id": 8,
	"date_invite": "2019-03-04 19:28:26 UTC",
	"date_accepted": "2019-03-19 19:28:26 UTC",
	"date_lockedTill": "2020-03-19 19:28:26 UTC",
	"date_removed": "2019-05-10 19:28:26 UTC",
	"status": "requested",
	"user": {
	  "name": "Allyn Densham",
	  "id": "3397177348",
	  "email": "adensham7@google.com.hk"
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "3034792246"
	},
	"group": {
	  "id": "8889440293",
	  "name": "hospitals_westcoast"
	}
  }, {
	"id": 9,
	"date_invite": "2019-06-16 01:51:15 UTC",
	"date_accepted": "2019-07-06 01:51:15 UTC",
	"date_lockedTill": "2020-07-06 01:51:15 UTC",
	"date_removed": "2019-10-30 01:51:15 UTC",
	"status": "locked",
	"user": {
	  "name": "Terrye Agget",
	  "id": "8934932224",
	  "email": "tagget8@liveinternet.ru"
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "1287851188"
	},
	"group": {
	  "id": "5795144038",
	  "name": "hospitals_midwest"
	}
  }, {
	"id": 10,
	"date_invite": null,
	"date_accepted": null,
	"date_lockedTill": null,
	"date_removed": null,
	"status": "empty",
	"user": {
	  "name": null,
	  "id": null,
	  "email": null
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "6687078070"
	},
	"group": {
	  "id": "6540955468",
	  "name": "hospitals_westcoast"
	}
  }, {
	"id": 11,
	"date_invite": null,
	"date_accepted": null,
	"date_lockedTill": null,
	"date_removed": null,
	"status": "empty",
	"user": {
	  "name": null,
	  "id": null,
	  "email": null
	},
	"bundle": {
	  "id": "000000000-p",
	  "name": "Acred360"
	},
	"contract": {
	  "id": "8538666078"
	},
	"group": {
	  "id": "9366144682",
	  "name": "hospital_southern"
	}
  }, {
	"id": 12,
	"date_invite": null,
	"date_accepted": null,
	"date_lockedTill": null,
	"date_removed": null,
	"status": "empty",
	"user": {
	  "name": null,
	  "id": null,
	  "email": null
	},
	"bundle": {
	  "id": "3333333333-p",
	  "name": "OmegaSap"
	},
	"contract": {
	  "id": "1280230434"
	},
	"group": {
	  "id": "5066312279",
	  "name": "hospitals_westcoast"
	}
  }, {
	"id": 13,
	"date_invite": null,
	"date_accepted": null,
	"date_lockedTill": null,
	"date_removed": null,
	"status": "empty",
	"user": {
	  "name": null,
	  "id": null,
	  "email": null
	},
	"bundle": {
	  "id": "3333333333-p",
	  "name": "OmegaSap"
	},
	"contract": {
	  "id": "9888856219"
	},
	"group": {
	  "id": "3973864036",
	  "name": "hospitals_midwest"
	}
  }, {
	"id": 14,
	"date_invite": null,
	"date_accepted": null,
	"date_lockedTill": null,
	"date_removed": null,
	"status": "empty",
	"user": {
	  "name": null,
	  "id": null,
	  "email": null
	},
	"bundle": {
	  "id": "000000000-p",
	  "name": "Acred360"
	},
	"contract": {
	  "id": "6947457444"
	},
	"group": {
	  "id": "7381003945",
	  "name": "hospital_southern"
	}
  }, {
	"id": 15,
	"date_invite": "2019-05-17 20:08:22 UTC",
	"date_accepted": "2019-06-07 20:08:22 UTC",
	"date_lockedTill": "2020-06-07 20:08:22 UTC",
	"date_removed": "2019-12-24 20:08:22 UTC",
	"status": "requested",
	"user": {
	  "name": "Rudolph Cardero",
	  "id": "2879147810",
	  "email": "rcarderoe@wired.com"
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "4036226286"
	},
	"group": {
	  "id": "9512399201",
	  "name": "hospitals_westcoast"
	}
  }, {
	"id": 16,
	"date_invite": null,
	"date_accepted": null,
	"date_lockedTill": null,
	"date_removed": null,
	"status": "empty",
	"user": {
	  "name": null,
	  "id": null,
	  "email": null
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "7125551047"
	},
	"group": {
	  "id": "5418213365",
	  "name": "default"
	}
  }, {
	"id": 17,
	"date_invite": "2019-02-11 11:43:05 UTC",
	"date_accepted": "2019-03-12 11:43:05 UTC",
	"date_lockedTill": "2020-03-12 11:43:05 UTC",
	"date_removed": "2019-07-19 11:43:05 UTC",
	"status": "locked",
	"user": {
	  "name": "Damien Finneran",
	  "id": "6648566034",
	  "email": "dfinnerang@hugedomains.com"
	},
	"bundle": {
	  "id": "2222222222-p",
	  "name": "HeartSymphony"
	},
	"contract": {
	  "id": "4753511134"
	},
	"group": {
	  "id": "1804755744",
	  "name": "hospitals_midwest"
	}
  }, {
	"id": 18,
	"date_invite": "2018-12-05 17:45:15 UTC",
	"date_accepted": "2018-12-15 17:45:15 UTC",
	"date_lockedTill": "2019-12-15 17:45:15 UTC",
	"date_removed": "2019-04-14 17:45:15 UTC",
	"status": "locked",
	"user": {
	  "name": "Nonah Peplaw",
	  "id": "8065213823",
	  "email": "npeplawh@sphinn.com"
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "9056165440"
	},
	"group": {
	  "id": "4703789118",
	  "name": "hospitals_westcoast"
	}
  }, {
	"id": 19,
	"date_invite": "2018-11-20 18:26:55 UTC",
	"date_accepted": "2018-11-23 18:26:55 UTC",
	"date_lockedTill": "2019-11-23 18:26:55 UTC",
	"date_removed": "2019-01-14 18:26:55 UTC",
	"status": "filled",
	"user": {
	  "name": "Trixy Neame",
	  "id": "8477958902",
	  "email": "tneamei@rakuten.co.jp"
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "8325391486"
	},
	"group": {
	  "id": "3854739628",
	  "name": "default"
	}
  }, {
	"id": 20,
	"date_invite": null,
	"date_accepted": null,
	"date_lockedTill": null,
	"date_removed": null,
	"status": "empty",
	"user": {
	  "name": null,
	  "id": null,
	  "email": null
	},
	"bundle": {
	  "id": "1111111111-p",
	  "name": "Cardio+"
	},
	"contract": {
	  "id": "2599632641"
	},
	"group": {
	  "id": "6815602348",
	  "name": "hospitals_midwest"
	}
  }];
  export const UserData =  [{
    "id": 1,
    "type": {
      "admin": true,
      "groupadmin": true,
      "user": true
    },
    "date_invite": "2019-04-02 07:39:02 UTC",
    "date_accepted": "2019-04-16 07:39:02 UTC",
    "date_lockedTill": "2020-04-16 07:39:02 UTC",
    "status": "requested",
    "user": {
      "name": "Amberly Caughan",
      "id": "7381515380",
      "email": "acaughan0@typepad.com"
    },
    "bundles": [
      {
        "id": "2222222222-p",
        "name": "HeartSymphony"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      }
    ],
    "contract": {
      "id": "6383113660"
    },
    "groups": [
      {
        "id": "5382028388",
        "name": "hospital_eastcoast",
        "admin": null
      },
      {
        "id": "7692010501",
        "name": "hospitals_westcoast",
        "admin": null
      }
    ]
  }, {
    "id": 2,
    "type": {
      "admin": true,
      "groupadmin": true,
      "user": true
    },
    "date_invite": "2019-07-13 22:17:58 UTC",
    "status": "locked",
    "user": {
      "name": "Wilmar Lilburn",
      "id": "5482303888",
      "email": "wlilburn1@time.com"
    },
    "contract": {
      "id": "8332324393"
    }
  }, {
    "id": 3,
    "type": {
      "admin": false,
      "groupadmin": true,
      "user": true
    },
    "date_invite": "2019-01-29 20:53:54 UTC",
    "date_accepted": "2019-01-30 20:53:54 UTC",
    "date_lockedTill": "2020-01-30 20:53:54 UTC",
    "status": "locked",
    "user": {
      "name": "Arie Cadle",
      "id": "8490659630",
      "email": "acadle2@weather.com"
    },
    "bundles": [
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      },
      {
        "id": "000000000-p",
        "name": "Acred360"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      },
      {
        "id": "000000000-p",
        "name": "Acred360"
      }
    ],
    "contract": {
      "id": "2825098321"
    },
    "groups": [
      {
        "id": "4426022145",
        "name": "hospital_eastcoast",
        "admin": null
      },
      {
        "id": "7124718356",
        "name": "hospital_southern",
        "admin": true
      },
      {
        "id": "5656136474",
        "name": "hospital_eastcoast",
        "admin": null
      }
    ]
  }, {
    "id": 4,
    "type": {
      "admin": true,
      "groupadmin": true,
      "user": false
    },
    "date_invite": "2019-09-25 17:39:40 UTC",
    "status": "filled",
    "user": {
      "name": "Huntley Kynton",
      "id": "6513977476",
      "email": "hkynton3@gov.uk"
    },
    "contract": {
      "id": "1019173403"
    }
  }, {
    "id": 5,
    "type": {
      "admin": false,
      "groupadmin": false,
      "user": false
    },
    "date_invite": "2019-09-16 22:02:52 UTC",
    "date_accepted": "2019-10-01 22:02:52 UTC",
    "date_lockedTill": "2020-10-01 22:02:52 UTC",
    "status": "filled",
    "user": {
      "name": "Jonah Gladbeck",
      "id": "4051915861",
      "email": "jgladbeck4@booking.com"
    },
    "bundles": [
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      },
      {
        "id": "000000000-p",
        "name": "Acred360"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      },
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      }
    ],
    "contract": {
      "id": "3463891656"
    },
    "groups": [
      {
        "id": "9974345748",
        "name": "hospitals_westcoast",
        "admin": null
      },
      {
        "id": "0455718607",
        "name": "hospital_southern",
        "admin": null
      },
      {
        "id": "7195033449",
        "name": "hospital_southern",
        "admin": null
      }
    ]
  }, {
    "id": 6,
    "type": {
      "admin": false,
      "groupadmin": true,
      "user": true
    },
    "date_invite": "2019-06-22 08:19:58 UTC",
    "date_accepted": "2019-07-11 08:19:58 UTC",
    "date_lockedTill": "2020-07-11 08:19:58 UTC",
    "status": "locked",
    "user": {
      "name": "Marlyn Coupe",
      "id": "5754656208",
      "email": "mcoupe5@netlog.com"
    },
    "bundles": [
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      },
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      },
      {
        "id": "000000000-p",
        "name": "Acred360"
      },
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      }
    ],
    "contract": {
      "id": "3594291783"
    },
    "groups": [
      {
        "id": "9097123777",
        "name": "hospital_eastcoast",
        "admin": null
      },
      {
        "id": "5445483241",
        "name": "hospitals_westcoast",
        "admin": null
      },
      {
        "id": "9737383326",
        "name": "default",
        "admin": null
      }
    ]
  }, {
    "id": 7,
    "type": {
      "admin": true,
      "groupadmin": true,
      "user": false
    },
    "date_invite": "2019-01-06 18:15:24 UTC",
    "status": "locked",
    "user": {
      "name": "Lucius Peasegood",
      "id": "8529257458",
      "email": "lpeasegood6@globo.com"
    },
    "contract": {
      "id": "7692961080"
    }
  }, {
    "id": 8,
    "type": {
      "admin": false,
      "groupadmin": true,
      "user": true
    },
    "date_invite": "2018-11-21 22:00:13 UTC",
    "date_accepted": "2018-12-05 22:00:13 UTC",
    "date_lockedTill": "2019-12-05 22:00:13 UTC",
    "status": "filled",
    "user": {
      "name": "Hendrick Lope",
      "id": "8758983196",
      "email": "hlope7@amazon.com"
    },
    "bundles": [
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      },
      {
        "id": "000000000-p",
        "name": "Acred360"
      }
    ],
    "contract": {
      "id": "8179671752"
    },
    "groups": [
      {
        "id": "0818422871",
        "name": "hospitals_midwest",
        "admin": null
      }
    ]
  }, {
    "id": 9,
    "type": {
      "admin": false,
      "groupadmin": true,
      "user": true
    },
    "date_invite": "2019-02-27 16:20:42 UTC",
    "status": "locked",
    "user": {
      "name": "Sara-ann Ivashkov",
      "id": "1325816440",
      "email": "sivashkov8@webeden.co.uk"
    },
    "contract": {
      "id": "9980147691"
    }
  }, {
    "id": 10,
    "type": {
      "admin": true,
      "groupadmin": true,
      "user": true
    },
    "date_invite": "2019-07-31 15:36:24 UTC",
    "status": "requested",
    "user": {
      "name": "Bendix Molyneux",
      "id": "2006482269",
      "email": "bmolyneux9@amazon.com"
    },
    "contract": {
      "id": "0128625487"
    }
  }, {
    "id": 11,
    "type": {
      "admin": true,
      "groupadmin": true,
      "user": false
    },
    "date_invite": "2019-09-30 18:49:59 UTC",
    "date_accepted": "2019-10-25 18:49:59 UTC",
    "date_removed": "2020-02-29 18:49:59 UTC",
    "date_lockedTill": "2020-10-25 18:49:59 UTC",
    "status": "requested",
    "user": {
      "name": "Jandy Cardenoso",
      "id": "5730802927",
      "email": "jcardenosoa@miibeian.gov.cn"
    },
    "bundles": [
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      }
    ],
    "contract": {
      "id": "0538046550"
    },
    "groups": [
      {
        "id": "7864476904",
        "name": "hospital_eastcoast",
        "admin": true
      },
      {
        "id": "8476498137",
        "name": "hospitals_westcoast",
        "admin": null
      },
      {
        "id": "6936364086",
        "name": "hospitals_westcoast",
        "admin": null
      }
    ]
  }, {
    "id": 12,
    "type": {
      "admin": false,
      "groupadmin": true,
      "user": true
    },
    "date_invite": "2019-08-11 05:40:08 UTC",
    "status": "locked",
    "user": {
      "name": "Harry Cretney",
      "id": "4573362746",
      "email": "hcretneyb@bigcartel.com"
    },
    "contract": {
      "id": "7483777173"
    }
  }, {
    "id": 13,
    "type": {
      "admin": false,
      "groupadmin": false,
      "user": true
    },
    "date_invite": "2018-11-06 02:51:52 UTC",
    "date_accepted": "2018-12-05 02:51:52 UTC",
    "date_lockedTill": "2019-12-05 02:51:52 UTC",
    "status": "requested",
    "user": {
      "name": "Melita Putland",
      "id": "8340063279",
      "email": "mputlandc@google.co.jp"
    },
    "bundles": [
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      }
    ],
    "contract": {
      "id": "3899797184"
    },
    "groups": [
      {
        "id": "5822990084",
        "name": "hospitals_midwest",
        "admin": null
      }
    ]
  }, {
    "id": 14,
    "type": {
      "admin": false,
      "groupadmin": false,
      "user": true
    },
    "date_invite": "2019-09-03 08:49:59 UTC",
    "date_accepted": "2019-09-06 08:49:59 UTC",
    "date_lockedTill": "2020-09-06 08:49:59 UTC",
    "status": "filled",
    "user": {
      "name": "Bertina Mordy",
      "id": "2467318093",
      "email": "bmordyd@vk.com"
    },
    "contract": {
      "id": "9065688468"
    },
    "groups": [
      {
        "id": "5403554913",
        "name": "hospital_eastcoast",
        "admin": true
      },
      {
        "id": "5568087723",
        "name": "hospital_eastcoast",
        "admin": null
      },
      {
        "id": "7988252219",
        "name": "default",
        "admin": null
      }
    ]
  }, {
    "id": 15,
    "type": {
      "admin": false,
      "groupadmin": false,
      "user": false
    },
    "date_invite": "2019-07-05 03:05:55 UTC",
    "date_accepted": "2019-07-26 03:05:55 UTC",
    "date_lockedTill": "2020-07-26 03:05:55 UTC",
    "status": "locked",
    "user": {
      "name": "Lisetta Doy",
      "id": "1111210167",
      "email": "ldoye@shinystat.com"
    },
    "bundles": [
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      }
    ],
    "contract": {
      "id": "3824616228"
    },
    "groups": [
      {
        "id": "3371431515",
        "name": "hospital_southern",
        "admin": null
      },
      {
        "id": "8717431640",
        "name": "default",
        "admin": true
      },
      {
        "id": "7883593573",
        "name": "hospitals_westcoast",
        "admin": null
      }
    ]
  }, {
    "id": 16,
    "type": {
      "admin": false,
      "groupadmin": true,
      "user": false
    },
    "date_invite": "2019-09-21 00:11:09 UTC",
    "date_accepted": "2019-10-06 00:11:09 UTC",
    "date_lockedTill": "2020-10-06 00:11:09 UTC",
    "status": "locked",
    "user": {
      "name": "Shirlee Wicklen",
      "id": "0893573170",
      "email": "swicklenf@disqus.com"
    },
    "bundles": [
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      },
      {
        "id": "000000000-p",
        "name": "Acred360"
      }
    ],
    "contract": {
      "id": "1558417446"
    },
    "groups": [
      {
        "id": "3179537185",
        "name": "hospital_southern",
        "admin": null
      }
    ]
  }, {
    "id": 17,
    "type": {
      "admin": false,
      "groupadmin": false,
      "user": true
    },
    "date_invite": "2019-01-26 17:05:32 UTC",
    "date_accepted": "2019-02-15 17:05:32 UTC",
    "date_lockedTill": "2020-02-15 17:05:32 UTC",
    "status": "locked",
    "user": {
      "name": "Justis Retchless",
      "id": "9055597630",
      "email": "jretchlessg@psu.edu"
    },
    "bundles": [
      {
        "id": "2222222222-p",
        "name": "HeartSymphony"
      },
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      }
    ],
    "contract": {
      "id": "1974575276"
    },
    "groups": [
      {
        "id": "1616332610",
        "name": "hospitals_midwest",
        "admin": null
      },
      {
        "id": "5414706340",
        "name": "hospitals_westcoast",
        "admin": null
      }
    ]
  }, {
    "id": 18,
    "type": {
      "admin": true,
      "groupadmin": false,
      "user": true
    },
    "date_invite": "2019-09-17 21:04:19 UTC",
    "date_accepted": "2019-10-15 21:04:19 UTC",
    "date_lockedTill": "2020-10-15 21:04:19 UTC",
    "status": "locked",
    "user": {
      "name": "Aloise Money",
      "id": "1452353138",
      "email": "amoneyh@ihg.com"
    },
    "bundles": [
      {
        "id": "2222222222-p",
        "name": "HeartSymphony"
      },
      {
        "id": "000000000-p",
        "name": "Acred360"
      },
      {
        "id": "3333333333-p",
        "name": "OmegaSap"
      },
      {
        "id": "000000000-p",
        "name": "Acred360"
      },
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      }
    ],
    "contract": {
      "id": "8763970653"
    },
    "groups": [
      {
        "id": "2590099390",
        "name": "hospitals_midwest",
        "admin": null
      },
      {
        "id": "5632838956",
        "name": "hospital_southern",
        "admin": null
      }
    ]
  }, {
    "id": 19,
    "type": {
      "admin": true,
      "groupadmin": false,
      "user": false
    },
    "date_invite": "2019-08-05 03:58:36 UTC",
    "date_accepted": "2019-08-09 03:58:36 UTC",
    "date_lockedTill": "2020-08-09 03:58:36 UTC",
    "status": "locked",
    "user": {
      "name": "Bendite Eyrl",
      "id": "8348222665",
      "email": "beyrli@irs.gov"
    },
    "bundles": [
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      },
      {
        "id": "000000000-p",
        "name": "Acred360"
      }
    ],
    "contract": {
      "id": "3712403390"
    },
    "groups": [
      {
        "id": "0972633833",
        "name": "hospital_eastcoast",
        "admin": null
      },
      {
        "id": "4815653586",
        "name": "hospital_eastcoast",
        "admin": null
      }
    ]
  }, {
    "id": 20,
    "type": {
      "admin": true,
      "groupadmin": false,
      "user": true
    },
    "date_invite": "2019-03-25 11:28:29 UTC",
    "date_accepted": "2019-04-21 11:28:29 UTC",
    "date_lockedTill": "2020-04-21 11:28:29 UTC",
    "status": "filled",
    "user": {
      "name": "Tymon Ashbe",
      "id": "5129482133",
      "email": "tashbej@samsung.com"
    },
    "bundles": [
      {
        "id": "1111111111-p",
        "name": "Cardio+"
      }
    ],
    "contract": {
      "id": "8833284479"
    },
    "groups": [
      {
        "id": "7051466634",
        "name": "hospitals_midwest",
        "admin": null
      },
      {
        "id": "7129562418",
        "name": "hospitals_midwest",
        "admin": null
      }
    ]
  },{
	"id": 11,
	"type": {
	  "user": true
	},
	"date_invite": "2019-10-02 04:09:56 UTC",
	"date_accepted": "2019-10-15 04:09:56 UTC",
	"date_lockedTill": "2020-10-15 04:09:56 UTC",
	"status": "locked",
	"user": {
	  "name": "Rivi Steabler",
	  "id": "0414714888",
	  "email": "rsteabler0@typepad.com"
	},
	"bundles": [
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  }
	],
	"contract": {
	  "id": "7687933033"
	},
	"groups": [
	  {
		"id": "1304177505",
		"name": "hospital_eastcoast",
		"admin": null
	  },
	  {
		"id": "0502652313",
		"name": "hospitals_westcoast",
		"admin": null
	  },
	  {
		"id": "3001811107",
		"name": "hospitals_westcoast",
		"admin": null
	  }
	]
  }, {
	"id": 12,
	"type": {
	  "user": true
	},
	"date_invite": "2018-12-05 16:25:20 UTC",
	"date_accepted": "2018-12-07 16:25:20 UTC",
	"date_lockedTill": "2019-12-07 16:25:20 UTC",
	"status": "filled",
	"user": {
	  "name": "Dulce Varey",
	  "id": "1055452579",
	  "email": "dvarey1@dot.gov"
	},
	"contract": {
	  "id": "5746937949"
	},
	"groups": [
	  {
		"id": "1871158212",
		"name": "default",
		"admin": null
	  },
	  {
		"id": "1988986523",
		"name": "hospitals_midwest",
		"admin": null
	  },
	  {
		"id": "2787703816",
		"name": "default",
		"admin": null
	  }
	]
  }, {
	"id": 13,
	"type": {
	  "user": true
	},
	"date_invite": "2019-02-23 16:39:57 UTC",
	"date_accepted": "2019-03-07 16:39:57 UTC",
	"date_lockedTill": "2020-03-07 16:39:57 UTC",
	"status": "filled",
	"user": {
	  "name": "Chiarra Gonnely",
	  "id": "9278309427",
	  "email": "cgonnely2@washington.edu"
	},
	"bundles": [
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  },
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  },
	  {
		"id": "2222222222-p",
		"name": "HeartSymphony"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  }
	],
	"contract": {
	  "id": "8560314052"
	},
	"groups": [
	  {
		"id": "5097168419",
		"name": "hospitals_midwest",
		"admin": null
	  },
	  {
		"id": "0380806861",
		"name": "hospitals_westcoast",
		"admin": null
	  },
	  {
		"id": "5367709626",
		"name": "hospital_southern",
		"admin": null
	  }
	]
  }, {
	"id": 14,
	"type": {
	  "user": true
	},
	"date_invite": "2019-01-28 14:26:48 UTC",
	"date_accepted": "2019-02-15 14:26:48 UTC",
	"date_lockedTill": "2020-02-15 14:26:48 UTC",
	"status": "filled",
	"user": {
	  "name": "Sonya Doerrling",
	  "id": "0319767330",
	  "email": "sdoerrling3@shop-pro.jp"
	},
	"bundles": [
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  }
	],
	"contract": {
	  "id": "4847702350"
	},
	"groups": [
	  {
		"id": "8750508113",
		"name": "hospitals_westcoast",
		"admin": null
	  },
	  {
		"id": "1844127586",
		"name": "hospitals_midwest",
		"admin": null
	  },
	  {
		"id": "9672255843",
		"name": "default",
		"admin": true
	  }
	]
  }, {
	"id": 15,
	"type": {
	  "user": true
	},
	"date_invite": "2019-10-16 06:29:35 UTC",
	"date_accepted": "2019-11-07 06:29:35 UTC",
	"date_lockedTill": "2020-11-07 06:29:35 UTC",
	"status": "locked",
	"user": {
	  "name": "Jonas Vesque",
	  "id": "9874333603",
	  "email": "jvesque4@live.com"
	},
	"contract": {
	  "id": "3373631600"
	},
	"groups": [
	  {
		"id": "7840641214",
		"name": "default",
		"admin": null
	  }
	]
  }, {
	"id": 16,
	"type": {
	  "user": true
	},
	"date_invite": "2019-04-22 03:11:44 UTC",
	"date_accepted": "2019-05-06 03:11:44 UTC",
	"date_lockedTill": "2020-05-06 03:11:44 UTC",
	"status": "locked",
	"user": {
	  "name": "Salomo Churm",
	  "id": "4959022306",
	  "email": "schurm5@google.co.jp"
	},
	"bundles": [
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  }
	],
	"contract": {
	  "id": "2058868392"
	},
	"groups": [
	  {
		"id": "1026013310",
		"name": "hospital_southern",
		"admin": null
	  },
	  {
		"id": "9185528445",
		"name": "hospitals_westcoast",
		"admin": null
	  },
	  {
		"id": "7207114508",
		"name": "hospital_eastcoast",
		"admin": null
	  }
	]
  }, {
	"id": 17,
	"type": {
	  "user": true
	},
	"date_invite": "2018-11-30 01:56:38 UTC",
	"date_accepted": "2018-12-11 01:56:38 UTC",
	"date_lockedTill": "2019-12-11 01:56:38 UTC",
	"status": "filled",
	"user": {
	  "name": "Sal Strasse",
	  "id": "2613942968",
	  "email": "sstrasse6@clickbank.net"
	},
	"bundles": [
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  },
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  }
	],
	"contract": {
	  "id": "7253620764"
	},
	"groups": [
	  {
		"id": "6728228380",
		"name": "hospitals_westcoast",
		"admin": null
	  },
	  {
		"id": "1926716303",
		"name": "hospital_southern",
		"admin": null
	  }
	]
  }, {
	"id": 18,
	"type": {
	  "user": true
	},
	"date_invite": "2018-12-24 01:06:31 UTC",
	"date_accepted": "2018-12-29 01:06:31 UTC",
	"date_lockedTill": "2019-12-29 01:06:31 UTC",
	"status": "requested",
	"user": {
	  "name": "Tim Egdal",
	  "id": "8648642539",
	  "email": "tegdal7@eventbrite.com"
	},
	"bundles": [
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  },
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  }
	],
	"contract": {
	  "id": "2588547521"
	},
	"groups": [
	  {
		"id": "9344793942",
		"name": "hospitals_midwest",
		"admin": null
	  },
	  {
		"id": "8530159091",
		"name": "default",
		"admin": null
	  }
	]
  }, {
	"id": 19,
	"type": {
	  "user": true
	},
	"date_invite": "2019-03-24 10:19:00 UTC",
	"date_accepted": "2019-04-23 10:19:00 UTC",
	"date_lockedTill": "2020-04-23 10:19:00 UTC",
	"status": "filled",
	"user": {
	  "name": "Lonnie Pavel",
	  "id": "0283201076",
	  "email": "lpavel8@bloglovin.com"
	},
	"bundles": [
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  },
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  }
	],
	"contract": {
	  "id": "7370756900"
	},
	"groups": [
	  {
		"id": "1913810249",
		"name": "default",
		"admin": true
	  },
	  {
		"id": "5298557198",
		"name": "hospitals_midwest",
		"admin": null
	  }
	]
  }, {
	"id": 20,
	"type": {
	  "user": true
	},
	"date_invite": "2019-07-10 17:58:26 UTC",
	"date_accepted": "2019-07-25 17:58:26 UTC",
	"date_lockedTill": "2020-07-25 17:58:26 UTC",
	"status": "requested",
	"user": {
	  "name": "Queenie Culmer",
	  "id": "9630357265",
	  "email": "qculmer9@google.de"
	},
	"bundles": [
	  {
		"id": "2222222222-p",
		"name": "HeartSymphony"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  }
	],
	"contract": {
	  "id": "0625031256"
	},
	"groups": [
	  {
		"id": "4557537357",
		"name": "default",
		"admin": null
	  },
	  {
		"id": "0967847256",
		"name": "default",
		"admin": null
	  },
	  {
		"id": "3268788349",
		"name": "hospitals_midwest",
		"admin": true
	  }
	]
  }, {
	"id": 21,
	"type": {
	  "user": true
	},
	"date_invite": "2018-10-19 21:19:44 UTC",
	"date_accepted": "2018-11-09 21:19:44 UTC",
	"date_lockedTill": "2019-11-09 21:19:44 UTC",
	"status": "filled",
	"user": {
	  "name": "Cindelyn Cursons",
	  "id": "5962468588",
	  "email": "ccursonsa@unesco.org"
	},
	"bundles": [
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  }
	],
	"contract": {
	  "id": "3638540190"
	},
	"groups": [
	  {
		"id": "3432836950",
		"name": "hospitals_westcoast",
		"admin": null
	  },
	  {
		"id": "2086855794",
		"name": "hospital_eastcoast",
		"admin": null
	  },
	  {
		"id": "9883900482",
		"name": "default",
		"admin": null
	  }
	]
  }, {
	"id": 22,
	"type": {
	  "user": true
	},
	"date_invite": "2019-05-31 09:32:41 UTC",
	"date_accepted": "2019-06-24 09:32:41 UTC",
	"date_lockedTill": "2020-06-24 09:32:41 UTC",
	"status": "requested",
	"user": {
	  "name": "Hyatt Derbyshire",
	  "id": "7761333941",
	  "email": "hderbyshireb@answers.com"
	},
	"bundles": [
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  },
	  {
		"id": "2222222222-p",
		"name": "HeartSymphony"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  }
	],
	"contract": {
	  "id": "5280103798"
	},
	"groups": [
	  {
		"id": "8943496898",
		"name": "hospital_southern",
		"admin": null
	  },
	  {
		"id": "3671271977",
		"name": "hospitals_midwest",
		"admin": true
	  }
	]
  }, {
	"id": 23,
	"type": {
	  "user": true
	},
	"date_invite": "2019-05-31 02:01:34 UTC",
	"date_accepted": "2019-06-27 02:01:34 UTC",
	"date_lockedTill": "2020-06-27 02:01:34 UTC",
	"status": "requested",
	"user": {
	  "name": "Jere Aveling",
	  "id": "3542199978",
	  "email": "javelingc@is.gd"
	},
	"bundles": [
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  }
	],
	"contract": {
	  "id": "3969603832"
	},
	"groups": [
	  {
		"id": "5700758244",
		"name": "hospitals_midwest",
		"admin": null
	  }
	]
  }, {
	"id": 24,
	"type": {
	  "admin": false,
	  "groupadmin": false,
	  "user": true
	},
	"date_invite": "2019-08-20 02:11:50 UTC",
	"date_accepted": "2019-09-18 02:11:50 UTC",
	"date_removed": "2020-03-21 02:11:50 UTC",
	"date_lockedTill": "2020-09-18 02:11:50 UTC",
	"status": "requested",
	"user": {
	  "name": "Hobart Scamal",
	  "id": "8745966678",
	  "email": "hscamald@bloglovin.com"
	},
	"bundles": [
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  }
	],
	"contract": {
	  "id": "5236205559"
	},
	"groups": [
	  {
		"id": "3103961553",
		"name": "hospitals_westcoast",
		"admin": null
	  },
	  {
		"id": "3881853211",
		"name": "hospital_eastcoast",
		"admin": null
	  }
	]
  }, {
	"id": 25,
	"type": {
	  "user": true
	},
	"date_invite": "2019-06-15 13:35:23 UTC",
	"date_accepted": "2019-07-15 13:35:23 UTC",
	"date_lockedTill": "2020-07-15 13:35:23 UTC",
	"status": "requested",
	"user": {
	  "name": "Tera Grahlman",
	  "id": "5021644756",
	  "email": "tgrahlmane@pagesperso-orange.fr"
	},
	"bundles": [
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  }
	],
	"contract": {
	  "id": "0870806814"
	},
	"groups": [
	  {
		"id": "5584260691",
		"name": "hospitals_midwest",
		"admin": null
	  },
	  {
		"id": "4790412450",
		"name": "hospitals_midwest",
		"admin": null
	  },
	  {
		"id": "4813304796",
		"name": "hospital_southern",
		"admin": null
	  }
	]
  }, {
	"id": 26,
	"type": {
	  "user": true
	},
	"date_invite": "2019-04-12 20:50:25 UTC",
	"date_accepted": "2019-04-28 20:50:25 UTC",
	"date_lockedTill": "2020-04-28 20:50:25 UTC",
	"status": "requested",
	"user": {
	  "name": "Gregoire Ritmeyer",
	  "id": "5302343227",
	  "email": "gritmeyerf@privacy.gov.au"
	},
	"bundles": [
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "2222222222-p",
		"name": "HeartSymphony"
	  },
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  }
	],
	"contract": {
	  "id": "3582822611"
	},
	"groups": [
	  {
		"id": "5669510675",
		"name": "default",
		"admin": true
	  },
	  {
		"id": "1134191899",
		"name": "default",
		"admin": null
	  }
	]
  }, {
	"id": 27,
	"type": {
	  "user": true
	},
	"date_invite": "2019-02-26 04:36:29 UTC",
	"date_accepted": "2019-03-26 04:36:29 UTC",
	"date_lockedTill": "2020-03-26 04:36:29 UTC",
	"status": "filled",
	"user": {
	  "name": "Adelice Antczak",
	  "id": "2086792885",
	  "email": "aantczakg@smh.com.au"
	},
	"bundles": [
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  }
	],
	"contract": {
	  "id": "3409198663"
	},
	"groups": [
	  {
		"id": "2644899545",
		"name": "hospitals_midwest",
		"admin": null
	  },
	  {
		"id": "2291558880",
		"name": "hospital_southern",
		"admin": null
	  },
	  {
		"id": "0016884313",
		"name": "hospital_southern",
		"admin": null
	  }
	]
  }, {
	"id": 28,
	"type": {
	  "admin": true,
	  "groupadmin": false,
	  "user": true
	},
	"date_invite": "2019-03-29 17:57:48 UTC",
	"date_accepted": "2019-04-01 17:57:48 UTC",
	"date_removed": "2019-07-31 17:57:48 UTC",
	"date_lockedTill": "2020-04-01 17:57:48 UTC",
	"status": "filled",
	"user": {
	  "name": "Barnaby Crookes",
	  "id": "7015060690",
	  "email": "bcrookesh@multiply.com"
	},
	"bundles": [
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "1111111111-p",
		"name": "Cardio+"
	  },
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  },
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  }
	],
	"contract": {
	  "id": "0824492046"
	},
	"groups": [
	  {
		"id": "3206452380",
		"name": "hospitals_westcoast",
		"admin": null
	  },
	  {
		"id": "3913461360",
		"name": "default",
		"admin": null
	  },
	  {
		"id": "7191632879",
		"name": "hospitals_midwest",
		"admin": null
	  }
	]
  }, {
	"id": 29,
	"type": {
	  "user": true
	},
	"date_invite": "2018-11-02 13:58:18 UTC",
	"date_accepted": "2018-11-10 13:58:18 UTC",
	"date_lockedTill": "2019-11-10 13:58:18 UTC",
	"status": "requested",
	"user": {
	  "name": "Tabitha Birdall",
	  "id": "9571713729",
	  "email": "tbirdalli@oracle.com"
	},
	"bundles": [
	  {
		"id": "2222222222-p",
		"name": "HeartSymphony"
	  },
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  }
	],
	"contract": {
	  "id": "1853475345"
	},
	"groups": [
	  {
		"id": "6259680897",
		"name": "default",
		"admin": null
	  },
	  {
		"id": "2048144965",
		"name": "hospital_southern",
		"admin": null
	  }
	]
  }, {
	"id": 30,
	"type": {
	  "user": true
	},
	"date_invite": "2019-07-08 05:23:03 UTC",
	"date_accepted": "2019-07-20 05:23:03 UTC",
	"date_lockedTill": "2020-07-20 05:23:03 UTC",
	"status": "requested",
	"user": {
	  "name": "Abie Wakefield",
	  "id": "8009879658",
	  "email": "awakefieldj@hexun.com"
	},
	"bundles": [
	  {
		"id": "000000000-p",
		"name": "Acred360"
	  },
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  },
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  },
	  {
		"id": "3333333333-p",
		"name": "OmegaSap"
	  }
	],
	"contract": {
	  "id": "7788175052"
	},
	"groups": [
	  {
		"id": "8508385296",
		"name": "hospital_southern",
		"admin": null
	  },
	  {
		"id": "2642120628",
		"name": "hospital_eastcoast",
		"admin": null
	  }
	]
  }];