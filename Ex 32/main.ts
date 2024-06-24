//creating Array
let current_users = ["Hadi","Abdullah","Haseeb","Ayesha"];
let new_users =["Mubashir","Areeba","shafay","Hadi","Ayesha","zain"];

//some function / comepair the value 
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_users =>current_one_users.toLowerCase() === new_one_user.toLowerCase())
    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})