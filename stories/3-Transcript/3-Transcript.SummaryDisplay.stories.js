import {
	action
} from "@storybook/addon-actions";

import SummaryDisplay from "../../src/components/Transcript/Transcript.SummaryDisplay";
import { Summary } from "storybook-addon-vue-info";

export default {
	title: "Transcript/Summary",
	component: SummaryDisplay,
	parameters: {
		componentSubtitle: "Filter bar that can control what activites are seen in the list",
		info: true
	},
	excludeStories: [ "default","filteredCreditCount","filterStartDate","filterEndDate" ]
};

export const filteredCreditCount = {
    "All":60,
    "CME":10,
    "CE":10,
    "CPE":10,
    "COP": 10,
    "ABIM": 10,
    "CNErx":10
};
export const filterStartDate = null;

export const filterEndDate = null;

export const withOutDates = () => ({
	components: {
		SummaryDisplay
    },
	template: `<SummaryDisplay :filterStartDate="filterStartDate" :filterEndDate="filterEndDate"  :filteredCreditCount="filteredCreditCount" @showModalLegend="showModalLegend"></SummaryDisplay>`,
	methods: {
		showModalLegend: action( "Show Modal" ),
	},
    data: () => ({
        filterStartDate,
        filterEndDate,
        filteredCreditCount:{"All":90, "CME":30, "CE":30, "COP":30}
		
	} )
});

export const withDates = () => ({
	components: {
		SummaryDisplay
    },
	template: `<SummaryDisplay :filterStartDate="filterStartDate" :filterEndDate="filterEndDate"  :filteredCreditCount="filteredCreditCount" @showModalLegend="showModalLegend"></SummaryDisplay>`,
	methods: {
		showModalLegend: action( "Show Modal" ),
	},
    data: () => ({
        filterStartDate: "2018-01-01",
        filterEndDate:"2020-01-01",
        filteredCreditCount
		
	} )
} );

export const creditsSingluar = () => ({
	components: {
		SummaryDisplay
    },
	template: `<SummaryDisplay :filterStartDate="filterStartDate" :filterEndDate="filterEndDate"  :filteredCreditCount="filteredCreditCount" @showModalLegend="showModalLegend"></SummaryDisplay>`,
	methods: {
		showModalLegend: action( "Show Modal" ),
	},
    data: () => ({
        filterStartDate: "2018-01-01",
        filterEndDate:"2020-01-01",
        filteredCreditCount:{"All":100,"CME":100
}
		
	} )
} );
