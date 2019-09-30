import {
   action
} from "@storybook/addon-actions";
import FIT from "../../src/components/FIT/TrainingProgram.FIT";
import ListFIT from "../../src/components/FIT/TrainingProgram.listOfFITs";

export default {
   title: "FIT/List FITs",
   parameters: {
      componentSubtitle: "A Fellow in Training"
   },
   excludeStories: [ "fits" ]
};
export const fits = [ {
   "id": 912488,
   "fullName": "Nisse Mudd",
   "endDate": "8/1/2019",
   "email": "nmudd0@narod.ru",
   "birthday": null,
   "address": {
      "institution": "Stiedemann and Sons",
      "street_1": "97637 Kipling Way",
      "streee_2": null,
      "city": "White Plains",
      "state": null,
      "zip": "10633"
   }
}, {
   "id": 794386,
   "fullName": "Falkner Hoult",
   "endDate": "12/11/2018",
   "email": "fhoult1@networksolutions.com",
   "birthday": "4/12/2019",
   "address": {
      "institution": null,
      "street_1": "34 Lakewood Gardens Park",
      "streee_2": "337 Steensland Crossing",
      "city": "Houston",
      "state": "TX",
      "zip": "77010"
   }
}, {
   "id": 461089,
   "fullName": "Natividad Walker",
   "endDate": "3/10/2019",
   "email": "nwalker2@twitpic.com",
   "birthday": "5/27/2019",
   "address": {
      "institution": null,
      "street_1": "75629 Butterfield Lane",
      "streee_2": null,
      "city": "San Diego",
      "state": null,
      "zip": "92105"
   }
}, {
   "id": 620537,
   "fullName": "Sigfrid Bedinham",
   "endDate": null,
   "email": "sbedinham3@usda.gov",
   "birthday": "2/17/2019",
   "address": {
      "institution": "Walsh-Thiel",
      "street_1": "34506 Fallview Court",
      "streee_2": null,
      "city": "Waterbury",
      "state": null,
      "zip": "06726"
   }
}, {
   "id": 149301,
   "fullName": "Byron Featherston",
   "endDate": "10/19/2018",
   "email": "bfeatherston4@jiathis.com",
   "birthday": "1/28/2019",
   "address": {
      "institution": null,
      "street_1": "0978 Columbus Place",
      "streee_2": null,
      "city": "Huntsville",
      "state": null,
      "zip": "35810"
   }
} ];
export const basic = () => {
   return {
      components: {
         FIT,
         ListFIT
      },
      template: "<ListFIT :fits='fits' @click='removeClick'/>",
      methods: {
         removeClick: action( "remove clicked" )
      },
      data: () => ( {
         fits
      } )
   };
};