const prompt = require("prompt-sync")();

function makeChessBoard(size){
	let shift = 0;
	for (let i = 0; i <= size; i++){
		if (!shift){
			console.log(" #".repeat(size))
			shift = 1;
		}else if (shift) {
			console.log("# ".repeat(size))
			shift = 0;
		}
	}
}


let ans = ""
while (ans != "out"){
	ans = prompt("Give me a size for the chessboard: ");
	makeChessBoard(Number(ans));
}
