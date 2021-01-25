import { action } from "@storybook/addon-actions";
import Btn from "../../src/components/subComponents/Btn.vue";
import BtnToggle from "../../src/components/subComponents/BtnToggle.vue";

export default {
	title: "Basic/Button",
	component: Btn,
	excludeStories: ["templateBasic", "btnDescription"],
	parameters: {
		notes:
			"Buttons are highly flexable with icons and colors changed by ':state' and you can even pass icons in with the text for even more options of icon.  Try adding 'br_radius' to add curved corders.",
		 
	}
};
export const templateBasic = `
	<div class="flex p-y_3">
		<div class="flex_shrink p-x_3">
			<Btn @click="action"  :size="small" :state="status">Small Button</Btn>
		</div>
		<div class="flex_shrink p-x_3">
			<Btn @click="action"  :size="medium" :state="status" >Default Size</Btn>
		</div>
		<div class="flex_shrink p-x_3">
			<Btn @click="action"  :size="large" :state="status">Large Button</Btn>
		</div>
		<div class="flex_shrink p-x_3">
			<Btn @click="action" :isDisabled="true"  :size="large" :state="status">Disabled Large Button</Btn>
		</div>

	</div>`;
export const btnDescription = {
	Btn: {
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
export const primary = () => ({
	components: {
		Btn
	},
	template: templateBasic,
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "",
			iconBoolean: false
		};
	},
	description: btnDescription
});
export const secondary = () => ({
	components: {
		Btn
	},
	template: templateBasic,
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "secondary",
			iconBoolean: false
		};
	},
	description: btnDescription
});
export const shade = () => ({
	components: {
		Btn
	},
	template: templateBasic,
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "shade",
			iconBoolean: false
		};
	},
	description: btnDescription
});

export const alert = () => ({
	components: {
		Btn
	},
	template: templateBasic,
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "alert",
		};
	},
	description: btnDescription
});
export const warning = () => ({
	components: {
		Btn
	},
	template: templateBasic,
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "warning",
		};
	},
	description: btnDescription
});
export const success = () => ({
	components: {
		Btn
	},
	template: templateBasic,
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "success",
		};
	},
	description: btnDescription
});
export const none = () => ({
	components: {
		Btn
	},
	template:  `
	<div class="flex p-y_3">
		<div class="flex_shrink p-x_3">
			<Btn @click="action"  :size="small" :state="status">Small Button</Btn>
		</div>
		<div class="flex_shrink p-x_3">
			<Btn class="" @click="action"  :size="medium" :state="status" >Default Size</Btn>
		</div>
		<div class="flex_shrink p-x_3">
			<Btn class="bg_acc c_white h:bg_acc-n3" @click="action"  :size="large" :state="status">ACC Colored Button</Btn>
		</div>
		<div class="flex_shrink p-x_3">
			<Btn @click="action" :isDisabled="true"  :size="large" :state="status">Disabled Large Button</Btn>
		</div>

	</div>`,
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "none",
		};
	},
	description: 'This is used for when you need to apply custome styles to the the design of the button for example if you were making a button from a color code vs standard states. '
});
export const isActivatable = () => ({
	components: {
		Btn
	},
	template:
		'<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status"" @isActive="isActive" :isActivatable="isActivatableBoolean">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status"" @isActive="isActive" :isActivatable="isActivatableBoolean">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status" @isActive="isActive" :isActivatable="isActivatableBoolean">Large Button</Btn></div></div>',
	methods: {
		action: action("clicked"),
		isActive: action("I am active")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "primary",
			iconBoolean: false,
			isActivatableBoolean: true
		};
	},
	description: btnDescription
});
export const toggle = () => ({
	components: {
		BtnToggle
	},
	template: `
	<section>
      <div class="flex p-y_3">
	  <div class="flex_shrink p-x_3">
	  <BtnToggle  @click="click" @clickActive="clickActive" @clickNotActive="clickNotActive" :state="'warning'">
		  <template v-slot:active>
			  <i class="fas fa-check p-r_3"></i>Active
		  </template>
			 <template v-slot:notActive>
			 <i class="fas fa-times p-r_3"></i>Not Active
		  </template>
	  </BtnToggle>
   </div>
   <div class="flex_shrink p-x_3">
   <BtnToggle  @click="click" @clickActive="clickActive" @clickNotActive="clickNotActive" >
	   <template v-slot:active>
		   <i class="far fa-square p-r_3"></i>I agree
	   </template>
		  <template v-slot:notActive>
		  <i class="far fa-check-square p-r_3"></i>I agree
	   </template>
   </BtnToggle>
   <BtnToggle  status="none" class="a:bg_success bg_alert h:bg_shade-n3" @click="click" @clickActive="clickActive" @clickNotActive="clickNotActive" >
	<template v-slot:active>
		On
	</template>
	  <template v-slot:notActive>
	  Off
   </template>
</BtnToggle>
<BtnToggle  status="none" class="a:bg_success bg_alert h:bg_shade-n3" @click="click" @clickActive="clickActive" @clickNotActive="clickNotActive" >
<template v-slot:active>
	<i class="fas fa-square p-r_4 m-l_n3"></i>
</template>
  <template v-slot:notActive>
  <i class="fas fa-square p-l_4  m-r_n3"></i>
</template>
</BtnToggle>
<BtnToggle  status="none" class="a:bg_primary bg_black-3 h:bg_black-7" @click="click" @clickActive="clickActive" :corner="'round'" @clickNotActive="clickNotActive" >
<template v-slot:active>
	<i class="fas fa-circle  m-x_n3"></i>
</template>
  <template v-slot:notActive>
  <i class="fas fa-circle opacity_2 h:opacity m-x_n3"></i>
</template>
</BtnToggle>
</div>
      </div>
	</section>
	`,
	methods: {
		click: action("clicked"),
		clickActive: action("active"),
		clickNotActive: action("not active")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "warning",
		};
	}
});
export const radius = () => ({
	components: {
		Btn
	},
	template:
		'<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn class="br_radius" @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn class="br_radius" @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn class="br_radius" @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div></div>',
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "",
			iconBoolean: false
		};
	},
	description: btnDescription
});
export const buttonGroup = () => ({
	components: {
		Btn
	},
	template:
		'<div class="flex_inline m_4 br_black-2 br_solid br_1 p_2 br_radius bg_secondary-5 shadow_n2 w_auto"><div class="flex_shrink "><Btn @click="sendClick" :icon="iconBoolean" :state="primary" class="br-tl_radius br-bl_radius shadow_1 br_black-2 br_1 br_solid" @isActive="isActive" :isActivatable="isActivatableBoolean">Send</Btn></div><div class="flex_shrink "><Btn class="shadow_1 br_black-2 br_1 br_solid" @click="replyClick" :icon="iconBoolean" :state="secondary" @isActive="isActive" :isActivatable="isActivatableBoolean">Reply</Btn></div><div class="flex_shrink "><Btn @click="deleteClick" class="br-tr_radius br-br_radius shadow_1 br_black-2 br_1 br_solid" :icon="true" :state="error" @isActive="isActive" :isActivatable="isActivatableBoolean">Delete</Btn></div></div>',
	methods: {
		sendClick: action("Send"),
		replyClick: action("Reply"),
		deleteClick: action("Delete"),
		isActive: action("I am activated")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			primary: "primary",
			secondary: "secondary",
			error: "error",
			iconBoolean: false,
			isActivatableBoolean: true
		};
	},
	description: btnDescription
});
