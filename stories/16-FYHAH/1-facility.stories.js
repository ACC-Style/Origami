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
  "id": 280,
  "distance": 2.4,
  "facility": {
    "brandedName": "Tagcat",
    "address1": "214 Upham Park",
    "address2": "0 Larry Drive",
    "city": "Boise",
    "state": "ID",
    "zip": "83711",
    "webURL": "http://seattletimes.com/donec/diam/neque.aspx?risus=sodales&dapibus=scelerisque&augue=mauris&vel=sit&accumsan=amet&tellus=eros&nisi=suspendisse&eu=accumsan&orci=tortor&mauris=quis&lacinia=turpis&sapien=sed&quis=ante&libero=vivamus&nullam=tortor&sit=duis&amet=mattis&turpis=egestas&elementum=metus&ligula=aenean&vehicula=fermentum&consequat=donec&morbi=ut&a=mauris&ipsum=eget&integer=massa&a=tempor&nibh=convallis&in=nulla&quis=neque&justo=libero&maecenas=convallis&rhoncus=eget&aliquam=eleifend&lacus=luctus&morbi=ultricies&quis=eu&tortor=nibh&id=quisque&nulla=id&ultrices=justo&aliquet=sit&maecenas=amet&leo=sapien&odio=dignissim&condimentum=vestibulum&id=vestibulum&luctus=ante&nec=ipsum&molestie=primis&sed=in&justo=faucibus&pellentesque=orci&viverra=luctus&pede=et&ac=ultrices&diam=posuere&cras=cubilia&pellentesque=curae&volutpat=nulla&dui=dapibus&maecenas=dolor&tristique=vel&est=est&et=donec&tempus=odio&semper=justo&est=sollicitudin&quam=ut&pharetra=suscipit&magna=a&ac=feugiat&consequat=et&metus=eros&sapien=vestibulum&ut=ac&nunc=est&vestibulum=lacinia&ante=nisi&ipsum=venenatis&primis=tristique&in=fusce&faucibus=congue&orci=diam&luctus=id&et=ornare&ultrices=imperdiet",
    "phone": "208-523-1569",
    "googleAddress": "4500+San+Pablo+Road+Jacksonville+FL+32224"
  },
  "services": [
    "Carotid Endarterectomy",
    "Electrophysiology Studies",
    "Diagnostic Cardiac Catheterization",
    "Transcatheter Valve Replacement"
  ],
  "participation": {
    "title": "Registry and Quality Program Participation.",
    "subtitle": "Registry and Quality Program Participation.",
    "data": [
      {
        "id": 153,
        "label": "Chest Pain - MI Registry™",
        "category": null,
        "value": "Participating",
        "associatedServices": "Atrial fibrillation ablation",
        "helperText": null
      },
      {
        "id": 766,
        "label": "CathPCI Public Reporting Status",
        "category": "CathPCI",
        "value": "Does Not Perform Services",
        "associatedServices": "Atrial fibrillation ablation",
        "helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
      },
      {
        "id": 371,
        "label": "ICD Public Reporting Status",
        "category": "AFIB",
        "value": "Participating",
        "associatedServices": "Percutaneous Coronary Intervention for Elective and Emergency Cases & Percutaneous Coronary Intervention for Acute Myocardial Infarction",
        "helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
      },
      {
        "id": 854,
        "label": "CathPCI Registry®",
        "category": "Chest Pain",
        "value": "Does Not Perform Services",
        "associatedServices": "Electrophysiology Studies, Pacemaker Implantation & Cardiac Defibrillator Implantation",
        "helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
      },
      {
        "id": 437,
        "label": "CathPCI Registry®",
        "category": null,
        "value": "Does Not Perform Services",
        "associatedServices": "Atrial fibrillation ablation",
        "helperText": null
      },
      {
        "id": 805,
        "label": "ICD Public Reporting Status",
        "category": "Chest Pain",
        "value": "Does Not Perform Services",
        "associatedServices": "Electrophysiology Studies, Pacemaker Implantation & Cardiac Defibrillator Implantation",
        "helperText": "Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \\r\\n\\r\\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded."
      }
    ]
  },
  "metrics": [
    {
      "title": "NCDR METRIC 1",
      "subtitle": "Hospital performance for patients who have had a cardiac catheterization or PCI (angioplasty)",
      "data": [
        {
          "id": 19,
          "label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
          "type": "number",
          "value": 1,
          "helperText": null
        },
        {
          "id": 76,
          "label": "Use of a Statin to decrease cholesterol after PCI/angioplasty.",
          "type": "star",
          "value": 3,
          "helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
        },
        {
          "id": 15,
          "label": "Use of a Statin to decrease cholesterol after PCI/angioplasty.",
          "type": "star",
          "value": 3,
          "helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
        },
        {
          "id": 48,
          "label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
          "type": "star",
          "value": 2,
          "helperText": null
        },
        {
          "id": 27,
          "label": "Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
          "type": "star",
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
          "id": 94,
          "label": "Use of a P2Y12 inhibitor medication to reduce the chance of blood clots after PCI/angioplasty.",
          "type": "number",
          "value": 2,
          "helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
        },
        {
          "id": 67,
          "label": "Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
          "type": "star",
          "value": 1,
          "helperText": null
        },
        {
          "id": 36,
          "label": "Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
          "type": "star",
          "value": 4,
          "helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
        },
        {
          "id": 73,
          "label": "Number of PCI/angioplasty procedures performed during the calendar year.",
          "type": "number",
          "value": 5,
          "helperText": "Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy). This score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded."
        },
        {
          "id": 28,
          "label": "Use of a Statin to decrease cholesterol after PCI/angioplasty.",
          "type": "number",
          "value": 2,
          "helperText": null
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
