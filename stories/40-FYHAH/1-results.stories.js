import { action } from "@storybook/addon-actions";
import facilityResult from "../../src/components/FYHAH/FYHAH.facilityResult.vue";
import facilityResultList from "../../src/components/FYHAH/FYHAH.listOfResults.vue";

export default {
	title: "FYHAH/Results",
	excludeStories: ["templateBasic", "results", "facilityDescription","default"],
	parameters: {
		notes:
			"Buttons are highly flexable with icons and colors changed by ':state' and you can even pass icons in with the text for even more options of icon.  Try adding 'br_radius' to add curved corders.",
		 
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
export const results = [{
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
}, {
	"id": 736,
	"distance": 4.1,
	"facility": {
		"brandedName": "Cogibox",
		"address1": "208 Westend Plaza",
		"address2": null,
		"city": "Meridian",
		"state": "MS",
		"zip": "39305",
		"webURL": "http://wisc.edu/in/felis/eu/sapien/cursus.json?luctus=consequat&rutrum=dui&nulla=nec&tellus=nisi&in=volutpat&sagittis=eleifend&dui=donec&vel=ut&nisl=dolor&duis=morbi&ac=vel&nibh=lectus&fusce=in&lacus=quam&purus=fringilla&aliquet=rhoncus&at=mauris&feugiat=enim&non=leo&pretium=rhoncus&quis=sed&lectus=vestibulum&suspendisse=sit&potenti=amet&in=cursus&eleifend=id&quam=turpis&a=integer&odio=aliquet&in=massa&hac=id&habitasse=lobortis&platea=convallis&dictumst=tortor&maecenas=risus&ut=dapibus&massa=augue&quis=vel&augue=accumsan&luctus=tellus&tincidunt=nisi&nulla=eu&mollis=orci&molestie=mauris&lorem=lacinia&quisque=sapien&ut=quis&erat=libero&curabitur=nullam&gravida=sit&nisi=amet&at=turpis&nibh=elementum&in=ligula&hac=vehicula&habitasse=consequat&platea=morbi&dictumst=a&aliquam=ipsum",
		"phone": "601-659-5931",
		"googleAddress": "4500+San+Pablo+Road+Jacksonville+FL+32224"
	},
	"services": [
		"Carotid Endarterectomy",
		"Pacemaker Implantation",
		"Atrial Fibrillation Ablation",
		"Acute Myocardial Infarction Treatment",
		"Congenital Heart Defect Intervention",
		"Cardiac Defibrillator Implantation",
		"Carotid Artery Stenting"
	],
	"participation": {
		"data": [
			{
				"id": 993,
				"label": "CathPCI Registry®",
				"value": "Does Not Perform Services",
				"associatedServices": "Atrial fibrillation ablation",
				"helperText": null
			},
			{
				"id": 462,
				"label": "CathPCI Public Reporting Status",
				"value": "Ineligible: Not Participating in Registry",
				"associatedServices": "Diagnostic Cardiac Catheterization",
				"helperText": null
			},
			{
				"id": 828,
				"label": "ICD Registry™",
				"value": "Does Not Perform Services",
				"associatedServices": "Diagnostic Cardiac Catheterization",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 879,
				"label": "ICD Public Reporting Status",
				"value": "Participating",
				"associatedServices": "Electrophysiology Studies, Pacemaker Implantation & Cardiac Defibrillator Implantation",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 596,
				"label": "Chest Pain - MI Registry™",
				"value": "Participating",
				"associatedServices": "Electrophysiology Studies, Pacemaker Implantation & Cardiac Defibrillator Implantation",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
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
					"id": 43,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 1,
					"helperText": null
				},
				{
					"id": 79,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "star",
					"value": 1,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 41,
					"label": "Use of a Statin to decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 1,
					"helperText": null
				},
				{
					"id": 20,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 2,
					"helperText": null
				},
				{
					"id": 42,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				}
			]
		},
		{
			"title": "NCDR METRIC2",
			"subtitle": "Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			"data": [
				{
					"id": 67,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 5,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 97,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "star",
					"value": 4,
					"helperText": null
				},
				{
					"id": 92,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "star",
					"value": 4,
					"helperText": null
				},
				{
					"id": 54,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "number",
					"value": 1,
					"helperText": null
				},
				{
					"id": 63,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "star",
					"value": 2,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				}
			]
		},
		{
			"title": "NCDR METRIC 3",
			"subtitle": "Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			"data": [
				{
					"id": 22,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 93,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "star",
					"value": 1,
					"helperText": null
				},
				{
					"id": 64,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "number",
					"value": 2,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 46,
					"label": "Use of a Statin to decrease cholesterol after PCI/angioplasty.",
					"type": "star",
					"value": 4,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 28,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 1,
					"helperText": null
				}
			]
		}
	]
}, {
	"id": 450,
	"distance": 4.0,
	"facility": {
		"brandedName": "Skinix",
		"address1": "7593 Harbort Junction",
		"address2": null,
		"city": "Chesapeake",
		"state": "VA",
		"zip": "23324",
		"webURL": null,
		"phone": "757-493-9932",
		"googleAddress": "700+West+Ave.So.+La+Crosse+WI+54601"
	},
	"services": [
		"Carotid Endarterectomy",
		"Percutaneous Peripheral Vascular Intervention",
		"Cardiac Defibrillator Implantation"
	],
	"participation": {
		"data": [
			{
				"id": 275,
				"label": "CathPCI Registry®",
				"value": "Does Not Perform Services",
				"associatedServices": "Diagnostic Cardiac Catheterization",
				"helperText": null
			},
			{
				"id": 236,
				"label": "CathPCI Public Reporting Status",
				"value": "Not Participating",
				"associatedServices": "Atrial fibrillation ablation",
				"helperText": null
			},
			{
				"id": 458,
				"label": "ICD Registry™",
				"value": "Ineligible: Not Participating in Registry",
				"associatedServices": "Percutaneous Coronary Intervention for Elective and Emergency Cases & Percutaneous Coronary Intervention for Acute Myocardial Infarction",
				"helperText": null
			},
			{
				"id": 169,
				"label": "ICD Public Reporting Status",
				"value": "Not Participating",
				"associatedServices": "Atrial fibrillation ablation",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 852,
				"label": "Chest Pain - MI Registry™",
				"value": "Participating",
				"associatedServices": "Percutaneous Coronary Intervention for Elective and Emergency Cases & Percutaneous Coronary Intervention for Acute Myocardial Infarction",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
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
					"id": 55,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "star",
					"value": 5,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 79,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "number",
					"value": 5,
					"helperText": null
				},
				{
					"id": 16,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 4,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 81,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "star",
					"value": 4,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 13,
					"label": "Use of a Statin to decrease cholesterol after PCI/angioplasty.",
					"type": "star",
					"value": 3,
					"helperText": null
				}
			]
		}
	]
}, {
	"id": 147,
	"distance": 2.0,
	"facility": {
		"brandedName": "Divape",
		"address1": "76 Walton Place",
		"address2": null,
		"city": "Tucson",
		"state": "AZ",
		"zip": "85720",
		"webURL": null,
		"phone": "520-727-9671",
		"googleAddress": "700+West+Ave.So.+La+Crosse+WI+54601"
	},
	"services": [
		"Congenital Heart Defect Intervention",
		"Percutaneous Coronary Intervention for Elective and Emergency Cases",
		"Carotid Endarterectomy",
		"Carotid Artery Stenting"
	],
	"participation": {
		"data": [
			{
				"id": 337,
				"label": "CathPCI Registry®",
				"value": "Not Participating",
				"associatedServices": "Atrial fibrillation ablation",
				"helperText": null
			},
			{
				"id": 695,
				"label": "CathPCI Public Reporting Status",
				"value": "Not Participating",
				"associatedServices": "Diagnostic Cardiac Catheterization",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 560,
				"label": "ICD Registry™",
				"value": "Not Participating",
				"associatedServices": "Percutaneous Coronary Intervention for Elective and Emergency Cases & Percutaneous Coronary Intervention for Acute Myocardial Infarction",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 449,
				"label": "ICD Public Reporting Status",
				"value": "Does Not Perform Services",
				"associatedServices": "Diagnostic Cardiac Catheterization",
				"helperText": null
			},
			{
				"id": 845,
				"label": "Chest Pain - MI Registry™",
				"value": "Does Not Perform Services",
				"associatedServices": "Electrophysiology Studies, Pacemaker Implantation & Cardiac Defibrillator Implantation",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
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
					"id": 49,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 5,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 96,
					"label": "Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 2,
					"helperText": null
				},
				{
					"id": 47,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 5,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 18,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "star",
					"value": 4,
					"helperText": null
				},
				{
					"id": 24,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 4,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				}
			]
		},
		{
			"title": "NCDR METRIC2",
			"subtitle": "Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			"data": [
				{
					"id": 100,
					"label": "Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 2,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 10,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "number",
					"value": 1,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 50,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 5,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 83,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 5,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 81,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 1,
					"helperText": null
				}
			]
		},
		{
			"title": "NCDR METRIC 3",
			"subtitle": "Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			"data": [
				{
					"id": 57,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 5,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 93,
					"label": "Use of a Statin to decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 2,
					"helperText": null
				},
				{
					"id": 94,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "star",
					"value": 1,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 66,
					"label": "Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 4,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 45,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "star",
					"value": 5,
					"helperText": null
				}
			]
		}
	]
}, {
	"id": 813,
	"distance": 2.2,
	"facility": {
		"brandedName": "Jabbersphere",
		"address1": "7974 Melrose Drive",
		"address2": null,
		"city": "Lincoln",
		"state": "NE",
		"zip": "68583",
		"webURL": null,
		"phone": "402-423-4374",
		"googleAddress": "5777+East+Mayo+Blvd+Phoenix+AZ+85054"
	},
	"services": [
		"Electrophysiology Studies",
		"Pacemaker Implantation",
		"Congenital Heart Defect Intervention",
		"Transcatheter Valve Replacement",
		"Coronary Artery Bypass Graft Surgery",
		"Diagnostic Cardiac Catheterization"
	],
	"participation": {
		"data": [
			{
				"id": 857,
				"label": "CathPCI Registry®",
				"value": "Participating",
				"associatedServices": "Percutaneous Coronary Intervention for Elective and Emergency Cases & Percutaneous Coronary Intervention for Acute Myocardial Infarction",
				"helperText": null
			},
			{
				"id": 758,
				"label": "CathPCI Public Reporting Status",
				"value": "Not Participating",
				"associatedServices": "Diagnostic Cardiac Catheterization",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 825,
				"label": "ICD Registry™",
				"value": "Does Not Perform Services",
				"associatedServices": "Percutaneous Coronary Intervention for Elective and Emergency Cases & Percutaneous Coronary Intervention for Acute Myocardial Infarction",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 308,
				"label": "ICD Public Reporting Status",
				"value": "Ineligible: Not Participating in Registry",
				"associatedServices": "Electrophysiology Studies, Pacemaker Implantation & Cardiac Defibrillator Implantation",
				"helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
			},
			{
				"id": 891,
				"label": "Chest Pain - MI Registry™",
				"value": "Not Participating",
				"associatedServices": "Diagnostic Cardiac Catheterization",
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
					"id": 47,
					"label": "Use of a Statin to decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 21,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 35,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "star",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 43,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 1,
					"helperText": null
				},
				{
					"id": 51,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 5,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				}
			]
		},
		{
			"title": "NCDR METRIC2",
			"subtitle": "Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			"data": [
				{
					"id": 23,
					"label": "Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 5,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 21,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 4,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 15,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "star",
					"value": 5,
					"helperText": null
				},
				{
					"id": 80,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "star",
					"value": 2,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 22,
					"label": "Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 4,
					"helperText": null
				}
			]
		},
		{
			"title": "NCDR METRIC 3",
			"subtitle": "Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
			"data": [
				{
					"id": 47,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 3,
					"helperText": null
				},
				{
					"id": 77,
					"label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
					"type": "number",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 86,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "star",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 15,
					"label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
					"type": "number",
					"value": 3,
					"helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
				},
				{
					"id": 84,
					"label": "Number of PCI/angioplasty procedures performed during the calendar year.",
					"type": "number",
					"value": 3,
					"helperText": null
				}
			]
		}
	]
}];



