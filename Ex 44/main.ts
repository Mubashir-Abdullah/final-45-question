//function create and optional 
function makeSandwich (...items :string[]){
    console.log("\nMaking a sandwich with the following items: \n")
    items.forEach(singleItem =>  console.log("-" + singleItem ));
    console.log("\n Now Enjoy Sandwich")
}

//Call the function 3 times with 3 differnt number of arguments
makeSandwich("Chicken","Cheese","Mayo","Egg");
makeSandwich("Bread","Butter");
makeSandwich("Chicken","Cheese","Mayo","Egg","Bread","Butter","Tomato");