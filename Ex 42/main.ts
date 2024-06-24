//function to make magicians great through .map() it will modify array
function show_magicians (magicians:string[]){
    magicians.forEach(name => console.log(name));
}

//function to make magicians  great through  .map
function make_great (magicians : string[]){
return magicians.map(name => `The Great ${name}`);
}

//Define an array contaning magicians names
let magicians_names =["Harray porter","Mubashir","Sir Zia"]

//call the make_great function to modify magicians names
let great_magicians = make_great(magicians_names)
//call show_magicians that show modified list of maicians 
show_magicians(great_magicians);

//call the function to print each magician name
// show_magicians(magicians_names); 