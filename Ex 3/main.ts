let personeName : string ="Mubashir abdullah";
//step one LowerCase
console.log(personeName.toLocaleLowerCase());
//Step two UpperCase
console.log(personeName.toLocaleUpperCase());
// step three titleCase with regx form 
console.log(personeName.replace(/\b\w/g, (char) => char.toLocaleUpperCase()));