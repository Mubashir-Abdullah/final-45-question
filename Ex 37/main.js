//creating a function
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "large"; }
    if (printmessage === void 0) { printmessage = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printmessage, " print on shirt"));
}
//first calling a function by-default 
make_shirt();
//Second Calling a function with medium size and by-default
make_shirt("Medium");
//third Calling a function with medium size and also Different print
make_shirt("small", "I love JavaScript");
