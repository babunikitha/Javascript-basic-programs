const prompt = require('prompt-sync')()
let num = parseInt(prompt("enter the number:"));
let fact = 1;

for (let i = num; i >= 1; i--) {
    fact = fact * i;
}

console.log("factorial value = " + fact);