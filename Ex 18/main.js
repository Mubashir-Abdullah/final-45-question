"use strict";
//Create a Array list 
let countriesTovisit = ["China", "Denmark ", "Brazil", "Argentina "];
console.log("\nOrignal Order:", countriesTovisit);
//Copy create and Alphabetical order list 
console.log("\nAlphabetical order:", [...countriesTovisit].sort());
//Check the orignal order in still- array-list
console.log("\nStill in orignal order:", countriesTovisit);
//new copy create and that reverse Array-List
console.log("\nReverse order:", [...countriesTovisit].reverse());
//again Check the orignal order in still array-list
console.log("\nStill in orignal order:", countriesTovisit);
//change the Orignal Array in Reverse Condition
console.log("\nOrignal Array Reversed:", countriesTovisit.reverse());
//Reverse Condition Back to orignal Array list
console.log("\nBack to Orignal order :", countriesTovisit.reverse());
//orignal-Array list  Alphabetical order list
console.log("\norignal Array Sorted in Alphabetical order:", countriesTovisit.sort());
//orignal-Array List Reversed in orignal array
console.log("\norignal Array Reversed again :", countriesTovisit.sort());
