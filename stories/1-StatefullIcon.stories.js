import {
   action
} from "@storybook/addon-actions";


import StatefullIcon from "../src/components/subComponents/StatefullIcon.vue";

export default {
   title: "Basic/StatefullIcon"
};

export const text = () => ( {
   components: {
      StatefullIcon
   },
   template: '<StatefullIcon @click="action" />',
   methods: {
      action: action( "clicked" )
   }
} );