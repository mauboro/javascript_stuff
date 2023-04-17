function reverseArray(array){
	res = []
	for (let i = array.length - 1; i >= 0; i--){
		res.push(array[i]);
	}
	return res;
}

function reverseArrayInPlace(array){
	if (array.length % 2){
		for (let i = 0; i <= Math.floor(array.length/2); i++){
			let t = array[i]
			array[i] = array[array.length - 1 - i];
			array[array.length - 1 - i] = t;
		}
	}
}
let a1 = ["A", "B", "C"];
let a2 = [1, 2, 3, 4, 5];
console.log(reverseArray(a1));
console.log(reverseArray(a2));

console.log()

console.log(a1);
console.log(a2);

reverseArrayInPlace(a1);
reverseArrayInPlace(a2);

console.log(a1);
console.log(a2);
