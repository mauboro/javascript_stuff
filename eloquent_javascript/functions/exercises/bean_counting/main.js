function countBs(s){
	let count = 0;
	for (let i = 0; i < s.length; i++){
		if (s[i] == "B"){
			count += 1;
		}
	}
	return count;
}

function countChar(s, c){
	let count = 0;
	for (let i = 0; i < s.length; i++){
		if (s[i] == c){
			count += 1;
		}
	}
	return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
