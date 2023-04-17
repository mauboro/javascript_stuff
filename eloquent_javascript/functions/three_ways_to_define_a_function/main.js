//the first way: 
let firstFunc = function(x){
	if (x == 5){
		console.log("x is 5");
	}else{
		console.log(`x is not 5, it is ${x}`);
	}
};

//the second one, can have parameters inside the parentheses just like the first one:

function secondFunc(){
	console.log("I'm the second function here and the only one that's written in a human way!");
}

//the last way, finally letting me understand what the fuck were those fucking arrows:
//if there is more than one parameters, they have to be between parentheses
//it needs to end with ; just like the first one and unlike the second one
 
let thirdFunc = x => {
	console.log("What the fuck is that way of defining a function, it's cool tho, anyways, here's x = " +  x);
};

firstFunc(5);
firstFunc(4);
secondFunc();
thirdFunc(100);
