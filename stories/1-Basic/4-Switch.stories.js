import { action } from "@storybook/addon-actions";
import SwitchInput from "../../src/components/subComponents/SwitchInput.vue";

export default {
	title: "Basic/Switch",
	component: SwitchInput,
	excludeStories: ["templateGenric", "switchDiscription"],
	parameters: {
		notes:
			"Buttons are highly flexable with icons and colors changed by ':state' and you can even pass icons in with the text for even more options of icon.  Try adding 'br_radius' to add curved corders.",
		info: true
	}
};
export const templateGenric = `
	<SwitchInput  :icon="icon" :state="state" :size="size" :isDisabled="isDisabled" :switchID="switchID">
   	This is something
	</SwitchInput>
  `;

export const switchDiscription = {
	Btn: {
		props: {
			// These description will appear in `description` column in props table
			size: "small, medium, or large",
			state: "primary,secondary,add,error,warning,success",
			icon: "Whether icon is visible or not",
			isDisabled: "Boolean for toggling the look and click event",
			label:
				"The Label is the text content that shows up next to a switch"
		},
		events: {
			click: "Event for user clicking the component",
			isDisabled:
				"if isDisable is set to true the event will not fire and the UI will not toggle"
		},
		slots: {
			default: "Place text or icon here"
		}
	}
};

export const standard = () => ({
	components: {
		SwitchInput
	},
	template: templateGenric,
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			icon: false,
			state: "error",
			size: "medium",
			isDisabled: true,
			label: "Feature Name",
			switchID: "smallSwitch"
		};
	}
});
export const smallShaded = () => ({
	components: {
		SwitchInput
	},
	template: templateGenric,
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			icon: false,
			state: "success",
			size: "small",
			isDisabled: false,
			label: "Feature Name",
			switchID: "smallSwitch"
		};
	}
});
