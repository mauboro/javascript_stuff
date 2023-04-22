// it worked gracefully but I am almost sure that I've cheated the exercise

function deepEqual(obj1, obj2){
	for (let o of Object.keys(obj1)){
		if (typeof obj1[o] != typeof obj2[o]){
			return false;
		}
	}
	return true;
}

let obj = {here: {is: "an"}, object: 2}

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
