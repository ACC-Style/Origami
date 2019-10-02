import { action } from "@storybook/addon-actions";
import CreditLegend from "../../src/components/Transcript/Transcript.CreditLegend.vue";

export default {
	title: "Transcript/Legend",
	component: CreditLegend,
	parameters: {
		componentSubtitle: "Handy status label",
		info: true
	}
};

export const legend = () => {
	const creditTypes = [
		{
			shortName: "COP",
			fullName: "Certificate of Participation",
			styleCode: "COP"
		},
		{
			shortName: "ABP",
			fullName: "American Board of Pediatrics",
			styleCode: "ABP"
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
			shortName: "CME",
			fullName: "Continuing Medical Education",
			styleCode: "CME"
		}
	];
	return {
		components: {
			CreditLegend
		},
		template: '<CreditLegend :creditTypes="creditTypes"></CreditLegend>',
		methods: {
			action: action("clicked")
		},
		data: () => ({
			creditTypes
		})
	};
};
legend.story = {
	parameters: {
		notes: "popover tooltip"
	}
};
