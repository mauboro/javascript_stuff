function myLoop(v, t, u, b){
	while (t(v)){
		b(v);
		v = u(v);
	}
}

myLoop(3, n => n > 0, n => n - 1, console.log);
