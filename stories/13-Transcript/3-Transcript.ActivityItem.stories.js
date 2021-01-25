import { action } from "@storybook/addon-actions";

import TranscriptItem from "../../src/components/Transcript/Transcript.TranscriptItem";

export default {
	title: "Transcript/Activity",
	component: TranscriptItem,
	parameters: {
		componentSubtitle:
			"A single line in the transcript is an activity that has an assigned credit value",
		 
	},
	excludeStories: ["activity", "selectedSort", "selectedCreditFilter"]
};
export const activity = {
	ID: 5730,
	ProductTitle: "Heart Songs",
	Course: null,
	Activity:
		"The Society of Cardiovascular Patient Care (SCPC) is now called ACC Accreditation ServiCPEs",
	DateCompleted: "4/4/2018",
	DateClaimed: "11/25/2018",
	Credits: [
		{
			Type: "CPE",
			Amount: 19.2
		},
		{
			Type: "CNE",
			Amount: 19.2
		}
	],
	External: false
};
export const selectedSort = "Date";
export const selectedCreditFilter = ["All"];
export const basic = () => {
	return {
		components: {
			TranscriptItem
		},
		template:
			"<TranscriptItem  v-bind='activity' :selectedSort = 'selectedSort' :selectedCreditFilter='selectedCreditFilter'  @activitySelected='activitySelected' @activityUnselected='activityUnselected' @editExternal='editExternal' @deleteExternal='deleteExternal'></TranscriptItem>",
		methods: {
			activitySelected: action("activity is selected"),
			activityUnselected: action("activity is no longer selected"),
			editExternal: action("edit this external external "),
			deleteExternal: action("delete this external activitiy")
		},
		data: () => ({
			activity,
			selectedSort,
			selectedCreditFilter
		})
	};
};
export const filterdByCreditType = () => {
	const selectedCreditFilter = ["All", "CNE"];
	return {
		components: {
			TranscriptItem
		},
		template:
			"<TranscriptItem  v-bind='activity' :selectedSort = 'selectedSort' :selectedCreditFilter='selectedCreditFilter'  @activitySelected='activitySelected' @activityUnselected='activityUnselected' @editExternal='editExternal' @deleteExternal='deleteExternal'></TranscriptItem>",
		methods: {
			activitySelected: action("activity is selected"),
			activityUnselected: action("activity is no longer selected"),
			editExternal: action("edit this external external "),
			deleteExternal: action("delete this external activitiy")
		},
		data: () => ({
			activity,
			selectedSort,
			selectedCreditFilter
		})
	};
};
export const sortedByProduct = () => {
	const selectedSort = "Product";
	return {
		components: {
			TranscriptItem
		},
		template:
			"<TranscriptItem  v-bind='activity' :selectedSort = 'selectedSort' :selectedCreditFilter='selectedCreditFilter'  @activitySelected='activitySelected' @activityUnselected='activityUnselected' @editExternal='editExternal' @deleteExternal='deleteExternal'></TranscriptItem>",
		methods: {
			activitySelected: action("activity is selected"),
			activityUnselected: action("activity is no longer selected"),
			editExternal: action("edit this external external "),
			deleteExternal: action("delete this external activitiy")
		},
		data: () => ({
			activity,
			selectedSort,
			selectedCreditFilter
		})
	};
};
export const externalActivity = () => {
	return {
		components: {
			TranscriptItem
		},
		template:
			"<TranscriptItem  v-bind='activity' :selectedSort = 'selectedSort' :selectedCreditFilter='selectedCreditFilter'  @activitySelected='activitySelected' @activityUnselected='activityUnselected' @editExternal='editExternal' @deleteExternal='deleteExternal'></TranscriptItem>",
		methods: {
			activitySelected: action("activity is selected"),
			activityUnselected: action("activity is no longer selected"),
			editExternal: action("edit this external external "),
			deleteExternal: action("delete this external activitiy")
		},
		data: () => ({
			activity: {
				...activity,
				External: true
			},
			selectedSort,
			selectedCreditFilter
		})
	};
};
