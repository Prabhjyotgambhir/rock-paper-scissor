// LOGIC

var compScore = 0;
var userScore = 0;
var chances;

var compChoice = ['rock','paper','scissor'];


function calculateCompScore() {
	compRandom = Math.floor(Math.random() * 3);
	compMove = compChoice[compRandom];
	console.log('Computer chose: ' , compMove);
	return compMove;
}

function rock() {
	userMove='rock';
	console.log('User chose: ', userMove);
	whoWins(userMove,calculateCompScore());
	compareScore();
}

function scissor() {
	userMove='scissor';
	console.log('User chose: ', userMove);
	whoWins(userMove,calculateCompScore());
	compareScore();
}


function paper() {
	userMove='paper';
	console.log('User chose: ', userMove);
	whoWins(userMove,calculateCompScore());
	compareScore();
}

function compareScore() {

	document.getElementById('compScore').innerHTML = compScore;
	document.getElementById('userScore').innerHTML = userScore;
}

function whoWins(compMove,userMove) {
	
		
	if((compMove=='rock' && userMove=='scissor') || (compMove=='scissor' && userMove=='paper') || (compMove=='paper' && userMove=='rock')){
		compScore++;
		console.log('Computer wins this time');
	}
	else if((userMove=='rock' && compMove=='scissor') || (userMove=='scissor' && compMove=='paper') || (userMove=='paper' && compMove=='rock')){
		userMove++;
		console.log('User wins this time');
	}
	else {
		console.log('Its a draw');
	}
}
