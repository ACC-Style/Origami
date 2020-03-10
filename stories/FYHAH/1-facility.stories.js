import { action } from "@storybook/addon-actions";
import facilityProfileIdentifier from "../../src/components/FYHAH/FYHAH.facilityProfileIdentifier.vue";

export default {
	title: "FYHAH/Facility",
	component: facilityProfileIdentifier,
	excludeStories: ["templateBasic", "facility", "facilityDescription"],
	parameters: {
		notes:
			"Buttons are highly flexable with icons and colors changed by ':state' and you can even pass icons in with the text for even more options of icon.  Try adding 'br_radius' to add curved corders.",
		info: true
	}
};
export const templateBasic = `<facilityProfileIdentifier :facility='facility'/>`;
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
export const facility = {
	ClientKey: 585,
	FacilityBrandedName: "Henry Mayo Newhall Hospital",
	FacilityAddress1: "23845 McBean Parkway",
	FacilityAddress2: "",
	FacilityCity: "Valencia",
	FacilityState: "CA",
	FacilityZip: "91355",
	FacilityZipPlusFour: null,
	Latitude: 34.3975623,
	Longitude: -118.5532604,
	FacilityPhone: "1-661-253-8000",
	FacilityWebURL: "",
	Services: [
		"Cardiac Defibrillator Implantation",
		"Carotid Artery Stenting",
		"Carotid Endarterectomy",
		"Congenital Heart Defect Intervention",
		"Diagnostic Cardiac Catheterization",
		"Electrophysiology Studies",
		"Pacemaker Implantation",
		"Percutaneous Coronary Intervention for Elective and Emergency Cases"
	],
	CathPCIParticipation: "Participating",
	CathPCIPublicReporting: "Not Participating with ACC",
	ICDParticipation: "Not Participating",
	ICDPublicReporting: "Ineligible: Not Participating in Registry",
	ACTIONParticipation: "Does Not Perform Services",
	CPMIPublicReporting: "Ineligible: Does Not Perform Services",
	ACTIONAwardRecipient: null,
	IMPACTParticipation: "Not Participating",
	TVTParticipation: "Does Not Perform Services",
	PVIParticipation: "Not Participating",
	QIIParticipation: "Participating",
	LAAOParticipation: "Does Not Perform Services",
	AFIBParticipation: "Does Not Perform Services",
	CathPCIPublicReportingCode: 2,
	ICDPublicReportingCode: 5,
	CPMIPublicReportingCode: 6,
	CathPCIProcedureCount_MetricName:
		"Number of PCI/angioplasty procedures performed during the calendar year.",
	CathPCIProcedureCount_MetricDescription:
		"The number of PCI/angioplasty procedures a site performs does not necessarily indicate higher quality, but it may be an indication of how experienced this site is with the procedure.",
	CathPCIProcedureCount: null,
	ICDProcedureCount_MetricName:
		"Number of initial ICD implant procedures performed",
	ICDProcedureCount_MetricDescription:
		"The number of ICD implant procedures a site performs does not necessarily indicate higher quality, but it may be an indication of how experienced this site is with the procedure. ",
	ICDProcedureCount: null,
	CPMIProcedureCount_MetricName:
		"Number of acute myocardial infarctions (MIs) treated during the calendar year.",
	CPMIProcedureCount_MetricDescription:
		"The number of acute MIs does not necessarily indicate higher quality, but it may be an indication of how experienced this site is in caring for AMIs.",
	CPMIProcedureCount: null,
	CathAspirin_NumberofStars: 4,
	CathP2Y12_NumberofStars: 4,
	CathStatin_NumberofStars: 4,
	CathDCMed_NumberofStars: 4,
	ICDACEARB_NumberofStars: null,
	ICDPriorMI_NumberofStars: null,
	ICDBetaBlocker_NumberofStars: null,
	ICDDCMed_NumberofStars: null,
	CathAspirinMetricID: "8",
	CathP2Y12_MetricID: "9",
	CathStatin_MetricID: "10",
	CathDCMed_MetricID: "38",
	ICDACEARB_MetricID: "4",
	ICDPriorMI_MetricID: "5",
	ICDBetaBlocker_MetricID: "6",
	ICDDCMed_MetricID: "14",
	CathAspirin_Metric_Name:
		"Use of Aspirin to reduce the chance of blood clots after PCI/angioplasty.",
	CathP2Y12_Metric_Name:
		"Use of a P2Y12 inhibitor  medication to reduce the chance of blood clots after PCI/angioplasty.",
	CathStatin_Metric_Name:
		"Use of a Statin to decrease cholesterol after PCI/angioplasty.",
	CathDCMed_Metric_Name:
		"Use of all recommended medications (Aspirin, P2Y12 inhibitor medication, and Statin) to reduce the chance of blood clots and decrease cholesterol after PCI/angioplasty.",
	ICDACEARB_Metric_Name:
		"Proportion of patients with left ventricular systolic dysfunction who had ACE-I or ARB prescription addressed on discharge",
	ICDPriorMI_Metric_Name:
		"Proportion of patients with prior MI who had beta-blocker prescription addressed on discharge",
	ICDBetaBlocker_Metric_Name:
		"Proportion of patients with left ventricular systolic dysfunction (LVSD) who had beta-blocker prescription addressed on discharge",
	ICDDCMed_Metric_Name:
		"Composite: Proportion of patients prescribed all discharge medications (ACE-I/ARB and/or beta-blocker) for which they were eligible",
	CathAspirin_Metric_Description:
		"Patients should be prescribed Aspirin to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \r\n\r\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take aspirin are excluded. ",
	CathP2Y12Metric_Metric_Description:
		"Patients should be prescribed a P2Y12 inhibitor medication to reduce the risk of heart attacks caused by blood clots in new stents after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \r\n\r\nThis score shows how well this facility is following this guideline - higher is better. Patients who cannot take P2Y12 inhibitor medicines are excluded.",
	CathStatin_Metric_Description:
		"Patients should be prescribed a Statin to decrease cholesterol and reduce the risk of heart attacks after having a PCI/angioplasty- unless there is a reason not to use the medicine (such as an allergy).  \r\n\r\nThis score shows how well this facility is following this guideline - higher is better.  Patients who cannot take Statin medications are excluded.",
	CathDCMed_Metric_Description:
		"Patients should be prescribed Aspirin, a P2Y12 inhibitor medication, and a Statin medication after having a PCI/angioplasty to reduce the chance of blood clots in new stents ,decrease cholesterol and reduce the risk of heart attacks- unless there is a reason not to use these medicines (such as an allergy). \r\n\r\nThis score shows how well this facility is following this guideline - higher is better.  Patients who cannot take all of the recommended medicines are excluded.",
	ICDACEARB_Metric_Description:
		"Patients with less than normal heart function should be prescribed an ACE or ARB medication after receiving an ICD implant-unless there is a reason not to use the medicine (such as an allergy).  Use of this medication may reduce the risk of death and hospital re-admission after this procedure.\n\nThis score shows how well this facility is following this guideline - higher is better.  Patients who cannot take an ACE or ARB are excluded. ",
	ICDPriorMI_Metric_Description:
		"Patients who have suffered a previous heart attack should be prescribed a Beta-blocker medication after receiving an ICD implant- unless there is a reason not to use these medicines (such as an allergy).  Use of this medication may reduce the risk of death and hospital re-admission after this procedure.\n\nThis score shows how well this facility is following this guideline - higher is better.  Patients who cannot take beta-blocker medicines are excluded. ",
	ICDBetaBlocker_Metric_Description:
		"Patients with less than normal heart function should be prescribed a Beta-blocker medication after receiving an ICD implant- unless there is a reason not to use the medicine (such as an allergy).  Use of this medication may reduce the risk of death and hospital re-admission after this procedure.\n\nThis score shows how well this facility is following this guideline - higher is better.  Patients who cannot take beta-blocker medicines are excluded. ",
	ICDDCMed_Metric_Description:
		"Patients should be prescribed an ACE or ARB medication and a Beta-blocker medication after receiving an ICD implant- unless there is a reason not to use these medicines (such as an allergy).  Use of these medications may reduce the risk of death and hospital re-admission after this procedure.\n\nThis score shows how well this facility is following this guideline - higher is better.  Patients who cannot take all of the recommended medicines are excluded. ",
	CathAspirin_EligibilityIndicator: "1",
	CathP2Y12_EligibilityIndicator: "1",
	CathStatin_EligibilityIndicator: "1",
	CathDCMed_EligibilityIndicator: "1",
	ICDACEARB_EligibilityIndicator: "2",
	ICDPriorMI_EligibilityIndicator: "2",
	ICDBetaBlocker_EligibilityIndicator: "2",
	ICDDCMed_EligibilityIndicator: "2",
	CathAspirin_EligibilityIndicatorDesc:
		"Eligible (Meets minimum submission and minimum case volume criteria",
	CathP2Y12_EligibilityIndicatorDesc:
		"Eligible (Meets minimum submission and minimum case volume criteria",
	CathStatin_EligibilityIndicatorDesc:
		"Eligible (Meets minimum submission and minimum case volume criteria",
	CathDCMed_EligibilityIndicatorDesc:
		"Eligible (Meets minimum submission and minimum case volume criteria",
	ICDACEARB_EligibilityIndicatorDesc:
		"Not Eligible (Fails minimum submission criteria. Minimum case volume N/A)",
	ICDPriorMI_EligibilityIndicatorDesc:
		"Not Eligible (Fails minimum submission criteria. Minimum case volume N/A)",
	ICDBetaBlocker_EligibilityIndicatorDesc:
		"Not Eligible (Fails minimum submission criteria. Minimum case volume N/A)",
	ICDDCMed_EligibilityIndicatorDesc:
		"Not Eligible (Fails minimum submission criteria. Minimum case volume N/A)",
	CPMIPerfectCare_NumberofStars: null,
	CPMISTEMIComposite_NumberofStars: null,
	CPMIPerfectCare_MetricID: null,
	CPMISTEMICompsite_MetricID: null,
	CPMIPerfectCare_Metric_Name: "All Heart Attack Care",
	CPMISTEMICompsite_Metric_Name: "Urgent Heart Attack Care",
	CPMIPerfectCare_Metric_Description:
		"This rating reflects how a facility provides standard heart attack treatments to all types of heart attack patients at the right time during their hospitalization.",
	CPMISTEMICompsite_Metric_Description:
		"This rating reflects how a facility provides standard heart attack treatments to patients suffering heart attacks that typically require urgent treatment with a stent or medications and are later referred to cardiac rehabilitation.",
	CPMIPerfectCare_EligibilityIndicator: null,
	CPMISTEMICompsite_EligibilityIndicator: null,
	CPMIPerfectCare_EligibilityIndicatorDesc: null,
	CPMISTEMICompsite_EligibilityIndicatorDesc: null,
	Distance: null,
	GoogleAddress: "23845+McBean+Parkway+Valencia+CA+91355"
};
export const profileIdentifier = () => ({
	components: {
		facilityProfileIdentifier
	},
	template: templateBasic,
	methods: {
		action: action("clicked")
	},
	data: () => ({
		facility: facility
	}),
	description: facilityDescription
});
