import { action } from "@storybook/addon-actions";

export default {
	title: "SeatManagement/Reports",
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		info: true
	},
    excludeStories: ["consumptionData", "methods", "seatAllocationData"]
};
export const methods = {};
export const consumptionData = [
	{
		result_id: 1,
		product_id: "65801254836",
		user_id: "00068286953",
		date_started: "2019-02-16 21:46:44 UTC",
		date_completed: "2019-07-16 21:46:44 UTC",
		date_claimed: null,
		hours_spent: 35.6,
		credits_earned: 0,
		product: {
			name: "Product_1",
			parent_bundle: "OmegaSap"
		},
		institution: {
			name: "Fiveclub",
			id: "0008871388-i",
			purchaser: {
				name: "Dominique Florez",
				id: "0006160009",
				email: "tcardinale0@cpanel.net"
			}
		},
		group: {
			name: "hospitals_westcoast",
			id: "001420"
		},
		user: {
			name: "Thatch Cardinale",
			id: "00068286953",
			email: "tcardinale0@ihg.com"
		}
	},
	{
		result_id: 2,
		product_id: "65801254836",
		user_id: "00089203767",
		date_started: "2019-01-29 08:28:37 UTC",
		date_completed: "2019-08-29 08:28:37 UTC",
		date_claimed: "2019-09-13 08:28:37 UTC",
		hours_spent: 48.7,
		credits_earned: 0,
		product: {
			name: "Product_3",
			parent_bundle: "Cardio+"
		},
		institution: {
			name: "Twimbo",
			id: "0001693795-i",
			purchaser: {
				name: "Lottie Petrovsky",
				id: "0007682370",
				email: "bguyer1@yolasite.com"
			}
		},
		group: {
			name: "hospital_eastcoast",
			id: "015348"
		},
		user: {
			name: "Bibi Guyer",
			id: "00089203767",
			email: "bguyer1@deliciousdays.com"
		}
	},
	{
		result_id: 3,
		product_id: "65801254836",
		user_id: "00073158663",
		date_started: "2019-02-17 05:35:46 UTC",
		date_completed: "2019-09-17 05:35:46 UTC",
		date_claimed: "2019-10-02 05:35:46 UTC",
		hours_spent: 30.3,
		credits_earned: 2,
		product: {
			name: "Product_2",
			parent_bundle: "HeartSymphony"
		},
		institution: {
			name: "Wordtune",
			id: "0006468187-i",
			purchaser: {
				name: "Sharyl Tolerton",
				id: "0001206727",
				email: "cbooley2@wikipedia.org"
			}
		},
		group: {
			name: "default",
			id: "001420"
		},
		user: {
			name: "Carley Booley",
			id: "00073158663",
			email: "cbooley2@biglobe.ne.jp"
		}
	},
	{
		result_id: 4,
		product_id: "65801254836",
		user_id: "00024579232",
		date_started: "2018-12-04 12:39:39 UTC",
		date_completed: "2019-02-04 12:39:39 UTC",
		date_claimed: null,
		hours_spent: 50.9,
		credits_earned: 2,
		product: {
			name: "Product_2",
			parent_bundle: "Cardio+"
		},
		institution: {
			name: "BlogXS",
			id: "0009384571-i",
			purchaser: {
				name: "Ruthie Jane",
				id: "0004704529",
				email: "yavarne3@sphinn.com"
			}
		},
		group: {
			name: "default",
			id: "001420"
		},
		user: {
			name: "Yard Avarne",
			id: "00024579232",
			email: "yavarne3@hexun.com"
		}
	},
	{
		result_id: 5,
		product_id: "65801254836",
		user_id: "00051856818",
		date_started: "2019-10-13 21:14:26 UTC",
		date_completed: "2020-05-13 21:14:26 UTC",
		date_claimed: "2020-05-28 21:14:26 UTC",
		hours_spent: 54.8,
		credits_earned: 4,
		product: {
			name: "Product_3",
			parent_bundle: "Cardio+"
		},
		institution: {
			name: "Edgepulse",
			id: "0004220476-i",
			purchaser: {
				name: "Shanon Borell",
				id: "0000000484",
				email: "rparriss4@sfgate.com"
			}
		},
		group: {
			name: "hospital_southern",
			id: "001420"
		},
		user: {
			name: "Revkah Parriss",
			id: "00051856818",
			email: "rparriss4@dropbox.com"
		}
	},
	{
		result_id: 6,
		product_id: "65801254836",
		user_id: "00027134261",
		date_started: "2019-02-20 14:38:30 UTC",
		date_completed: "2019-03-20 14:38:30 UTC",
		date_claimed: "2019-04-04 14:38:30 UTC",
		hours_spent: 30.4,
		credits_earned: 4,
		product: {
			name: "Product_1",
			parent_bundle: "HeartSymphony"
		},
		institution: {
			name: "Edgeblab",
			id: "0003128207-i",
			purchaser: {
				name: "Catarina Heel",
				id: "0001255966",
				email: "gridolfo5@lycos.com"
			}
		},
		group: {
			name: "hospital_eastcoast",
			id: "015348"
		},
		user: {
			name: "Goddart Ridolfo",
			id: "00027134261",
			email: "gridolfo5@springer.com"
		}
	},
	{
		result_id: 7,
		product_id: "65801254836",
		user_id: "00010225127",
		date_started: "2019-04-24 06:48:38 UTC",
		date_completed: "2019-07-24 06:48:38 UTC",
		date_claimed: null,
		hours_spent: 19.7,
		credits_earned: 3,
		product: {
			name: "Product_3",
			parent_bundle: "Cardio+"
		},
		institution: {
			name: "Wikido",
			id: "0007672061-i",
			purchaser: {
				name: "Neel Greenfield",
				id: "0006692345",
				email: "rstaveley6@ted.com"
			}
		},
		group: {
			name: "default",
			id: "001420"
		},
		user: {
			name: "Roxanne Staveley",
			id: "00010225127",
			email: "rstaveley6@foxnews.com"
		}
	},
	{
		result_id: 8,
		product_id: "65801254836",
		user_id: "00029842890",
		date_started: "2019-05-09 11:26:36 UTC",
		date_completed: "2019-07-09 11:26:36 UTC",
		date_claimed: null,
		hours_spent: 80.3,
		credits_earned: 2,
		product: {
			name: "Product_3",
			parent_bundle: "Cardio+"
		},
		institution: {
			name: "Pixope",
			id: "0007993454-i",
			purchaser: {
				name: "Gisella Duchesne",
				id: "0005970896",
				email: "cmeineken7@bing.com"
			}
		},
		group: {
			name: "hospital_eastcoast",
			id: "015348"
		},
		user: {
			name: "Chelsea Meineken",
			id: "00029842890",
			email: "cmeineken7@google.de"
		}
	},
	{
		result_id: 9,
		product_id: "65801254836",
		user_id: "00061337363",
		date_started: "2019-03-02 19:07:18 UTC",
		date_completed: "2019-08-02 19:07:18 UTC",
		date_claimed: null,
		hours_spent: 52.0,
		credits_earned: 5,
		product: {
			name: "Product_2",
			parent_bundle: "Acred360"
		},
		institution: {
			name: "Ainyx",
			id: "0000383398-i",
			purchaser: {
				name: "Filbert Minocchi",
				id: "0006548371",
				email: "syukhin8@unblog.fr"
			}
		},
		group: {
			name: "default",
			id: "001420"
		},
		user: {
			name: "Shelba Yukhin",
			id: "00061337363",
			email: "syukhin8@gizmodo.com"
		}
	},
	{
		result_id: 10,
		product_id: "65801254836",
		user_id: "00026625939",
		date_started: "2019-04-05 18:01:50 UTC",
		date_completed: "2019-05-05 18:01:50 UTC",
		date_claimed: null,
		hours_spent: 26.3,
		credits_earned: 6,
		product: {
			name: "Product_1",
			parent_bundle: "HeartSymphony"
		},
		institution: {
			name: "Riffpath",
			id: "0009120874-i",
			purchaser: {
				name: "Franny Jakoub",
				id: "0009811135",
				email: "asmalecombe9@nifty.com"
			}
		},
		group: {
			name: "hospitals_midwest",
			id: "001420"
		},
		user: {
			name: "Agnes Smalecombe",
			id: "00026625939",
			email: "asmalecombe9@artisteer.com"
		}
	}
];
export const seatAllocationData = [{
    "seat_number": 1,
    "seat_status": "unused",
    "invite_date": "2019-07-23 14:06:42 UTC",
    "acceptance_date": "2019-07-31 14:06:42 UTC",
    "lock_date": "2020-07-31 14:06:42 UTC",
    "user": [

    ],
    "bundle": {
        "id": "7949729070",
        "name": "Acred360"
    },
    "contract": {
        "id": "8631952993"
    },
    "group": {
        "id": "0208076109",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 2,
    "seat_status": "unused",
    "invite_date": "2019-05-01 05:01:42 UTC",
    "acceptance_date": "2019-05-29 05:01:42 UTC",
    "lock_date": "2020-05-29 05:01:42 UTC",
    "user": [
        {
            "name": "Miltie Paull",
            "id": "2360817256",
            "email": "mpaull0@geocities.jp"
        }
    ],
    "bundle": {
        "id": "1112918685",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "4034388405"
    },
    "group": {
        "id": "4154497339",
        "name": "default"
    }
}, {
    "seat_number": 3,
    "seat_status": "filled",
    "invite_date": "2019-04-04 00:10:37 UTC",
    "acceptance_date": "2019-04-15 00:10:37 UTC",
    "lock_date": "2020-04-15 00:10:37 UTC",
    "user": [

    ],
    "bundle": {
        "id": "6372755902",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "8178440141"
    },
    "group": {
        "id": "0319002553",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 4,
    "seat_status": "empty",
    "invite_date": "2019-02-22 06:15:12 UTC",
    "acceptance_date": "2019-03-19 06:15:12 UTC",
    "lock_date": "2020-03-19 06:15:12 UTC",
    "user": [

    ],
    "bundle": {
        "id": "0537522326",
        "name": "HeartSymphony"
    },
    "contract": {
        "id": "8582720592"
    },
    "group": {
        "id": "1877196098",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 5,
    "seat_status": "unused",
    "invite_date": "2019-08-08 20:39:49 UTC",
    "acceptance_date": "2019-08-30 20:39:49 UTC",
    "lock_date": "2020-08-30 20:39:49 UTC",
    "user": [
        {
            "name": "Rainer Liston",
            "id": "3989514385",
            "email": "rliston0@patch.com"
        }
    ],
    "bundle": {
        "id": "4880590213",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "3498660870"
    },
    "group": {
        "id": "4591145932",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 6,
    "seat_status": "unused",
    "invite_date": "2018-11-15 13:29:00 UTC",
    "acceptance_date": "2018-12-11 13:29:00 UTC",
    "lock_date": "2019-12-11 13:29:00 UTC",
    "user": null,
    "bundle": {
        "id": "9521706127",
        "name": "Acred360"
    },
    "contract": {
        "id": "3371302303"
    },
    "group": {
        "id": "8187846218",
        "name": "hospital_eastcoast"
    }
}, {
    "seat_number": 7,
    "seat_status": "empty",
    "invite_date": "2018-11-22 16:09:56 UTC",
    "acceptance_date": "2018-12-21 16:09:56 UTC",
    "lock_date": "2019-12-21 16:09:56 UTC",
    "user": [

    ],
    "bundle": {
        "id": "3686341273",
        "name": "Cardio+"
    },
    "contract": {
        "id": "6866462484"
    },
    "group": {
        "id": "9999956469",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 8,
    "seat_status": "empty",
    "invite_date": "2019-07-01 08:25:07 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "5971595237",
        "name": "Acred360"
    },
    "contract": {
        "id": "3933512175"
    },
    "group": {
        "id": "8636687971",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 9,
    "seat_status": "filled",
    "invite_date": "2019-08-20 03:42:17 UTC",
    "acceptance_date": "2019-08-23 03:42:17 UTC",
    "lock_date": "2020-08-23 03:42:17 UTC",
    "user": [

    ],
    "bundle": {
        "id": "4550516968",
        "name": "Acred360"
    },
    "contract": {
        "id": "3585793146"
    },
    "group": {
        "id": "8926207674",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 10,
    "seat_status": "unused",
    "invite_date": "2019-06-19 10:46:42 UTC",
    "acceptance_date": "2019-06-23 10:46:42 UTC",
    "lock_date": "2020-06-23 10:46:42 UTC",
    "user": [

    ],
    "bundle": {
        "id": "7000450535",
        "name": "Acred360"
    },
    "contract": {
        "id": "7114020111"
    },
    "group": {
        "id": "2689980406",
        "name": "default"
    }
}, {
    "seat_number": 11,
    "seat_status": "filled",
    "invite_date": "2018-11-03 20:11:28 UTC",
    "acceptance_date": "2018-11-30 20:11:28 UTC",
    "lock_date": "2019-11-30 20:11:28 UTC",
    "user": [

    ],
    "bundle": {
        "id": "0737838235",
        "name": "Acred360"
    },
    "contract": {
        "id": "8675520535"
    },
    "group": {
        "id": "0609937183",
        "name": "hospitals_midwest"
    }
}, {
    "seat_number": 12,
    "seat_status": "unused",
    "invite_date": "2019-06-22 10:16:10 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "4502345539",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "7120345319"
    },
    "group": {
        "id": "9556276694",
        "name": "hospital_eastcoast"
    }
}, {
    "seat_number": 13,
    "seat_status": "filled",
    "invite_date": "2019-09-16 00:04:03 UTC",
    "acceptance_date": "2019-10-07 00:04:03 UTC",
    "lock_date": "2020-10-07 00:04:03 UTC",
    "user": null,
    "bundle": {
        "id": "7255974535",
        "name": "HeartSymphony"
    },
    "contract": {
        "id": "3553798892"
    },
    "group": {
        "id": "4973061044",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 14,
    "seat_status": "empty",
    "invite_date": "2019-06-19 05:51:20 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "7321237677",
        "name": "Cardio+"
    },
    "contract": {
        "id": "4161566294"
    },
    "group": {
        "id": "2953826524",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 15,
    "seat_status": "filled",
    "invite_date": "2019-10-12 03:20:57 UTC",
    "acceptance_date": "2019-11-11 03:20:57 UTC",
    "lock_date": "2020-11-11 03:20:57 UTC",
    "user": [
        {
            "name": "Horton Palek",
            "id": "6328652084",
            "email": "hpalek0@japanpost.jp"
        }
    ],
    "bundle": {
        "id": "9585000835",
        "name": "Acred360"
    },
    "contract": {
        "id": "2386666720"
    },
    "group": {
        "id": "8162901100",
        "name": "hospitals_midwest"
    }
}, {
    "seat_number": 16,
    "seat_status": "requested",
    "invite_date": "2019-07-23 13:31:03 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "1904721742",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "0607258489"
    },
    "group": {
        "id": "1862728659",
        "name": "default"
    }
}, {
    "seat_number": 17,
    "seat_status": "empty",
    "invite_date": "2019-09-02 05:36:12 UTC",
    "acceptance_date": "2019-09-19 05:36:12 UTC",
    "lock_date": "2020-09-19 05:36:12 UTC",
    "user": [
        {
            "name": "Casey Everex",
            "id": "0641418580",
            "email": "ceverex0@economist.com"
        }
    ],
    "bundle": {
        "id": "7076507558",
        "name": "Cardio+"
    },
    "contract": {
        "id": "7520934417"
    },
    "group": {
        "id": "0950698928",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 18,
    "seat_status": "requested",
    "invite_date": "2018-11-28 10:31:56 UTC",
    "acceptance_date": "2018-12-26 10:31:56 UTC",
    "lock_date": "2019-12-26 10:31:56 UTC",
    "user": [
        {
            "name": "Egor Moreing",
            "id": "3692408139",
            "email": "emoreing0@g.co"
        }
    ],
    "bundle": {
        "id": "3008366631",
        "name": "Cardio+"
    },
    "contract": {
        "id": "1120555017"
    },
    "group": {
        "id": "9587923414",
        "name": "hospitals_midwest"
    }
}, {
    "seat_number": 19,
    "seat_status": "empty",
    "invite_date": "2019-08-28 06:43:26 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "1094736657",
        "name": "Acred360"
    },
    "contract": {
        "id": "3175475636"
    },
    "group": {
        "id": "1025216406",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 20,
    "seat_status": "filled",
    "invite_date": "2019-07-28 04:10:38 UTC",
    "acceptance_date": "2019-08-11 04:10:38 UTC",
    "lock_date": "2020-08-11 04:10:38 UTC",
    "user": [
        {
            "name": "Baxy Tissell",
            "id": "0545371774",
            "email": "btissell0@unicef.org"
        }
    ],
    "bundle": {
        "id": "7594771119",
        "name": "Acred360"
    },
    "contract": {
        "id": "2615545760"
    },
    "group": {
        "id": "5197590203",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 21,
    "seat_status": "requested",
    "invite_date": "2019-09-10 05:55:12 UTC",
    "acceptance_date": "2019-09-13 05:55:12 UTC",
    "lock_date": "2020-09-13 05:55:12 UTC",
    "user": [

    ],
    "bundle": {
        "id": "7542051242",
        "name": "Cardio+"
    },
    "contract": {
        "id": "5853919822"
    },
    "group": {
        "id": "8144847893",
        "name": "hospital_eastcoast"
    }
}, {
    "seat_number": 22,
    "seat_status": "requested",
    "invite_date": "2019-07-28 08:56:57 UTC",
    "acceptance_date": "2019-08-23 08:56:57 UTC",
    "lock_date": "2020-08-23 08:56:57 UTC",
    "user": [
        {
            "name": "Klara Coller",
            "id": "8478797376",
            "email": "kcoller0@skyrock.com"
        }
    ],
    "bundle": {
        "id": "0752212015",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "1929915219"
    },
    "group": {
        "id": "5008668851",
        "name": "hospitals_midwest"
    }
}, {
    "seat_number": 23,
    "seat_status": "requested",
    "invite_date": "2019-05-26 16:49:58 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "1330203816",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "4518722276"
    },
    "group": {
        "id": "9612771799",
        "name": "hospital_eastcoast"
    }
}, {
    "seat_number": 24,
    "seat_status": "unused",
    "invite_date": "2019-05-23 12:27:32 UTC",
    "acceptance_date": "2019-05-24 12:27:32 UTC",
    "lock_date": "2020-05-24 12:27:32 UTC",
    "user": [

    ],
    "bundle": {
        "id": "8562200056",
        "name": "Cardio+"
    },
    "contract": {
        "id": "0327679335"
    },
    "group": {
        "id": "3005296950",
        "name": "hospital_eastcoast"
    }
}, {
    "seat_number": 25,
    "seat_status": "empty",
    "invite_date": "2018-10-31 20:25:24 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "8247334996",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "9480339822"
    },
    "group": {
        "id": "2946903126",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 26,
    "seat_status": "empty",
    "invite_date": "2019-01-07 21:02:08 UTC",
    "acceptance_date": "2019-01-18 21:02:08 UTC",
    "lock_date": "2020-01-18 21:02:08 UTC",
    "user": [
        {
            "name": "Elvis Domenico",
            "id": "2521424727",
            "email": "edomenico0@sfgate.com"
        }
    ],
    "bundle": {
        "id": "2886194054",
        "name": "HeartSymphony"
    },
    "contract": {
        "id": "7714968050"
    },
    "group": {
        "id": "1764782157",
        "name": "hospitals_midwest"
    }
}, {
    "seat_number": 27,
    "seat_status": "empty",
    "invite_date": "2019-09-01 20:28:33 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "2115459372",
        "name": "Acred360"
    },
    "contract": {
        "id": "8734079684"
    },
    "group": {
        "id": "0793338728",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 28,
    "seat_status": "empty",
    "invite_date": "2019-09-02 03:22:23 UTC",
    "acceptance_date": "2019-09-19 03:22:23 UTC",
    "lock_date": "2020-09-19 03:22:23 UTC",
    "user": [
        {
            "name": "Bethany Tolhurst",
            "id": "6757348813",
            "email": "btolhurst0@ted.com"
        }
    ],
    "bundle": {
        "id": "3028383165",
        "name": "Cardio+"
    },
    "contract": {
        "id": "8386380986"
    },
    "group": {
        "id": "0677050597",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 29,
    "seat_status": "filled",
    "invite_date": "2018-11-28 19:52:30 UTC",
    "acceptance_date": "2018-12-24 19:52:30 UTC",
    "lock_date": "2019-12-24 19:52:30 UTC",
    "user": [
        {
            "name": "Janet Paolozzi",
            "id": "6181711036",
            "email": "jpaolozzi0@wordpress.org"
        }
    ],
    "bundle": {
        "id": "1946710738",
        "name": "Cardio+"
    },
    "contract": {
        "id": "9918773604"
    },
    "group": {
        "id": "3998421161",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 30,
    "seat_status": "filled",
    "invite_date": "2018-10-26 12:09:47 UTC",
    "acceptance_date": "2018-11-18 12:09:47 UTC",
    "lock_date": "2019-11-18 12:09:47 UTC",
    "user": null,
    "bundle": {
        "id": "5704975216",
        "name": "Cardio+"
    },
    "contract": {
        "id": "6677691325"
    },
    "group": {
        "id": "2270916718",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 31,
    "seat_status": "requested",
    "invite_date": "2018-10-21 02:26:28 UTC",
    "acceptance_date": "2018-11-03 02:26:28 UTC",
    "lock_date": "2019-11-03 02:26:28 UTC",
    "user": null,
    "bundle": {
        "id": "7776921410",
        "name": "Cardio+"
    },
    "contract": {
        "id": "3907465962"
    },
    "group": {
        "id": "3926615326",
        "name": "default"
    }
}, {
    "seat_number": 32,
    "seat_status": "requested",
    "invite_date": "2019-10-12 17:09:12 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "8770409697",
        "name": "HeartSymphony"
    },
    "contract": {
        "id": "6336318694"
    },
    "group": {
        "id": "6388478876",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 33,
    "seat_status": "unused",
    "invite_date": "2018-12-31 20:28:25 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "4865314919",
        "name": "Acred360"
    },
    "contract": {
        "id": "8090394504"
    },
    "group": {
        "id": "5086262821",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 34,
    "seat_status": "requested",
    "invite_date": "2019-07-05 20:50:37 UTC",
    "acceptance_date": "2019-07-08 20:50:37 UTC",
    "lock_date": "2020-07-08 20:50:37 UTC",
    "user": null,
    "bundle": {
        "id": "1509463978",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "6734006025"
    },
    "group": {
        "id": "6607447555",
        "name": "hospital_eastcoast"
    }
}, {
    "seat_number": 35,
    "seat_status": "filled",
    "invite_date": "2018-11-11 22:32:22 UTC",
    "acceptance_date": "2018-11-21 22:32:22 UTC",
    "lock_date": "2019-11-21 22:32:22 UTC",
    "user": null,
    "bundle": {
        "id": "4092995739",
        "name": "Acred360"
    },
    "contract": {
        "id": "1151410688"
    },
    "group": {
        "id": "6119754116",
        "name": "hospital_eastcoast"
    }
}, {
    "seat_number": 36,
    "seat_status": "unused",
    "invite_date": "2019-03-07 05:43:30 UTC",
    "acceptance_date": "2019-03-30 05:43:30 UTC",
    "lock_date": "2020-03-30 05:43:30 UTC",
    "user": [

    ],
    "bundle": {
        "id": "6633783714",
        "name": "HeartSymphony"
    },
    "contract": {
        "id": "7377018797"
    },
    "group": {
        "id": "5208180089",
        "name": "default"
    }
}, {
    "seat_number": 37,
    "seat_status": "requested",
    "invite_date": "2019-08-06 22:16:16 UTC",
    "acceptance_date": "2019-08-30 22:16:16 UTC",
    "lock_date": "2020-08-30 22:16:16 UTC",
    "user": [
        {
            "name": "Jordain Soltan",
            "id": "9563469561",
            "email": "jsoltan0@people.com.cn"
        }
    ],
    "bundle": {
        "id": "5200514942",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "8520741382"
    },
    "group": {
        "id": "4066210941",
        "name": "hospitals_midwest"
    }
}, {
    "seat_number": 38,
    "seat_status": "requested",
    "invite_date": "2019-03-31 11:14:17 UTC",
    "acceptance_date": "2019-04-29 11:14:17 UTC",
    "lock_date": "2020-04-29 11:14:17 UTC",
    "user": [
        {
            "name": "Darby Nollet",
            "id": "6313271527",
            "email": "dnollet0@jigsy.com"
        }
    ],
    "bundle": {
        "id": "6755625146",
        "name": "HeartSymphony"
    },
    "contract": {
        "id": "2394845503"
    },
    "group": {
        "id": "0087774625",
        "name": "hospital_eastcoast"
    }
}, {
    "seat_number": 39,
    "seat_status": "requested",
    "invite_date": "2019-09-26 13:02:51 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "4467145196",
        "name": "Acred360"
    },
    "contract": {
        "id": "8533145406"
    },
    "group": {
        "id": "3704009285",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 40,
    "seat_status": "requested",
    "invite_date": "2019-04-07 10:28:13 UTC",
    "acceptance_date": "2019-05-02 10:28:13 UTC",
    "lock_date": "2020-05-02 10:28:13 UTC",
    "user": [

    ],
    "bundle": {
        "id": "1111789791",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "0121373694"
    },
    "group": {
        "id": "0295418639",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 41,
    "seat_status": "filled",
    "invite_date": "2019-05-11 02:47:53 UTC",
    "acceptance_date": "2019-06-09 02:47:53 UTC",
    "lock_date": "2020-06-09 02:47:53 UTC",
    "user": [
        {
            "name": "Cullie Tyson",
            "id": "9636886774",
            "email": "ctyson0@ycombinator.com"
        }
    ],
    "bundle": {
        "id": "9596762201",
        "name": "Acred360"
    },
    "contract": {
        "id": "9647900524"
    },
    "group": {
        "id": "2427527559",
        "name": "hospital_eastcoast"
    }
}, {
    "seat_number": 42,
    "seat_status": "empty",
    "invite_date": "2019-06-19 18:41:06 UTC",
    "acceptance_date": "2019-07-14 18:41:06 UTC",
    "lock_date": "2020-07-14 18:41:06 UTC",
    "user": [
        {
            "name": "Ilysa Breche",
            "id": "7563606153",
            "email": "ibreche0@domainmarket.com"
        }
    ],
    "bundle": {
        "id": "7524742034",
        "name": "Acred360"
    },
    "contract": {
        "id": "3831571313"
    },
    "group": {
        "id": "5797733466",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 43,
    "seat_status": "requested",
    "invite_date": "2018-12-12 16:58:42 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "5370091420",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "5629182542"
    },
    "group": {
        "id": "1386419465",
        "name": "hospitals_midwest"
    }
}, {
    "seat_number": 44,
    "seat_status": "empty",
    "invite_date": "2019-07-29 11:42:31 UTC",
    "acceptance_date": "2019-08-24 11:42:31 UTC",
    "lock_date": "2020-08-24 11:42:31 UTC",
    "user": [
        {
            "name": "Valli Coytes",
            "id": "5828004156",
            "email": "vcoytes0@ihg.com"
        }
    ],
    "bundle": {
        "id": "3828262093",
        "name": "HeartSymphony"
    },
    "contract": {
        "id": "6744190211"
    },
    "group": {
        "id": "0408962164",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 45,
    "seat_status": "filled",
    "invite_date": "2019-02-15 02:15:02 UTC",
    "acceptance_date": null,
    "lock_date": null,
    "user": null,
    "bundle": {
        "id": "7513159694",
        "name": "Cardio+"
    },
    "contract": {
        "id": "3220243010"
    },
    "group": {
        "id": "9243630466",
        "name": "hospital_southern"
    }
}, {
    "seat_number": 46,
    "seat_status": "unused",
    "invite_date": "2019-10-15 03:03:30 UTC",
    "acceptance_date": "2019-10-25 03:03:30 UTC",
    "lock_date": "2020-10-25 03:03:30 UTC",
    "user": [

    ],
    "bundle": {
        "id": "2792607014",
        "name": "Cardio+"
    },
    "contract": {
        "id": "1698590997"
    },
    "group": {
        "id": "1323264319",
        "name": "default"
    }
}, {
    "seat_number": 47,
    "seat_status": "unused",
    "invite_date": "2019-02-01 20:17:32 UTC",
    "acceptance_date": "2019-02-11 20:17:32 UTC",
    "lock_date": "2020-02-11 20:17:32 UTC",
    "user": [
        {
            "name": "Suzanna Gatch",
            "id": "4253438275",
            "email": "sgatch0@pcworld.com"
        }
    ],
    "bundle": {
        "id": "1590863014",
        "name": "HeartSymphony"
    },
    "contract": {
        "id": "4059141675"
    },
    "group": {
        "id": "2444103878",
        "name": "hospitals_midwest"
    }
}, {
    "seat_number": 48,
    "seat_status": "empty",
    "invite_date": "2019-02-03 11:15:35 UTC",
    "acceptance_date": "2019-02-04 11:15:35 UTC",
    "lock_date": "2020-02-04 11:15:35 UTC",
    "user": [
        {
            "name": "Yardley Grishkov",
            "id": "9543477759",
            "email": "ygrishkov0@cyberchimps.com"
        }
    ],
    "bundle": {
        "id": "9734371811",
        "name": "Acred360"
    },
    "contract": {
        "id": "1247692450"
    },
    "group": {
        "id": "7285891448",
        "name": "hospitals_westcoast"
    }
}, {
    "seat_number": 49,
    "seat_status": "requested",
    "invite_date": "2018-12-24 18:02:58 UTC",
    "acceptance_date": "2019-01-02 18:02:58 UTC",
    "lock_date": "2020-01-02 18:02:58 UTC",
    "user": [
        {
            "name": "Manda Wisby",
            "id": "9999952805",
            "email": "mwisby0@nba.com"
        }
    ],
    "bundle": {
        "id": "5394092908",
        "name": "HeartSymphony"
    },
    "contract": {
        "id": "0310406110"
    },
    "group": {
        "id": "4923143655",
        "name": "default"
    }
}, {
    "seat_number": 50,
    "seat_status": "filled",
    "invite_date": "2019-06-05 14:25:17 UTC",
    "acceptance_date": "2019-06-21 14:25:17 UTC",
    "lock_date": "2020-06-21 14:25:17 UTC",
    "user": [
        {
            "name": "Debee Dalby",
            "id": "7739483995",
            "email": "ddalby0@virginia.edu"
        }
    ],
    "bundle": {
        "id": "2489435148",
        "name": "OmegaSap"
    },
    "contract": {
        "id": "3032288077"
    },
    "group": {
        "id": "6336062546",
        "name": "hospitals_midwest"
    }
}
];
export const contract = () => {
	return {
		template: `
        <div>
            <h1>Contract Information Report</h1>
            <ul> 
                <li>Institution Names </li>
                <li>Primary Purchaser Name </li>
                <li>Purchaser email  </li>
                <li>Bundle Purchased (Seats) | Bundle Purchased (Seats) – showing all bundles and <li>seats </li>
                <li>Status (active, not paid, completed) </li>
                <li>Purchase Date </li>
                <li>Term of Contract (i.e. 1 year, 2 year, 5 year) </li>
                <li>Expiration Date </li>
                <li>Subscription Payment Date  </li>
                <li>Contractual Dollar Amount </li>
            </ul>
            <ul>
                <li>Remove</li>
            </ul>
        </div>
      `
	};
};

export const hoursContractRaw = () => {
	return {
		template: `
        <div>
            <h1>Hours From Contract</h1>
            <table class="w_100">
            <thead>
                <tr class="text_left">
                    <th class="p_2">User</th>
                    <th class="p_2">Bundle</th>
                    <th class="p_2">Product</th>
                    <th class="p_2">Hours Spent</th>
                    <th class="p_2">Credits Earned</th>
                    <th class="p_2">Date Started</th>
                    <th class="p_2">Date Completed</th>
                    <th class="p_2">Date Claimed</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind="consumptionData" v-for="(data, index) in consumptionData" key="data.result_id">
                    <td class="p_2"><a href="" v-bind:href="data.user.id" class="">{{ data.user.name }}</a><a class="link email block font_n2" :href="'mailto:'+data.user.email">email user</a></td>
                    <td class="p_2">{{data.product.parent_bundle}}</td>
                    <td class="p_2">{{data.product.name}}</td>
                    <td class="p_2">{{data.hours_spent}}</td>
                    <td class="p_2">{{data.credits_earned}}</td>
                    <td class="p_2">{{data.date_started}}</td>
                    <td class="p_2">{{data.date_completed}}</td>
                    <td class="p_2">{{data.date_claimed}}</td>
                </tr>
            </tbody>
        </table>  
    </div>
    `,
		data: () => ({
			consumptionData
		})
	};
};

export const seatBundleRaw = () => {
    return {
        template: `
        <div>
            <h1>Seat Allocattion</h1>
            <table class="w_100 m_5">
    <thead>
        <tr class="text_left">
            <th class="p_2">Seat</th>
            <th class="p_2">Status</th>
            <th class="p2">User</th>
            <th class="p2">Group</th>
            <th class="p_2">Invite Sent</th>
            <th class="p_2">Accpeted On</th>
            <th class="p_2">Seat Locked Till</th>
        </tr>
    </thead>
    <tbody>
        <tr  v-bind="seatAllocationData" v-for="(data, index) in seatAllocationData" :key="'seat_'+ data.seat_number">
            <td class="p_2">{{data.seat_number}}</td>
            <td class="p_2">{{data.seat_status}}</td>
            <td class="p_2">
                <div class="br_" v-for="user in data.user" :key="user.id">
                    {{user.name}} | {{user.email}}
                </div>
            </td>
            <td class="p_2">{{data.group.name}}</td>
            <td class="p_2">{{data.invite_date}}</td>
            <td class="p_2">{{data.acceptance_date}}</td>
            <td class="p_2">{{data.lock_date}}</td>
            <td class="p_2"></td>
        </tr>
    </tbody>
</table>  
    </div>
    `,
        data: () => ({
            seatAllocationData
        })
    };
};
