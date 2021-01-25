import { action } from "@storybook/addon-actions";
import ComponentName from "../../src/components/subComponents/ComponentName.vue";


export default {
	title: "Basic/ComponentName",
	component: ComponentName,
	excludeStories: ["templateBasic", "btnDescription"],
	parameters: {
		notes:"",
	 
	}
};
export const templateBasic = `<ComponentName/>`;
export const btnDescription = {
	Btn: {
		props: {
			// These description will appear in `description` column in props table
			temp: "small, medium, or large",
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