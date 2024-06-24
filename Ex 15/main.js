var guestList = ["Mubashir", "Abdullah", "Hasseb", "Shafay"];
var dontCome = guestList[3];
console.log(dontCome, "Nahi Ahh Saktha");
guestList.splice(3, 3, "Aroob");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, " would you like to Dinner with me ")); });
