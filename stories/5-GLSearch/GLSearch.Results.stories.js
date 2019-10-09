import { action } from "@storybook/addon-actions";
import Result from "../../src/components/GLSearch/GLSearch.Result";

export default {
	title: "GLSearch/Result",
	component: Result,
	parameters: {
		componentSubtitle: "Guideline Search Result",
		notes: true,
		info: true
	},
	excludeStories: ["recomendationData", "methods"]
};
export const recomendationData = {
	type: "recommendation",
	documentTitle:
		"2017 ACC/AHA/HFSA Focused Update of the 2013 ACCF/AHA Guideline for the Management of Heart Failure",
	content:
		"In a large-scale unblinded single-center study (STOP-HF [The St Vincent's Screening to Prevent Heart Failure]) (85), patients at risk of HF (identified by the presence of hypertension, diabetes mellitus, or known vascular disease [e.g., stage A HF]), but without established left ventricular systolic dysfunction or symptomatic HF at baseline, were randomly assigned to receive screening with BNP testing or usual primary care. Intervention-group participants with BNP levels of =50 pg/mL underwent echocardiography and were referred to a cardiovascular specialist who decided on further investigation and management.",
	ranking: { loe: "IIa", cor: "B-R" },
	sections: [
		"6 Initial and Serial Evaluation of the HF Patient",
		"6.3 Biomarkers",
		"6.3.1 Biomarkers for Prevention: Recommendation"
	],
	supportingText:
		"ARBs have been shown to reduce mortality and HF hospitalizations in patients with HFrEF in large RCTs (134-137). Long-term therapy with ARBs in patients with HFrEF produces hemodynamic, neurohormonal, and clinical effects consistent with those expected after interference with the renin-angiotensin system (145,146). Unlike ACE inhibitors, ARBs do not inhibit kininase and are associated with a much lower incidence of cough and angioedema, although kininase inhibition by ACE inhibitors may produce beneficial vasodilatory effects.<br> Patients intolerant to ACE inhibitors because of cough or angioedema should be started on ARBs; patients already tolerating ARBs for other indications may be continued on ARBs if they subsequently develop HF. ARBs should be started at low doses and titrated upward, with an attempt to use doses shown to reduce the risk of cardiovascular events in clinical trials. ARBs should be given with caution to patients with low systemic blood pressure, renal insufficiency, or elevated serum potassium (&gt;5.0 mEq/L). Although ARBs are alternatives for patients with ACE inhibitor-induced angioedema, caution is advised because some patients have also developed angioedema with ARBs.<br> Head-to-head comparisons of an ARB versus ARNI for HF do not exist. For those patients for whom an ACE inhibitor or ARNI is inappropriate, use of an ARB remains advised.",
	references: [
		"Cohn J.N., Tognoni G., Investigators V.H.F.T. (2001) A randomized trial of the angiotensin-receptor blocker valsartan in chronic heart failure. N Engl J Med 345:1667-1675.",
		"Pfeffer M.A., McMurray J.J.V., Velazquez E.J., et al. (2003) Valsartan, captopril, or both in myocardial infarction complicated by heart failure, left ventricular dysfunction, or both. N Engl J Med 349:1893-1906."
	]
};
export const methods = { click: action("click") };
export const basic = () => {
	return {
		components: {
			Result
		},
		template: "<Result  v-bind='recomendationData' @click='click'/>",
		methods: methods,
		data: () => ({
			recomendationData
		})
	};
};
