import { action } from "@storybook/addon-actions";
import gChart from "../../src/components/BasicChart/googleChart";

export default {
    title: "SeatManagement/Charts",
    components: gChart,
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		info: true
	},
    excludeStories: ["consumptionData", "methods", "seatAllocationData", "contractData"]
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
export const seatAllocationData = [
					{
						seat_number: 1,
						seat_status: "unused",
						date_invite: "2019-09-19 23:30:23 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "5973395005", name: "Cardio+" },
						contract: { id: "9582658869" },
						group: { id: "9786597501", name: "hospitals_westcoast" }
					},
					{
						seat_number: 2,
						seat_status: "requested",
						date_invite: "2018-12-30 11:13:34 UTC",
						date_accepted: "2019-01-04 11:13:34 UTC",
						date_lockedTill: "2020-01-04 11:13:34 UTC",
						user: {
							name: null,
							id: "1177429992",
							email: "ebenne1@istockphoto.com"
						},
						bundle: { id: "3319479646", name: "OmegaSap" },
						contract: { id: "9440735249" },
						group: { id: "9997906947", name: "hospitals_westcoast" }
					},
					{
						seat_number: 3,
						seat_status: "locked",
						date_invite: "2019-08-28 01:29:04 UTC",
						date_accepted: "2019-09-02 01:29:04 UTC",
						date_lockedTill: "2020-09-02 01:29:04 UTC",
						user: {
							name: null,
							id: "9254402938",
							email: "rgiffard2@kickstarter.com"
						},
						bundle: { id: "3519443353", name: "Acred360" },
						contract: { id: "3462811391" },
						group: { id: "9646365379", name: "hospitals_westcoast" }
					},
					{
						seat_number: 4,
						seat_status: "unused",
						date_invite: "2019-04-09 14:57:52 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "1258426584", name: "Cardio+" },
						contract: { id: "1108954860" },
						group: { id: "8591697338", name: "default" }
					},
					{
						seat_number: 5,
						seat_status: "unused",
						date_invite: "2019-09-21 03:28:54 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "3408297430", name: "Acred360" },
						contract: { id: "0668791504" },
						group: { id: "5479723436", name: "default" }
					},
					{
						seat_number: 6,
						seat_status: "requested",
						date_invite: "2018-12-11 07:11:56 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "0191441878", name: "HeartSymphony" },
						contract: { id: "6055247124" },
						group: { id: "1907119027", name: "hospital_southern" }
					},
					{
						seat_number: 7,
						seat_status: "requested",
						date_invite: "2019-10-06 13:07:14 UTC",
						date_accepted: "2019-10-30 13:07:14 UTC",
						date_lockedTill: "2020-10-30 13:07:14 UTC",
						user: { name: null, id: "7095280102", email: "bace6@aol.com" },
						bundle: { id: "7535323669", name: "Acred360" },
						contract: { id: "7263002520" },
						group: { id: "4987006952", name: "hospitals_midwest" }
					},
					{
						seat_number: 8,
						seat_status: "locked",
						date_invite: "2019-01-13 22:04:28 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "9064424933", name: "Cardio+" },
						contract: { id: "4795390134" },
						group: { id: "5801129422", name: "hospital_eastcoast" }
					},
					{
						seat_number: 9,
						seat_status: "requested",
						date_invite: "2019-06-24 20:53:13 UTC",
						date_accepted: "2019-07-01 20:53:13 UTC",
						date_lockedTill: "2020-07-01 20:53:13 UTC",
						user: {
							name: "Paddy Skelhorne",
							id: "5436950727",
							email: "pskelhorne8@intel.com"
						},
						bundle: { id: "6311866930", name: "Cardio+" },
						contract: { id: "4627130340" },
						group: { id: "6858797677", name: "hospitals_midwest" }
					},
					{
						seat_number: 10,
						seat_status: "locked",
						date_invite: "2019-05-31 01:36:44 UTC",
						date_accepted: "2019-06-06 01:36:44 UTC",
						date_lockedTill: "2020-06-06 01:36:44 UTC",
						user: {
							name: "Levon Hacker",
							id: "2876852709",
							email: "lhacker9@photobucket.com"
						},
						bundle: { id: "2048014343", name: "HeartSymphony" },
						contract: { id: "8394773117" },
						group: { id: "8740180189", name: "hospitals_midwest" }
					},
					{
						seat_number: 11,
						seat_status: "requested",
						date_invite: "2019-08-12 13:05:52 UTC",
						date_accepted: "2019-09-07 13:05:52 UTC",
						date_lockedTill: "2020-09-07 13:05:52 UTC",
						user: {
							name: "Creight Seed",
							id: "1145180790",
							email: "cseeda@wisc.edu"
						},
						bundle: { id: "1423009948", name: "OmegaSap" },
						contract: { id: "5607202095" },
						group: { id: "0402067002", name: "hospital_southern" }
					},
					{
						seat_number: 12,
						seat_status: "requested",
						date_invite: "2018-11-11 21:27:48 UTC",
						date_accepted: "2018-11-20 21:27:48 UTC",
						date_lockedTill: "2019-11-20 21:27:48 UTC",
						user: {
							name: "Emmey Biagioni",
							id: "3612463323",
							email: "ebiagionib@domainmarket.com"
						},
						bundle: { id: "2635752044", name: "OmegaSap" },
						contract: { id: "7583902641" },
						group: { id: "4550212009", name: "hospital_southern" }
					},
					{
						seat_number: 13,
						seat_status: "filled",
						date_invite: "2019-05-09 15:26:11 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "5598482475", name: "Acred360" },
						contract: { id: "1865264934" },
						group: { id: "0720121250", name: "hospital_southern" }
					},
					{
						seat_number: 14,
						seat_status: "requested",
						date_invite: "2019-01-26 06:12:09 UTC",
						date_accepted: "2019-02-18 06:12:09 UTC",
						date_lockedTill: "2020-02-18 06:12:09 UTC",
						user: {
							name: null,
							id: "1429298221",
							email: "ptappd@shutterfly.com"
						},
						bundle: { id: "8089070654", name: "OmegaSap" },
						contract: { id: "0634288332" },
						group: { id: "9081828478", name: "hospital_southern" }
					},
					{
						seat_number: 15,
						seat_status: "locked",
						date_invite: "2018-12-08 06:03:51 UTC",
						date_accepted: "2018-12-12 06:03:51 UTC",
						date_lockedTill: "2019-12-12 06:03:51 UTC",
						user: {
							name: "Kial Loughney",
							id: "0056854687",
							email: "kloughneye@ted.com"
						},
						bundle: { id: "6353745052", name: "OmegaSap" },
						contract: { id: "5410308734" },
						group: { id: "7134035998", name: "hospital_eastcoast" }
					},
					{
						seat_number: 16,
						seat_status: "locked",
						date_invite: "2019-08-16 11:57:50 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "8629941440", name: "OmegaSap" },
						contract: { id: "8461993471" },
						group: { id: "3695282189", name: "hospitals_midwest" }
					},
					{
						seat_number: 17,
						seat_status: "unused",
						date_invite: "2019-05-06 05:00:08 UTC",
						date_accepted: "2019-05-25 05:00:08 UTC",
						date_lockedTill: "2020-05-25 05:00:08 UTC",
						user: {
							name: "Ulick Vallow",
							id: "3709133320",
							email: "uvallowg@telegraph.co.uk"
						},
						bundle: { id: "7162356829", name: "Cardio+" },
						contract: { id: "7994261489" },
						group: { id: "9177455071", name: "hospitals_westcoast" }
					},
					{
						seat_number: 18,
						seat_status: "requested",
						date_invite: "2018-11-26 07:25:32 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "6282379079", name: "Cardio+" },
						contract: { id: "1869266920" },
						group: { id: "6570434098", name: "hospital_eastcoast" }
					},
					{
						seat_number: 19,
						seat_status: "unused",
						date_invite: "2019-06-22 07:10:54 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "4697944050", name: "Cardio+" },
						contract: { id: "7300564895" },
						group: { id: "1273707138", name: "hospitals_midwest" }
					},
					{
						seat_number: 20,
						seat_status: "locked",
						date_invite: "2019-05-06 16:48:40 UTC",
						date_accepted: "2019-05-21 16:48:40 UTC",
						date_lockedTill: "2020-05-21 16:48:40 UTC",
						user: {
							name: "Pam Grissett",
							id: "8063713108",
							email: "pgrissettj@unesco.org"
						},
						bundle: { id: "3667064771", name: "Cardio+" },
						contract: { id: "6052104750" },
						group: { id: "8801209611", name: "default" }
					},
					{
						seat_number: 21,
						seat_status: "unused",
						date_invite: "2019-06-13 05:44:49 UTC",
						date_accepted: "2019-06-26 05:44:49 UTC",
						date_lockedTill: "2020-06-26 05:44:49 UTC",
						user: {
							name: "Linus Doniso",
							id: "0190400016",
							email: "ldonisok@ebay.co.uk"
						},
						bundle: { id: "1814335338", name: "Cardio+" },
						contract: { id: "7501786816" },
						group: { id: "8456439892", name: "default" }
					},
					{
						seat_number: 22,
						seat_status: "filled",
						date_invite: "2019-04-12 11:29:36 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "0446521753", name: "HeartSymphony" },
						contract: { id: "8167068344" },
						group: { id: "7438784483", name: "hospitals_westcoast" }
					},
					{
						seat_number: 23,
						seat_status: "requested",
						date_invite: "2018-11-22 10:28:37 UTC",
						date_accepted: "2018-12-06 10:28:37 UTC",
						date_lockedTill: "2019-12-06 10:28:37 UTC",
						user: {
							name: "Dorette Berzons",
							id: "1000386589",
							email: "dberzonsm@360.cn"
						},
						bundle: { id: "6593569984", name: "OmegaSap" },
						contract: { id: "5041478466" },
						group: { id: "8390709824", name: "hospitals_midwest" }
					},
					{
						seat_number: 24,
						seat_status: "filled",
						date_invite: "2019-08-05 20:07:32 UTC",
						date_accepted: "2019-08-28 20:07:32 UTC",
						date_lockedTill: "2020-08-28 20:07:32 UTC",
						user: {
							name: "Axe Whitecross",
							id: "6198658372",
							email: "awhitecrossn@diigo.com"
						},
						bundle: { id: "2306751425", name: "OmegaSap" },
						contract: { id: "3496521493" },
						group: { id: "9574630637", name: "default" }
					},
					{
						seat_number: 25,
						seat_status: "filled",
						date_invite: "2019-10-07 19:05:05 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "2135337188", name: "HeartSymphony" },
						contract: { id: "4214091719" },
						group: { id: "7686027009", name: "hospitals_westcoast" }
					},
					{
						seat_number: 26,
						seat_status: "filled",
						date_invite: "2019-08-04 14:09:40 UTC",
						date_accepted: "2019-09-02 14:09:40 UTC",
						date_lockedTill: "2020-09-02 14:09:40 UTC",
						user: {
							name: null,
							id: "0252560632",
							email: "krispinep@miibeian.gov.cn"
						},
						bundle: { id: "8424336154", name: "Acred360" },
						contract: { id: "0836366457" },
						group: { id: "3345761629", name: "hospital_eastcoast" }
					},
					{
						seat_number: 27,
						seat_status: "requested",
						date_invite: "2019-04-12 07:38:12 UTC",
						date_accepted: "2019-04-24 07:38:12 UTC",
						date_lockedTill: "2020-04-24 07:38:12 UTC",
						user: {
							name: "Doria Sponer",
							id: "8665005173",
							email: "dsponerq@lulu.com"
						},
						bundle: { id: "3933658424", name: "Acred360" },
						contract: { id: "5264681724" },
						group: { id: "9868710928", name: "hospital_southern" }
					},
					{
						seat_number: 28,
						seat_status: "locked",
						date_invite: "2019-08-23 02:24:25 UTC",
						date_accepted: "2019-09-16 02:24:25 UTC",
						date_lockedTill: "2020-09-16 02:24:25 UTC",
						user: {
							name: "Mitchell Bambrugh",
							id: "7549815394",
							email: "mbambrughr@alexa.com"
						},
						bundle: { id: "9925311662", name: "Acred360" },
						contract: { id: "9503403110" },
						group: { id: "6387836947", name: "hospital_southern" }
					},
					{
						seat_number: 29,
						seat_status: "filled",
						date_invite: "2019-09-19 08:39:46 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "2010001704", name: "HeartSymphony" },
						contract: { id: "4899780302" },
						group: { id: "1870196406", name: "hospital_eastcoast" }
					},
					{
						seat_number: 30,
						seat_status: "filled",
						date_invite: "2019-03-19 07:10:52 UTC",
						date_accepted: "2019-03-26 07:10:52 UTC",
						date_lockedTill: "2020-03-26 07:10:52 UTC",
						user: {
							name: "Reg Cranna",
							id: "5995934079",
							email: "rcrannat@examiner.com"
						},
						bundle: { id: "8086092152", name: "Acred360" },
						contract: { id: "5198931920" },
						group: { id: "0490019511", name: "hospitals_westcoast" }
					},
					{
						seat_number: 31,
						seat_status: "filled",
						date_invite: "2019-10-13 13:49:51 UTC",
						date_accepted: "2019-11-04 13:49:51 UTC",
						date_lockedTill: "2020-11-04 13:49:51 UTC",
						user: {
							name: "Hadria McAlinden",
							id: "5451884574",
							email: "hmcalindenu@npr.org"
						},
						bundle: { id: "4457643587", name: "Acred360" },
						contract: { id: "7946259030" },
						group: { id: "9385331239", name: "hospitals_westcoast" }
					},
					{
						seat_number: 32,
						seat_status: "locked",
						date_invite: "2019-09-16 22:11:40 UTC",
						date_accepted: "2019-10-05 22:11:40 UTC",
						date_lockedTill: "2020-10-05 22:11:40 UTC",
						user: {
							name: null,
							id: "4831873466",
							email: "wchattersv@mediafire.com"
						},
						bundle: { id: "9831303469", name: "Cardio+" },
						contract: { id: "0819576231" },
						group: { id: "0358719037", name: "hospitals_midwest" }
					},
					{
						seat_number: 33,
						seat_status: "filled",
						date_invite: "2019-03-31 17:48:13 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "1522812866", name: "Cardio+" },
						contract: { id: "8283436851" },
						group: { id: "4054012593", name: "hospital_southern" }
					},
					{
						seat_number: 34,
						seat_status: "requested",
						date_invite: "2019-04-18 02:42:42 UTC",
						date_accepted: "2019-04-29 02:42:42 UTC",
						date_lockedTill: "2020-04-29 02:42:42 UTC",
						user: {
							name: "Howey Manger",
							id: "7549380813",
							email: "hmangerx@lycos.com"
						},
						bundle: { id: "5854929023", name: "Acred360" },
						contract: { id: "8775893055" },
						group: { id: "4955986958", name: "hospital_eastcoast" }
					},
					{
						seat_number: 35,
						seat_status: "requested",
						date_invite: "2019-08-31 22:45:49 UTC",
						date_accepted: "2019-09-14 22:45:49 UTC",
						date_lockedTill: "2020-09-14 22:45:49 UTC",
						user: {
							name: "Fancie Smallwood",
							id: "6747562704",
							email: "fsmallwoody@alibaba.com"
						},
						bundle: { id: "0517400345", name: "OmegaSap" },
						contract: { id: "5343750105" },
						group: { id: "0561017596", name: "hospital_eastcoast" }
					},
					{
						seat_number: 36,
						seat_status: "filled",
						date_invite: "2019-08-05 13:18:57 UTC",
						date_accepted: "2019-08-27 13:18:57 UTC",
						date_lockedTill: "2020-08-27 13:18:57 UTC",
						user: {
							name: "Valerie Botte",
							id: "3006334147",
							email: "vbottez@utexas.edu"
						},
						bundle: { id: "7658157333", name: "HeartSymphony" },
						contract: { id: "7375320756" },
						group: { id: "0040197242", name: "default" }
					},
					{
						seat_number: 37,
						seat_status: "requested",
						date_invite: "2019-03-12 23:16:00 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "9536894170", name: "OmegaSap" },
						contract: { id: "5980819018" },
						group: { id: "3766712703", name: "hospital_southern" }
					},
					{
						seat_number: 38,
						seat_status: "locked",
						date_invite: "2019-01-10 11:07:57 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "3025068365", name: "OmegaSap" },
						contract: { id: "1414226569" },
						group: { id: "6867489548", name: "hospital_southern" }
					},
					{
						seat_number: 39,
						seat_status: "filled",
						date_invite: "2019-01-02 01:01:18 UTC",
						date_accepted: "2019-01-17 01:01:18 UTC",
						date_lockedTill: "2020-01-17 01:01:18 UTC",
						user: {
							name: null,
							id: "4100794968",
							email: "jenga12@princeton.edu"
						},
						bundle: { id: "7510129883", name: "HeartSymphony" },
						contract: { id: "1488870481" },
						group: { id: "4807177494", name: "hospital_eastcoast" }
					},
					{
						seat_number: 40,
						seat_status: "filled",
						date_invite: "2019-06-28 17:37:15 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "4250037481", name: "Cardio+" },
						contract: { id: "4537356633" },
						group: { id: "0705868250", name: "hospitals_midwest" }
					},
					{
						seat_number: 41,
						seat_status: "requested",
						date_invite: "2019-04-18 03:32:52 UTC",
						date_accepted: "2019-05-18 03:32:52 UTC",
						date_lockedTill: "2020-05-18 03:32:52 UTC",
						user: {
							name: "Davita Lovitt",
							id: "8851074406",
							email: "dlovitt14@shop-pro.jp"
						},
						bundle: { id: "6962057265", name: "OmegaSap" },
						contract: { id: "0198189767" },
						group: { id: "2170977396", name: "hospital_southern" }
					},
					{
						seat_number: 42,
						seat_status: "unused",
						date_invite: "2019-01-22 16:22:30 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "1481556954", name: "OmegaSap" },
						contract: { id: "0709027833" },
						group: { id: "2880777239", name: "hospitals_westcoast" }
					},
					{
						seat_number: 43,
						seat_status: "locked",
						date_invite: "2018-12-28 03:38:48 UTC",
						date_accepted: "2019-01-07 03:38:48 UTC",
						date_lockedTill: "2020-01-07 03:38:48 UTC",
						user: {
							name: "Reta Pelham",
							id: "1060177988",
							email: "rpelham16@webmd.com"
						},
						bundle: { id: "2865806763", name: "Cardio+" },
						contract: { id: "7602390077" },
						group: { id: "7890258093", name: "hospitals_midwest" }
					},
					{
						seat_number: 44,
						seat_status: "unused",
						date_invite: "2019-07-26 04:45:11 UTC",
						date_accepted: "2019-08-09 04:45:11 UTC",
						date_lockedTill: "2020-08-09 04:45:11 UTC",
						user: {
							name: "Brynn Riby",
							id: "2786876175",
							email: "briby17@t-online.de"
						},
						bundle: { id: "0216590031", name: "Acred360" },
						contract: { id: "3390881537" },
						group: { id: "8462348103", name: "hospitals_westcoast" }
					},
					{
						seat_number: 45,
						seat_status: "filled",
						date_invite: "2019-08-26 01:13:59 UTC",
						date_accepted: "2019-09-25 01:13:59 UTC",
						date_lockedTill: "2020-09-25 01:13:59 UTC",
						user: {
							name: null,
							id: "6792475784",
							email: "dgrimmert18@phpbb.com"
						},
						bundle: { id: "4423396888", name: "OmegaSap" },
						contract: { id: "9758631495" },
						group: { id: "7489408279", name: "hospital_southern" }
					},
					{
						seat_number: 46,
						seat_status: "filled",
						date_invite: "2018-10-22 08:39:14 UTC",
						date_accepted: "2018-11-17 08:39:14 UTC",
						date_lockedTill: "2019-11-17 08:39:14 UTC",
						user: {
							name: "Tomasine Gwyer",
							id: "3902366268",
							email: "tgwyer19@barnesandnoble.com"
						},
						bundle: { id: "8580169981", name: "Acred360" },
						contract: { id: "4685369423" },
						group: { id: "2617497237", name: "default" }
					},
					{
						seat_number: 47,
						seat_status: "locked",
						date_invite: "2019-09-29 23:19:10 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "5679542114", name: "Acred360" },
						contract: { id: "2151754931" },
						group: { id: "0773347158", name: "hospitals_westcoast" }
					},
					{
						seat_number: 48,
						seat_status: "unused",
						date_invite: "2019-04-08 10:45:20 UTC",
						date_accepted: "2019-05-03 10:45:20 UTC",
						date_lockedTill: "2020-05-03 10:45:20 UTC",
						user: {
							name: null,
							id: "9394825149",
							email: "bdefew1b@bloglovin.com"
						},
						bundle: { id: "8597687432", name: "Acred360" },
						contract: { id: "8158526147" },
						group: { id: "5703336931", name: "hospital_eastcoast" }
					},
					{
						seat_number: 49,
						seat_status: "filled",
						date_invite: "2018-12-17 19:22:42 UTC",
						date_accepted: "2019-01-14 19:22:42 UTC",
						date_lockedTill: "2020-01-14 19:22:42 UTC",
						user: {
							name: "Wandis Ecclestone",
							id: "2349095615",
							email: "wecclestone1c@reverbnation.com"
						},
						bundle: { id: "8315630731", name: "Acred360" },
						contract: { id: "4423856925" },
						group: { id: "2136275446", name: "hospital_eastcoast" }
					},
					{
						seat_number: 50,
						seat_status: "locked",
						date_invite: "2019-02-19 23:37:02 UTC",
						date_accepted: "2019-03-04 23:37:02 UTC",
						date_lockedTill: "2020-03-04 23:37:02 UTC",
						user: {
							name: "Carlie Redihalgh",
							id: "2839270056",
							email: "credihalgh1d@slideshare.net"
						},
						bundle: { id: "3445006758", name: "Cardio+" },
						contract: { id: "8823540174" },
						group: { id: "4128545896", name: "hospital_eastcoast" }
					},
					{
						seat_number: 51,
						seat_status: "locked",
						date_invite: "2019-06-21 00:37:08 UTC",
						date_accepted: "2019-07-02 00:37:08 UTC",
						date_lockedTill: "2020-07-02 00:37:08 UTC",
						user: {
							name: "Melly Cubbino",
							id: "4569047415",
							email: "mcubbino1e@huffingtonpost.com"
						},
						bundle: { id: "2663538713", name: "OmegaSap" },
						contract: { id: "7965855917" },
						group: { id: "5218265302", name: "hospitals_westcoast" }
					},
					{
						seat_number: 52,
						seat_status: "requested",
						date_invite: "2019-04-06 23:03:32 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "8411638429", name: "Acred360" },
						contract: { id: "5858725574" },
						group: { id: "0133707470", name: "hospital_southern" }
					},
					{
						seat_number: 53,
						seat_status: "locked",
						date_invite: "2019-01-03 15:12:44 UTC",
						date_accepted: "2019-02-02 15:12:44 UTC",
						date_lockedTill: "2020-02-02 15:12:44 UTC",
						user: {
							name: "Mariette Hillaby",
							id: "5557205484",
							email: "mhillaby1g@abc.net.au"
						},
						bundle: { id: "6589295067", name: "OmegaSap" },
						contract: { id: "9287853547" },
						group: { id: "8760498312", name: "default" }
					},
					{
						seat_number: 54,
						seat_status: "locked",
						date_invite: "2019-08-22 13:40:18 UTC",
						date_accepted: "2019-09-10 13:40:18 UTC",
						date_lockedTill: "2020-09-10 13:40:18 UTC",
						user: {
							name: "Martie Heberden",
							id: "0624573090",
							email: "mheberden1h@techcrunch.com"
						},
						bundle: { id: "6240472175", name: "OmegaSap" },
						contract: { id: "1778508649" },
						group: { id: "1160408675", name: "hospitals_westcoast" }
					},
					{
						seat_number: 55,
						seat_status: "locked",
						date_invite: "2019-01-22 13:06:27 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "2793701541", name: "Cardio+" },
						contract: { id: "8772983396" },
						group: { id: "2436514718", name: "hospitals_midwest" }
					},
					{
						seat_number: 56,
						seat_status: "locked",
						date_invite: "2018-11-22 23:39:27 UTC",
						date_accepted: "2018-11-24 23:39:27 UTC",
						date_lockedTill: "2019-11-24 23:39:27 UTC",
						user: {
							name: "Joane Helliwell",
							id: "7855277283",
							email: "jhelliwell1j@google.ca"
						},
						bundle: { id: "2958405017", name: "Cardio+" },
						contract: { id: "6235340936" },
						group: { id: "6715934471", name: "hospitals_westcoast" }
					},
					{
						seat_number: 57,
						seat_status: "requested",
						date_invite: "2019-06-17 10:20:53 UTC",
						date_accepted: "2019-07-01 10:20:53 UTC",
						date_lockedTill: "2020-07-01 10:20:53 UTC",
						user: {
							name: "Meriel Grishechkin",
							id: "9294584907",
							email: "mgrishechkin1k@home.pl"
						},
						bundle: { id: "3421501368", name: "OmegaSap" },
						contract: { id: "6471752358" },
						group: { id: "6550773060", name: "hospital_eastcoast" }
					},
					{
						seat_number: 58,
						seat_status: "unused",
						date_invite: "2018-11-15 23:27:44 UTC",
						date_accepted: "2018-12-10 23:27:44 UTC",
						date_lockedTill: "2019-12-10 23:27:44 UTC",
						user: {
							name: null,
							id: "2795737221",
							email: "acasarino1l@oakley.com"
						},
						bundle: { id: "8812918763", name: "Acred360" },
						contract: { id: "3629109375" },
						group: { id: "9475547021", name: "hospitals_midwest" }
					},
					{
						seat_number: 59,
						seat_status: "unused",
						date_invite: "2019-05-18 06:34:44 UTC",
						date_accepted: "2019-06-06 06:34:44 UTC",
						date_lockedTill: "2020-06-06 06:34:44 UTC",
						user: {
							name: "Channa Kindred",
							id: "1816322017",
							email: "ckindred1m@bloglovin.com"
						},
						bundle: { id: "3440946382", name: "OmegaSap" },
						contract: { id: "0447891211" },
						group: { id: "8420318841", name: "default" }
					},
					{
						seat_number: 60,
						seat_status: "filled",
						date_invite: "2019-02-24 18:51:07 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "5571717148", name: "Cardio+" },
						contract: { id: "0216586642" },
						group: { id: "4816597896", name: "hospitals_westcoast" }
					},
					{
						seat_number: 61,
						seat_status: "unused",
						date_invite: "2019-03-14 03:21:45 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "9162865006", name: "OmegaSap" },
						contract: { id: "2357032746" },
						group: { id: "3756604537", name: "hospitals_midwest" }
					},
					{
						seat_number: 62,
						seat_status: "locked",
						date_invite: "2018-10-17 18:45:56 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "6326554809", name: "Acred360" },
						contract: { id: "8096233304" },
						group: { id: "9990458347", name: "hospitals_westcoast" }
					},
					{
						seat_number: 63,
						seat_status: "requested",
						date_invite: "2018-12-01 23:37:48 UTC",
						date_accepted: "2018-12-05 23:37:48 UTC",
						date_lockedTill: "2019-12-05 23:37:48 UTC",
						user: {
							name: "Milo Challin",
							id: "8223136667",
							email: "mchallin1q@usnews.com"
						},
						bundle: { id: "6320556921", name: "OmegaSap" },
						contract: { id: "4910695794" },
						group: { id: "1300576642", name: "hospitals_midwest" }
					},
					{
						seat_number: 64,
						seat_status: "unused",
						date_invite: "2019-10-11 12:17:56 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "2721373584", name: "Cardio+" },
						contract: { id: "2194388330" },
						group: { id: "4149621689", name: "hospitals_westcoast" }
					},
					{
						seat_number: 65,
						seat_status: "filled",
						date_invite: "2018-11-28 20:11:28 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "2614421674", name: "Cardio+" },
						contract: { id: "7468629102" },
						group: { id: "9161815037", name: "hospitals_westcoast" }
					},
					{
						seat_number: 66,
						seat_status: "requested",
						date_invite: "2019-03-21 04:08:45 UTC",
						date_accepted: "2019-04-19 04:08:45 UTC",
						date_lockedTill: "2020-04-19 04:08:45 UTC",
						user: {
							name: null,
							id: "5751978850",
							email: "glivard1t@cisco.com"
						},
						bundle: { id: "5392097417", name: "Acred360" },
						contract: { id: "9786466778" },
						group: { id: "7670998463", name: "hospitals_westcoast" }
					},
					{
						seat_number: 67,
						seat_status: "unused",
						date_invite: "2019-10-16 12:03:09 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "3224806611", name: "HeartSymphony" },
						contract: { id: "0582153004" },
						group: { id: "2873202863", name: "hospital_southern" }
					},
					{
						seat_number: 68,
						seat_status: "requested",
						date_invite: "2019-01-09 08:44:39 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "3679826797", name: "Cardio+" },
						contract: { id: "0143548540" },
						group: { id: "3208147525", name: "hospitals_westcoast" }
					},
					{
						seat_number: 69,
						seat_status: "locked",
						date_invite: "2019-10-05 06:20:44 UTC",
						date_accepted: "2019-10-26 06:20:44 UTC",
						date_lockedTill: "2020-10-26 06:20:44 UTC",
						user: {
							name: "Marina Beyer",
							id: "8901574106",
							email: "mbeyer1w@bizjournals.com"
						},
						bundle: { id: "9369714259", name: "Cardio+" },
						contract: { id: "7391923337" },
						group: { id: "7894788395", name: "hospitals_westcoast" }
					},
					{
						seat_number: 70,
						seat_status: "requested",
						date_invite: "2018-12-28 01:37:45 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "4853535045", name: "OmegaSap" },
						contract: { id: "6548708008" },
						group: { id: "1265100703", name: "default" }
					},
					{
						seat_number: 71,
						seat_status: "requested",
						date_invite: "2019-08-09 10:32:01 UTC",
						date_accepted: "2019-08-29 10:32:01 UTC",
						date_lockedTill: "2020-08-29 10:32:01 UTC",
						user: {
							name: "Queenie Selcraig",
							id: "7008638390",
							email: "qselcraig1y@nymag.com"
						},
						bundle: { id: "5785766875", name: "Acred360" },
						contract: { id: "3189247653" },
						group: { id: "3748188320", name: "hospitals_westcoast" }
					},
					{
						seat_number: 72,
						seat_status: "unused",
						date_invite: "2018-11-12 15:20:40 UTC",
						date_accepted: "2018-11-27 15:20:40 UTC",
						date_lockedTill: "2019-11-27 15:20:40 UTC",
						user: {
							name: "Annnora Winridge",
							id: "8309538149",
							email: "awinridge1z@google.pl"
						},
						bundle: { id: "8371361302", name: "Acred360" },
						contract: { id: "6068469136" },
						group: { id: "8764973305", name: "hospital_eastcoast" }
					},
					{
						seat_number: 73,
						seat_status: "locked",
						date_invite: "2019-10-05 08:53:48 UTC",
						date_accepted: "2019-10-21 08:53:48 UTC",
						date_lockedTill: "2020-10-21 08:53:48 UTC",
						user: {
							name: "Parsifal Emma",
							id: "3299891263",
							email: "pemma20@go.com"
						},
						bundle: { id: "2754179649", name: "OmegaSap" },
						contract: { id: "4496284413" },
						group: { id: "1141148646", name: "default" }
					},
					{
						seat_number: 74,
						seat_status: "requested",
						date_invite: "2019-06-16 08:21:59 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "7723655418", name: "HeartSymphony" },
						contract: { id: "7228273868" },
						group: { id: "3139964084", name: "hospitals_midwest" }
					},
					{
						seat_number: 75,
						seat_status: "unused",
						date_invite: "2019-05-23 19:22:17 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "6952817929", name: "Acred360" },
						contract: { id: "8741552367" },
						group: { id: "8147803421", name: "hospitals_midwest" }
					},
					{
						seat_number: 76,
						seat_status: "requested",
						date_invite: "2019-04-14 05:08:04 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "6111950101", name: "Acred360" },
						contract: { id: "9856404645" },
						group: { id: "9541968064", name: "hospitals_midwest" }
					},
					{
						seat_number: 77,
						seat_status: "requested",
						date_invite: "2019-01-13 10:46:13 UTC",
						date_accepted: "2019-02-05 10:46:13 UTC",
						date_lockedTill: "2020-02-05 10:46:13 UTC",
						user: {
							name: "Neil Lorans",
							id: "3238811832",
							email: "nlorans24@wisc.edu"
						},
						bundle: { id: "0788263557", name: "Cardio+" },
						contract: { id: "5567269107" },
						group: { id: "8164438115", name: "hospital_southern" }
					},
					{
						seat_number: 78,
						seat_status: "unused",
						date_invite: "2019-07-23 09:29:16 UTC",
						date_accepted: "2019-08-21 09:29:16 UTC",
						date_lockedTill: "2020-08-21 09:29:16 UTC",
						user: {
							name: "Ned Twoohy",
							id: "1716119386",
							email: "ntwoohy25@telegraph.co.uk"
						},
						bundle: { id: "7451286597", name: "Cardio+" },
						contract: { id: "9402244005" },
						group: { id: "7034365770", name: "hospital_eastcoast" }
					},
					{
						seat_number: 79,
						seat_status: "filled",
						date_invite: "2019-05-22 10:41:45 UTC",
						date_accepted: "2019-06-05 10:41:45 UTC",
						date_lockedTill: "2020-06-05 10:41:45 UTC",
						user: {
							name: "Kaleb Saurin",
							id: "0982502661",
							email: "ksaurin26@devhub.com"
						},
						bundle: { id: "8981863302", name: "HeartSymphony" },
						contract: { id: "7207789054" },
						group: { id: "3174582941", name: "hospitals_midwest" }
					},
					{
						seat_number: 80,
						seat_status: "requested",
						date_invite: "2019-09-12 22:31:32 UTC",
						date_accepted: "2019-09-20 22:31:32 UTC",
						date_lockedTill: "2020-09-20 22:31:32 UTC",
						user: {
							name: "Magdalena Vedekhov",
							id: "8594008962",
							email: "mvedekhov27@domainmarket.com"
						},
						bundle: { id: "9982879501", name: "HeartSymphony" },
						contract: { id: "4590809790" },
						group: { id: "0252175485", name: "hospitals_midwest" }
					},
					{
						seat_number: 81,
						seat_status: "locked",
						date_invite: "2019-05-09 07:56:03 UTC",
						date_accepted: "2019-05-15 07:56:03 UTC",
						date_lockedTill: "2020-05-15 07:56:03 UTC",
						user: {
							name: null,
							id: "6243673249",
							email: "wrowet28@surveymonkey.com"
						},
						bundle: { id: "2812987491", name: "OmegaSap" },
						contract: { id: "5305957175" },
						group: { id: "1954773918", name: "hospitals_westcoast" }
					},
					{
						seat_number: 82,
						seat_status: "filled",
						date_invite: "2019-06-27 12:53:08 UTC",
						date_accepted: "2019-06-29 12:53:08 UTC",
						date_lockedTill: "2020-06-29 12:53:08 UTC",
						user: {
							name: "Laurene Pires",
							id: "9164829027",
							email: "lpires29@theglobeandmail.com"
						},
						bundle: { id: "9111775638", name: "HeartSymphony" },
						contract: { id: "2456321440" },
						group: { id: "2193434377", name: "hospital_southern" }
					},
					{
						seat_number: 83,
						seat_status: "requested",
						date_invite: "2019-02-11 09:00:31 UTC",
						date_accepted: "2019-02-26 09:00:31 UTC",
						date_lockedTill: "2020-02-26 09:00:31 UTC",
						user: {
							name: "Leroi Trunby",
							id: "7647691616",
							email: "ltrunby2a@163.com"
						},
						bundle: { id: "3496121199", name: "Cardio+" },
						contract: { id: "1320373774" },
						group: { id: "2349858411", name: "hospital_southern" }
					},
					{
						seat_number: 84,
						seat_status: "requested",
						date_invite: "2019-01-02 05:25:24 UTC",
						date_accepted: "2019-01-18 05:25:24 UTC",
						date_lockedTill: "2020-01-18 05:25:24 UTC",
						user: {
							name: "Ennis Casaroli",
							id: "7384452301",
							email: "ecasaroli2b@umich.edu"
						},
						bundle: { id: "6112094346", name: "HeartSymphony" },
						contract: { id: "4709705503" },
						group: { id: "0623320736", name: "hospital_southern" }
					},
					{
						seat_number: 85,
						seat_status: "locked",
						date_invite: "2019-08-18 11:58:21 UTC",
						date_accepted: "2019-09-04 11:58:21 UTC",
						date_lockedTill: "2020-09-04 11:58:21 UTC",
						user: {
							name: "Paulie Tiler",
							id: "7883323101",
							email: "ptiler2c@mayoclinic.com"
						},
						bundle: { id: "7270767132", name: "HeartSymphony" },
						contract: { id: "3262410145" },
						group: { id: "1469638016", name: "default" }
					},
					{
						seat_number: 86,
						seat_status: "locked",
						date_invite: "2019-09-15 05:17:43 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "1321802965", name: "Acred360" },
						contract: { id: "8217229944" },
						group: { id: "5115137281", name: "default" }
					},
					{
						seat_number: 87,
						seat_status: "locked",
						date_invite: "2019-02-19 06:20:19 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "2551095609", name: "OmegaSap" },
						contract: { id: "8365099052" },
						group: { id: "4634952781", name: "hospitals_midwest" }
					},
					{
						seat_number: 88,
						seat_status: "unused",
						date_invite: "2018-10-20 15:55:39 UTC",
						date_accepted: "2018-10-30 15:55:39 UTC",
						date_lockedTill: "2019-10-30 15:55:39 UTC",
						user: {
							name: "Paten Pomfrey",
							id: "8309780435",
							email: "ppomfrey2f@jimdo.com"
						},
						bundle: { id: "2252263668", name: "HeartSymphony" },
						contract: { id: "5142103643" },
						group: { id: "7761705176", name: "hospital_southern" }
					},
					{
						seat_number: 89,
						seat_status: "unused",
						date_invite: "2018-10-28 14:58:24 UTC",
						date_accepted: "2018-11-26 14:58:24 UTC",
						date_lockedTill: "2019-11-26 14:58:24 UTC",
						user: {
							name: null,
							id: "4206319674",
							email: "tkinrade2g@miibeian.gov.cn"
						},
						bundle: { id: "5495899125", name: "Acred360" },
						contract: { id: "8214123499" },
						group: { id: "1220139499", name: "default" }
					},
					{
						seat_number: 90,
						seat_status: "locked",
						date_invite: "2018-12-12 03:16:41 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "6140858527", name: "Cardio+" },
						contract: { id: "5371196718" },
						group: { id: "9396220094", name: "hospital_southern" }
					},
					{
						seat_number: 91,
						seat_status: "requested",
						date_invite: "2019-09-17 20:29:33 UTC",
						date_accepted: "2019-10-03 20:29:33 UTC",
						date_lockedTill: "2020-10-03 20:29:33 UTC",
						user: {
							name: "Morrie Baldocci",
							id: "6961490078",
							email: "mbaldocci2i@wunderground.com"
						},
						bundle: { id: "1531750957", name: "Acred360" },
						contract: { id: "5779763301" },
						group: { id: "9023849153", name: "hospital_eastcoast" }
					},
					{
						seat_number: 92,
						seat_status: "requested",
						date_invite: "2019-06-21 18:15:39 UTC",
						date_accepted: "2019-07-07 18:15:39 UTC",
						date_lockedTill: "2020-07-07 18:15:39 UTC",
						user: {
							name: "Malachi Mitie",
							id: "3714683709",
							email: "mmitie2j@indiegogo.com"
						},
						bundle: { id: "2076395714", name: "Acred360" },
						contract: { id: "4983998890" },
						group: { id: "6952358225", name: "hospitals_westcoast" }
					},
					{
						seat_number: 93,
						seat_status: "locked",
						date_invite: "2019-03-08 16:17:45 UTC",
						date_accepted: "2019-04-02 16:17:45 UTC",
						date_lockedTill: "2020-04-02 16:17:45 UTC",
						user: {
							name: "Oberon Feavearyear",
							id: "4347811534",
							email: "ofeavearyear2k@un.org"
						},
						bundle: { id: "9612129010", name: "Cardio+" },
						contract: { id: "8928510727" },
						group: { id: "6167873216", name: "hospital_eastcoast" }
					},
					{
						seat_number: 94,
						seat_status: "unused",
						date_invite: "2018-12-10 04:55:25 UTC",
						date_accepted: "2019-01-02 04:55:25 UTC",
						date_lockedTill: "2020-01-02 04:55:25 UTC",
						user: {
							name: "Collete Vuitte",
							id: "9841194012",
							email: "cvuitte2l@wikimedia.org"
						},
						bundle: { id: "9962378427", name: "HeartSymphony" },
						contract: { id: "6426215124" },
						group: { id: "6489465095", name: "hospitals_midwest" }
					},
					{
						seat_number: 95,
						seat_status: "requested",
						date_invite: "2019-07-16 04:03:10 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "6484676401", name: "OmegaSap" },
						contract: { id: "2065423916" },
						group: { id: "0538208968", name: "hospital_eastcoast" }
					},
					{
						seat_number: 96,
						seat_status: "unused",
						date_invite: "2019-03-06 21:46:10 UTC",
						date_accepted: "2019-03-07 21:46:10 UTC",
						date_lockedTill: "2020-03-07 21:46:10 UTC",
						user: {
							name: "Lewiss Emanueli",
							id: "2573810374",
							email: "lemanueli2n@slate.com"
						},
						bundle: { id: "2726160655", name: "OmegaSap" },
						contract: { id: "4255817366" },
						group: { id: "2939111829", name: "default" }
					},
					{
						seat_number: 97,
						seat_status: "requested",
						date_invite: "2019-03-28 06:23:15 UTC",
						date_accepted: "2019-04-25 06:23:15 UTC",
						date_lockedTill: "2020-04-25 06:23:15 UTC",
						user: {
							name: "Ettore Grzesiewicz",
							id: "1945502637",
							email: "egrzesiewicz2o@wisc.edu"
						},
						bundle: { id: "8933011134", name: "OmegaSap" },
						contract: { id: "6071103827" },
						group: { id: "3191328671", name: "hospitals_midwest" }
					},
					{
						seat_number: 98,
						seat_status: "filled",
						date_invite: "2019-10-10 21:00:36 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "3526197932", name: "OmegaSap" },
						contract: { id: "4868777666" },
						group: { id: "1036855728", name: "default" }
					},
					{
						seat_number: 99,
						seat_status: "filled",
						date_invite: "2018-11-21 07:13:40 UTC",
						date_accepted: "2018-11-30 07:13:40 UTC",
						date_lockedTill: "2019-11-30 07:13:40 UTC",
						user: {
							name: "Friedrick Benion",
							id: "8223638732",
							email: "fbenion2q@reddit.com"
						},
						bundle: { id: "7312309837", name: "Cardio+" },
						contract: { id: "7782236970" },
						group: { id: "1376557240", name: "default" }
					},
					{
						seat_number: 100,
						seat_status: "locked",
						date_invite: "2019-09-17 12:14:36 UTC",
						date_accepted: "2019-09-24 12:14:36 UTC",
						date_lockedTill: "2020-09-24 12:14:36 UTC",
						user: {
							name: null,
							id: "6563615423",
							email: "hrowthorn2r@spiegel.de"
						},
						bundle: { id: "7485780004", name: "Acred360" },
						contract: { id: "8533840569" },
						group: { id: "9759010331", name: "hospitals_midwest" }
					},
					{
						seat_number: 101,
						seat_status: "unused",
						date_invite: "2019-03-29 13:18:04 UTC",
						date_accepted: "2019-03-30 13:18:04 UTC",
						date_lockedTill: "2020-03-30 13:18:04 UTC",
						user: {
							name: "Donielle Marushak",
							id: "5517323257",
							email: "dmarushak2s@hugedomains.com"
						},
						bundle: { id: "1932805118", name: "HeartSymphony" },
						contract: { id: "6571493865" },
						group: { id: "9364621829", name: "hospitals_westcoast" }
					},
					{
						seat_number: 102,
						seat_status: "locked",
						date_invite: "2018-11-12 20:24:06 UTC",
						date_accepted: "2018-11-24 20:24:06 UTC",
						date_lockedTill: "2019-11-24 20:24:06 UTC",
						user: {
							name: "Grantley Wadesworth",
							id: "5114244027",
							email: "gwadesworth2t@zdnet.com"
						},
						bundle: { id: "4234492453", name: "OmegaSap" },
						contract: { id: "1144678155" },
						group: { id: "9658813612", name: "default" }
					},
					{
						seat_number: 103,
						seat_status: "requested",
						date_invite: "2019-03-26 13:37:02 UTC",
						date_accepted: "2019-03-31 13:37:02 UTC",
						date_lockedTill: "2020-03-31 13:37:02 UTC",
						user: {
							name: null,
							id: "8342130422",
							email: "bfarnworth2u@mapquest.com"
						},
						bundle: { id: "1495661679", name: "HeartSymphony" },
						contract: { id: "6711891440" },
						group: { id: "0187945644", name: "hospital_eastcoast" }
					},
					{
						seat_number: 104,
						seat_status: "filled",
						date_invite: "2019-09-21 16:30:42 UTC",
						date_accepted: "2019-09-25 16:30:42 UTC",
						date_lockedTill: "2020-09-25 16:30:42 UTC",
						user: {
							name: "Marabel Tomasz",
							id: "3845775934",
							email: "mtomasz2v@china.com.cn"
						},
						bundle: { id: "5992532497", name: "OmegaSap" },
						contract: { id: "0144727604" },
						group: { id: "2249560336", name: "hospitals_midwest" }
					},
					{
						seat_number: 105,
						seat_status: "unused",
						date_invite: "2018-12-15 11:57:57 UTC",
						date_accepted: "2018-12-21 11:57:57 UTC",
						date_lockedTill: "2019-12-21 11:57:57 UTC",
						user: {
							name: "Denver Picardo",
							id: "0729070340",
							email: "dpicardo2w@homestead.com"
						},
						bundle: { id: "1138080411", name: "Acred360" },
						contract: { id: "7315979023" },
						group: { id: "4555022366", name: "default" }
					},
					{
						seat_number: 106,
						seat_status: "locked",
						date_invite: "2019-04-15 09:09:47 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "9059694216", name: "HeartSymphony" },
						contract: { id: "1836006199" },
						group: { id: "1571977070", name: "hospitals_midwest" }
					},
					{
						seat_number: 107,
						seat_status: "requested",
						date_invite: "2019-05-30 17:34:33 UTC",
						date_accepted: "2019-06-21 17:34:33 UTC",
						date_lockedTill: "2020-06-21 17:34:33 UTC",
						user: {
							name: "Mordy Bissatt",
							id: "2555025762",
							email: "mbissatt2y@tinypic.com"
						},
						bundle: { id: "2486598411", name: "Acred360" },
						contract: { id: "4554662387" },
						group: { id: "5050353983", name: "hospitals_westcoast" }
					},
					{
						seat_number: 108,
						seat_status: "filled",
						date_invite: "2019-05-12 16:46:46 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "7548629373", name: "HeartSymphony" },
						contract: { id: "9332882099" },
						group: { id: "8961309361", name: "hospital_southern" }
					},
					{
						seat_number: 109,
						seat_status: "locked",
						date_invite: "2018-11-30 11:55:26 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "5995663354", name: "HeartSymphony" },
						contract: { id: "2050748719" },
						group: { id: "7843699700", name: "hospital_eastcoast" }
					},
					{
						seat_number: 110,
						seat_status: "filled",
						date_invite: "2018-10-28 03:29:10 UTC",
						date_accepted: "2018-11-18 03:29:10 UTC",
						date_lockedTill: "2019-11-18 03:29:10 UTC",
						user: {
							name: null,
							id: "2030475038",
							email: "pravens31@multiply.com"
						},
						bundle: { id: "7261298100", name: "HeartSymphony" },
						contract: { id: "6542590914" },
						group: { id: "2538310295", name: "hospital_southern" }
					},
					{
						seat_number: 111,
						seat_status: "locked",
						date_invite: "2019-01-25 22:05:32 UTC",
						date_accepted: "2019-02-01 22:05:32 UTC",
						date_lockedTill: "2020-02-01 22:05:32 UTC",
						user: {
							name: null,
							id: "7959537765",
							email: "grabley32@addthis.com"
						},
						bundle: { id: "5353627588", name: "Cardio+" },
						contract: { id: "2234447914" },
						group: { id: "4451300298", name: "hospital_eastcoast" }
					},
					{
						seat_number: 112,
						seat_status: "requested",
						date_invite: "2019-05-16 16:00:47 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "3163791562", name: "HeartSymphony" },
						contract: { id: "1971807443" },
						group: { id: "7090331325", name: "default" }
					},
					{
						seat_number: 113,
						seat_status: "requested",
						date_invite: "2019-01-15 02:10:10 UTC",
						date_accepted: "2019-01-26 02:10:10 UTC",
						date_lockedTill: "2020-01-26 02:10:10 UTC",
						user: {
							name: "Bourke Sellick",
							id: "3354803332",
							email: "bsellick34@yellowbook.com"
						},
						bundle: { id: "7727858530", name: "HeartSymphony" },
						contract: { id: "1512967340" },
						group: { id: "8931189147", name: "hospital_southern" }
					},
					{
						seat_number: 114,
						seat_status: "requested",
						date_invite: "2018-11-04 07:41:15 UTC",
						date_accepted: "2018-11-21 07:41:15 UTC",
						date_lockedTill: "2019-11-21 07:41:15 UTC",
						user: {
							name: "Ronica Holdron",
							id: "4395862012",
							email: "rholdron35@twitter.com"
						},
						bundle: { id: "2402953297", name: "HeartSymphony" },
						contract: { id: "0601879180" },
						group: { id: "4836481816", name: "hospital_eastcoast" }
					},
					{
						seat_number: 115,
						seat_status: "locked",
						date_invite: "2019-09-27 06:48:53 UTC",
						date_accepted: "2019-10-10 06:48:53 UTC",
						date_lockedTill: "2020-10-10 06:48:53 UTC",
						user: {
							name: "Jobie Cashen",
							id: "0802739933",
							email: "jcashen36@wunderground.com"
						},
						bundle: { id: "4504046512", name: "OmegaSap" },
						contract: { id: "5543424040" },
						group: { id: "0529592629", name: "default" }
					},
					{
						seat_number: 116,
						seat_status: "requested",
						date_invite: "2019-07-27 10:20:58 UTC",
						date_accepted: "2019-07-31 10:20:58 UTC",
						date_lockedTill: "2020-07-31 10:20:58 UTC",
						user: {
							name: "Anna-diane Jendas",
							id: "5388958639",
							email: "ajendas37@vimeo.com"
						},
						bundle: { id: "9130594090", name: "Cardio+" },
						contract: { id: "8810666019" },
						group: { id: "3397363319", name: "hospitals_westcoast" }
					},
					{
						seat_number: 117,
						seat_status: "unused",
						date_invite: "2018-11-13 11:24:43 UTC",
						date_accepted: "2018-11-27 11:24:43 UTC",
						date_lockedTill: "2019-11-27 11:24:43 UTC",
						user: {
							name: null,
							id: "1394325984",
							email: "rclemanceau38@newyorker.com"
						},
						bundle: { id: "1428903188", name: "Acred360" },
						contract: { id: "6959525165" },
						group: { id: "6959035656", name: "hospital_southern" }
					},
					{
						seat_number: 118,
						seat_status: "requested",
						date_invite: "2019-09-22 07:37:14 UTC",
						date_accepted: "2019-10-16 07:37:14 UTC",
						date_lockedTill: "2020-10-16 07:37:14 UTC",
						user: {
							name: null,
							id: "1302276749",
							email: "sstainson39@bbc.co.uk"
						},
						bundle: { id: "2409950273", name: "OmegaSap" },
						contract: { id: "1926293339" },
						group: { id: "9917927076", name: "default" }
					},
					{
						seat_number: 119,
						seat_status: "filled",
						date_invite: "2019-04-13 17:28:01 UTC",
						date_accepted: "2019-05-05 17:28:01 UTC",
						date_lockedTill: "2020-05-05 17:28:01 UTC",
						user: {
							name: "Carolin Hartzog",
							id: "1971668705",
							email: "chartzog3a@jugem.jp"
						},
						bundle: { id: "7061584127", name: "OmegaSap" },
						contract: { id: "4978056793" },
						group: { id: "5756119315", name: "default" }
					},
					{
						seat_number: 120,
						seat_status: "filled",
						date_invite: "2018-12-07 15:22:31 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "2905625221", name: "OmegaSap" },
						contract: { id: "0762309618" },
						group: { id: "6370882562", name: "hospital_southern" }
					},
					{
						seat_number: 121,
						seat_status: "requested",
						date_invite: "2019-04-22 10:52:04 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "7457142954", name: "OmegaSap" },
						contract: { id: "3134195922" },
						group: { id: "5780920016", name: "default" }
					},
					{
						seat_number: 122,
						seat_status: "unused",
						date_invite: "2018-12-09 23:50:55 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "0886832319", name: "HeartSymphony" },
						contract: { id: "6966210347" },
						group: { id: "3966871538", name: "hospital_southern" }
					},
					{
						seat_number: 123,
						seat_status: "locked",
						date_invite: "2019-05-09 05:17:13 UTC",
						date_accepted: "2019-05-22 05:17:13 UTC",
						date_lockedTill: "2020-05-22 05:17:13 UTC",
						user: {
							name: "York Briat",
							id: "1731294440",
							email: "ybriat3e@youku.com"
						},
						bundle: { id: "7945345542", name: "OmegaSap" },
						contract: { id: "3277732244" },
						group: { id: "9364044317", name: "hospital_southern" }
					},
					{
						seat_number: 124,
						seat_status: "filled",
						date_invite: "2019-10-02 01:50:30 UTC",
						date_accepted: "2019-10-20 01:50:30 UTC",
						date_lockedTill: "2020-10-20 01:50:30 UTC",
						user: {
							name: "Roxy Harfoot",
							id: "6207130448",
							email: "rharfoot3f@google.co.jp"
						},
						bundle: { id: "2439745558", name: "OmegaSap" },
						contract: { id: "2748405582" },
						group: { id: "0654616943", name: "hospitals_midwest" }
					},
					{
						seat_number: 125,
						seat_status: "locked",
						date_invite: "2019-07-18 15:37:44 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "8646909465", name: "OmegaSap" },
						contract: { id: "8470620580" },
						group: { id: "6069357091", name: "hospitals_westcoast" }
					},
					{
						seat_number: 126,
						seat_status: "unused",
						date_invite: "2019-08-10 17:22:10 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "9300840049", name: "HeartSymphony" },
						contract: { id: "2203138949" },
						group: { id: "4631541594", name: "default" }
					},
					{
						seat_number: 127,
						seat_status: "locked",
						date_invite: "2019-05-21 17:26:06 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "2669514756", name: "Cardio+" },
						contract: { id: "6203896762" },
						group: { id: "6393500100", name: "default" }
					},
					{
						seat_number: 128,
						seat_status: "locked",
						date_invite: "2019-05-15 17:10:41 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "0476375045", name: "HeartSymphony" },
						contract: { id: "3220672291" },
						group: { id: "5862605224", name: "hospitals_westcoast" }
					},
					{
						seat_number: 129,
						seat_status: "filled",
						date_invite: "2019-10-06 15:28:45 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "6617379451", name: "OmegaSap" },
						contract: { id: "7137152209" },
						group: { id: "4810834638", name: "hospitals_midwest" }
					},
					{
						seat_number: 130,
						seat_status: "filled",
						date_invite: "2018-12-11 09:53:47 UTC",
						date_accepted: "2019-01-03 09:53:47 UTC",
						date_lockedTill: "2020-01-03 09:53:47 UTC",
						user: {
							name: "Kristy Fearnside",
							id: "5602858055",
							email: "kfearnside3l@twitpic.com"
						},
						bundle: { id: "0205055000", name: "Cardio+" },
						contract: { id: "6991878714" },
						group: { id: "9774571240", name: "default" }
					},
					{
						seat_number: 131,
						seat_status: "unused",
						date_invite: "2018-12-14 13:28:15 UTC",
						date_accepted: "2018-12-30 13:28:15 UTC",
						date_lockedTill: "2019-12-30 13:28:15 UTC",
						user: {
							name: "Gordon Eton",
							id: "4589185798",
							email: "geton3m@hexun.com"
						},
						bundle: { id: "3996199548", name: "Acred360" },
						contract: { id: "6107830374" },
						group: { id: "1842925442", name: "hospital_eastcoast" }
					},
					{
						seat_number: 132,
						seat_status: "filled",
						date_invite: "2019-06-27 10:43:39 UTC",
						date_accepted: "2019-07-19 10:43:39 UTC",
						date_lockedTill: "2020-07-19 10:43:39 UTC",
						user: {
							name: "Felicle Fawkes",
							id: "5365302439",
							email: "ffawkes3n@cnet.com"
						},
						bundle: { id: "4836676429", name: "OmegaSap" },
						contract: { id: "5919123771" },
						group: { id: "5458371986", name: "hospitals_westcoast" }
					},
					{
						seat_number: 133,
						seat_status: "filled",
						date_invite: "2019-10-13 17:14:17 UTC",
						date_accepted: "2019-11-06 17:14:17 UTC",
						date_lockedTill: "2020-11-06 17:14:17 UTC",
						user: { name: null, id: "1861792255", email: "fcardiff3o@home.pl" },
						bundle: { id: "2296081900", name: "Cardio+" },
						contract: { id: "5028102588" },
						group: { id: "7072276113", name: "hospitals_midwest" }
					},
					{
						seat_number: 134,
						seat_status: "unused",
						date_invite: "2019-06-15 18:24:57 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "5604998741", name: "Cardio+" },
						contract: { id: "9816467368" },
						group: { id: "6508493468", name: "hospitals_westcoast" }
					},
					{
						seat_number: 135,
						seat_status: "locked",
						date_invite: "2019-01-27 11:38:17 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "5145382764", name: "Acred360" },
						contract: { id: "6725493561" },
						group: { id: "0018272864", name: "default" }
					},
					{
						seat_number: 136,
						seat_status: "locked",
						date_invite: "2019-03-09 19:28:05 UTC",
						date_accepted: "2019-04-01 19:28:05 UTC",
						date_lockedTill: "2020-04-01 19:28:05 UTC",
						user: {
							name: "Nevin Stocken",
							id: "5514152217",
							email: "nstocken3r@blog.com"
						},
						bundle: { id: "5070185493", name: "HeartSymphony" },
						contract: { id: "8706690890" },
						group: { id: "9001132649", name: "hospitals_westcoast" }
					},
					{
						seat_number: 137,
						seat_status: "unused",
						date_invite: "2019-03-19 01:34:12 UTC",
						date_accepted: "2019-04-13 01:34:12 UTC",
						date_lockedTill: "2020-04-13 01:34:12 UTC",
						user: {
							name: "Chev McArley",
							id: "8192414140",
							email: "cmcarley3s@dot.gov"
						},
						bundle: { id: "9746792906", name: "OmegaSap" },
						contract: { id: "4074864307" },
						group: { id: "6880833699", name: "hospital_eastcoast" }
					},
					{
						seat_number: 138,
						seat_status: "locked",
						date_invite: "2018-11-24 20:11:32 UTC",
						date_accepted: "2018-12-18 20:11:32 UTC",
						date_lockedTill: "2019-12-18 20:11:32 UTC",
						user: {
							name: "Sly Quennell",
							id: "1279742401",
							email: "squennell3t@joomla.org"
						},
						bundle: { id: "8416228828", name: "Acred360" },
						contract: { id: "0506206848" },
						group: { id: "1398809310", name: "hospitals_westcoast" }
					},
					{
						seat_number: 139,
						seat_status: "unused",
						date_invite: "2019-04-09 22:06:08 UTC",
						date_accepted: "2019-04-17 22:06:08 UTC",
						date_lockedTill: "2020-04-17 22:06:08 UTC",
						user: {
							name: "Sheila-kathryn Craigg",
							id: "7860671329",
							email: "scraigg3u@apple.com"
						},
						bundle: { id: "7263898387", name: "Acred360" },
						contract: { id: "4273584239" },
						group: { id: "0390673926", name: "hospital_eastcoast" }
					},
					{
						seat_number: 140,
						seat_status: "requested",
						date_invite: "2019-03-01 14:58:10 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "9311183480", name: "OmegaSap" },
						contract: { id: "6601620890" },
						group: { id: "9444289760", name: "default" }
					},
					{
						seat_number: 141,
						seat_status: "locked",
						date_invite: "2019-03-24 12:34:23 UTC",
						date_accepted: "2019-03-25 12:34:23 UTC",
						date_lockedTill: "2020-03-25 12:34:23 UTC",
						user: {
							name: "Alene Raylton",
							id: "2679005253",
							email: "araylton3w@cmu.edu"
						},
						bundle: { id: "5342288587", name: "Cardio+" },
						contract: { id: "5294667892" },
						group: { id: "7595487630", name: "hospitals_midwest" }
					},
					{
						seat_number: 142,
						seat_status: "filled",
						date_invite: "2019-02-15 01:20:43 UTC",
						date_accepted: "2019-03-13 01:20:43 UTC",
						date_lockedTill: "2020-03-13 01:20:43 UTC",
						user: {
							name: "Miltie Aloshkin",
							id: "2157830371",
							email: "maloshkin3x@goo.gl"
						},
						bundle: { id: "7344191431", name: "HeartSymphony" },
						contract: { id: "6961041187" },
						group: { id: "6381943380", name: "hospital_southern" }
					},
					{
						seat_number: 143,
						seat_status: "requested",
						date_invite: "2019-02-25 19:36:41 UTC",
						date_accepted: "2019-03-15 19:36:41 UTC",
						date_lockedTill: "2020-03-15 19:36:41 UTC",
						user: {
							name: "Cecilla Blazek",
							id: "3561604240",
							email: "cblazek3y@ibm.com"
						},
						bundle: { id: "6774099856", name: "Acred360" },
						contract: { id: "3554362480" },
						group: { id: "5062396435", name: "hospital_southern" }
					},
					{
						seat_number: 144,
						seat_status: "filled",
						date_invite: "2019-07-31 00:54:19 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "8584452271", name: "Cardio+" },
						contract: { id: "1581641005" },
						group: { id: "2132396255", name: "default" }
					},
					{
						seat_number: 145,
						seat_status: "unused",
						date_invite: "2019-08-15 03:37:55 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "4128572804", name: "OmegaSap" },
						contract: { id: "6276431819" },
						group: { id: "9884405631", name: "default" }
					},
					{
						seat_number: 146,
						seat_status: "filled",
						date_invite: "2019-01-21 10:48:11 UTC",
						date_accepted: "2019-01-27 10:48:11 UTC",
						date_lockedTill: "2020-01-27 10:48:11 UTC",
						user: {
							name: "Konrad Calcraft",
							id: "2108230660",
							email: "kcalcraft41@samsung.com"
						},
						bundle: { id: "5029633271", name: "HeartSymphony" },
						contract: { id: "5544404626" },
						group: { id: "7646306441", name: "hospitals_midwest" }
					},
					{
						seat_number: 147,
						seat_status: "unused",
						date_invite: "2019-09-29 06:16:13 UTC",
						date_accepted: "2019-10-24 06:16:13 UTC",
						date_lockedTill: "2020-10-24 06:16:13 UTC",
						user: {
							name: "Giraldo Palffy",
							id: "8924303068",
							email: "gpalffy42@seesaa.net"
						},
						bundle: { id: "1555748003", name: "Cardio+" },
						contract: { id: "0854890101" },
						group: { id: "4231987920", name: "hospitals_midwest" }
					},
					{
						seat_number: 148,
						seat_status: "locked",
						date_invite: "2019-02-25 17:44:38 UTC",
						date_accepted: "2019-02-28 17:44:38 UTC",
						date_lockedTill: "2020-02-28 17:44:38 UTC",
						user: {
							name: "Horten Felderer",
							id: "2014070963",
							email: "hfelderer43@google.ca"
						},
						bundle: { id: "2263811680", name: "HeartSymphony" },
						contract: { id: "4973073634" },
						group: { id: "8622070371", name: "hospitals_midwest" }
					},
					{
						seat_number: 149,
						seat_status: "locked",
						date_invite: "2019-08-20 18:51:31 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "7987088818", name: "OmegaSap" },
						contract: { id: "9571427055" },
						group: { id: "0295355573", name: "hospital_southern" }
					},
					{
						seat_number: 150,
						seat_status: "unused",
						date_invite: "2019-07-16 23:00:39 UTC",
						date_accepted: "2019-08-01 23:00:39 UTC",
						date_lockedTill: "2020-08-01 23:00:39 UTC",
						user: {
							name: "Berty Zoanetti",
							id: "5462447886",
							email: "bzoanetti45@artisteer.com"
						},
						bundle: { id: "7259733316", name: "HeartSymphony" },
						contract: { id: "6141580888" },
						group: { id: "3716680348", name: "hospitals_midwest" }
					},
					{
						seat_number: 151,
						seat_status: "filled",
						date_invite: "2019-02-17 07:41:43 UTC",
						date_accepted: "2019-03-19 07:41:43 UTC",
						date_lockedTill: "2020-03-19 07:41:43 UTC",
						user: {
							name: "Dell Swinnard",
							id: "3551857504",
							email: "dswinnard46@scribd.com"
						},
						bundle: { id: "1210723190", name: "OmegaSap" },
						contract: { id: "1601107484" },
						group: { id: "1438709459", name: "hospitals_midwest" }
					},
					{
						seat_number: 152,
						seat_status: "unused",
						date_invite: "2019-07-25 22:14:26 UTC",
						date_accepted: "2019-08-10 22:14:26 UTC",
						date_lockedTill: "2020-08-10 22:14:26 UTC",
						user: {
							name: null,
							id: "6364302867",
							email: "glampard47@newsvine.com"
						},
						bundle: { id: "9325319183", name: "Acred360" },
						contract: { id: "7721190283" },
						group: { id: "2050985895", name: "hospitals_westcoast" }
					},
					{
						seat_number: 153,
						seat_status: "locked",
						date_invite: "2019-03-13 21:47:01 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "1878573983", name: "OmegaSap" },
						contract: { id: "8427177120" },
						group: { id: "8856011670", name: "hospital_eastcoast" }
					},
					{
						seat_number: 154,
						seat_status: "unused",
						date_invite: "2019-01-09 10:30:54 UTC",
						date_accepted: "2019-01-12 10:30:54 UTC",
						date_lockedTill: "2020-01-12 10:30:54 UTC",
						user: {
							name: "Marthe Olivie",
							id: "0953860564",
							email: "molivie49@house.gov"
						},
						bundle: { id: "2099524632", name: "Acred360" },
						contract: { id: "7144088980" },
						group: { id: "0497804133", name: "default" }
					},
					{
						seat_number: 155,
						seat_status: "unused",
						date_invite: "2019-04-03 23:18:59 UTC",
						date_accepted: "2019-04-29 23:18:59 UTC",
						date_lockedTill: "2020-04-29 23:18:59 UTC",
						user: {
							name: "Gery Corkan",
							id: "4257364110",
							email: "gcorkan4a@cdc.gov"
						},
						bundle: { id: "9410467956", name: "Acred360" },
						contract: { id: "5099872479" },
						group: { id: "4390966398", name: "hospital_eastcoast" }
					},
					{
						seat_number: 156,
						seat_status: "locked",
						date_invite: "2019-07-29 23:41:39 UTC",
						date_accepted: "2019-08-14 23:41:39 UTC",
						date_lockedTill: "2020-08-14 23:41:39 UTC",
						user: {
							name: "Chantalle Ghiotto",
							id: "6899673707",
							email: "cghiotto4b@wired.com"
						},
						bundle: { id: "6981686958", name: "Acred360" },
						contract: { id: "6892045495" },
						group: { id: "6806178687", name: "hospitals_westcoast" }
					},
					{
						seat_number: 157,
						seat_status: "unused",
						date_invite: "2018-11-28 07:46:21 UTC",
						date_accepted: null,
						date_lockedTill: null,
						user: { name: null, id: null, email: null },
						bundle: { id: "0185209206", name: "OmegaSap" },
						contract: { id: "3219346412" },
						group: { id: "4009908981", name: "hospital_southern" }
					},
					{
						seat_number: 158,
						seat_status: "unused",
						date_invite: "2019-02-08 17:21:25 UTC",
						date_accepted: "2019-02-22 17:21:25 UTC",
						date_lockedTill: "2020-02-22 17:21:25 UTC",
						user: {
							name: "Munroe Whitlam",
							id: "8340450329",
							email: "mwhitlam4d@state.tx.us"
						},
						bundle: { id: "1221137526", name: "Acred360" },
						contract: { id: "3097105140" },
						group: { id: "6614351786", name: "hospitals_midwest" }
					},
					{
						seat_number: 159,
						seat_status: "locked",
						date_invite: "2019-05-05 18:05:48 UTC",
						date_accepted: "2019-05-19 18:05:48 UTC",
						date_lockedTill: "2020-05-19 18:05:48 UTC",
						user: {
							name: "Clerissa Merdew",
							id: "7711977870",
							email: "cmerdew4e@devhub.com"
						},
						bundle: { id: "0903217584", name: "OmegaSap" },
						contract: { id: "0770459563" },
						group: { id: "4206087667", name: "default" }
					},
					{
						seat_number: 160,
						seat_status: "requested",
						date_invite: "2019-05-12 07:29:54 UTC",
						date_accepted: "2019-05-24 07:29:54 UTC",
						date_lockedTill: "2020-05-24 07:29:54 UTC",
						user: {
							name: "Gusta Bryde",
							id: "0571538169",
							email: "gbryde4f@ihg.com"
						},
						bundle: { id: "6369907442", name: "Acred360" },
						contract: { id: "4308444144" },
						group: { id: "9661656635", name: "hospital_southern" }
					}
				];

