function everything(a, f){
	for (let i of a){
		if (!(f(i))){
			return false;
		}
	}
	return true;
}

console.log(everything([1, 3, 5], n => n < 10));
console.log(everything([2, 4, 16], n => n < 10));
console.log(everything([], n => n < 10));

function everythingWithSome(a, f){
	#TODO
}

console.log(everythingWithSome([1, 3, 5], n => n < 10));
console.log(everythingWithSome([2, 4, 16], n => n < 10));
console.log(everythingWithSome([], n => n < 10));
