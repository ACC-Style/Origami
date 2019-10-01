import {
	action
} from "@storybook/addon-actions";
import {
	linkTo
} from "@storybook/addon-links";

import Btn from "../src/components/subComponents/Btn.vue";

export default {
	title: "Basic/Button"
};

export const primary = () => ( {
	components: {
		Btn
	},
	template: '<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div></div>',
	methods: {
		action: action( "clicked" )
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "",
			iconBoolean: false
		};
	}
} );
export const add = () => ( {
	components: {
		Btn
	},
	template: '<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div></div>',
	methods: {
		action: action( "clicked" )
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "add",
			iconBoolean: true
		};
	}
} );
export const radius = () => ( {
	components: {
		Btn
	},
	template: '<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn class="br_radius" @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn class="br_radius" @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn class="br_radius" @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div></div>',
	methods: {
		action: action( "clicked" )
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "",
			iconBoolean: false
		};
	}
} );
export const error = () => ( {
	components: {
		Btn
	},
	template: '<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="false" :size="large" :state="status">No Icon</Btn></div></div>',
	methods: {
		action: action( "clicked" )
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "error",
			iconBoolean: true
		};
	}
} );
export const warning = () => ( {
	components: {
		Btn
	},
	template: '<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="false" :size="large" :state="status">No Icon</Btn></div></div>',
	methods: {
		action: action( "clicked" )
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
} );
export const success = () => ( {
	components: {
		Btn
	},
	template: '<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="false" :size="large" :state="status">No Icon</Btn></div></div>',
	methods: {
		action: action( "clicked" )
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "success",
			iconBoolean: true
		};
	}
} );
export const secondary = () => ( {
	components: {
		Btn
	},
	template: '<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div></div>',
	methods: {
		action: action( "clicked" )
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "secondary",
			iconBoolean: false
		};
	}
} );

export const isActivatable = () => ( {
	components: {
		Btn
	},
	template: '<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status"" @isActive="isActive" :isActivatable="isActivatableBoolean">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status"" @isActive="isActive" :isActivatable="isActivatableBoolean">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status" @isActive="isActive" :isActivatable="isActivatableBoolean">Large Button</Btn></div></div>',
	methods: {
		action: action( "clicked" ),
		isActive: action( "I am active" )
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
	}
} );
export const buttonGroup = () => ( {
	components: {
		Btn
	},
	template: '<div class="flex_inline m_4 br_black-2 br_solid br_1 p_2 br_radius bg_secondary-5 shadow_n2 w_auto"><div class="flex_shrink "><Btn @click="sendClick" :icon="iconBoolean" :state="primary" class="br-tl_radius br-bl_radius shadow_1 br_black-2 br_1 br_solid" @isActive="isActive" :isActivatable="isActivatableBoolean">Send</Btn></div><div class="flex_shrink "><Btn class="shadow_1 br_black-2 br_1 br_solid" @click="replyClick" :icon="iconBoolean" :state="secondary" @isActive="isActive" :isActivatable="isActivatableBoolean">Reply</Btn></div><div class="flex_shrink "><Btn @click="deleteClick" class="br-tr_radius br-br_radius shadow_1 br_black-2 br_1 br_solid" :icon="true" :state="error" @isActive="isActive" :isActivatable="isActivatableBoolean">Delete</Btn></div></div>',
	methods: {
		sendClick: action( "Send" ),
		replyClick: action( "Reply" ),
		deleteClick: action( "Delete" ),
		isActive: action( "I am activated" )
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
	}
} );