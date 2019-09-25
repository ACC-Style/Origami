import { configure, addParameters, addDecorator } from "@storybook/vue";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { withInfo } from "storybook-addon-vue-info";

import "../arches/dist/css/uconly_acc.css";
import "../arches/dist/css/color-code_credits.css";
import "../arches/dist/icons/css/all.css";
import "../arches/dist/icons/css/light.css";
import "../arches/dist/icons/css/regular.css";
import "../arches/dist/icons/css/solid.css";
import "../arches/dist/icons/css/brands.css";
addParameters({
	docs: {
		container: DocsContainer,
		page: DocsPage
	}
});
addDecorator(withInfo);

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
