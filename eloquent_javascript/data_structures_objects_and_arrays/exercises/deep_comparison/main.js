function deepEqual(obj1, obj2){
	console.log(Object.keys(obj1));
	console.log(Object.keys(obj2));
	for (let o of Object.keys(obj1)){
		console.log(Object.keys(o));
	}
}

let obj = {here: {is: "an"}, object: 2}
deepEqual(obj, obj);
