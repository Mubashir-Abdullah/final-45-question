//creating a Array
let userName : string [] = ["Hadi","Abdullah","Haseeb","Admin"];

//use forEach-loop and if else 
userName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, whould you like to see a status report? `)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})