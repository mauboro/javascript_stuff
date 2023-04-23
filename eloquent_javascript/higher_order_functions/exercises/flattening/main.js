let arrays = [[1, 2, 3], [4, 5], [6]]

function flatten(array){
	return array.reduce((x, y)=> x.concat(y));
}

console.log(flatten(arrays));
