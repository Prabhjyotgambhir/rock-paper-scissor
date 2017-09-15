// LOGIC

var compScore = 0;
var yourScore = 0;
var compMove;
var userMove;

var compChoice = ['rock','paper','scissor'];


function calculateCompScore() {
	compRandom = Math.floor(Math.random() * 3);
	compMove = compChoice[compRandom];
	console.log('Computer chose: ' , compMove);
}

function rock() {
	userMove='rock';
	console.log('User chose: ', userMove);
	calculateCompScore();
	whoWins();
}

function scissor() {
	userMove='scissor';
	console.log('User chose: ', userMove);
	calculateCompScore();
	whoWins();
}

function paper() {
	userMove='paper';
	console.log('User chose: ', userMove);
	calculateCompScore();
	whoWins();
}


function whoWins() {
	if(compMove==userMove){
		console.log('Its a draw');
	}
	else if((compMove=='rock' && userMove=='scissor') || (compMove=='scissor' && userMove=='paper') || (compMove=='paper' && userMove=='rock')){
		compScore++;
		console.log('Computer wins this time');
	}
	else if((userMove=='rock' && compMove=='scissor') || (userMove=='scissor' && userMove=='paper') || (userMove=='paper' && userMove=='rock')){
		userMove++;
		console.log('User wins this time');
	}
}
