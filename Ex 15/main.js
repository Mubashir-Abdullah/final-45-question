"use strict";
//Array guest list
let guestList = ["Mubashir", "Abdullah", "Hasseb", "Shafay"];
// assign remove value = 3 remove 
let dontCome = guestList[3];
// dont-come Variable print a message
console.log(dontCome, "Nahi Ahh Saktha");
// splice - value remove and add a guest list 
guestList.splice(3, 3, "Aroob");
// forEach-loop and new name assing guest / backtick add  and print name 
guestList.forEach(guest => console.log(`Salam ${guest} would you like to Dinner with me `));
