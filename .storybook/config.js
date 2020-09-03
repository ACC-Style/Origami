import {
	configure,
	addParameters,
	addDecorator
} from "@storybook/vue";
import {
	withInfo
} from "storybook-addon-vue-info";
import {
	DocsPage,
	DocsContainer
} from "@storybook/addon-docs/blocks";
import "@storybook/addon-knobs/register";
import "@storybook/addon-notes/register";
import "../arches/dist/css/acc_uc.css";
import "../arches/dist/css/color-code_credits.css";
import "../arches/dist/css/color-code_LOE_COR.css";
import "../public/icons/css/all.css";
import "../public/icons/css/light.css";
import "../public/icons/css/regular.css";
import "../public/icons/css/solid.css";
import "../public/icons/css/brands.css";
addParameters( {
	docs: {
		container: DocsContainer,
		page: DocsPage
	}
} );
addDecorator( withInfo );

// automatically import all files ending in *.stories.js
configure( require.context( "../stories", true, /\.stories\.js$/ ), module );