function arrayToList(array){
	let list = {};
	for (let i = array.length-1; i >= 0; i--){
		if (!list.value){
			list = {value: array[i], rest: null};

		}else {
		list = {value: array[i], rest: list};
		}
	}
	console.log(list);
}

function listToArray(list){
	for (let node = list; node; node = node.rest){
		console.log(node);
	}
}


arrayToList([1, 2, 3, 4, 5]);
let list = arrayToList([1, 2, 3])
listToArray(list);

