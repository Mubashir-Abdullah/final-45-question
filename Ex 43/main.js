//function to make magicians great through .map() it will modify array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians  great through  .map
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array contaning magicians names
var magicians_names = ["Harray porter", "Mubashir", "Sir Zia"];
//Making a copy of orignal array through  .slice() function
var copy_magicians_names = magicians_names.slice();
//Modify the copyied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magicians_names);
//orignal
console.log("Orignal Array\n");
show_magicians(magicians_names);
//copied
console.log("Cpoied Array\n");
show_magicians(copy_great_magicians);
