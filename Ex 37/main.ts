//creating a function
function make_shirt(size:string= "large",printmessage:string="I love TypeScript"){
console.log(`Creating a ${size} shirt with the ${printmessage} print on shirt`)
}
//first calling a function by-default 
make_shirt()
//Second Calling a function with medium size and by-default
make_shirt("Medium")
//third Calling a function with medium size and also Different print
make_shirt("small","I love JavaScript")