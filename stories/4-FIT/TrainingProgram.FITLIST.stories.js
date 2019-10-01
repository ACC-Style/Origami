import {
   action
} from "@storybook/addon-actions";
import FIT from "../../src/components/FIT/TrainingProgram.FIT";
import ListFIT from "../../src/components/FIT/TrainingProgram.listOfFITs";
import {
   methods
} from "../4-FIT/TrainingProgram.FIT.stories";
export default {
   title: "FIT/List FITs",
   parameters: {
      componentSubtitle: "A Fellow in Training"
   },
   excludeStories: [ "fits" ]
};
export const fits = [ {
   "id": "6749138110",
   "pendingReview": false,
   "fullName": "Jonah Lubbock",
   "endDate": null,
   "email": "jlubbock0@elegantthemes.com",
   "birthday": null,
   "address": {
      "institution": "Douglas Group",
      "street_1": "9 American Terrace",
      "streee_2": "2 Green Place",
      "city": "New York City",
      "state": "NY",
      "zip": "10099"
   }
}, {
   "id": "5205283351",
   "pendingReview": false,
   "fullName": "Ariana Dulwitch",
   "endDate": null,
   "email": "adulwitch1@archive.org",
   "birthday": "12/18/2018",
   "address": {
      "institution": null,
      "street_1": "5 North Street",
      "streee_2": null,
      "city": "Boca Raton",
      "state": null,
      "zip": "33499"
   }
}, {
   "id": "7186850435",
   "pendingReview": true,
   "fullName": "Antonella Woofendell",
   "endDate": "12/31/2018",
   "email": "awoofendell2@indiatimes.com",
   "birthday": "3/17/2019",
   "address": {
      "institution": null,
      "street_1": "580 Artisan Hill",
      "streee_2": null,
      "city": "Pensacola",
      "state": null,
      "zip": "32526"
   }
}, {
   "id": "5446698695",
   "pendingReview": false,
   "fullName": "Salvidor Deares",
   "endDate": "3/26/2019",
   "email": "sdeares3@buzzfeed.com",
   "birthday": "9/13/2019",
   "address": {
      "institution": "Lesch-Mraz",
      "street_1": "2627 Moulton Road",
      "streee_2": null,
      "city": "Anchorage",
      "state": null,
      "zip": "99507"
   }
}, {
   "id": "0360769525",
   "pendingReview": false,
   "fullName": "Arleta Penhalurick",
   "endDate": "12/3/2018",
   "email": "apenhalurick4@example.com",
   "birthday": "",
   "address": {
      "institution": null,
      "street_1": "83184 Shoshone Hill",
      "streee_2": "04127 Havey Terrace",
      "city": "Washington",
      "state": "DC",
      "zip": "20520"
   }
} ];
export const basic = () => {
   return {
      components: {
         FIT,
         ListFIT
      },
      template: "<ListFIT :finishedLoading='finishedLoading' :fits='fits' @removeFIT='removeFIT'/>",
      methods: methods,
      data: () => ( {
         fits,
         finishedLoading: true
      } )
   };
};
export const loading = () => {
   return {
      components: {
         FIT,
         ListFIT
      },
      template: "<ListFIT :finishedLoading='finishedLoading' :fits='fits' @removeFIT='removeFIT'/>",
      methods: methods,
      data: () => ( {
         fits,
         finishedLoading: false
      } )
   };
};
export const empty = () => {
   return {
      components: {
         FIT,
         ListFIT
      },
      template: "<ListFIT :finishedLoading='finishedLoading' :fits='fits' @removeFIT='removeFIT'/>",
      methods: methods,
      data: () => ( {
         fits: [],
         finishedLoading: true
      } )
   };
};