export const resultSingular = () => ({
	title: "Data",
	components: {
		facilityResult
	},
	template: `<facilityResult :id="id" :facility='facility' :services='services' @AddToCompare="AddToCompare" @RemoveFromCompare="RemoveFromCompare" @GoToProfile="GoToProfile"/>`,
	methods: {
		AddToCompare: action("Add To Compare"),
		RemoveFromCompare: action("Remove From Compare"),
		GoToProfile: action("Go To Profile"),
	},
	data: () => ({
		facility: results[0].facility,
		services: results[0].services,
		id: results[0].id
	}),
	description: facilityDescription
});
export const resultLoading = () => ({
	title: "List Loading",
	components: {
		facilityResultList
	},
	template: `<facilityResultList :results="results" @AddToCompare="AddToCompare" @RemoveFromCompare="RemoveFromCompare" :finishedLoading="finishedLoading" @GoToProfile="GoToProfile"/>`,
	methods: {
		AddToCompare: action("Add To Compare"),
		RemoveFromCompare: action("Remove From Compare"),
		GoToProfile: action("Go To Profile"),
	},
	data: () => ({
        results,
        finishedLoading:false
	}),
	description: facilityDescription
});
export const resultList = () => ({
	title: "List Loading",
	components: {
		facilityResultList
	},
	template: `<facilityResultList :results="results" @AddToCompare="AddToCompare" @RemoveFromCompare="RemoveFromCompare" :finishedLoading="finishedLoading" @GoToProfile="GoToProfile"/>`,
	methods: {
		AddToCompare: action("Add To Compare"),
		RemoveFromCompare: action("Remove From Compare"),
		GoToProfile: action("Go To Profile"),
	},
	data: () => ({
        results,
        finishedLoading:true
	}),
	description: facilityDescription
});
export const ResultListZero = () => ({
	title: "List No Results",
	components: {
		facilityResultList
	},
	template: `<facilityResultList :results="results" :finishedLoading="finishedLoading" @AddToCompare="AddToCompare" @RemoveFromCompare="RemoveFromCompare" @GoToProfile="GoToProfile"/>`,
	methods: {
		AddToCompare: action("Add To Compare"),
		RemoveFromCompare: action("Remove From Compare"),
		GoToProfile: action("Go To Profile"),
	},
	data: () => ({
        results: [],
        finishedLoading: true
	}),
	description: facilityDescription
});
