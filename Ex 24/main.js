"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["Apple", " Banana", "orange"];
//Test for equality and inequality with string
console.log("Is apple is equal to apple");
console.log(apple == "apple");
//testing not-equal 
console.log("\nIs apple is not-equal to apple");
console.log(apple != "apple");
//Test using LowerCase funtion
console.log("\nIs APPLE is equal to apple after converting to Lowercase");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");
//Test not-equal
console.log("\nIs APPLE is not-equal to apple after converting to Lowercase");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");
//numerical Testing
console.log("\n Is ten is equal to twenty ");
console.log(ten == twenty);
//test not-equal 
console.log("\n Is ten is not-equal to twenty ");
console.log(ten != twenty);
//test greater than
console.log("\n Is ten is greater than zero  ");
console.log(ten > 0);
//lees than
console.log("\n Is twenty  is lees  than 10 ");
console.log(ten < 10);
//greater than or equal
console.log("\n Is ten is greater than or equal to 5 ");
console.log(ten >= 5);
//leess than or equal
console.log("\n Is twenty is lees  than or equal to 10");
console.log(twenty <= 10);
//Tests using "and" && "Or" || Operaters
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//Test "Or" operaters
console.log("\n twenty is greater than 50  or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n twenty is greater than 50  or 20 is not-equal to 20");
console.log(20 > 50 || 20 != 20);
//Test whether an item is including in array
console.log("\n Is orange include  in my fruits array");
console.log(fruits.includes("orange"));
console.log("\n Is orange not include  in my fruits array");
console.log(!fruits.includes("orange"));
