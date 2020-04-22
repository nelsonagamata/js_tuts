let a = ["ant", "bat", "cat", 42];

a.forEach(function(e){
	console.log(e);
});

let soliloquy = "To be, or not to be, that is the question.";
Array.from(soliloquy).forEach(function(e) {
	console.log(e);
});