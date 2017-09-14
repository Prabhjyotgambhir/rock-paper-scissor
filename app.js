// LOGIC

	
var score = 0;
var playerChoice;
var store;

var readable = {
	'0' : 'Rock',
	'1' : 'Paper',
	'2' : 'Scissor'
}

var cpuChoice =  function() {
 		store = Math.floor(Math.random() * 3);
 		text = readable(store);
}

console.log(cpuChoice, text);

