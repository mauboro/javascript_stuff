function range(start, end, step=1){
	res = []
	if (step < 0){
		for (let i = end;i >= start; i -= step * -1){
			res.push(i);
		}
	}
	else{
		for (let i = start;i <= end; i += step){
			res.push(i);
		}
	}
	return res;
}

function sum(numbers){
	res = 0;
	for (let i = 0; i < numbers.length; i++){
		res += numbers[i];
	}
	return res;
}

console.log(sum(range(1, 10)))
