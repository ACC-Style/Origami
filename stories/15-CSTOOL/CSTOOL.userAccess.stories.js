import { action } from "@storybook/addon-actions";
import user from "../../src/components/CSTOOL/cstool.userAccess.vue";

export default {
	title: "CSTOOL/Access",
	components: {
		user
	},
	parameters: {
		componentSubtitle: "The user that is getting a tool added to them",
		notes: true,
		info: true
	},
	excludeStories: ["userDataFound", "userDataNotFound", "methods"]
};
export const methods = {};
export const userDataFound = {
	id: 14,
	full_name: "Sofia Brickhill",
	search_by: "sbrickhilld@mozilla.com",
	products: [
		{
			product: 1234567890,
			hasAccess: false,
			name: "Gold Pass"
		},
		{
			product: 4567890123,
			hasAccess: false,
			name: "Silver Pass"
		},
		{
			product: 7894561230,
			hasAccess: false,
			name: "Bronze Pass"
		},
		{
			product: 123456789,
			hasAccess: false,
			name: "iScience"
		}
	]
};
export const userDataNotFound = {
	id: 3,
	full_name: null,
	search_by: "ghullin2@apple.com",
	products: null
};
export const basic = () => {
	return {
		template: `
         <user v-bind="userDataFound" />
      `,
		components: {
			user
		},
		data() {
			return {
				userDataFound
			};
		}
	};
};
