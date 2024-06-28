"use strict";
let userName = ["Hadi", "Abdullah", "Haseeb", "Admin"];
//Remove all values from our Array Now our Array is empty
userName = [];
if (userName.length === 0) {
    console.log("Your Array in Empty We need to find some users!");
}
else {
    //use forEach-loop and if else 
    userName.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, whould you like to see a status report? `);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
