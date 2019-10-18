import { action } from "@storybook/addon-actions";

export default {
	title: "SeatManagement/Reports",
	parameters: {
		componentSubtitle: "The Owner of the Contract",
		notes: true,
		info: true
	},
	excludeStories: ["consumptionData", "methods"]
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
