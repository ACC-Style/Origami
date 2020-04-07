import { action } from "@storybook/addon-actions";
import Sort from "../../src/components/Transcript/Transcript.Sort";


export default {
    title: "Transcript/Sort",
    component: Sort,
    excludeStories: ["default","templateBasic", "sortTypes", "selectedSort", "descriptionObject"],
    parameters: {
        componentSubtitle: "A block area that shows the totals of credits and the amount that has be accumlated over time.",
        info: true
    }
};
export const descriptionObject = {
    SummaryDisplay: {
        props: {
            // These description will appear in `description` column in props table
            sortTypes: "this value is the starting of when the activities are filtered",
            selectedSort: "this value is the ending of when the activities are filtered"
        }
    }
};
export const templateBasic = `<Sort :sortTypes="sortTypes" :selectedSort="selectedSort" @updateselectedsort="updateselectedsort"></Sort>`;

export const sortTypes = ["Date","Activity","Product"];
export const selectedSort = "Date";

export const basic = () => ({
    components: {
        Sort
    },
    template: templateBasic,
    methods: {
        updateselectedsort: action("update selected sort"),
    },
    data() {
        return {
            sortTypes,
            selectedSort

        };
    }, description: descriptionObject
});
