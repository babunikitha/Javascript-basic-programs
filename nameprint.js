
const prompt = require('prompt-sync')();


let firstName = prompt("enter the first name: ");
let lastName = prompt("enter the last name: ");


let fullName = firstName + " " + lastName;
console.log("Your full name is:" +fullName);