export const pieChartSeats = () => {
    return {
			components: {
				gChart
			},
			template: `<gChart :settings="{packages:['pie']}" :chartType='chartType' :chartOptions="chartOptions" :chartData='chartData'/>`,
			methods: methods,
			data: () => ({
				seatAllocationData,
				chartType: "PieChart",
				chartOptions: {
					title: "Seat Allocation",
					subtitle: "Sales, Expenses, and Profit: 2014-2017",
					is3D: false,
                    height: 400,
                    legend:'none',
					pieSliceText: "label",
					pieSliceTextStyle: { color: "#000", fontSize: "18" },
					pieHole: 0.2,
					slices: {
						0: { offset: 0.01 , color:"#a3d1df"},
						1: { offset: 0.01 , color:"#f0cd9f"},
						2: { offset: 0.01 , color:"#9cd0ab"},
						3: { offset: 0.01, color: "#5a544d", textStyle: { color: "#fff" } }
					},
					pieStartAngle: -90
				}
			}),
			computed: {
				chartData() {
					const filled = seatAllocationData.filter(
						(value, index, self) => value.seat_status == "filled"
					).length;
					const unused = seatAllocationData.filter(
						(value, index, self) => value.seat_status == "unused"
					).length;
					const requested = seatAllocationData.filter(
						(value, index, self) => value.seat_status == "requested"
					).length;
					const locked = seatAllocationData.filter(
						(value, index, self) => value.seat_status == "locked"
					).length;
					return [
						["Year", "Sales"],
						["unused", unused],
						["requested", requested],
						["filled", filled],
						["locked", locked]
					];
				}
			}
		};
};