const prompt = require("prompt-sync")();

let yourName;
do {
	yourName = prompt("Who are you? ");
} while (/[0-9]/.test(yourName));

console.log("Your name is " + yourName + " and it doesn't contain any numbers");
