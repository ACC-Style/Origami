import {
	action
} from "@storybook/addon-actions";
import ResultRec from "../../src/components/GLSearch/GLSearch.Result.Recommendation";
import ResultTable from "../../src/components/GLSearch/GLSearch.Result.Table";
import ResultFooter from "../../src/components/GLSearch/GLSearch.Result.Footer";
export default {
	title: "GLSearch/Result",
	parameters: {
		componentSubtitle: "Guideline Search Result",
		notes: true,
		info: true
	},
	excludeStories: [ "recomendationData", "methods", "tableData" ]
};
export const tableData = {
	type: "table",
	documentTitle: "2017 ACC/AHA/HFSA Focused Update of the 2013 ACCF/AHA Guideline for the Management of Heart Failure",
	title: "Biomarkers: Recommendation for Prevention of HF",
	content: `<div id="undtbl1" class="table ng-scope"><div class="inline-table-caption">Biomarkers: Recommendation for Prevention of HF</div><div><table id="hl0000316"><thead><tr><th id="hl0000323" scope="col" class="table-align-">COR</th><th id="hl0000324" scope="col" class="table-align-">LOE</th><th id="hl0000325" scope="col" class="table-align-">Recommendation</th><th id="hl0000326" scope="col" class="table-align-">Comment/Rationale</th></tr></thead><tbody><tr><td id="hl0000329" class="table-align-"><b>IIa</b></td><td id="hl0000331" class="table-align-"><b>B-R</b></td><td id="hl0000333" class="table-align-" rowspan="2"><b>For patients at risk of developing HF, natriuretic peptide biomarker–based screening followed by team-based care, including a cardiovascular specialist optimizing GDMT, can be useful to prevent the development of left ventricular dysfunction (systolic or diastolic) or new-onset HF</b><a class="inline-reference" data-toggle="modal" data-target="#myModal" bibid="bib85" docid="1-s2.0-S0735109717370870" doc-name="Heart Failure (Focused Update)"><b>(85</b></a>,&nbsp;<a class="inline-reference" data-toggle="modal" data-target="#myModal" bibid="bib86" docid="1-s2.0-S0735109717370870" doc-name="Heart Failure (Focused Update)"><b>86)</b></a><b>.</b></td><td id="hl0000338" class="table-align-" rowspan="2"><b>NEW:</b> New data suggest that natriuretic peptide biomarker screening and early intervention may prevent HF. </td></tr><tr><td id="hl0000341" class="table-align-" colspan="2">See <a id="hl0000342" href="http://jaccjacc.acc.org/Clinical_Document/MASTER_HF_Data_Supplement_Evidence_Tables_FINAL_4.18.17.pdf" target="_blank">Online Data Supplements A and B</a>. </td></tr><tr><td id="hl0000344" class="table-align-" colspan="4">In a large-scale unblinded single-center study (STOP-HF [The St Vincent’s Screening to Prevent Heart Failure]) <a class="inline-reference" data-toggle="modal" data-target="#myModal" bibid="bib85" docid="1-s2.0-S0735109717370870" doc-name="Heart Failure (Focused Update)">(85)</a>, patients at risk of HF (identified by the presence of hypertension, diabetes mellitus, or known vascular disease [e.g., stage A HF]), but without established left ventricular systolic dysfunction or symptomatic HF at baseline, were randomly assigned to receive screening with BNP testing or usual primary care. Intervention-group participants with BNP levels of ≥50 pg/mL underwent echocardiography and were referred to a cardiovascular specialist who decided on further investigation and management. All patients received further coaching by a specialist nurse who emphasized individual risk and the importance of adherence to medication and healthy lifestyle behaviors. BNP-based screening reduced the composite endpoint of asymptomatic left ventricular dysfunction (systolic or diastolic) with or without newly diagnosed HF <a class="inline-reference" data-toggle="modal" data-target="#myModal" bibid="bib85" docid="1-s2.0-S0735109717370870" doc-name="Heart Failure (Focused Update)">(85)</a>. Similarly, in another small, single-center RCT, accelerated up-titration of renin-angiotensin-aldosterone system antagonists and beta blockers reduced cardiac events in patients with diabetes mellitus and elevated NT-proBNP levels but without cardiac disease at baseline <a class="inline-reference" data-toggle="modal" data-target="#myModal" bibid="bib86" docid="1-s2.0-S0735109717370870" doc-name="Heart Failure (Focused Update)">(86)</a>. Developing a standardized strategy to screen and intervene in patients at risk of HF can be difficult because of different definitions of HF risk, heterogeneity of prevalence in different populations, variable duration until clinical HF or left ventricular dysfunction develops, and variable interventions for risk factor modification or treatment. Further studies are needed to determine cost-effectiveness and risk of such screening, as well as its impact on quality of life (QoL) and mortality rate. </td></tr></tbody></table></div></div>`,
	sections: [
		"6 Initial and Serial Evaluation of the HF Patient",
		"6.3 Biomarkers",
		"6.3.1 Biomarkers for Prevention: Recommendation"
	],
	DOCurl: "https://google.com",
	PDFurl: "https://google.com",
	HUBurl: "https://google.com",

};
export const recomendationData = {
	type: "recommendation",
	documentTitle: "2017 ACC/AHA/HFSA Focused Update of the 2013 ACCF/AHA Guideline for the Management of Heart Failure",
	content: "In a large-scale unblinded single-center study (STOP-HF [The St Vincent's Screening to Prevent Heart Failure]) (85), patients at risk of HF (identified by the presence of hypertension, diabetes mellitus, or known vascular disease [e.g., stage A HF]), but without established left ventricular systolic dysfunction or symptomatic HF at baseline, were randomly assigned to receive screening with BNP testing or usual primary care. Intervention-group participants with BNP levels of =50 pg/mL underwent echocardiography and were referred to a cardiovascular specialist who decided on further investigation and management.",
	ranking: {
		loe: "IIa",
		cor: "B-R"
	},
	sections: [
		"6 Initial and Serial Evaluation of the HF Patient",
		"6.3 Biomarkers",
		"6.3.1 Biomarkers for Prevention: Recommendation"
	],
	DOCurl: "https://google.com",
	PDFurl: "https://google.com",
	HUBurl: "https://google.com",
	supportingText: "ARBs have been shown to reduce mortality and HF hospitalizations in patients with HFrEF in large RCTs (134-137). Long-term therapy with ARBs in patients with HFrEF produces hemodynamic, neurohormonal, and clinical effects consistent with those expected after interference with the renin-angiotensin system (145,146). Unlike ACE inhibitors, ARBs do not inhibit kininase and are associated with a much lower incidence of cough and angioedema, although kininase inhibition by ACE inhibitors may produce beneficial vasodilatory effects.<br> Patients intolerant to ACE inhibitors because of cough or angioedema should be started on ARBs; patients already tolerating ARBs for other indications may be continued on ARBs if they subsequently develop HF. ARBs should be started at low doses and titrated upward, with an attempt to use doses shown to reduce the risk of cardiovascular events in clinical trials. ARBs should be given with caution to patients with low systemic blood pressure, renal insufficiency, or elevated serum potassium (&gt;5.0 mEq/L). Although ARBs are alternatives for patients with ACE inhibitor-induced angioedema, caution is advised because some patients have also developed angioedema with ARBs.<br> Head-to-head comparisons of an ARB versus ARNI for HF do not exist. For those patients for whom an ACE inhibitor or ARNI is inappropriate, use of an ARB remains advised.",
	references: [
		"Cohn J.N., Tognoni G., Investigators V.H.F.T. (2001) A randomized trial of the angiotensin-receptor blocker valsartan in chronic heart failure. N Engl J Med 345:1667-1675.",
		"Pfeffer M.A., McMurray J.J.V., Velazquez E.J., et al. (2003) Valsartan, captopril, or both in myocardial infarction complicated by heart failure, left ventricular dysfunction, or both. N Engl J Med 349:1893-1906."
	]
};
export const methods = {
	click: action( "click" ),
	clickRelatedRecomendation: action( "related" ),
	navigate: action( "navigate" )
};
export const recomendation = () => {
	return {
		components: {
			ResultRec
		},
		template: "<ResultRec  v-bind='recomendationData' @navigate='navigate' @click='click' @clickRelatedRecomendation='clickRelatedRecomendation'/>",
		methods: methods,
		data: () => ( {
			recomendationData
		} )
	};
};

export const table = () => {
	return {
		components: {
			ResultTable
		},
		template: "<ResultTable  v-bind='tableData' @navigate='navigate' @click='click' @clickRelatedRecomendation='clickRelatedRecomendation'/>",
		methods: methods,
		data: () => ( {
			tableData
		} )
	};
};