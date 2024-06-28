"use strict";
//Array-List 
let guestList = ["Mubahsir", "Abdullah", "Haseeb", "hadi"];
//varibale- dont-come assign number 3
let dontCome = guestList[3];
//print a dont-come message 
console.log(dontCome, "Nahi Ahh Sakty han");
//splice remove a guest and same direction add a guest
guestList.splice(3, 3, "Ayesha");
//print a message 
console.log("Good news ! we have found a Bigger table For Dinner.");
//unshift start a guest-list  add a guest
guestList.unshift("Abdullah");
//push guest-list  a last list name 
guestList.push("Mubashir");
//mat.floor total arround a value / length index a list 
let middleIndex = Math.floor(guestList.length / 2);
//splice remove and add / splice mathod middle name list 
guestList.splice(middleIndex, 1, "Hadi");
//print message
console.log("update List of our Guest");
//for-each loop and backtick assign 
guestList.forEach(oneguest => console.log(`Salam ${oneguest} would you like to dinner with me`));
//Inform that only two Guests can be invited for dinner
console.log("\nunfortunately, the new dinner table want arrive  on time, so I can only invite two guest s todinner with me\n ");
// while-loop is the message repeat and true conditions and set the condition,s while-loop
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest} I can Invite you to dinner`);
}
//Sending a invitation to the last two guest on the list
console.log("\nInvitations  to the last 2 Guests\n ");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invite to dinner `));
//Remove last two guest 
guestList.pop();
guestList.pop();
// print a message and check list is empty 
console.log("Empty List", guestList);
