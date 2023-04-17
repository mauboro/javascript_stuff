function arrayToList(array){
	let list = {};
	for (let i = array.length-1; i >= 0; i--){
		if (!list.value){
			list = {value: array[i], rest: null};

		}else {
		list = {value: array[i], rest: list};
		}
	}
	return list;
}

function listToArray(list){
	let res = [];
	for (let node = list; node; node = node.rest){
		res.push(node.value);
	}
	return res;
}

function prepend(value, rest){
	return {value, rest};
}

function nth(linkedlist, value){
	let count = 0;
	for (let node = linkedlist; node; node = node.rest){
		if (node.value === value){
			return count;
		}else{
			count += 1;
		}
	}
}

// arrayToList([1, 2, 3, 4, 5]);
// let list = arrayToList([1, 2, 3])
// console.log(list);
// let prepended = prepend(0, list);
// console.log(prepended);
// let array = listToArray(list);
// console.log(array);
// console.log(nth(list, 3))
