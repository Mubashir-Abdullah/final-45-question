var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Create a Array list 
var countriesTovisit = ["China", "Denmark ", "Brazil", "Argentina "];
console.log("\nOrignal Order:", countriesTovisit);
//Copy create and Alphabetical order list 
console.log("\nAlphabetical order:", __spreadArray([], countriesTovisit, true).sort());
//Check the orignal order in still- array-list
console.log("\nStill in orignal order:", countriesTovisit);
//new copy create and that reverse Array-List
console.log("\nReverse order:", __spreadArray([], countriesTovisit, true).reverse());
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
