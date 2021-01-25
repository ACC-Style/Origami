import { action } from "@storybook/addon-actions";

import UsersList from "../../src/components/SeatManagement/Containers/Seat.Users.vue";
import SingleUser from "../../src/components/SeatManagement/Containers/User/Seat.SingleUser.Overview.vue";
import SingleUserLoading from "../../src/components/SeatManagement/Containers/User/Seat.SingleUser.Loading.vue";


export default {
	title: "SeatManagement/Containers/Users",
	component: { UsersList ,SingleUser, SingleUserLoading},
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		 
	},
	excludeStories: ["UserData", "methods"]
};



  export const UserFilled = () => {
	return {
		components:{SingleUser},
		template: `<SingleUser v-bind="user"/>`,
	  data() {
		  return {
			  user:UserData[2],
		  }
	  },
	};
};
export const UserEmpty = () => {
	return {
		components:{SingleUser},
		template: `<SingleUser v-bind="user"/>`,
	  data() {
		  return {
			  user:UserData[0],
		  }
	  },
	};
};
export const UserRemoved = () => {
	return {
		components:{SingleUser},
		template: `<SingleUser v-bind="user"/>`,
	  data() {
		  return {
			  user:UserData[9],
		  }
	  },
	};
};
export const UserRequested = () => {
	return {
		components:{SingleUser},
		template: `<SingleUser v-bind="user"/>`,
	  data() {
		  return {
			  user:UserData[1],
		  }
	  },
	};
};

export const List = () => {
	return {
		components:{UsersList},
		template: `<UsersList :users="users"/>`,
	  data() {
		  return {
			  users:UserData,
		  }
	  },
	};
};
export const ListLoading = () => {
	return {
		components:{UsersList},
		template: `<UsersList :users="users"/>`,
	  data() {
		  return {
			  users:null,
		  }
	  },
	};
};
export const ListEmpty = () => {
	return {
		components:{UsersList},
		template: `<UsersList :users="users"/>`,
	  data() {
		  return {
			  users:[],
		  }
	  },
	};
};

export const methods = {};
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
  }];