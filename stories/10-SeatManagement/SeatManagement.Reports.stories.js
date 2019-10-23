import { action } from "@storybook/addon-actions";

export default {
	title: "SeatManagement/Reports",
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
export const contractData = [
    {
    "id": "7981190141",
    "status": "completed",
    "seat_count": 75,
    "term": 5,
    "amount": "$17336.62",
    "date_payment": "11/19/2019",
    "date_lastPayment": "10/4/2019",
    "date_expiration": "10/12/2019",
    "date_purchase": "9/20/2019",
    "institution": {
        "name": "Bamity",
        "id": "0275637602",
        "purchaser": {
            "id": "2420190162",
            "name": "Lyssa Foresight",
            "email": "lforesight0@blogtalkradio.com"
        }
    }
}, {
    "id": "3662297709",
    "status": "active",
    "seat_count": 53,
    "term": 4,
    "amount": "$18006.99",
    "date_payment": "1/10/2020",
    "date_lastPayment": "2/1/2019",
    "date_expiration": "3/22/2019",
    "date_purchase": "5/20/2019",
    "institution": {
        "name": "Biodex",
        "id": "2091817548",
        "purchaser": {
            "id": "6411856468",
            "name": "Yancy O'Hickee",
            "email": "yohickee1@symantec.com"
        }
    }
}, {
    "id": "0746884948",
    "status": "completed",
    "seat_count": 74,
    "term": 5,
    "amount": "$12275.98",
    "date_payment": "12/24/2019",
    "date_lastPayment": "4/22/2019",
    "date_expiration": "8/9/2019",
    "date_purchase": "1/24/2019",
    "institution": {
        "name": "Ventosanzap",
        "id": "8729440564",
        "purchaser": {
            "id": "8494690814",
            "name": "Rosemaria Dulany",
            "email": "rdulany2@google.es"
        }
    }
}, {
    "id": "5292985735",
    "status": "active",
    "seat_count": 99,
    "term": 1,
    "amount": "$19861.75",
    "date_payment": "9/24/2020",
    "date_lastPayment": "8/31/2019",
    "date_expiration": "10/3/2019",
    "date_purchase": "3/13/2019",
    "institution": {
        "name": "Flowdesk",
        "id": "8341296726",
        "purchaser": {
            "id": "6462756860",
            "name": "Garvin Goves",
            "email": "ggoves3@yellowbook.com"
        }
    }
}, {
    "id": "4599924048",
    "status": "not paid",
    "seat_count": 65,
    "term": 1,
    "amount": "$12874.57",
    "date_payment": "4/13/2020",
    "date_lastPayment": "10/29/2018",
    "date_expiration": "9/3/2019",
    "date_purchase": "5/2/2019",
    "institution": {
        "name": "Veribet",
        "id": "2398139691",
        "purchaser": {
            "id": "1421684623",
            "name": "Celesta Frankham",
            "email": "cfrankham4@ameblo.jp"
        }
    }
}, {
    "id": "3983673227",
    "status": "completed",
    "seat_count": 93,
    "term": 4,
    "amount": "$19912.41",
    "date_payment": "7/10/2020",
    "date_lastPayment": "5/12/2019",
    "date_expiration": "9/3/2019",
    "date_purchase": "10/9/2019",
    "institution": {
        "name": "Veribet",
        "id": "7074294815",
        "purchaser": {
            "id": "7758791019",
            "name": "Sisely Kienzle",
            "email": "skienzle5@nih.gov"
        }
    }
}, {
    "id": "3919472473",
    "status": "active",
    "seat_count": 99,
    "term": 3,
    "amount": "$11887.48",
    "date_payment": "5/14/2020",
    "date_lastPayment": "6/11/2019",
    "date_expiration": "12/23/2018",
    "date_purchase": "10/26/2018",
    "institution": {
        "name": "Zamit",
        "id": "2722239241",
        "purchaser": {
            "id": "9524975556",
            "name": "Upton Westoff",
            "email": "uwestoff6@4shared.com"
        }
    }
}, {
    "id": "3030404970",
    "status": "not paid",
    "seat_count": 100,
    "term": 4,
    "amount": "$18187.37",
    "date_payment": "8/28/2020",
    "date_lastPayment": "6/28/2019",
    "date_expiration": "3/26/2019",
    "date_purchase": "2/7/2019",
    "institution": {
        "name": "Fix San",
        "id": "3261433711",
        "purchaser": {
            "id": "5473047150",
            "name": "Allister Ricciardelli",
            "email": "aricciardelli7@studiopress.com"
        }
    }
}, {
    "id": "4734118660",
    "status": "active",
    "seat_count": 90,
    "term": 3,
    "amount": "$6631.45",
    "date_payment": "7/9/2020",
    "date_lastPayment": "4/12/2019",
    "date_expiration": "2/24/2019",
    "date_purchase": "4/5/2019",
    "institution": {
        "name": "Fixflex",
        "id": "7211552760",
        "purchaser": {
            "id": "9987240010",
            "name": "Blondell Itscowicz",
            "email": "bitscowicz8@is.gd"
        }
    }
}, {
    "id": "8865506572",
    "status": "not paid",
    "seat_count": 82,
    "term": 4,
    "amount": "$11524.15",
    "date_payment": "3/22/2020",
    "date_lastPayment": "12/10/2018",
    "date_expiration": "5/12/2019",
    "date_purchase": "7/8/2019",
    "institution": {
        "name": "Quo Lux",
        "id": "0195683765",
        "purchaser": {
            "id": "0124455489",
            "name": "Merry Yakunkin",
            "email": "myakunkin9@dell.com"
        }
    }
}, {
    "id": "2153134642",
    "status": "completed",
    "seat_count": 76,
    "term": 2,
    "amount": "$7497.81",
    "date_payment": "12/25/2019",
    "date_lastPayment": "2/19/2019",
    "date_expiration": "11/29/2018",
    "date_purchase": "10/24/2018",
    "institution": {
        "name": "Tampflex",
        "id": "6169281437",
        "purchaser": {
            "id": "3234925429",
            "name": "Alice Menezes",
            "email": "amenezesa@1und1.de"
        }
    }
}, {
    "id": "0250654767",
    "status": "not paid",
    "seat_count": 70,
    "term": 4,
    "amount": "$8148.50",
    "date_payment": "11/29/2019",
    "date_lastPayment": "8/21/2019",
    "date_expiration": "2/9/2019",
    "date_purchase": "10/22/2019",
    "institution": {
        "name": "Kanlam",
        "id": "3468757572",
        "purchaser": {
            "id": "1540980388",
            "name": "Deedee Peddowe",
            "email": "dpeddoweb@google.co.jp"
        }
    }
}, {
    "id": "0790179336",
    "status": "not paid",
    "seat_count": 67,
    "term": 1,
    "amount": "$15737.18",
    "date_payment": "2/26/2020",
    "date_lastPayment": "2/7/2019",
    "date_expiration": "3/15/2019",
    "date_purchase": "5/1/2019",
    "institution": {
        "name": "Lotlux",
        "id": "4480400390",
        "purchaser": {
            "id": "7499727600",
            "name": "Katharine Fishlock",
            "email": "kfishlockc@weibo.com"
        }
    }
}, {
    "id": "6817653831",
    "status": "active",
    "seat_count": 85,
    "term": 5,
    "amount": "$14825.10",
    "date_payment": "10/30/2019",
    "date_lastPayment": "6/14/2019",
    "date_expiration": "9/21/2019",
    "date_purchase": "10/29/2018",
    "institution": {
        "name": "Prodder",
        "id": "5134929790",
        "purchaser": {
            "id": "4470942011",
            "name": "Graham Wytchard",
            "email": "gwytchardd@nyu.edu"
        }
    }
}, {
    "id": "8352656939",
    "status": "completed",
    "seat_count": 81,
    "term": 1,
    "amount": "$11799.62",
    "date_payment": "9/8/2020",
    "date_lastPayment": "10/26/2018",
    "date_expiration": "9/22/2019",
    "date_purchase": "5/8/2019",
    "institution": {
        "name": "Stronghold",
        "id": "7633649317",
        "purchaser": {
            "id": "7971489468",
            "name": "Sammy Tyzack",
            "email": "styzacke@sakura.ne.jp"
        }
    }
}, {
    "id": "1082127129",
    "status": "completed",
    "seat_count": 95,
    "term": 5,
    "amount": "$5235.09",
    "date_payment": "3/28/2020",
    "date_lastPayment": "7/1/2019",
    "date_expiration": "6/19/2019",
    "date_purchase": "1/26/2019",
    "institution": {
        "name": "Sonsing",
        "id": "4137467238",
        "purchaser": {
            "id": "1820049388",
            "name": "Freddi Carbin",
            "email": "fcarbinf@myspace.com"
        }
    }
}, {
    "id": "4510460397",
    "status": "not paid",
    "seat_count": 53,
    "term": 2,
    "amount": "$5636.52",
    "date_payment": "10/5/2020",
    "date_lastPayment": "5/14/2019",
    "date_expiration": "7/9/2019",
    "date_purchase": "8/25/2019",
    "institution": {
        "name": "Otcom",
        "id": "7737814647",
        "purchaser": {
            "id": "1023548555",
            "name": "Denny Comrie",
            "email": "dcomrieg@joomla.org"
        }
    }
}, {
    "id": "7836602278",
    "status": "completed",
    "seat_count": 58,
    "term": 4,
    "amount": "$17419.57",
    "date_payment": "3/5/2020",
    "date_lastPayment": "6/13/2019",
    "date_expiration": "11/11/2018",
    "date_purchase": "11/6/2018",
    "institution": {
        "name": "Zoolab",
        "id": "8982469548",
        "purchaser": {
            "id": "9739763504",
            "name": "Tore Schwandermann",
            "email": "tschwandermannh@ustream.tv"
        }
    }
}, {
    "id": "8497408055",
    "status": "completed",
    "seat_count": 100,
    "term": 2,
    "amount": "$3423.24",
    "date_payment": "5/1/2020",
    "date_lastPayment": "8/24/2019",
    "date_expiration": "11/29/2018",
    "date_purchase": "3/10/2019",
    "institution": {
        "name": "Zoolab",
        "id": "6371676969",
        "purchaser": {
            "id": "5740524418",
            "name": "Shurwood Clines",
            "email": "sclinesi@ftc.gov"
        }
    }
}, {
    "id": "8743006481",
    "status": "active",
    "seat_count": 90,
    "term": 5,
    "amount": "$15544.15",
    "date_payment": "7/8/2020",
    "date_lastPayment": "10/3/2019",
    "date_expiration": "8/19/2019",
    "date_purchase": "6/30/2019",
    "institution": {
        "name": "Duobam",
        "id": "3597368758",
        "purchaser": {
            "id": "1325990715",
            "name": "Quentin Patinkin",
            "email": "qpatinkinj@hc360.com"
        }
    }
}, {
    "id": "8103997573",
    "status": "not paid",
    "seat_count": 60,
    "term": 2,
    "amount": "$4163.41",
    "date_payment": "3/13/2020",
    "date_lastPayment": "12/3/2018",
    "date_expiration": "10/9/2019",
    "date_purchase": "11/26/2018",
    "institution": {
        "name": "Fixflex",
        "id": "3899385163",
        "purchaser": {
            "id": "1993182660",
            "name": "Joane Blatchford",
            "email": "jblatchfordk@google.es"
        }
    }
}, {
    "id": "4692617647",
    "status": "completed",
    "seat_count": 76,
    "term": 4,
    "amount": "$9931.67",
    "date_payment": "4/6/2020",
    "date_lastPayment": "5/30/2019",
    "date_expiration": "5/28/2019",
    "date_purchase": "6/23/2019",
    "institution": {
        "name": "Biodex",
        "id": "8262803329",
        "purchaser": {
            "id": "9180385380",
            "name": "Valida Thomel",
            "email": "vthomell@noaa.gov"
        }
    }
}, {
    "id": "5221433531",
    "status": "not paid",
    "seat_count": 87,
    "term": 1,
    "amount": "$5371.57",
    "date_payment": "1/2/2020",
    "date_lastPayment": "4/3/2019",
    "date_expiration": "2/13/2019",
    "date_purchase": "1/24/2019",
    "institution": {
        "name": "Cardify",
        "id": "1072402867",
        "purchaser": {
            "id": "2540584485",
            "name": "Mikel Kier",
            "email": "mkierm@bigcartel.com"
        }
    }
}, {
    "id": "2962182021",
    "status": "completed",
    "seat_count": 99,
    "term": 1,
    "amount": "$17468.29",
    "date_payment": "1/23/2020",
    "date_lastPayment": "1/25/2019",
    "date_expiration": "7/22/2019",
    "date_purchase": "5/3/2019",
    "institution": {
        "name": "Ventosanzap",
        "id": "3419607010",
        "purchaser": {
            "id": "9185626115",
            "name": "Harriett Shellsheere",
            "email": "hshellsheeren@blogger.com"
        }
    }
}, {
    "id": "2471899847",
    "status": "not paid",
    "seat_count": 50,
    "term": 3,
    "amount": "$17513.90",
    "date_payment": "2/7/2020",
    "date_lastPayment": "1/17/2019",
    "date_expiration": "1/20/2019",
    "date_purchase": "5/30/2019",
    "institution": {
        "name": "Hatity",
        "id": "0524631968",
        "purchaser": {
            "id": "1707944422",
            "name": "Eldon Maciocia",
            "email": "emaciociao@amazonaws.com"
        }
    }
}
];
export const seatAllocationData = [
    {
        "seat_number": 1,
        "seat_status": "requested",
        "invite_date": "2019-01-25 03:26:24 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "0097387580",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "9616514343"
        },
        "group": {
            "id": "6230072135",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 2,
        "seat_status": "unused",
        "invite_date": "2019-02-23 07:24:50 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "6272507800",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "2477031545"
        },
        "group": {
            "id": "9504484466",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 3,
        "seat_status": "locked",
        "invite_date": "2019-05-20 13:47:58 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [
            {
                "name": "Stanwood Cawdell",
                "id": "9214254843",
                "email": "scawdell0@shop-pro.jp"
            }
        ],
        "bundle": {
            "id": "7884167169",
            "name": "Acred360"
        },
        "contract": {
            "id": "4365768246"
        },
        "group": {
            "id": "3495770672",
            "name": "hospitals_westcoast"
        }
    }, {
        "seat_number": 4,
        "seat_status": "locked",
        "invite_date": "2019-02-06 05:27:24 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "8493338199",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "3201912103"
        },
        "group": {
            "id": "5529018869",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 5,
        "seat_status": "filled",
        "invite_date": "2019-05-16 02:45:15 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": null,
        "bundle": {
            "id": "5268626519",
            "name": "Cardio+"
        },
        "contract": {
            "id": "8103930036"
        },
        "group": {
            "id": "8510539332",
            "name": "hospitals_westcoast"
        }
    }, {
        "seat_number": 6,
        "seat_status": "unused",
        "invite_date": "2019-05-03 10:09:47 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "2290636673",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "3370961199"
        },
        "group": {
            "id": "5521744629",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 7,
        "seat_status": "unused",
        "invite_date": "2019-09-14 17:38:41 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "8533752510",
            "name": "Acred360"
        },
        "contract": {
            "id": "7384844139"
        },
        "group": {
            "id": "2319082390",
            "name": "default"
        }
    }, {
        "seat_number": 8,
        "seat_status": "locked",
        "invite_date": "2019-07-22 18:13:00 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "7340875447",
            "name": "Cardio+"
        },
        "contract": {
            "id": "1801956870"
        },
        "group": {
            "id": "1856796380",
            "name": "default"
        }
    }, {
        "seat_number": 9,
        "seat_status": "filled",
        "invite_date": "2019-08-06 02:18:05 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": null,
        "bundle": {
            "id": "9180171607",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "3213198981"
        },
        "group": {
            "id": "7793560567",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 10,
        "seat_status": "unused",
        "invite_date": "2019-05-02 16:50:07 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "4784483870",
            "name": "Cardio+"
        },
        "contract": {
            "id": "7214264255"
        },
        "group": {
            "id": "0315114579",
            "name": "hospitals_westcoast"
        }
    }, {
        "seat_number": 11,
        "seat_status": "locked",
        "invite_date": "2018-12-18 08:21:55 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [
            {
                "name": "Desi Kettleson",
                "id": "6482776177",
                "email": "dkettleson0@webmd.com"
            }
        ],
        "bundle": {
            "id": "5512994924",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "5544527924"
        },
        "group": {
            "id": "0484067875",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 12,
        "seat_status": "requested",
        "invite_date": "2018-11-01 05:17:17 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "3342963750",
            "name": "Acred360"
        },
        "contract": {
            "id": "0153274412"
        },
        "group": {
            "id": "1008414963",
            "name": "default"
        }
    }, {
        "seat_number": 13,
        "seat_status": "requested",
        "invite_date": "2019-01-07 20:27:40 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "2706798266",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "6047200444"
        },
        "group": {
            "id": "9691532690",
            "name": "hospitals_midwest"
        }
    }, {
        "seat_number": 14,
        "seat_status": "locked",
        "invite_date": "2019-09-25 02:57:01 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "2845473773",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "6809911345"
        },
        "group": {
            "id": "4178527224",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 15,
        "seat_status": "filled",
        "invite_date": "2019-05-09 19:59:15 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "5672974307",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "1036480344"
        },
        "group": {
            "id": "8850507942",
            "name": "hospitals_westcoast"
        }
    }, {
        "seat_number": 16,
        "seat_status": "requested",
        "invite_date": "2019-10-15 16:54:27 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": null,
        "bundle": {
            "id": "3580995989",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "8684668891"
        },
        "group": {
            "id": "6119449074",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 17,
        "seat_status": "unused",
        "invite_date": "2019-08-27 09:09:43 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": null,
        "bundle": {
            "id": "8822341937",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "2331161151"
        },
        "group": {
            "id": "5140478969",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 18,
        "seat_status": "locked",
        "invite_date": "2019-07-23 13:04:31 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [
            {
                "name": "Stormy Chimienti",
                "id": "8902659011",
                "email": "schimienti0@sfgate.com"
            }
        ],
        "bundle": {
            "id": "8759212314",
            "name": "Acred360"
        },
        "contract": {
            "id": "0248663036"
        },
        "group": {
            "id": "2248481123",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 19,
        "seat_status": "requested",
        "invite_date": "2019-07-30 21:58:59 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "8988027609",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "9505810650"
        },
        "group": {
            "id": "1856261899",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 20,
        "seat_status": "locked",
        "invite_date": "2019-03-14 14:49:47 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "4567381146",
            "name": "Cardio+"
        },
        "contract": {
            "id": "1150507011"
        },
        "group": {
            "id": "8427312855",
            "name": "default"
        }
    }, {
        "seat_number": 21,
        "seat_status": "filled",
        "invite_date": "2019-08-31 23:41:46 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": null,
        "bundle": {
            "id": "6296034111",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "7219189655"
        },
        "group": {
            "id": "3975945860",
            "name": "default"
        }
    }, {
        "seat_number": 22,
        "seat_status": "requested",
        "invite_date": "2019-08-17 11:44:55 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "4246073866",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "8620984257"
        },
        "group": {
            "id": "5900848861",
            "name": "default"
        }
    }, {
        "seat_number": 23,
        "seat_status": "locked",
        "invite_date": "2019-02-23 10:45:25 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [
            {
                "name": "Ellette Argo",
                "id": "0183873447",
                "email": "eargo0@cafepress.com"
            }
        ],
        "bundle": {
            "id": "9210959270",
            "name": "Acred360"
        },
        "contract": {
            "id": "6194218145"
        },
        "group": {
            "id": "5237261231",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 24,
        "seat_status": "filled",
        "invite_date": "2019-09-26 22:16:42 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": null,
        "bundle": {
            "id": "3621434416",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "3542755084"
        },
        "group": {
            "id": "2199811732",
            "name": "hospitals_westcoast"
        }
    }, {
        "seat_number": 25,
        "seat_status": "unused",
        "invite_date": "2019-02-19 12:31:47 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "0350217580",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "1767813563"
        },
        "group": {
            "id": "9846183893",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 26,
        "seat_status": "locked",
        "invite_date": "2019-03-12 13:15:21 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "4451430922",
            "name": "Acred360"
        },
        "contract": {
            "id": "1063174633"
        },
        "group": {
            "id": "2338699590",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 27,
        "seat_status": "unused",
        "invite_date": "2019-08-18 21:55:24 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": null,
        "bundle": {
            "id": "5901092483",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "7338612697"
        },
        "group": {
            "id": "6880580590",
            "name": "hospitals_midwest"
        }
    }, {
        "seat_number": 28,
        "seat_status": "unused",
        "invite_date": "2018-12-29 23:45:46 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "4550472923",
            "name": "Cardio+"
        },
        "contract": {
            "id": "3406490290"
        },
        "group": {
            "id": "4838504442",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 29,
        "seat_status": "requested",
        "invite_date": "2019-05-01 16:48:27 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "4526316046",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "1928859734"
        },
        "group": {
            "id": "4188362263",
            "name": "default"
        }
    }, {
        "seat_number": 30,
        "seat_status": "filled",
        "invite_date": "2019-09-15 00:21:00 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": null,
        "bundle": {
            "id": "0993775628",
            "name": "Acred360"
        },
        "contract": {
            "id": "4521198285"
        },
        "group": {
            "id": "0389749509",
            "name": "default"
        }
    }, {
        "seat_number": 31,
        "seat_status": "locked",
        "invite_date": "2019-06-07 20:18:31 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [
            {
                "name": "Zak Stoving",
                "id": "6494792976",
                "email": "zstoving0@acquirethisname.com"
            }
        ],
        "bundle": {
            "id": "3209687177",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "9734494218"
        },
        "group": {
            "id": "7423531500",
            "name": "default"
        }
    }, {
        "seat_number": 32,
        "seat_status": "unused",
        "invite_date": "2019-09-30 20:30:10 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "0225902354",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "2475460598"
        },
        "group": {
            "id": "6604446879",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 33,
        "seat_status": "unused",
        "invite_date": "2019-04-26 23:07:08 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "1437050358",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "0155404574"
        },
        "group": {
            "id": "0961246831",
            "name": "hospitals_westcoast"
        }
    }, {
        "seat_number": 34,
        "seat_status": "locked",
        "invite_date": "2019-09-17 06:09:13 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": null,
        "bundle": {
            "id": "6414292387",
            "name": "Cardio+"
        },
        "contract": {
            "id": "7749945929"
        },
        "group": {
            "id": "6734647085",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 35,
        "seat_status": "requested",
        "invite_date": "2019-04-28 22:29:13 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "6926130351",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "3233222642"
        },
        "group": {
            "id": "2510081507",
            "name": "default"
        }
    }, {
        "seat_number": 36,
        "seat_status": "requested",
        "invite_date": "2019-08-07 05:05:34 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "5061482200",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "5174158693"
        },
        "group": {
            "id": "5761729867",
            "name": "default"
        }
    }, {
        "seat_number": 37,
        "seat_status": "locked",
        "invite_date": "2019-03-26 11:01:23 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [
            {
                "name": "Seth Nairn",
                "id": "1052733919",
                "email": "snairn0@histats.com"
            }
        ],
        "bundle": {
            "id": "5367617897",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "2639174196"
        },
        "group": {
            "id": "3605744914",
            "name": "hospitals_westcoast"
        }
    }, {
        "seat_number": 38,
        "seat_status": "unused",
        "invite_date": "2019-03-23 02:36:15 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "9193247514",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "6196465198"
        },
        "group": {
            "id": "2182055722",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 39,
        "seat_status": "locked",
        "invite_date": "2019-04-26 19:17:29 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "7181422426",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "6266616787"
        },
        "group": {
            "id": "6718029199",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 40,
        "seat_status": "unused",
        "invite_date": "2019-09-18 13:06:09 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [
            {
                "name": "Ruthie Glantz",
                "id": "6369532554",
                "email": "rglantz0@netlog.com"
            }
        ],
        "bundle": {
            "id": "3229721867",
            "name": "Acred360"
        },
        "contract": {
            "id": "5977294066"
        },
        "group": {
            "id": "3324025848",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 41,
        "seat_status": "requested",
        "invite_date": "2019-07-30 16:01:33 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [
            {
                "name": "Mandi Portail",
                "id": "3405968292",
                "email": "mportail0@4shared.com"
            }
        ],
        "bundle": {
            "id": "8012668866",
            "name": "Cardio+"
        },
        "contract": {
            "id": "3530351321"
        },
        "group": {
            "id": "5509752608",
            "name": "hospitals_westcoast"
        }
    }, {
        "seat_number": 42,
        "seat_status": "filled",
        "invite_date": "2019-03-04 17:02:11 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [
            {
                "name": "Carce Boatwright",
                "id": "4918679883",
                "email": "cboatwright0@canalblog.com"
            }
        ],
        "bundle": {
            "id": "3173718752",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "9771711362"
        },
        "group": {
            "id": "3839921585",
            "name": "hospitals_westcoast"
        }
    }, {
        "seat_number": 43,
        "seat_status": "locked",
        "invite_date": "2019-03-15 00:17:03 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "6206672298",
            "name": "Cardio+"
        },
        "contract": {
            "id": "4750350792"
        },
        "group": {
            "id": "6684078488",
            "name": "hospitals_midwest"
        }
    }, {
        "seat_number": 44,
        "seat_status": "requested",
        "invite_date": "2019-07-11 20:35:43 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [
            {
                "name": "Sigismondo Shorthill",
                "id": "0924426452",
                "email": "sshorthill0@zimbio.com"
            }
        ],
        "bundle": {
            "id": "9388088820",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "7189891414"
        },
        "group": {
            "id": "7151568205",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 45,
        "seat_status": "requested",
        "invite_date": "2019-04-23 18:52:20 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "6206423801",
            "name": "OmegaSap"
        },
        "contract": {
            "id": "9390461057"
        },
        "group": {
            "id": "8984613496",
            "name": "default"
        }
    }, {
        "seat_number": 46,
        "seat_status": "filled",
        "invite_date": "2018-12-17 08:16:21 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "3825241355",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "3603257613"
        },
        "group": {
            "id": "8203234944",
            "name": "hospitals_westcoast"
        }
    }, {
        "seat_number": 47,
        "seat_status": "filled",
        "invite_date": "2019-04-14 10:46:37 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "4974002710",
            "name": "Cardio+"
        },
        "contract": {
            "id": "2928578784"
        },
        "group": {
            "id": "4385325258",
            "name": "hospital_southern"
        }
    }, {
        "seat_number": 48,
        "seat_status": "unused",
        "invite_date": "2019-09-03 20:50:01 UTC",
        "acceptance_date": "error: Field 'inviation_date' not found",
        "lock_date": "error: no implicit conversion of ActiveSupport::Duration into String",
        "user": [

        ],
        "bundle": {
            "id": "2909700853",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "1593161630"
        },
        "group": {
            "id": "9505313512",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 49,
        "seat_status": "unused",
        "invite_date": "2019-03-11 09:47:55 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "3817017095",
            "name": "HeartSymphony"
        },
        "contract": {
            "id": "1144023399"
        },
        "group": {
            "id": "1377222097",
            "name": "hospital_eastcoast"
        }
    }, {
        "seat_number": 50,
        "seat_status": "locked",
        "invite_date": "2019-07-29 23:28:44 UTC",
        "acceptance_date": null,
        "lock_date": null,
        "user": null,
        "bundle": {
            "id": "5846637732",
            "name": "Acred360"
        },
        "contract": {
            "id": "0719519789"
        },
        "group": {
            "id": "3228541626",
            "name": "hospital_eastcoast"
        }
    }
];
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
                    <th class="p_2">Seat Count</th>
                    <th class="p_2">Term</th>
                    <th class="p_2">Amount</th>
                    <th class="p_2">Payment Date</th>
                    <th class="p_2">Last Payment Date</th>
                    <th class="p_2">Expiration Date</th>
                    <th class="p_2">Purchase Date</th>
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
                    <td class="p_2">{{ data.seat_count }}</td>
                    <td class="p_2">{{ data.term }}</td>
                    <td class="p_2">{{ data.amount }}</td>
                    <td class="p_2">{{ data.date_payment }}</td>
                    <td class="p_2">{{ data.date_lastPayment }}</td>
                    <td class="p_2">{{ data.date_expiration }}</td>
                    <td class="p_2">{{ data.date_purchase }}</td>
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

export const userUsageAndCreditsRaw = () => {
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
 