//creating a Array
var userName = ["Hadi", "Abdullah", "Haseeb", "Admin"];
//use forEach-loop and if else 
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", whould you like to see a status report? "));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
