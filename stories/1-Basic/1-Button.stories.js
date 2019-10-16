import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Btn from "../../src/components/subComponents/Btn.vue";
import BtnToggle from "../../src/components/subComponents/BtnToggle.vue";

export default {
	title: "Basic/Button",
	component: Btn,
	excludeStories: ["templateBasic", "btnDescription"],
	parameters: {
		notes:
			"Buttons are highly flexable with icons and colors changed by ':state' and you can even pass icons in with the text for even more options of icon.  Try adding 'br_radius' to add curved corders.",
		info: true
	}
};
export const templateBasic = `
	<div class="flex p-y_3">
		<div class="flex_shrink p-x_3">
			<Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn>
		</div>
		<div class="flex_shrink p-x_3">
			<Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn>
		</div>
		<div class="flex_shrink p-x_3">
			<Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn>
		</div>
		<div class="flex_shrink p-x_3">
			<Btn @click="action" :isDisabled="true" :icon="iconBoolean" :size="large" :state="status">Disabled Large Button</Btn>
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
export const add = () => ({
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
			status: "add",
			iconBoolean: true
		};
	},
	description: btnDescription
});
export const error = () => ({
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
			status: "error",
			iconBoolean: true
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
			iconBoolean: true
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
			iconBoolean: true
		};
	},
	description: btnDescription
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
	template:
		'<section><div class="flex p-y_3"><div class="flex_shrink p-x_3"><BtnToggle class="br_radius" @click="click" @clickActive="clickActive"  @clickNotActive="clickNotActive" :icon="iconBoolean" :size="medium" :state="status"></BtnToggle></div><div class="flex_shrink p-x_3"><BtnToggle class="br_radius" @click="click" @clickActive="clickActive"  @clickNotActive="clickNotActive" :icon="iconBoolean" :iconActive="\'fa-dot-circle\'" :iconNotActive="\'fa-circle\'" :state="\'secondary\'" :size="medium" ><template v-slot:activeText>Active</template><template v-slot:notActiveText>Not Active</template></BtnToggle></div><div class="flex_shrink p-x_3"><BtnToggle class="br_radius" @click="click" @clickActive="clickActive"  @clickNotActive="clickNotActive" :icon="iconBoolean" :iconActive="\'fa-sign-out-alt\'" :iconNotActive="\'fa-sign-in-alt\'" :size="medium" ><template v-slot:activeText>Log Out</template><template v-slot:notActiveText>Log In</template></BtnToggle></div></div><div class="flex p-y_3"><div class="flex_shrink p-x_3"><BtnToggle :isDisabled="true" class="br_radius" @click="click" @clickActive="clickActive"  @clickNotActive="clickNotActive" :icon="iconBoolean" :size="medium" :state="status"></BtnToggle></div><div class="flex_shrink p-x_3"><BtnToggle :isDisabled="true" class="br_radius" @click="click" @clickActive="clickActive"  @clickNotActive="clickNotActive" :icon="iconBoolean" :defaultActiveState="true" :iconActive="\'fa-dot-circle\'" :iconNotActive="\'fa-circle\'" :state="\'secondary\'" :size="medium" ><template v-slot:activeText>On By Defualt</template><template v-slot:notActiveText>Not Active</template></BtnToggle></div><div class="flex_shrink p-x_3"><BtnToggle :isDisabled="true" class="br_radius" @click="click" @clickActive="clickActive"  @clickNotActive="clickNotActive" :icon="iconBoolean"  :iconActive="\'fa-sign-out-alt\'" :iconNotActive="\'fa-sign-in-alt\'" :size="medium" ><template v-slot:activeText>Log Out</template><template v-slot:notActiveText>Log In</template></BtnToggle></div></div></section>',
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
			iconBoolean: true
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
