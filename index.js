const dotenv = require('dotenv');
dotenv.config();

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let attempts = 3;

console.log("Highly confidential code! You need to enter the correct password to unlock the confidential code.");

function askPassword() {
    rl.question("Enter the password: ", (input_pass)=>{
        if(input_pass===process.env.PASSWORD){
            console.log(`Access granted! The secret nuclear code is ${process.env.SECRET_CODE}`);
            rl.close();
        }else{
            attempts--;
            if(attempts>0){
                console.log(`Incorrect password. You have ${attempts} attempt(s) remaining.`);
                askPassword();
            }else{
                console.log('Out of attempts. Better luck next time.');
                rl.close();
            }
        }
    })
}

askPassword();
