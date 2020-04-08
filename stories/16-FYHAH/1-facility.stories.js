import { action } from "@storybook/addon-actions";
import facilityProfileIdentifier from "../../src/components/FYHAH/FYHAH.facilityProfileIdentifier.vue";
import facilityResult from "../../src/components/FYHAH/FYHAH.facilityResult.vue";
import tableParticipation from "../../src/components/FYHAH/FYHAH.tableParticipation.vue";
import tableMetric from "../../src/components/FYHAH/FYHAH.tableMetric.vue";

export default {
	title: "FYHAH/Facility",
	component: facilityProfileIdentifier,
	excludeStories: ["templateBasic", "facilityData", "facilityDescription"],
	parameters: {
		notes:
			"Buttons are highly flexable with icons and colors changed by ':state' and you can even pass icons in with the text for even more options of icon.  Try adding 'br_radius' to add curved corders.",
		info: true
	}
};

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
	"id": 167,
	"distance": 3.5,
	"facility": {
		"brandedName": "Trudeo",
		"address1": "8994 Morning Pass",
		"address2": null,
		"city": "Salt Lake City",
		"state": "UT",
		"zip": "84110",
		"webURL": null,
		"phone": "801-551-8160",
		"googleAddress": "4500+San+Pablo+Road+Jacksonville+FL+32224"
	},
	"services": [
		"Cardiac Surgery Services",
		"Cardiac Defibrillator Implantation",
		"Carotid Endarterectomy",
		"Percutaneous Peripheral Vascular Intervention",
		"Carotid Artery Stenting"
	],
	"participation": {
		"data": [
			{
				"id": 579,
				"label": "CathPCI Registry®",
				"value": "Participating",
				"associatedServices": "Atrial fibrillation ablation",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 781,
				"label": "CathPCI Public Reporting Status",
				"value": "Participating",
				"associatedServices": "Percutaneous Coronary Intervention for Elective and Emergency Cases & Percutaneous Coronary Intervention for Acute Myocardial Infarction",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 150,
				"label": "ICD Registry™",
				"value": "Ineligible: Not Participating in Registry",
				"associatedServices": "Atrial fibrillation ablation",
				"helperText": null
			},
			{
				"id": 381,
				"label": "ICD Public Reporting Status",
				"value": "Participating",
				"associatedServices": "Electrophysiology Studies, Pacemaker Implantation & Cardiac Defibrillator Implantation",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 829,
				"label": "Chest Pain - MI Registry™",
				"value": "Participating",
				"associatedServices": "Atrial fibrillation ablation",
				"helperText": null
			}
		],
		"title": "Registry and Quality Program Participation.",
		"subtitle": "Registry and Quality Program Participation."
	},
	"metrics": [
		{
			"title": "NCDR METRIC 1",
			"subtitle": "Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			"data": [
				{
					"id": 93,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 4,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 40,
					"label": "Use of a Statin to decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 4,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 65,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "star",
					"value": 5,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 32,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 75,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 1,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				}
			]
		},
		{
			"title": "NCDR METRIC2",
			"subtitle": "Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			"data": [
				{
					"id": 93,
					"label": "Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 94,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 2,
					"helperText": null
				},
				{
					"id": 80,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 4,
					"helperText": null
				},
				{
					"id": 71,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "star",
					"value": 5,
					"helperText": null
				},
				{
					"id": 58,
					"label": "Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
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
	template: `<facilityProfileIdentifier :facility='facility' :services='services'/>`,
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
