const prompt = require("prompt-sync")();

let theNumber = Number(prompt("enter a number: "))

if (!Number.isNaN(theNumber)){
	console.log("Your number is the squre root of " + theNumber * theNumber)
}


