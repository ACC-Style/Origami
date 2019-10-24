import { action } from "@storybook/addon-actions";

export default {
	title: "SeatManagement/Reports",
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		info: true
	},
	excludeStories: [
		"consumptionData",
		"methods",
		"seatAllocationData",
		"contractData"
	]
};
export const methods = {};
export const consumptionData = [
	{
		result_id: 1,
		topic_id: "65801254836",
		user_id: "00034336598",
		date_started: "2019-09-15 02:42:32 UTC",
		date_completed: "2020-03-15 02:42:32 UTC",
		date_claimed: null,
		hours_spent: 63.5,
		credits_earned: 4,
		topic: {
			name: "EchoSAP TOPIC A",
			parentBundle: {
				id: "1111111111-p",
				name: "Cardio+"
			},
			parentProduct: {
				name: "EchoSAP",
				id: "10000005-p"
			}
		},
		institution: {
			name: "Edgepulse",
			id: "0008096321-i",
			purchaser: {
				name: "Gunner Bandt",
				id: "0008924725",
				email: "cavrahamov0@samsung.com"
			}
		},
		group: {
			name: "hospital_eastcoast",
			id: "015348"
		},
		user: {
			name: "Cindra Avrahamov",
			id: "00034336598",
			email: "cavrahamov0@google.cn"
		}
	},
	{
		result_id: 2,
		topic_id: "65801254836",
		user_id: "00056016139",
		date_started: "2019-03-11 02:29:12 UTC",
		date_completed: "2019-05-11 02:29:12 UTC",
		date_claimed: null,
		hours_spent: 96.5,
		credits_earned: 4,
		topic: {
			name: "EchoSAP TOPIC A",
			parentBundle: {
				id: "1111111111-p",
				name: "Cardio+"
			},
			parentProduct: {
				name: "EchoSAP",
				id: "10000005-p"
			}
		},
		institution: {
			name: "Twiyo",
			id: "0009262302-i",
			purchaser: {
				name: "Natasha Thrustle",
				id: "0001565622",
				email: "aorrum1@state.gov"
			}
		},
		group: {
			name: "hospital_southern",
			id: "001420"
		},
		user: {
			name: "Andrea Orrum",
			id: "00056016139",
			email: "aorrum1@businessweek.com"
		}
	},
	{
		result_id: 3,
		topic_id: "65801254836",
		user_id: "00043121751",
		date_started: "2019-02-08 01:30:40 UTC",
		date_completed: "2019-05-08 01:30:40 UTC",
		date_claimed: "2019-05-23 01:30:40 UTC",
		hours_spent: 79.0,
		credits_earned: 0,
		topic: {
			name: "CathSAP TOPIC 125",
			parentBundle: {
				id: "3333333333-p",
				name: "OmegaSap"
			},
			parentProduct: {
				name: "CathSAP",
				id: "10000000-p"
			}
		},
		institution: {
			name: "Demivee",
			id: "0004982978-i",
			purchaser: {
				name: "Karrah Bale",
				id: "0006307692",
				email: "lhullyer2@paginegialle.it"
			}
		},
		group: {
			name: "hospital_southern",
			id: "001420"
		},
		user: {
			name: "Lita Hullyer",
			id: "00043121751",
			email: "lhullyer2@sbwire.com"
		}
	},
	{
		result_id: 4,
		topic_id: "65801254836",
		user_id: "00099600035",
		date_started: "2018-11-10 11:15:18 UTC",
		date_completed: "2019-04-10 11:15:18 UTC",
		date_claimed: "2019-04-25 11:15:18 UTC",
		hours_spent: 27.2,
		credits_earned: 2,
		topic: {
			name: "CathSAP TOPIC 125",
			parentBundle: {
				id: "1111111111-p",
				name: "Cardio+"
			},
			parentProduct: {
				name: "CATHSAP",
				id: "10000000-p"
			}
		},
		institution: {
			name: "Jaxnation",
			id: "0007050161-i",
			purchaser: {
				name: "Cyb Paulich",
				id: "0005477831",
				email: "amynard3@networkadvertising.org"
			}
		},
		group: {
			name: "hospitals_westcoast",
			id: "001420"
		},
		user: {
			name: "Alexis Mynard",
			id: "00099600035",
			email: "amynard3@tinyurl.com"
		}
	},
	{
		result_id: 5,
		topic_id: "65801254836",
		user_id: "00043268799",
		date_started: "2019-02-20 06:15:17 UTC",
		date_completed: null,
		date_claimed: null,
		hours_spent: 28.5,
		credits_earned: 4,
		topic: {
			name: "ACCSAP TOPIC c",
			parentBundle: {
				id: "1111111111-p",
				name: "Cardio+"
			},
			parentProduct: {
				name: "ACCSAP",
				id: "10000001-p"
			}
		},
		institution: {
			name: "Mydo",
			id: "0003351927-i",
			purchaser: {
				name: "Meggy Hillhouse",
				id: "0009991012",
				email: "fgoodsir4@altervista.org"
			}
		},
		group: {
			name: "hospitals_midwest",
			id: "001420"
		},
		user: {
			name: "Flinn Goodsir",
			id: "00043268799",
			email: "fgoodsir4@free.fr"
		}
	},
	{
		result_id: 6,
		topic_id: "65801254836",
		user_id: "00045774297",
		date_started: "2019-06-04 13:37:14 UTC",
		date_completed: "2019-07-04 13:37:14 UTC",
		date_claimed: "2019-07-19 13:37:14 UTC",
		hours_spent: 88.7,
		credits_earned: 5,
		topic: {
			name: "CathSAP TOPIC 125",
			parentBundle: {
				id: "3333333333-p",
				name: "OmegaSap"
			},
			parentProduct: {
				name: "CathSAP",
				id: "10000000-p"
			}
		},
		institution: {
			name: "Oyoloo",
			id: "0008190793-i",
			purchaser: {
				name: "Moselle Thain",
				id: "0002808768",
				email: "glanfranchi5@cnet.com"
			}
		},
		group: {
			name: "hospitals_westcoast",
			id: "001420"
		},
		user: {
			name: "Genevieve Lanfranchi",
			id: "00045774297",
			email: "glanfranchi5@youku.com"
		}
	},
	{
		result_id: 7,
		topic_id: "65801254836",
		user_id: "00022073022",
		date_started: "2019-03-12 08:36:03 UTC",
		date_completed: "2019-04-12 08:36:03 UTC",
		date_claimed: "2019-04-27 08:36:03 UTC",
		hours_spent: 5.7,
		credits_earned: 4,
		topic: {
			name: "ACCSAP TOPIC b",
			parentBundle: {
				id: "1111111111-p",
				name: "Cardio+"
			},
			parentProduct: {
				name: "ACCSAP",
				id: "10000001-p"
			}
		},
		institution: {
			name: "Twinte",
			id: "0003357165-i",
			purchaser: {
				name: "Howard Wapples",
				id: "0009780945",
				email: "hmasser6@macromedia.com"
			}
		},
		group: {
			name: "hospital_eastcoast",
			id: "015348"
		},
		user: {
			name: "Hammad Masser",
			id: "00022073022",
			email: "hmasser6@si.edu"
		}
	},
	{
		result_id: 8,
		topic_id: "65801254836",
		user_id: "00065208821",
		date_started: "2019-04-26 11:53:38 UTC",
		date_completed: "2019-09-26 11:53:38 UTC",
		date_claimed: null,
		hours_spent: 13.4,
		credits_earned: 2,
		topic: {
			name: "Listen for the Down Beat",
			parentBundle: {
				id: "2222222222-p",
				name: "HeartSymphony"
			},
			parentProduct: {
				name: "HeartMelody",
				id: "20000001-p"
			}
		},
		institution: {
			name: "Riffwire",
			id: "0001245073-i",
			purchaser: {
				name: "Erek Grouen",
				id: "0001891967",
				email: "smatczak7@netvibes.com"
			}
		},
		group: {
			name: "hospital_eastcoast",
			id: "015348"
		},
		user: {
			name: "Storm Matczak",
			id: "00065208821",
			email: "smatczak7@google.pl"
		}
	},
	{
		result_id: 9,
		topic_id: "65801254836",
		user_id: "00009529137",
		date_started: "2019-06-19 19:53:38 UTC",
		date_completed: "2019-09-19 19:53:38 UTC",
		date_claimed: null,
		hours_spent: 50.6,
		credits_earned: 3,
		topic: {
			name: "ACCSAP TOPIC b",
			parentBundle: {
				id: "3333333333-p",
				name: "OmegaSap"
			},
			parentProduct: {
				name: "ACCSAP",
				id: "10000001-p"
			}
		},
		institution: {
			name: "Topicstorm",
			id: "0006869601-i",
			purchaser: {
				name: "Britta Garz",
				id: "0008897561",
				email: "ddurrad8@umn.edu"
			}
		},
		group: {
			name: "hospital_eastcoast",
			id: "015348"
		},
		user: {
			name: "Dorette Durrad",
			id: "00009529137",
			email: "ddurrad8@ustream.tv"
		}
	},
	{
		result_id: 10,
		topic_id: "65801254836",
		user_id: "00059322131",
		date_started: "2018-12-22 16:09:41 UTC",
		date_completed: "2019-04-22 16:09:41 UTC",
		date_claimed: null,
		hours_spent: 17.7,
		credits_earned: 1,
		topic: {
			name: "ACCSAP TOPIC A",
			parentBundle: {
				id: "1111111111-p",
				name: "Cardio+"
			},
			parentProduct: {
				name: "ACCSAP",
				id: "10000001-p"
			}
		},
		institution: {
			name: "Kayveo",
			id: "0009360105-i",
			purchaser: {
				name: "Mariellen Deners",
				id: "0009168057",
				email: "sdrinnan9@loc.gov"
			}
		},
		group: {
			name: "hospital_southern",
			id: "001420"
		},
		user: {
			name: "Sol Drinnan",
			id: "00059322131",
			email: "sdrinnan9@ox.ac.uk"
		}
	}
];
export const contractData = [
	{
		id: "2250944625",
		status: "completed",
		seatTotal: 305,
		term: 4,
		amount: "$14826.08",
		date_paymentDue: "4/22/2020",
		date_lastPayment: "3/16/2019",
		date_expiration: "4/28/2019",
		date_purchase: "5/21/2019",
		institution: {
			name: "Bitchip",
			id: "5561356676",
			purchaser: {
				id: "6128527538",
				name: "Doralin Mogie",
				email: "dmogie0@yahoo.com"
			}
		},
		bundle: [
			{
				id: "7692249246",
				name: "Overhold",
				seats: 38
			},
			{
				id: "7720162536",
				name: "Stringtough",
				seats: 33
			},
			{
				id: "7783565085",
				name: "Quo Lux",
				seats: 77
			}
		]
	},
	{
		id: "1029164601",
		status: "completed",
		seatTotal: 373,
		term: 4,
		amount: "$12541.25",
		date_paymentDue: "11/2/2019",
		date_lastPayment: "12/8/2018",
		date_expiration: "8/16/2019",
		date_purchase: "7/10/2019",
		institution: {
			name: "Job",
			id: "6141166912",
			purchaser: {
				id: "5190483976",
				name: "Margery Thurgood",
				email: "mthurgood1@vistaprint.com"
			}
		},
		bundle: [
			{
				id: "6127784245",
				name: "Asoka",
				seats: 75
			}
		]
	},
	{
		id: "6750230605",
		status: "completed",
		seatTotal: 194,
		term: 5,
		amount: "$16375.73",
		date_paymentDue: "6/12/2020",
		date_lastPayment: "6/24/2019",
		date_expiration: "9/29/2019",
		date_purchase: "7/6/2019",
		institution: {
			name: "Keylex",
			id: "0349375892",
			purchaser: {
				id: "1478704910",
				name: "Corine Cullingworth",
				email: "ccullingworth2@amazon.com"
			}
		},
		bundle: [
			{
				id: "4084755198",
				name: "Y-Solowarm",
				seats: 100
			},
			{
				id: "0579013922",
				name: "Duobam",
				seats: 95
			},
			{
				id: "8848328656",
				name: "Zathin",
				seats: 63
			},
			{
				id: "9597660120",
				name: "Tres-Zap",
				seats: 70
			}
		]
	},
	{
		id: "0316840779",
		status: "completed",
		seatTotal: 77,
		term: 3,
		amount: "$13683.30",
		date_paymentDue: "6/30/2020",
		date_lastPayment: "8/25/2019",
		date_expiration: "3/14/2019",
		date_purchase: "3/24/2019",
		institution: {
			name: "Bigtax",
			id: "2231066551",
			purchaser: {
				id: "0835708409",
				name: "Franny Drillot",
				email: "fdrillot3@smugmug.com"
			}
		},
		bundle: [
			{
				id: "7979561465",
				name: "Home Ing",
				seats: 41
			},
			{
				id: "2905381938",
				name: "Overhold",
				seats: 58
			},
			{
				id: "6039212133",
				name: "Konklab",
				seats: 88
			},
			{
				id: "2278540034",
				name: "Job",
				seats: 38
			}
		]
	},
	{
		id: "8151324442",
		status: "completed",
		seatTotal: 160,
		term: 2,
		amount: "$11976.86",
		date_paymentDue: "2/24/2020",
		date_lastPayment: "12/29/2018",
		date_expiration: "5/18/2019",
		date_purchase: "3/28/2019",
		institution: {
			name: "Andalax",
			id: "5991697915",
			purchaser: {
				id: "5248120675",
				name: "Opal Markie",
				email: "omarkie4@amazon.co.uk"
			}
		},
		bundle: [
			{
				id: "3721088427",
				name: "Ventosanzap",
				seats: 60
			},
			{
				id: "3464059023",
				name: "Zathin",
				seats: 79
			}
		]
	},
	{
		id: "9327930629",
		status: "completed",
		seatTotal: 393,
		term: 4,
		amount: "$16007.43",
		date_paymentDue: "2/14/2020",
		date_lastPayment: "1/23/2019",
		date_expiration: "8/18/2019",
		date_purchase: "12/2/2018",
		institution: {
			name: "Fintone",
			id: "8471460420",
			purchaser: {
				id: "0272932230",
				name: "Ardis Knoller",
				email: "aknoller5@bluehost.com"
			}
		},
		bundle: [
			{
				id: "1055332376",
				name: "Regrant",
				seats: 59
			},
			{
				id: "5506525274",
				name: "Fixflex",
				seats: 66
			},
			{
				id: "3078742770",
				name: "Flowdesk",
				seats: 70
			},
			{
				id: "2548160323",
				name: "Home Ing",
				seats: 10
			},
			{
				id: "8123263581",
				name: "Stim",
				seats: 51
			}
		]
	},
	{
		id: "6384658609",
		status: "completed",
		seatTotal: 265,
		term: 4,
		amount: "$7257.40",
		date_paymentDue: "4/11/2020",
		date_lastPayment: "10/10/2019",
		date_expiration: "12/25/2018",
		date_purchase: "10/22/2019",
		institution: {
			name: "Zathin",
			id: "6899027377",
			purchaser: {
				id: "6911445205",
				name: "Mose Suddell",
				email: "msuddell6@nytimes.com"
			}
		},
		bundle: [
			{
				id: "6100189410",
				name: "Duobam",
				seats: 39
			},
			{
				id: "9172427300",
				name: "Opela",
				seats: 87
			},
			{
				id: "6942228615",
				name: "Voltsillam",
				seats: 46
			},
			{
				id: "2592261294",
				name: "Andalax",
				seats: 24
			},
			{
				id: "2428508153",
				name: "Toughjoyfax",
				seats: 90
			}
		]
	},
	{
		id: "4928251039",
		status: "active",
		seatTotal: 293,
		term: 2,
		amount: "$15867.11",
		date_paymentDue: "12/13/2019",
		date_lastPayment: "9/13/2019",
		date_expiration: "6/8/2019",
		date_purchase: "11/10/2018",
		institution: {
			name: "Domainer",
			id: "8396643066",
			purchaser: {
				id: "5949552924",
				name: "Tally Fritschel",
				email: "tfritschel7@senate.gov"
			}
		},
		bundle: [
			{
				id: "4580913470",
				name: "Ventosanzap",
				seats: 10
			}
		]
	},
	{
		id: "8385720048",
		status: "completed",
		seatTotal: 348,
		term: 4,
		amount: "$7159.85",
		date_paymentDue: "1/15/2020",
		date_lastPayment: "8/2/2019",
		date_expiration: "10/20/2019",
		date_purchase: "11/14/2018",
		institution: {
			name: "Bamity",
			id: "8717826772",
			purchaser: {
				id: "7759825136",
				name: "Gale Gaskin",
				email: "ggaskin8@seattletimes.com"
			}
		},
		bundle: [
			{
				id: "2340779751",
				name: "Zoolab",
				seats: 59
			},
			{
				id: "4378081299",
				name: "It",
				seats: 18
			}
		]
	},
	{
		id: "3576967458",
		status: "active",
		seatTotal: 57,
		term: 2,
		amount: "$6489.80",
		date_paymentDue: "3/19/2020",
		date_lastPayment: "12/2/2018",
		date_expiration: "6/29/2019",
		date_purchase: "7/26/2019",
		institution: {
			name: "Stim",
			id: "8702803986",
			purchaser: {
				id: "6623614188",
				name: "Lexy McLese",
				email: "lmclese9@google.es"
			}
		},
		bundle: [
			{
				id: "6083157738",
				name: "Keylex",
				seats: 76
			},
			{
				id: "5847881434",
				name: "Bytecard",
				seats: 93
			}
		]
	}
];
export const seatAllocationData = [{
  "seat_number": 1,
  "seat_status": "unused",
  "date_invite": "2019-08-28 05:25:19 UTC",
  "date_accepted": "2019-09-22 05:25:19 UTC",
  "date_lockedTill": "2020-09-22 05:25:19 UTC",
  "user": {
    "name": "Andres Thomtson",
    "id": "3671819006",
    "email": "athomtson0@mysql.com"
  },
  "bundle": {
    "id": "4494168137",
    "name": "Acred360"
  },
  "contract": {
    "id": "8565873291"
  },
  "group": {
    "id": "5279033019",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 2,
  "seat_status": "locked",
  "date_invite": "2018-11-26 00:40:14 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "1676266358",
    "name": "Acred360"
  },
  "contract": {
    "id": "9202150578"
  },
  "group": {
    "id": "9771623945",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 3,
  "seat_status": "unused",
  "date_invite": "2019-03-07 09:59:14 UTC",
  "date_accepted": "2019-03-25 09:59:14 UTC",
  "date_lockedTill": "2020-03-25 09:59:14 UTC",
  "user": {
    "name": "Umeko Flucks",
    "id": "6760496938",
    "email": "uflucks2@slideshare.net"
  },
  "bundle": {
    "id": "5365705652",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "3301788338"
  },
  "group": {
    "id": "2986772357",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 4,
  "seat_status": "requested",
  "date_invite": "2019-04-11 03:59:09 UTC",
  "date_accepted": "2019-04-17 03:59:09 UTC",
  "date_lockedTill": "2020-04-17 03:59:09 UTC",
  "user": {
    "name": "Jeannette Sillito",
    "id": "0580956262",
    "email": "jsillito3@skyrock.com"
  },
  "bundle": {
    "id": "9161799194",
    "name": "Cardio+"
  },
  "contract": {
    "id": "8206790849"
  },
  "group": {
    "id": "8557731303",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 5,
  "seat_status": "filled",
  "date_invite": "2019-02-25 13:03:20 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "8339070192",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "3450313887"
  },
  "group": {
    "id": "5653800952",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 6,
  "seat_status": "filled",
  "date_invite": "2019-06-26 14:18:25 UTC",
  "date_accepted": "2019-07-08 14:18:25 UTC",
  "date_lockedTill": "2020-07-08 14:18:25 UTC",
  "user": {
    "name": "Chrysler Osburn",
    "id": "4399690813",
    "email": "cosburn5@forbes.com"
  },
  "bundle": {
    "id": "7103279105",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "7544973524"
  },
  "group": {
    "id": "9735441471",
    "name": "default"
  }
}, {
  "seat_number": 7,
  "seat_status": "requested",
  "date_invite": "2018-10-21 08:59:01 UTC",
  "date_accepted": "2018-11-11 08:59:01 UTC",
  "date_lockedTill": "2019-11-11 08:59:01 UTC",
  "user": {
    "name": "Cherin Wilby",
    "id": "8163170761",
    "email": "cwilby6@unicef.org"
  },
  "bundle": {
    "id": "0691136284",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "6255004395"
  },
  "group": {
    "id": "2086408369",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 8,
  "seat_status": "locked",
  "date_invite": "2019-07-09 20:56:15 UTC",
  "date_accepted": "2019-08-02 20:56:15 UTC",
  "date_lockedTill": "2020-08-02 20:56:15 UTC",
  "user": {
    "name": "Meyer Bollum",
    "id": "6772951686",
    "email": "mbollum7@geocities.jp"
  },
  "bundle": {
    "id": "7568648659",
    "name": "Cardio+"
  },
  "contract": {
    "id": "3793345779"
  },
  "group": {
    "id": "8414461169",
    "name": "default"
  }
}, {
  "seat_number": 9,
  "seat_status": "requested",
  "date_invite": "2019-06-09 14:42:18 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "3794134583",
    "name": "Cardio+"
  },
  "contract": {
    "id": "2904900647"
  },
  "group": {
    "id": "0890786060",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 10,
  "seat_status": "requested",
  "date_invite": "2019-04-14 05:14:05 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "6617482185",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "5798584108"
  },
  "group": {
    "id": "3537924734",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 11,
  "seat_status": "unused",
  "date_invite": "2018-12-20 11:22:00 UTC",
  "date_accepted": "2018-12-25 11:22:00 UTC",
  "date_lockedTill": "2019-12-25 11:22:00 UTC",
  "user": {
    "name": "Harriot Cricket",
    "id": "3807595699",
    "email": "hcricketa@reddit.com"
  },
  "bundle": {
    "id": "9802211993",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "2625052638"
  },
  "group": {
    "id": "7424357823",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 12,
  "seat_status": "requested",
  "date_invite": "2019-01-01 19:22:18 UTC",
  "date_accepted": "2019-01-12 19:22:18 UTC",
  "date_lockedTill": "2020-01-12 19:22:18 UTC",
  "user": {
    "name": null,
    "id": "7128423109",
    "email": "mwastellb@epa.gov"
  },
  "bundle": {
    "id": "4359760927",
    "name": "Acred360"
  },
  "contract": {
    "id": "9885807194"
  },
  "group": {
    "id": "5967078199",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 13,
  "seat_status": "requested",
  "date_invite": "2019-01-28 10:43:32 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "7908863204",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "9977649876"
  },
  "group": {
    "id": "5195661239",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 14,
  "seat_status": "requested",
  "date_invite": "2019-06-22 22:04:38 UTC",
  "date_accepted": "2019-07-16 22:04:38 UTC",
  "date_lockedTill": "2020-07-16 22:04:38 UTC",
  "user": {
    "name": null,
    "id": "1751453995",
    "email": "acornild@drupal.org"
  },
  "bundle": {
    "id": "5523903500",
    "name": "Cardio+"
  },
  "contract": {
    "id": "8737567812"
  },
  "group": {
    "id": "7836850959",
    "name": "default"
  }
}, {
  "seat_number": 15,
  "seat_status": "locked",
  "date_invite": "2019-04-30 10:09:44 UTC",
  "date_accepted": "2019-05-06 10:09:44 UTC",
  "date_lockedTill": "2020-05-06 10:09:44 UTC",
  "user": {
    "name": "Sadella Odeson",
    "id": "6136616676",
    "email": "sodesone@phoca.cz"
  },
  "bundle": {
    "id": "9524529791",
    "name": "Cardio+"
  },
  "contract": {
    "id": "7389431203"
  },
  "group": {
    "id": "7316801982",
    "name": "default"
  }
}, {
  "seat_number": 16,
  "seat_status": "unused",
  "date_invite": "2018-12-09 15:25:54 UTC",
  "date_accepted": "2018-12-22 15:25:54 UTC",
  "date_lockedTill": "2019-12-22 15:25:54 UTC",
  "user": {
    "name": "Sherlocke Gheraldi",
    "id": "4549657539",
    "email": "sgheraldif@deliciousdays.com"
  },
  "bundle": {
    "id": "3526121376",
    "name": "Acred360"
  },
  "contract": {
    "id": "0319050916"
  },
  "group": {
    "id": "3320701890",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 17,
  "seat_status": "requested",
  "date_invite": "2019-05-31 09:16:53 UTC",
  "date_accepted": "2019-06-17 09:16:53 UTC",
  "date_lockedTill": "2020-06-17 09:16:53 UTC",
  "user": {
    "name": "Steward Amies",
    "id": "7551417964",
    "email": "samiesg@goo.ne.jp"
  },
  "bundle": {
    "id": "9173627403",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "1935261647"
  },
  "group": {
    "id": "2068703906",
    "name": "default"
  }
}, {
  "seat_number": 18,
  "seat_status": "unused",
  "date_invite": "2019-05-16 05:12:33 UTC",
  "date_accepted": "2019-06-13 05:12:33 UTC",
  "date_lockedTill": "2020-06-13 05:12:33 UTC",
  "user": {
    "name": "Kimbra Doy",
    "id": "8284059334",
    "email": "kdoyh@patch.com"
  },
  "bundle": {
    "id": "1124076455",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "3592220926"
  },
  "group": {
    "id": "7183537451",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 19,
  "seat_status": "requested",
  "date_invite": "2018-12-25 19:01:14 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "8276800994",
    "name": "Acred360"
  },
  "contract": {
    "id": "7726766604"
  },
  "group": {
    "id": "9865578112",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 20,
  "seat_status": "requested",
  "date_invite": "2019-02-08 06:56:48 UTC",
  "date_accepted": "2019-03-08 06:56:48 UTC",
  "date_lockedTill": "2020-03-08 06:56:48 UTC",
  "user": {
    "name": "Percy Sonley",
    "id": "9659896250",
    "email": "psonleyj@cocolog-nifty.com"
  },
  "bundle": {
    "id": "1023916785",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "4862143261"
  },
  "group": {
    "id": "0958695184",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 21,
  "seat_status": "locked",
  "date_invite": "2019-05-29 08:32:03 UTC",
  "date_accepted": "2019-06-05 08:32:03 UTC",
  "date_lockedTill": "2020-06-05 08:32:03 UTC",
  "user": {
    "name": null,
    "id": "6109678757",
    "email": "smattusovk@opera.com"
  },
  "bundle": {
    "id": "8230448256",
    "name": "Acred360"
  },
  "contract": {
    "id": "6527433525"
  },
  "group": {
    "id": "8077234849",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 22,
  "seat_status": "locked",
  "date_invite": "2019-10-04 13:27:22 UTC",
  "date_accepted": "2019-10-17 13:27:22 UTC",
  "date_lockedTill": "2020-10-17 13:27:22 UTC",
  "user": {
    "name": null,
    "id": "9912842625",
    "email": "cberrisfordl@chron.com"
  },
  "bundle": {
    "id": "6455679030",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "6569686534"
  },
  "group": {
    "id": "6464341857",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 23,
  "seat_status": "requested",
  "date_invite": "2019-01-26 21:06:17 UTC",
  "date_accepted": "2019-02-10 21:06:17 UTC",
  "date_lockedTill": "2020-02-10 21:06:17 UTC",
  "user": {
    "name": "Devan Reoch",
    "id": "4062986679",
    "email": "dreochm@biblegateway.com"
  },
  "bundle": {
    "id": "5059728226",
    "name": "Cardio+"
  },
  "contract": {
    "id": "0066413522"
  },
  "group": {
    "id": "4199580897",
    "name": "default"
  }
}, {
  "seat_number": 24,
  "seat_status": "unused",
  "date_invite": "2019-09-04 18:45:33 UTC",
  "date_accepted": "2019-09-09 18:45:33 UTC",
  "date_lockedTill": "2020-09-09 18:45:33 UTC",
  "user": {
    "name": null,
    "id": "2934772119",
    "email": "mallbutn@icio.us"
  },
  "bundle": {
    "id": "0891861278",
    "name": "Acred360"
  },
  "contract": {
    "id": "8786663607"
  },
  "group": {
    "id": "7104457684",
    "name": "default"
  }
}, {
  "seat_number": 25,
  "seat_status": "requested",
  "date_invite": "2019-08-27 18:09:40 UTC",
  "date_accepted": "2019-09-16 18:09:40 UTC",
  "date_lockedTill": "2020-09-16 18:09:40 UTC",
  "user": {
    "name": "Pierce Magrannell",
    "id": "2802848915",
    "email": "pmagrannello@amazonaws.com"
  },
  "bundle": {
    "id": "9569805132",
    "name": "Acred360"
  },
  "contract": {
    "id": "0547313487"
  },
  "group": {
    "id": "8819483057",
    "name": "default"
  }
}, {
  "seat_number": 26,
  "seat_status": "requested",
  "date_invite": "2018-10-22 07:01:40 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "2938960903",
    "name": "Cardio+"
  },
  "contract": {
    "id": "7972457553"
  },
  "group": {
    "id": "3643660868",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 27,
  "seat_status": "unused",
  "date_invite": "2019-05-05 22:29:30 UTC",
  "date_accepted": "2019-05-24 22:29:30 UTC",
  "date_lockedTill": "2020-05-24 22:29:30 UTC",
  "user": {
    "name": "Cassondra Fowles",
    "id": "6332800104",
    "email": "cfowlesq@whitehouse.gov"
  },
  "bundle": {
    "id": "0220862737",
    "name": "Acred360"
  },
  "contract": {
    "id": "4135110989"
  },
  "group": {
    "id": "6788575674",
    "name": "default"
  }
}, {
  "seat_number": 28,
  "seat_status": "locked",
  "date_invite": "2019-06-30 15:16:32 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "7690523599",
    "name": "Acred360"
  },
  "contract": {
    "id": "2774365579"
  },
  "group": {
    "id": "2861478667",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 29,
  "seat_status": "unused",
  "date_invite": "2019-02-01 23:55:34 UTC",
  "date_accepted": "2019-02-23 23:55:34 UTC",
  "date_lockedTill": "2020-02-23 23:55:34 UTC",
  "user": {
    "name": "Christal Redier",
    "id": "7147099400",
    "email": "crediers@springer.com"
  },
  "bundle": {
    "id": "3917709552",
    "name": "Cardio+"
  },
  "contract": {
    "id": "9049554939"
  },
  "group": {
    "id": "4739747744",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 30,
  "seat_status": "filled",
  "date_invite": "2018-10-31 09:03:46 UTC",
  "date_accepted": "2018-11-27 09:03:46 UTC",
  "date_lockedTill": "2019-11-27 09:03:46 UTC",
  "user": {
    "name": "Kenton Petrou",
    "id": "7788614167",
    "email": "kpetrout@virginia.edu"
  },
  "bundle": {
    "id": "5702142540",
    "name": "Acred360"
  },
  "contract": {
    "id": "1643339080"
  },
  "group": {
    "id": "1269017550",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 31,
  "seat_status": "requested",
  "date_invite": "2019-06-03 08:22:44 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "2876950277",
    "name": "Acred360"
  },
  "contract": {
    "id": "2048088911"
  },
  "group": {
    "id": "5262875097",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 32,
  "seat_status": "filled",
  "date_invite": "2019-03-26 18:32:34 UTC",
  "date_accepted": "2019-04-23 18:32:34 UTC",
  "date_lockedTill": "2020-04-23 18:32:34 UTC",
  "user": {
    "name": "Herrick Lowthorpe",
    "id": "9279199246",
    "email": "hlowthorpev@blogspot.com"
  },
  "bundle": {
    "id": "3263765814",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "7376440504"
  },
  "group": {
    "id": "7597196366",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 33,
  "seat_status": "locked",
  "date_invite": "2019-06-24 10:18:17 UTC",
  "date_accepted": "2019-07-09 10:18:17 UTC",
  "date_lockedTill": "2020-07-09 10:18:17 UTC",
  "user": {
    "name": "Liuka Stubley",
    "id": "9163201104",
    "email": "lstubleyw@businessweek.com"
  },
  "bundle": {
    "id": "3506273109",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "7031789094"
  },
  "group": {
    "id": "8560811885",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 34,
  "seat_status": "filled",
  "date_invite": "2019-05-15 22:42:40 UTC",
  "date_accepted": "2019-06-11 22:42:40 UTC",
  "date_lockedTill": "2020-06-11 22:42:40 UTC",
  "user": {
    "name": "Tobiah Tewes",
    "id": "7463358812",
    "email": "ttewesx@bloomberg.com"
  },
  "bundle": {
    "id": "6396301569",
    "name": "Acred360"
  },
  "contract": {
    "id": "7274632471"
  },
  "group": {
    "id": "4235511302",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 35,
  "seat_status": "unused",
  "date_invite": "2019-01-30 02:10:21 UTC",
  "date_accepted": "2019-02-12 02:10:21 UTC",
  "date_lockedTill": "2020-02-12 02:10:21 UTC",
  "user": {
    "name": null,
    "id": "4363142434",
    "email": "adalleyy@java.com"
  },
  "bundle": {
    "id": "9134196965",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "6194311128"
  },
  "group": {
    "id": "1689913663",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 36,
  "seat_status": "requested",
  "date_invite": "2019-08-19 02:46:23 UTC",
  "date_accepted": "2019-09-17 02:46:23 UTC",
  "date_lockedTill": "2020-09-17 02:46:23 UTC",
  "user": {
    "name": "Leela Cometto",
    "id": "8443435986",
    "email": "lcomettoz@wordpress.org"
  },
  "bundle": {
    "id": "7839449313",
    "name": "Cardio+"
  },
  "contract": {
    "id": "5330006714"
  },
  "group": {
    "id": "0272726134",
    "name": "default"
  }
}, {
  "seat_number": 37,
  "seat_status": "unused",
  "date_invite": "2019-08-23 11:44:35 UTC",
  "date_accepted": "2019-08-27 11:44:35 UTC",
  "date_lockedTill": "2020-08-27 11:44:35 UTC",
  "user": {
    "name": null,
    "id": "7084048398",
    "email": "nshirley10@berkeley.edu"
  },
  "bundle": {
    "id": "9528464863",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "7596406577"
  },
  "group": {
    "id": "0158526906",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 38,
  "seat_status": "filled",
  "date_invite": "2018-11-27 05:32:35 UTC",
  "date_accepted": "2018-12-17 05:32:35 UTC",
  "date_lockedTill": "2019-12-17 05:32:35 UTC",
  "user": {
    "name": null,
    "id": "9417380788",
    "email": "akloisner11@ca.gov"
  },
  "bundle": {
    "id": "5061178144",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "5672602559"
  },
  "group": {
    "id": "9712999032",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 39,
  "seat_status": "requested",
  "date_invite": "2019-09-20 16:15:32 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "6147536505",
    "name": "Acred360"
  },
  "contract": {
    "id": "9278711892"
  },
  "group": {
    "id": "5222497696",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 40,
  "seat_status": "filled",
  "date_invite": "2019-02-14 15:22:17 UTC",
  "date_accepted": "2019-03-02 15:22:17 UTC",
  "date_lockedTill": "2020-03-02 15:22:17 UTC",
  "user": {
    "name": "Bradan Ewbanck",
    "id": "9283869187",
    "email": "bewbanck13@over-blog.com"
  },
  "bundle": {
    "id": "7131907649",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "4503836004"
  },
  "group": {
    "id": "9662182821",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 41,
  "seat_status": "unused",
  "date_invite": "2019-04-26 20:27:00 UTC",
  "date_accepted": "2019-05-26 20:27:00 UTC",
  "date_lockedTill": "2020-05-26 20:27:00 UTC",
  "user": {
    "name": "Chad Ridewood",
    "id": "0188436683",
    "email": "cridewood14@behance.net"
  },
  "bundle": {
    "id": "9145719818",
    "name": "Acred360"
  },
  "contract": {
    "id": "6542180829"
  },
  "group": {
    "id": "8173301489",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 42,
  "seat_status": "requested",
  "date_invite": "2018-12-16 15:33:22 UTC",
  "date_accepted": "2019-01-12 15:33:22 UTC",
  "date_lockedTill": "2020-01-12 15:33:22 UTC",
  "user": {
    "name": "Simona Gaskell",
    "id": "0403204053",
    "email": "sgaskell15@1und1.de"
  },
  "bundle": {
    "id": "3621725912",
    "name": "Acred360"
  },
  "contract": {
    "id": "6855221106"
  },
  "group": {
    "id": "7118812797",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 43,
  "seat_status": "unused",
  "date_invite": "2019-03-20 03:19:07 UTC",
  "date_accepted": "2019-03-27 03:19:07 UTC",
  "date_lockedTill": "2020-03-27 03:19:07 UTC",
  "user": {
    "name": "Mellie Emanulsson",
    "id": "8674355340",
    "email": "memanulsson16@dion.ne.jp"
  },
  "bundle": {
    "id": "7830759095",
    "name": "Acred360"
  },
  "contract": {
    "id": "9671536578"
  },
  "group": {
    "id": "4992421961",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 44,
  "seat_status": "requested",
  "date_invite": "2018-12-24 14:08:23 UTC",
  "date_accepted": "2019-01-03 14:08:23 UTC",
  "date_lockedTill": "2020-01-03 14:08:23 UTC",
  "user": {
    "name": "Dominik Baversor",
    "id": "3506641693",
    "email": "dbaversor17@yale.edu"
  },
  "bundle": {
    "id": "5745393965",
    "name": "Acred360"
  },
  "contract": {
    "id": "3928726806"
  },
  "group": {
    "id": "3371484008",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 45,
  "seat_status": "locked",
  "date_invite": "2018-12-12 20:23:42 UTC",
  "date_accepted": "2018-12-21 20:23:42 UTC",
  "date_lockedTill": "2019-12-21 20:23:42 UTC",
  "user": {
    "name": "Worthington Kolakowski",
    "id": "0693756837",
    "email": "wkolakowski18@gnu.org"
  },
  "bundle": {
    "id": "6068723218",
    "name": "Cardio+"
  },
  "contract": {
    "id": "4452183940"
  },
  "group": {
    "id": "8708904060",
    "name": "default"
  }
}, {
  "seat_number": 46,
  "seat_status": "filled",
  "date_invite": "2019-06-15 13:16:27 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "4268728073",
    "name": "Acred360"
  },
  "contract": {
    "id": "4184033877"
  },
  "group": {
    "id": "5392885373",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 47,
  "seat_status": "locked",
  "date_invite": "2019-01-09 02:01:57 UTC",
  "date_accepted": "2019-01-25 02:01:57 UTC",
  "date_lockedTill": "2020-01-25 02:01:57 UTC",
  "user": {
    "name": null,
    "id": "3045265849",
    "email": "amcgilroy1a@cornell.edu"
  },
  "bundle": {
    "id": "2886197252",
    "name": "Cardio+"
  },
  "contract": {
    "id": "2770737341"
  },
  "group": {
    "id": "4190123931",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 48,
  "seat_status": "locked",
  "date_invite": "2019-04-01 18:08:04 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "8386107769",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "8600058783"
  },
  "group": {
    "id": "6281691297",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 49,
  "seat_status": "requested",
  "date_invite": "2018-11-18 10:36:09 UTC",
  "date_accepted": "2018-12-16 10:36:09 UTC",
  "date_lockedTill": "2019-12-16 10:36:09 UTC",
  "user": {
    "name": null,
    "id": "6357473217",
    "email": "tbuterton1c@macromedia.com"
  },
  "bundle": {
    "id": "8883463415",
    "name": "Cardio+"
  },
  "contract": {
    "id": "4969916386"
  },
  "group": {
    "id": "4494635140",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 50,
  "seat_status": "filled",
  "date_invite": "2018-11-17 00:04:34 UTC",
  "date_accepted": "2018-12-03 00:04:34 UTC",
  "date_lockedTill": "2019-12-03 00:04:34 UTC",
  "user": {
    "name": null,
    "id": "9390536980",
    "email": "cmulvy1d@salon.com"
  },
  "bundle": {
    "id": "1698726537",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "5666139495"
  },
  "group": {
    "id": "1735985557",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 51,
  "seat_status": "locked",
  "date_invite": "2018-12-21 15:27:46 UTC",
  "date_accepted": "2019-01-17 15:27:46 UTC",
  "date_lockedTill": "2020-01-17 15:27:46 UTC",
  "user": {
    "name": "Gillie Callar",
    "id": "4643077917",
    "email": "gcallar1e@hostgator.com"
  },
  "bundle": {
    "id": "8910356879",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "0749453747"
  },
  "group": {
    "id": "3485887748",
    "name": "default"
  }
}, {
  "seat_number": 52,
  "seat_status": "unused",
  "date_invite": "2019-08-18 08:11:05 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "0116229704",
    "name": "Cardio+"
  },
  "contract": {
    "id": "5156563947"
  },
  "group": {
    "id": "5704744605",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 53,
  "seat_status": "locked",
  "date_invite": "2019-06-10 19:44:45 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "2131873503",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "9100711994"
  },
  "group": {
    "id": "8818818717",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 54,
  "seat_status": "locked",
  "date_invite": "2019-02-07 09:32:34 UTC",
  "date_accepted": "2019-02-13 09:32:34 UTC",
  "date_lockedTill": "2020-02-13 09:32:34 UTC",
  "user": {
    "name": null,
    "id": "7618179918",
    "email": "jbirrell1h@aol.com"
  },
  "bundle": {
    "id": "1592345199",
    "name": "Cardio+"
  },
  "contract": {
    "id": "1947550991"
  },
  "group": {
    "id": "9492589943",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 55,
  "seat_status": "unused",
  "date_invite": "2019-09-03 13:08:52 UTC",
  "date_accepted": "2019-09-12 13:08:52 UTC",
  "date_lockedTill": "2020-09-12 13:08:52 UTC",
  "user": {
    "name": "Carter Petegrew",
    "id": "8434472861",
    "email": "cpetegrew1i@over-blog.com"
  },
  "bundle": {
    "id": "1857544151",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "6311838123"
  },
  "group": {
    "id": "3178394733",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 56,
  "seat_status": "unused",
  "date_invite": "2019-02-11 17:26:22 UTC",
  "date_accepted": "2019-03-10 17:26:22 UTC",
  "date_lockedTill": "2020-03-10 17:26:22 UTC",
  "user": {
    "name": "Deborah Erickson",
    "id": "8632092208",
    "email": "derickson1j@deliciousdays.com"
  },
  "bundle": {
    "id": "3041525720",
    "name": "Cardio+"
  },
  "contract": {
    "id": "9737881512"
  },
  "group": {
    "id": "1281626914",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 57,
  "seat_status": "locked",
  "date_invite": "2018-10-30 14:11:43 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "6169089300",
    "name": "Acred360"
  },
  "contract": {
    "id": "4502204129"
  },
  "group": {
    "id": "4416782957",
    "name": "default"
  }
}, {
  "seat_number": 58,
  "seat_status": "unused",
  "date_invite": "2019-08-19 10:04:14 UTC",
  "date_accepted": "2019-08-29 10:04:14 UTC",
  "date_lockedTill": "2020-08-29 10:04:14 UTC",
  "user": {
    "name": null,
    "id": "3096543858",
    "email": "mshah1l@yolasite.com"
  },
  "bundle": {
    "id": "8294919788",
    "name": "Acred360"
  },
  "contract": {
    "id": "8988735884"
  },
  "group": {
    "id": "9535961284",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 59,
  "seat_status": "locked",
  "date_invite": "2019-04-06 16:06:25 UTC",
  "date_accepted": "2019-04-26 16:06:25 UTC",
  "date_lockedTill": "2020-04-26 16:06:25 UTC",
  "user": {
    "name": null,
    "id": "9715874783",
    "email": "cletson1m@blogs.com"
  },
  "bundle": {
    "id": "1954669080",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "4855080941"
  },
  "group": {
    "id": "1573893812",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 60,
  "seat_status": "requested",
  "date_invite": "2019-07-08 13:42:32 UTC",
  "date_accepted": "2019-07-21 13:42:32 UTC",
  "date_lockedTill": "2020-07-21 13:42:32 UTC",
  "user": {
    "name": null,
    "id": "3285173495",
    "email": "fpetit1n@artisteer.com"
  },
  "bundle": {
    "id": "0015740728",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "4988464280"
  },
  "group": {
    "id": "2493184911",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 61,
  "seat_status": "unused",
  "date_invite": "2019-06-16 08:13:06 UTC",
  "date_accepted": "2019-06-26 08:13:06 UTC",
  "date_lockedTill": "2020-06-26 08:13:06 UTC",
  "user": {
    "name": "Hugh Helian",
    "id": "9871109752",
    "email": "hhelian1o@soundcloud.com"
  },
  "bundle": {
    "id": "9902221460",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "4822196185"
  },
  "group": {
    "id": "6912313432",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 62,
  "seat_status": "filled",
  "date_invite": "2019-04-09 02:57:26 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "0081828707",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "5689627724"
  },
  "group": {
    "id": "9811136241",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 63,
  "seat_status": "requested",
  "date_invite": "2019-08-13 03:06:07 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "7848566914",
    "name": "Acred360"
  },
  "contract": {
    "id": "7304723583"
  },
  "group": {
    "id": "7287081299",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 64,
  "seat_status": "unused",
  "date_invite": "2019-10-15 07:23:04 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "8728896710",
    "name": "Cardio+"
  },
  "contract": {
    "id": "6333203238"
  },
  "group": {
    "id": "0780210680",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 65,
  "seat_status": "unused",
  "date_invite": "2019-10-05 14:48:55 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "7002133574",
    "name": "Cardio+"
  },
  "contract": {
    "id": "4374363174"
  },
  "group": {
    "id": "1987641819",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 66,
  "seat_status": "requested",
  "date_invite": "2019-08-07 18:12:51 UTC",
  "date_accepted": "2019-08-29 18:12:51 UTC",
  "date_lockedTill": "2020-08-29 18:12:51 UTC",
  "user": {
    "name": "Trey Ginman",
    "id": "9340701391",
    "email": "tginman1t@themeforest.net"
  },
  "bundle": {
    "id": "3748245326",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "5533566796"
  },
  "group": {
    "id": "7136705231",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 67,
  "seat_status": "filled",
  "date_invite": "2019-03-20 00:06:57 UTC",
  "date_accepted": "2019-04-08 00:06:57 UTC",
  "date_lockedTill": "2020-04-08 00:06:57 UTC",
  "user": {
    "name": "Clair Forker",
    "id": "9332778015",
    "email": "cforker1u@google.co.jp"
  },
  "bundle": {
    "id": "1242415868",
    "name": "Cardio+"
  },
  "contract": {
    "id": "7478787696"
  },
  "group": {
    "id": "5918756001",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 68,
  "seat_status": "requested",
  "date_invite": "2019-08-29 21:26:47 UTC",
  "date_accepted": "2019-09-27 21:26:47 UTC",
  "date_lockedTill": "2020-09-27 21:26:47 UTC",
  "user": {
    "name": "Cristian Garford",
    "id": "4639900295",
    "email": "cgarford1v@ebay.com"
  },
  "bundle": {
    "id": "1005942184",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "0264334680"
  },
  "group": {
    "id": "6531338384",
    "name": "default"
  }
}, {
  "seat_number": 69,
  "seat_status": "unused",
  "date_invite": "2019-10-11 09:45:23 UTC",
  "date_accepted": "2019-10-14 09:45:23 UTC",
  "date_lockedTill": "2020-10-14 09:45:23 UTC",
  "user": {
    "name": "Ruddy Tillard",
    "id": "2939423487",
    "email": "rtillard1w@amazon.co.uk"
  },
  "bundle": {
    "id": "5142242464",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "6636968050"
  },
  "group": {
    "id": "3204731003",
    "name": "default"
  }
}, {
  "seat_number": 70,
  "seat_status": "unused",
  "date_invite": "2019-09-07 00:57:55 UTC",
  "date_accepted": "2019-09-14 00:57:55 UTC",
  "date_lockedTill": "2020-09-14 00:57:55 UTC",
  "user": {
    "name": "Bernie O'Corrane",
    "id": "6529387355",
    "email": "bocorrane1x@marriott.com"
  },
  "bundle": {
    "id": "3717888871",
    "name": "Acred360"
  },
  "contract": {
    "id": "4835443784"
  },
  "group": {
    "id": "9799026425",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 71,
  "seat_status": "requested",
  "date_invite": "2019-04-25 07:50:08 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "5491300651",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "1995821032"
  },
  "group": {
    "id": "4733450944",
    "name": "default"
  }
}, {
  "seat_number": 72,
  "seat_status": "requested",
  "date_invite": "2018-11-26 21:32:28 UTC",
  "date_accepted": "2018-12-17 21:32:28 UTC",
  "date_lockedTill": "2019-12-17 21:32:28 UTC",
  "user": {
    "name": "Phedra Iacovaccio",
    "id": "9792817231",
    "email": "piacovaccio1z@shutterfly.com"
  },
  "bundle": {
    "id": "3367171629",
    "name": "Acred360"
  },
  "contract": {
    "id": "3335583017"
  },
  "group": {
    "id": "0762710403",
    "name": "default"
  }
}, {
  "seat_number": 73,
  "seat_status": "unused",
  "date_invite": "2018-12-11 04:11:58 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "6010511281",
    "name": "Cardio+"
  },
  "contract": {
    "id": "5328005481"
  },
  "group": {
    "id": "1502213789",
    "name": "default"
  }
}, {
  "seat_number": 74,
  "seat_status": "locked",
  "date_invite": "2019-01-06 20:19:56 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "4124309791",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "6528910894"
  },
  "group": {
    "id": "3683987940",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 75,
  "seat_status": "unused",
  "date_invite": "2019-06-30 11:54:21 UTC",
  "date_accepted": "2019-07-19 11:54:21 UTC",
  "date_lockedTill": "2020-07-19 11:54:21 UTC",
  "user": {
    "name": "Aidan Phillcox",
    "id": "8645597715",
    "email": "aphillcox22@mozilla.com"
  },
  "bundle": {
    "id": "9097533064",
    "name": "Acred360"
  },
  "contract": {
    "id": "1525506665"
  },
  "group": {
    "id": "9770951033",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 76,
  "seat_status": "filled",
  "date_invite": "2019-04-12 18:00:57 UTC",
  "date_accepted": "2019-04-17 18:00:57 UTC",
  "date_lockedTill": "2020-04-17 18:00:57 UTC",
  "user": {
    "name": "Kathie Bullar",
    "id": "8936947334",
    "email": "kbullar23@census.gov"
  },
  "bundle": {
    "id": "2627965300",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "1705639206"
  },
  "group": {
    "id": "9732338962",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 77,
  "seat_status": "filled",
  "date_invite": "2019-02-18 20:41:54 UTC",
  "date_accepted": "2019-03-16 20:41:54 UTC",
  "date_lockedTill": "2020-03-16 20:41:54 UTC",
  "user": {
    "name": "Barbe Bartholomaus",
    "id": "2625640656",
    "email": "bbartholomaus24@angelfire.com"
  },
  "bundle": {
    "id": "8923274896",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "4268551783"
  },
  "group": {
    "id": "5417749648",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 78,
  "seat_status": "unused",
  "date_invite": "2019-05-05 08:41:38 UTC",
  "date_accepted": "2019-05-12 08:41:38 UTC",
  "date_lockedTill": "2020-05-12 08:41:38 UTC",
  "user": {
    "name": "Oliy Beefon",
    "id": "5626931391",
    "email": "obeefon25@yale.edu"
  },
  "bundle": {
    "id": "2647877348",
    "name": "Cardio+"
  },
  "contract": {
    "id": "5133112837"
  },
  "group": {
    "id": "8823372890",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 79,
  "seat_status": "locked",
  "date_invite": "2018-12-31 06:00:00 UTC",
  "date_accepted": "2019-01-25 06:00:00 UTC",
  "date_lockedTill": "2020-01-25 06:00:00 UTC",
  "user": {
    "name": null,
    "id": "2268583606",
    "email": "bpaddick26@ezinearticles.com"
  },
  "bundle": {
    "id": "7373034085",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "2723048501"
  },
  "group": {
    "id": "4184085627",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 80,
  "seat_status": "unused",
  "date_invite": "2019-01-05 17:11:46 UTC",
  "date_accepted": "2019-01-28 17:11:46 UTC",
  "date_lockedTill": "2020-01-28 17:11:46 UTC",
  "user": {
    "name": "Chad McNamee",
    "id": "7714579035",
    "email": "cmcnamee27@amazon.co.uk"
  },
  "bundle": {
    "id": "2037634821",
    "name": "Acred360"
  },
  "contract": {
    "id": "5306297146"
  },
  "group": {
    "id": "9156814484",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 81,
  "seat_status": "locked",
  "date_invite": "2019-08-21 20:36:19 UTC",
  "date_accepted": "2019-09-10 20:36:19 UTC",
  "date_lockedTill": "2020-09-10 20:36:19 UTC",
  "user": {
    "name": "Tommy Cowin",
    "id": "2449339140",
    "email": "tcowin28@mozilla.com"
  },
  "bundle": {
    "id": "4343537367",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "0135585159"
  },
  "group": {
    "id": "3698613348",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 82,
  "seat_status": "unused",
  "date_invite": "2019-09-03 08:28:01 UTC",
  "date_accepted": "2019-09-24 08:28:01 UTC",
  "date_lockedTill": "2020-09-24 08:28:01 UTC",
  "user": {
    "name": "Siouxie Baden",
    "id": "2051638810",
    "email": "sbaden29@cpanel.net"
  },
  "bundle": {
    "id": "1431829681",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "6574486277"
  },
  "group": {
    "id": "6517421539",
    "name": "default"
  }
}, {
  "seat_number": 83,
  "seat_status": "requested",
  "date_invite": "2019-03-24 01:08:09 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "6398530175",
    "name": "Acred360"
  },
  "contract": {
    "id": "6077799143"
  },
  "group": {
    "id": "8679798932",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 84,
  "seat_status": "filled",
  "date_invite": "2019-07-14 11:44:34 UTC",
  "date_accepted": "2019-07-23 11:44:34 UTC",
  "date_lockedTill": "2020-07-23 11:44:34 UTC",
  "user": {
    "name": "Marlane Filoniere",
    "id": "9895477026",
    "email": "mfiloniere2b@dagondesign.com"
  },
  "bundle": {
    "id": "5666697444",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "6955840835"
  },
  "group": {
    "id": "7087444322",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 85,
  "seat_status": "requested",
  "date_invite": "2019-06-26 19:23:54 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "2436951674",
    "name": "Acred360"
  },
  "contract": {
    "id": "4331080600"
  },
  "group": {
    "id": "2159048349",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 86,
  "seat_status": "unused",
  "date_invite": "2019-01-30 18:13:19 UTC",
  "date_accepted": "2019-02-13 18:13:19 UTC",
  "date_lockedTill": "2020-02-13 18:13:19 UTC",
  "user": {
    "name": "Stacia Bergeon",
    "id": "5341805337",
    "email": "sbergeon2d@sina.com.cn"
  },
  "bundle": {
    "id": "0677682118",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "8577094662"
  },
  "group": {
    "id": "7738336626",
    "name": "default"
  }
}, {
  "seat_number": 87,
  "seat_status": "filled",
  "date_invite": "2019-04-16 01:21:32 UTC",
  "date_accepted": "2019-04-25 01:21:32 UTC",
  "date_lockedTill": "2020-04-25 01:21:32 UTC",
  "user": {
    "name": null,
    "id": "4152327473",
    "email": "nmatityahu2e@t.co"
  },
  "bundle": {
    "id": "9477719232",
    "name": "Cardio+"
  },
  "contract": {
    "id": "6643515493"
  },
  "group": {
    "id": "4383031466",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 88,
  "seat_status": "requested",
  "date_invite": "2019-02-12 08:24:56 UTC",
  "date_accepted": "2019-03-04 08:24:56 UTC",
  "date_lockedTill": "2020-03-04 08:24:56 UTC",
  "user": {
    "name": "Tamarah Frood",
    "id": "2984443199",
    "email": "tfrood2f@redcross.org"
  },
  "bundle": {
    "id": "6601853603",
    "name": "Acred360"
  },
  "contract": {
    "id": "1075740954"
  },
  "group": {
    "id": "6772489675",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 89,
  "seat_status": "filled",
  "date_invite": "2019-05-28 12:40:42 UTC",
  "date_accepted": "2019-06-12 12:40:42 UTC",
  "date_lockedTill": "2020-06-12 12:40:42 UTC",
  "user": {
    "name": null,
    "id": "4847932374",
    "email": "smacclure2g@taobao.com"
  },
  "bundle": {
    "id": "8021262235",
    "name": "Acred360"
  },
  "contract": {
    "id": "8092579724"
  },
  "group": {
    "id": "3646909214",
    "name": "hospital_southern"
  }
}, {
  "seat_number": 90,
  "seat_status": "unused",
  "date_invite": "2019-01-18 09:52:00 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "3603592415",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "4118985532"
  },
  "group": {
    "id": "2177623854",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 91,
  "seat_status": "filled",
  "date_invite": "2019-05-11 09:10:44 UTC",
  "date_accepted": "2019-06-04 09:10:44 UTC",
  "date_lockedTill": "2020-06-04 09:10:44 UTC",
  "user": {
    "name": "Mohandas Galliard",
    "id": "9554110794",
    "email": "mgalliard2i@bluehost.com"
  },
  "bundle": {
    "id": "2605740570",
    "name": "Cardio+"
  },
  "contract": {
    "id": "0822613801"
  },
  "group": {
    "id": "2761829143",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 92,
  "seat_status": "requested",
  "date_invite": "2019-04-23 06:51:58 UTC",
  "date_accepted": "2019-05-15 06:51:58 UTC",
  "date_lockedTill": "2020-05-15 06:51:58 UTC",
  "user": {
    "name": "Arabel Ivins",
    "id": "9362684138",
    "email": "aivins2j@paginegialle.it"
  },
  "bundle": {
    "id": "0541771340",
    "name": "Acred360"
  },
  "contract": {
    "id": "3575091975"
  },
  "group": {
    "id": "5434532693",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 93,
  "seat_status": "requested",
  "date_invite": "2018-10-29 02:36:29 UTC",
  "date_accepted": "2018-11-13 02:36:29 UTC",
  "date_lockedTill": "2019-11-13 02:36:29 UTC",
  "user": {
    "name": "Jo-anne Saller",
    "id": "2702137771",
    "email": "jsaller2k@nyu.edu"
  },
  "bundle": {
    "id": "7888754510",
    "name": "Cardio+"
  },
  "contract": {
    "id": "1686966077"
  },
  "group": {
    "id": "1330905352",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 94,
  "seat_status": "unused",
  "date_invite": "2019-08-03 01:50:23 UTC",
  "date_accepted": "2019-09-02 01:50:23 UTC",
  "date_lockedTill": "2020-09-02 01:50:23 UTC",
  "user": {
    "name": "Amelita Nicolls",
    "id": "4328158134",
    "email": "anicolls2l@washington.edu"
  },
  "bundle": {
    "id": "8012396366",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "7912496028"
  },
  "group": {
    "id": "2552044300",
    "name": "hospitals_midwest"
  }
}, {
  "seat_number": 95,
  "seat_status": "locked",
  "date_invite": "2019-06-29 18:07:45 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "0478803742",
    "name": "Acred360"
  },
  "contract": {
    "id": "1998155509"
  },
  "group": {
    "id": "7880282233",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 96,
  "seat_status": "unused",
  "date_invite": "2019-01-17 01:35:00 UTC",
  "date_accepted": "2019-02-03 01:35:00 UTC",
  "date_lockedTill": "2020-02-03 01:35:00 UTC",
  "user": {
    "name": null,
    "id": "8837318479",
    "email": "handreucci2n@1688.com"
  },
  "bundle": {
    "id": "7781511987",
    "name": "OmegaSap"
  },
  "contract": {
    "id": "5501636355"
  },
  "group": {
    "id": "7974364565",
    "name": "hospital_eastcoast"
  }
}, {
  "seat_number": 97,
  "seat_status": "filled",
  "date_invite": "2019-08-03 13:37:25 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "3586430915",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "5152834554"
  },
  "group": {
    "id": "7361656953",
    "name": "hospitals_westcoast"
  }
}, {
  "seat_number": 98,
  "seat_status": "unused",
  "date_invite": "2019-09-16 05:51:44 UTC",
  "date_accepted": "2019-09-29 05:51:44 UTC",
  "date_lockedTill": "2020-09-29 05:51:44 UTC",
  "user": {
    "name": null,
    "id": "6608787129",
    "email": "ngrinnov2p@cbsnews.com"
  },
  "bundle": {
    "id": "5291898849",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "3119056172"
  },
  "group": {
    "id": "3755698233",
    "name": "default"
  }
}, {
  "seat_number": 99,
  "seat_status": "unused",
  "date_invite": "2019-08-02 18:54:12 UTC",
  "date_accepted": null,
  "date_lockedTill": null,
  "user": {
    "name": null,
    "id": null,
    "email": null
  },
  "bundle": {
    "id": "7401659094",
    "name": "Acred360"
  },
  "contract": {
    "id": "0594752492"
  },
  "group": {
    "id": "7838816626",
    "name": "default"
  }
}, {
  "seat_number": 100,
  "seat_status": "locked",
  "date_invite": "2019-10-14 16:37:30 UTC",
  "date_accepted": "2019-11-02 16:37:30 UTC",
  "date_lockedTill": "2020-11-02 16:37:30 UTC",
  "user": {
    "name": "Jerad Itter",
    "id": "2338399756",
    "email": "jitter2r@oaic.gov.au"
  },
  "bundle": {
    "id": "3147957747",
    "name": "HeartSymphony"
  },
  "contract": {
    "id": "6214478487"
  },
  "group": {
    "id": "6620161479",
    "name": "hospitals_midwest"
  }
}];
export const contractRaw = () => {
	return {
		template: `
    <div>
        <h1>Contract</h1>
        <table class="w_100">
            <thead>
                <tr class="text_left">
                    <th class="p_2">Contract ID</th>
                    <th class="p_2">Institution</th>
                    <th class="p_2">Purchaser</th>
                    <th class="p_2">Status</th>
                    <th class="p_2">Seat Total</th>
                    <th class="p_2">Term</th>
                    <th class="p_2">Amount</th>
                    <th class="p_2">Payment Date</th>
                    <th class="p_2">Last Payment Date</th>
                    <th class="p_2">Expiration Date</th>
                    <th class = "p_2" > Purchase Date </th>
                    <th class="p_2">Bundles</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-bind="contractData"
                    v-for="(data, index) in contractData"
                    key="data.result_id"
                >
                    <td class="p_2">{{ data.id }}</td>
                    <td class="p_2"><a v-bind:href="data.institution.id" class="">{{ data.institution.name }}</a></td>
                    <td class="p_2"><a v-bind:href="data.institution.purchaser.id" class="">{{ data.institution.purchaser.name }}</a><a class="link email block font_n2" :href="'mailto:'+data.institution.purchaser.email">email user</a></td>
                    <td class="p_2">{{ data.status }}</td>
                    <td class="p_2">{{ data.seatTotal }}</td>
                    <td class="p_2">{{ data.term }}</td>
                    <td class="p_2">{{ data.amount }}</td>
                    <td class="p_2">{{ data.date_paymentDue }}</td>
                    <td class="p_2">{{ data.date_lastPayment }}</td>
                    <td class="p_2">{{ data.date_expiration }}</td>
                    <td class="p_2">{{ data.date_purchase }}</td>
                    <td class="p_2">
                        <span class="m-r_3" v-for="(bundle) in data.bundle" key="bundle.id">{{bundle.name}}<em>({{bundle.seats}})</em></span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
		data: () => ({
			contractData
		})
	};
};

export const hoursAndCreditsRaw = () => {
	return {
		template: `
        <div>
            <h1>Usage Hours and Credits</h1>
            <table class="w_100">
            <thead>
                <tr class="text_left">
                    <th class="p_2">User</th>
                    <th class="p_2">Bundle</th>
                    <th class="p_2">Product</th>
                    <th class="p_2" >Topic</th>
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
                    <td class="p_2">{{data.topic.parentBundle.name}}</td>
                    <td class="p_2" >{{data.topic.parentProduct.name}}</td>
                    <td class="p_2">{{data.topic.name}}</td>
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

export const seatallocationRaw = () => {
	return {
		template: `
        <div>
            <h1>Seat Allocattion</h1>
            <table class="w_100">
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
                    {{data.user.name}}<span v-if="data.user.name"> | </span>{{data.user.email}}
            </td>
            <td class="p_2">{{data.group.name}}</td>
            <td class="p_2">{{data.date_invite}}</td>
            <td class="p_2">{{data.date_accepted}}</td>
            <td class="p_2">{{data.date_lockedTill}}</td>
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
