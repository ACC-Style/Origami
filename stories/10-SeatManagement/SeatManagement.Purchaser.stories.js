import {action} from "@storybook/addon-actions";
import Result from "../../src/components/GLSearch/GLSearch.Result";

export default {
    title: "SeatManagement",
    component: Result,
    parameters: {
        componentSubtitle: "The Owner of the Contract",
        notes: true,
        info: true
    },
    excludeStories: ["purchaserData", "methods"]
};
export const methods = {};
export const purchaserData = {};
export const purchaser = () => {
    return {template: `
         <div>
            <h1>Purchaser</h1>
            <ul> 
               <li>Name</li>
               <li>Email</li>
               <li>Last Login</li>
            </ul>
            <ul>
               <li>Remove</li>
            </ul>
         </div>
      `};
};
export const contract = () => {
    return {template: `
         <div>
               <h1>contract</h1>
               <ul> 
                  <li>Bundles</li>
                  <li>Purchase Date</li>
                  <li>Experation Date</li>                 
                  <li>Seat Capacity</li>
                  <li>Associated Groups</li>
               </ul>
               <ul> 
                  <li>Manage Bundles</li>

               </ul>
         </div>
    `};
};
export const bundle = () => {
    return {template: `
         <div>
               <h1>Bundle</h1>
               <ul> 
                  <li>Seat Count</li>
                  <li>Experation Date</li>                 
                  <li>Associated Contract</li>                 
                  <li>Seat Capacity</li>
                  <li>Partictians</li>
                  <li class="ul_none">
                  <ul> 
                     <li>Group</li>              
                     <li>Seat Capacity</li>
                     <li>Admin</li>
                  </ul>
                  </li>
               </ul>
               <ul>
                  <li>Partician Bundle</li>
               </ul>
         </div>
    `};
};
export const groupAdmin = () => {
    return {template: `
         <div>
            <h1>Group Admin</h1>
            <ul> 
               <li>Name</li>
               <li>Last Login</li>
               <li>State of Acceptance</li>
               <li>Email</li>
               <li>Associated Groups</li>
            </ul>
            <ul>
               <li>Remove</li>
            </ul>
         </div>
    `};
};
export const group = () => {
    return {template: `<div>
         <h1>Group</h1>
         <ul> 
            <li>Identification</li>
            <li>Bundles</li>
            <li>Group Admins</li>
            <li>Experation Date</li>
            <li>Associated Groups</li>
            <li>Associated Groups</li>
         </ul>
         <ul>
            <li>Add Admin</li>
            <li>Change Partition</li>
            <li>Add Consumer</li>
         </ul>
      </div>`};
};

export const seats = () => {
    return {template: `<div>
         <h1>Group</h1>
         <ul> 
            <li>User</li>
            <li>Email</li>
            <li>Accepted Bundles</li>
            <li>State</li>
            <li>Date of Acceptance</li>
            <li>time left seat cool down</li>
         </ul>
         <ul>
            <li>Request Again</li>
            <li>Extend Seat</li>
            <li>Retire Seat</li>
         </ul>
      </div>`};
};
