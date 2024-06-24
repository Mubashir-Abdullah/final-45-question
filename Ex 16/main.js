//Array-List 
var guestList = ["Mubahsir", "Abdullah", "Haseeb", "hadi"];
//varibale- dont-come assign number 3
var dontCome = guestList[3];
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
var middleIndex = Math.floor(guestList.length / 2);
//splice remove and add / splice mathod middle name list 
guestList.splice(middleIndex, 1, "Hadi");
//print message
console.log("update List of our Guest");
//for-each loop and backtick assign 
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, " would you like to dinner with me")); });
