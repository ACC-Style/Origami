import {
	action
} from "@storybook/addon-actions";

import CreditFilter from "../../src/components/Transcript/Transcript.CreditFilterNav";

export default {
	title: "Transcript/Filter",
	component: CreditFilter,
	parameters: {
		componentSubtitle: "Filter bar that can control what activites are seen in the list",
		info: true
	},
	excludeStories: [ "creditTypes", "creditsInList" ]
};
export const creditTypes = [ {
		shortName: "CME",
		fullName: "Continuing Medical Education",
		styleCode: "CME"
	},
	{
		shortName: "ABP",
		fullName: "American Board of Pediatrics",
		styleCode: "ABP"
	}, {
		shortName: "COP",
		fullName: "Certificate of Participation",
		styleCode: "COP"
	},
	{
		shortName: "CE",
		fullName: "Continuing Education",
		styleCode: "CE"
	},
	{
		shortName: "MOC&nbsp;II",
		fullName: "ABIM MOC Part II",
		styleCode: "MOCII"
	},
	{
		shortName: "MOC&nbsp;IV",
		fullName: "ABIM MOC Part IV",
		styleCode: "MOCIV"
	},
	{
		shortName: "CNE",
		fullName: "Continuing Nursing Education",
		styleCode: "CNE"
	},
	{
		shortName: "CNE<sup>rx</sup>",
		fullName: "Continuing Nursing Education Pharmaceutical",
		styleCode: "CNErx"
	},
	{
		shortName: "ECME",
		fullName: "External Continuing Medical Education",
		styleCode: "ECME"
	},
	{
		shortName: "CPE",
		fullName: "Continuing Pharamacy Education",
		styleCode: "CPE"
	},

	{
		shortName: "AAPA",
		fullName: "American Academy of Physician Assistants (AAPA) Category 1 CME Credit",
		styleCode: "AAPA"
	},
	{
		shortName: "AT CEU",
		fullName: "Athletic Trainer Continuing Education Unit",
		styleCode: "ATCEU"
	}
];
export const creditsInList = [
	"CME",
	"CE",
	"CPE",
	"COP",
	"ECME",
	"CNE",
	"MOCIV",
	"MOCII",
	"ABP",
	"CNErx",
	"ATCEU",
	"AAPA"
];
export const basic = () => ( {
	components: {
		CreditFilter
	},
	template: '<CreditFilter :creditTypes="creditTypes" :creditsInList="creditsInList"	@updateCreditFitler="updateCreditFitler" @showModalLegend="showModalLegend"></CreditFilter>',
	methods: {
		showModalLegend: action( "Show Modal" ),
		updateCreditFitler: action( "Filter Credits" )
	},
	data: () => ( {
		creditTypes,
		creditsInList
	} )
} );
export const SubListOfCredits = () => ( {
	components: {
		CreditFilter
	},
	template: '<CreditFilter :creditTypes="creditTypes" :creditsInList="creditsInList"	@updateCreditFitler="updateCreditFitler" @showModalLegend="showModalLegend"></CreditFilter>',
	methods: {
		showModalLegend: action( "Show Modal" ),
		updateCreditFitler: action( "Filter Credits" )
	},
	data: () => ( {
		creditTypes,
		creditsInList: [ "COP", "CME", "CNE" ]
	} )
} );