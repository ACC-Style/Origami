import { action } from "@storybook/addon-actions";
import facilityProfileIdentifier from "../../src/components/FYHAH/FYHAH.facilityProfileIdentifier.vue";
import facilityResult from "../../src/components/FYHAH/FYHAH.facilityResult.vue";
import tableParticipation from "../../src/components/FYHAH/FYHAH.tableParticipation.vue";

export default {
	title: "FYHAH",
	component: facilityProfileIdentifier,
	excludeStories: ["templateBasic", "facilityData", "facilityDescription"],
	parameters: {
		notes:
			"Buttons are highly flexable with icons and colors changed by ':state' and you can even pass icons in with the text for even more options of icon.  Try adding 'br_radius' to add curved corders.",
		info: true
	}
};
export const templateBasic = `<facilityProfileIdentifier :facility='facility' :services='services'/>`;
export const facilityDescription = {
	facilityProfileIdentifier: {
		props: {
			// These description will appear in `description` column in props table
			size: "small, medium, or large",
			state: "primary,secondary,add,error,warning,success",
			icon: "Whether icon is visible or not",
			isDisabled: "Boolean for toggling the look and click event",
			isActivatable: "Allows the button to have an ON or OFF state"
		},
		events: {
			click: "Event for user clicking the component",
			isActive:
				"if isActivable is set to true the event will fire when the isActive is set to true by the toggled click"
		},
		slots: {
			default: "Place text or icon here"
		}
	}
};
export const facilityData = {
	id: 644,
	Distance: 3.3,
	facility: {
		BrandedName: "Gigashots",
		Address1: "3763 Linden Drive",
		Address2: null,
		City: "Oklahoma City",
		State: "OK",
		Zip: "73135",
		WebURL: null,
		Phone: "405-593-1519",
		GoogleAddress: "4500+San+Pablo+Road+Jacksonville+FL+32224"
	},
	services: [
		"Coronary Artery Bypass Graft Surgery",
		"Left Atrial Appendage Occlusion",
		"Diagnostic Cardiac Catheterization",
		"Carotid Artery Stenting",
		"Carotid Endarterectomy",
		"Transcatheter Valve Replacement",
		"Cardiac Defibrillator Implantation",
		"Acute Myocardial Infarction Treatment",
		"Percutaneous Coronary Intervention for Elective and Emergency Cases",
		"Pacemaker Implantation"
	],
	participation: [
		{
			id: 397,
			label: "CathPCI Registry®",
			value: "Participating",
			associatedServices:
				"Percutaneous Coronary Intervention for Elective and Emergency Cases & Percutaneous Coronary Intervention for Acute Myocardial Infarction",
			helperText: null
		},
		{
			id: 281,
			label: "CathPCI Public Reporting Status",
			value: "Does Not Perform Services",
			associatedServices: "Diagnostic Cardiac Catheterization",
			helperText:
				"Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
		},
		{
			id: 282,
			label: "ICD Registry™",
			value: "Participating",
			associatedServices: "Atrial fibrillation ablation",
			helperText:
				"Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
		},
		{
			id: 228,
			label: "ICD Public Reporting Status",
			value: "Participating",
			associatedServices: "Diagnostic Cardiac Catheterization",
			helperText: null
		},
		{
			id: 803,
			label: "Chest Pain - MI Registry™",
			value: "Not Participating",
			associatedServices: "Diagnostic Cardiac Catheterization",
			helperText:
				"Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
		}
	],
	metrics: [
		{
			title: "NCDR METRIC 1",
			subtitle:
				"Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			data: [
				{
					id: 58,
					label: "Metric Title 5",
					type: "number",
					value: 2,
					helper:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					id: 36,
					label: "Metric Title 6",
					type: "star",
					value: 4,
					helper: null
				},
				{
					id: 10,
					label: "Metric Title 2",
					type: "star",
					value: 4,
					helper:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				}
			]
		}
	]
};
export const profileIdentifier = () => ({
	title: "FYHAH/Facility",
	components: {
		facilityProfileIdentifier
	},
	template: templateBasic,
	methods: {
		action: action("clicked")
	},
	data: () => ({
		facility: facilityData.facility,
		services: facilityData.services
	}),
	description: facilityDescription
});

export const result = () => ({
	title: "FYHAH/Result",
	components: {
		facilityResult
	},
	template: `<facilityResult :facility='facility' :services='services'/>`,
	methods: {
		action: action("clicked")
	},
	data: () => ({
		facility: facilityData.facility,
		services: facilityData.services
	}),
	description: facilityDescription
});
export const participation = () => ({
	title: "FYHAH/Tables/Participation",
	components: {
		tableParticipation
	},
	template: `<tableParticipation :participation='participation'/>`,
	methods: {
		action: action("clicked")
	},
	data: () => ({
		participation: facilityData.participation
	}),
	description: facilityDescription
});
