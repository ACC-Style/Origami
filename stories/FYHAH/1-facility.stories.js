import { action } from "@storybook/addon-actions";
import facilityProfileIdentifier from "../../src/components/FYHAH/FYHAH.facilityProfileIdentifier.vue";
import facilityResult from "../../src/components/FYHAH/FYHAH.facilityResult.vue";
import tableParticipation from "../../src/components/FYHAH/FYHAH.tableParticipation.vue";
import tableMetric from "../../src/components/FYHAH/FYHAH.tableMetric.vue";

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
	id: 420,
	Distance: 4.3,
	facility: {
		BrandedName: "Abatz",
		Address1: "0 Sage Point",
		Address2: null,
		City: "Vero Beach",
		State: "FL",
		Zip: "32969",
		WebURL: null,
		Phone: "772-322-5819",
		GoogleAddress: "700+West+Ave.So.+La+Crosse+WI+54601"
	},
	services: [
		"Coronary Artery Bypass Graft Surgery",
		"Left Atrial Appendage Occlusion",
		"Transcatheter Valve Replacement",
		"Acute Myocardial Infarction Treatment",
		"Carotid Artery Stenting",
		"Congenital Heart Defect Intervention",
		"Pacemaker Implantation",
		"Carotid Endarterectomy",
		"Percutaneous Coronary Intervention for Elective and Emergency Cases",
		"Cardiac Defibrillator Implantation"
	],
	participation: {
		data: [
			{
				id: 955,
				label: "CathPCI Registry®",
				value: "Not Participating",
				associatedServices:
					"Percutaneous Coronary Intervention for Elective and Emergency Cases & Percutaneous Coronary Intervention for Acute Myocardial Infarction",
				helperText: null
			},
			{
				id: 210,
				label: "CathPCI Public Reporting Status",
				value: "Ineligible: Not Participating in Registry",
				associatedServices: "Atrial fibrillation ablation",
				helperText: null
			},
			{
				id: 871,
				label: "ICD Registry™",
				value: "Not Participating",
				associatedServices: "Diagnostic Cardiac Catheterization",
				helperText: null
			},
			{
				id: 737,
				label: "ICD Public Reporting Status",
				value: "Does Not Perform Services",
				associatedServices:
					"Percutaneous Coronary Intervention for Elective and Emergency Cases & Percutaneous Coronary Intervention for Acute Myocardial Infarction",
				helperText:
					"Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				id: 446,
				label: "Chest Pain - MI Registry™",
				value: "Ineligible: Not Participating in Registry",
				associatedServices: "Atrial fibrillation ablation",
				helperText: null
			}
		],
		title: "Registry and Quality Program Participation.",
		subTitle: "Registry and Quality Program Participation."
	},
	metrics: [
		{
			title: "NCDR METRIC 1",
			subTitle:
				"Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			data: [
				{
					id: 87,
					label:
						"Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					type: "number",
					value: 3,
					helperText:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					id: 43,
					label:
						"Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					type: "number",
					value: 2,
					helperText:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					id: 24,
					label:
						"Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
					type: "number",
					value: 4,
					helperText:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					id: 59,
					label:
						"Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					type: "number",
					value: 5,
					helperText:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					id: 69,
					label:
						"Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					type: "star",
					value: 5,
					helperText:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				}
			]
		},
		{
			title: "NCDR METRIC2",
			subTitle:
				"Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			data: [
				{
					id: 55,
					label:
						"Use of a Statin to decrease cholesterol after PCI/angioplasty.",
					type: "number",
					value: 3,
					helperText:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					id: 93,
					label:
						"Use of a Statin to decrease cholesterol after PCI/angioplasty.",
					type: "number",
					value: 2,
					helperText: null
				},
				{
					id: 64,
					label:
						"Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
					type: "number",
					value: 4,
					helperText: null
				},
				{
					id: 90,
					label:
						"Use of a Statin to decrease cholesterol after PCI/angioplasty.",
					type: "star",
					value: 1,
					helperText: null
				},
				{
					id: 22,
					label:
						"Number of PCI/angioplasty procedures performed during the calendar year.",
					type: "number",
					value: 1,
					helperText:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				}
			]
		},
		{
			title: "NCDR METRIC 3",
			subTitle:
				"Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			data: [
				{
					id: 13,
					label:
						"Number of PCI/angioplasty procedures performed during the calendar year.",
					type: "number",
					value: 1,
					helperText: null
				},
				{
					id: 93,
					label:
						"Use of a Statin to decrease cholesterol after PCI/angioplasty.",
					type: "number",
					value: 2,
					helperText:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					id: 49,
					label:
						"Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
					type: "star",
					value: 4,
					helperText:
						"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					id: 51,
					label:
						"Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					type: "number",
					value: 2,
					helperText: null
				},
				{
					id: 45,
					label:
						"Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					type: "star",
					value: 1,
					helperText:
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
export const table_participation = () => ({
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
export const table_metric = () => ({
	title: "FYHAH/Tables/Metric",
	components: {
		tableMetric
	},
	template: `<tableMetric :metric='metric'/>`,
	methods: {
		action: action("clicked")
	},
	data: () => ({
		metric: facilityData.metrics[0]
	}),
	description: facilityDescription
});
