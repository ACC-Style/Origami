import { action } from "@storybook/addon-actions";

import StatefullIcon from "../../src/components/subComponents/StatefullIcon.vue";

export default {
	title: "Basic/StatefullIcon",
	component: StatefullIcon,
	excludeStories: ["iconTemplate", "statefulIconDescription"],
	parameters: {
		notes:
			"State Icons respond to the font size added to them or the font size that is inherited by the parent",
		info: true
	}
};
export const iconTemplate = ` 
   <div>
      <StatefullIcon class="font_5" :state="state" style="width:100px;height:100px" />
      <StatefullIcon class="font_3" :state="state" style="width:100px;height:100px" />
      <StatefullIcon class="font_1" :state="state" style="width:100px;height:100px" />
   </div>
 `;
export const statefulIconDescription = {
	StatefullIcon: {
		props: {
			// These description will appear in `description` column in props table
			state:
				"primary(display none), secondary(No Icon), error, accent, warning, success, and info"
		}
	}
};
export const primary = () => ({
	components: {
		StatefullIcon
	},
	template: iconTemplate,
	data() {
		return {
			state: "primary"
		};
	},
	methods: {
		action: action("clicked")
	},
	description: statefulIconDescription
});
export const secondary = () => ({
	components: {
		StatefullIcon
	},
	template: iconTemplate,
	data() {
		return {
			state: "secondary"
		};
	},
	methods: {
		action: action("clicked")
	},
	description: statefulIconDescription
});
export const error = () => ({
	components: {
		StatefullIcon
	},
	template: iconTemplate,
	data() {
		return {
			state: "error"
		};
	},
	methods: {
		action: action("clicked")
	},
	description: statefulIconDescription
});
export const warning = () => ({
	components: {
		StatefullIcon
	},
	template: iconTemplate,
	data() {
		return {
			state: "warning"
		};
	},
	methods: {
		action: action("clicked")
	},
	description: statefulIconDescription
});
export const success = () => ({
	components: {
		StatefullIcon
	},
	template: iconTemplate,
	data() {
		return {
			state: "success"
		};
	},
	methods: {
		action: action("clicked")
	},
	description: statefulIconDescription
});
export const accent = () => ({
	components: {
		StatefullIcon
	},
	template: iconTemplate,
	data() {
		return {
			state: "accent"
		};
	},
	methods: {
		action: action("clicked")
	},
	description: statefulIconDescription
});
export const info = () => ({
	components: {
		StatefullIcon
	},
	template: iconTemplate,
	data() {
		return {
			state: "info"
		};
	},
	methods: {
		action: action("clicked")
	},
	description: statefulIconDescription
});
