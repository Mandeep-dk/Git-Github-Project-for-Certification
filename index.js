const dotenv = require('dotenv');
dotenv.config();

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let attempts = 3;

console.log("Highly confidential code! You need to enter the correct password to unlock the confidential code.");


