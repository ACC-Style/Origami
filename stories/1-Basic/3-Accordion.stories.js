import { action } from "@storybook/addon-actions";
import Accordion from "../../src/components/BasicContainer/Accordion.vue";
import ChildAccordion from "../../src/components/BasicContainer/ChildAccordion.vue";
import GrandChildAccordion from "../../src/components/BasicContainer/GrandChildAccordion.vue";

export default {
	title: "Basic/Accordion",
	components:{Accordion,ChildAccordion,GrandChildAccordion},
	excludeStories: []
};

export const basic = () => ({
	components: {
		Accordion
	},
	template: `
					<Accordion>
						<template v-slot:header>
						
						<h1>Discharge Day
						<span class="block font_n1 c_primary"> Discharge pplanning ideally begins at adminssion</span>
						</h1>
						</template>
						<template class="reading-typography p_4" v-slot:content>
						<h2>Key Point</h2>
						<p>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden</p>
						
						</template>
					</Accordion>
					`,
	methods: {
		action: action("clicked")
	},
	data: () => ({})
});
export const Sub = () => ({
	components: {
		Accordion,ChildAccordion,GrandChildAccordion
	},
	template: `
	<Accordion>
						<template v-slot:header>
						
						<h1>Accodian with a child
						<span class="block font_n1 c_primary"> Discharge pplanning ideally begins at adminssion</span>
						</h1>
						</template>
						<template class="reading-typography p_4" v-slot:content>				
	<ChildAccordion>
						<template v-slot:header>Child 1</template>
						<template v-slot:content>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden<br/>Content to be hidden</template>
					</ChildAccordion>
					<ChildAccordion>
					<template v-slot:header>Child 2</template>
					<template v-slot:content><div class="methods">
					<h2>Methods:</h2>
					<p></p><p>This randomized, unblinded trial (REMEDIAL III [REnal Insufficiency Following Contrast MEDIA Administration triaL III]) was conducted at four Italian centers from July 2015 to June 2019. Funding was provided by Guerbet, a France-based manufacturer of contrast agents. All consecutive patients scheduled for coronary or peripheral angiography or angioplasty with estimated glomerular filtration rate (eGFR) ≤45 ml/min/1.73 m<sup>2</sup> or at high risk for CA-AKI (Mehran’s score ≥11 or Gurm’s score &gt;7%) were eligible. Patients were assigned in 1:1 ratio to LVEDP-guided and UFR-guided groups. LVEDP was estimated noninvasively based on transmitral flow velocity to mitral annular velocity ratio (E/e’), obtained from transthoracic echocardiography, before starting IV hydration. </p> 
	
	<p>In the LVEDP-guided group, IV normal saline was started 1 hour prior to the angiographic procedure and continued until 4 hours post-procedure. Fluid rate was determined by echo-estimated LVEDP and adjusted at the time of invasive LVEDP measurement. IV furosemide administration was permitted to treat pulmonary congestion or urine output &lt;0.5 ml/kg/h.</p>  
	
	<p>In the UFR-guided group, the RenalGuard System (PLC Medical Systems, Franklin, MA) was used. This system measures urine output, requiring a Foley catheter, and replaces it in real time with an equal volume of IV saline. A priming bolus of normal saline was given, and physician-prescribed furosemide was given to achieve UFR ≥300 ml/h and ≥450 ml/h intraprocedurally, with continuation until 4 hours post-procedure.</p>
	
	<p>The primary endpoint was a composite of CA-AKI (serum creatinine increase ≥25% or ≥0.5 mg/dl at 48 hours after contrast administration) and acute pulmonary edema (clinical diagnosis, within 24 hours of IV fluid initiation).</p>
	<p></p>
				</div>
					<GrandChildAccordion>
					<template v-slot:content><div class="study-question">
					<h2>Study Questions:</h2>
					<p>For intravenous (IV) hydration to prevent contrast-associated acute kidney injury (CA-AKI), which guiding strategy is superior: one based on left ventricular end-diastolic pressure (LVEDP) or one based on urine flow rate (UFR)?</p>
				</div></template>
				</GrandChildAccordion>
					</template>
				</ChildAccordion>
					</template>
				</Accordion>
					`,
	methods: {
		action: action("clicked")
	},
	data: () => ({})
});