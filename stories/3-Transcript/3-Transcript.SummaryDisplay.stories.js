import { action } from "@storybook/addon-actions";


import SummaryDisplay from "../../src/components/Transcript/Transcript.SummaryDisplay";


export default {
    title: "Transcript/Summary",
    component: SummaryDisplay,
    excludeStories: ["default","templateBasic", "filteredCreditCount", "filterStartDate", "filterEndDate", "descriptionObject"],
    parameters: {
        componentSubtitle: "A block area that shows the totals of credits and the amount that has be accumlated over time.",
        info: true
    }
};
export const descriptionObject = {
    SummaryDisplay: {
        props: {
            // These description will appear in `description` column in props table
            filterStartDate: "this value is the starting of when the activities are filtered",
            filterEndDate: "this value is the ending of when the activities are filtered",
            filteredCreditCount: "Object of value/key pairs of the credits and how many credits are accumulated with in the time period"
        },
        events: {
            showModalLegend: "Event for triggering the shared legend of credit types"
        }
    }
};
export const templateBasic = `<SummaryDisplay :filterStartDate="filterStartDate" :filterEndDate="filterEndDate"  :filteredCreditCount="filteredCreditCount" @showModalLegend="showModalLegend"></SummaryDisplay>`;
export const filteredCreditCount = {
    "All": 60,
    "CME": 10,
    "CE": 10,
    "CPE": 10,
    "COP": 10,
    "ABIM": 10,
    "CNErx": 10
};
export const filterStartDate = null;

export const filterEndDate = null;

export const withOutDates = () => ({
    components: {
        SummaryDisplay
    },
    template: templateBasic,
    methods: {
        showModalLegend: action("Show Modal"),
    },
    data() {
        return {
            filterStartDate,
            filterEndDate,
            filteredCreditCount: { "All": 90, "CME": 30, "CE": 30, "COP": 30 }

        };
    }, description: descriptionObject
});

export const withDates = () => ({
    components: {
        SummaryDisplay
    },
    template: templateBasic,
    methods: {
        showModalLegend: action("Show Modal"),
    },
    description: descriptionObject,
    data() {
        return {
            filterStartDate: "2018-01-01",
            filterEndDate: "2020-01-01",
            filteredCreditCount

        };
    }
});

export const creditsSingluar = () => ({
    components: {
        SummaryDisplay
    },
    template: templateBasic,
    methods: {
        showModalLegend: action("Show Modal"),
    },
    data() {
        return {
            filterStartDate: "2018-01-01",
            filterEndDate: "2020-01-01",
            filteredCreditCount: {
                "All": 100, "CME": 100
            }

        };
    },
    description: descriptionObject
});
