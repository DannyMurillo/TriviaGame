//timer
// this will take care of the seconds and minutes giving the user a 2 minute count 
var timeLeft = 30;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}
// all of the questions that will be used in the quiz
var questions = [{
	"question": "Who was the last team to go undefeated in the Premier League?",
	"option1": "Chelsea",
	"option2": "Manchester City",
	"option3": "Arsenal",
	"option4": "Manchester United",
	"answer": "2"
}, {
	"question": "What was the most played Esports game of 2017?",
	"option1": "League of Legends",
	"option2": "Counter-Strike: Global Offensive",
	"option3": "Overwatch",
	"option4": "Dota 2",
	"answer": "3"
}, {
	"question": "What type of bear is best?",
	"option1": "Polar Bear",
	"option2": "False, Black Bear",
	"option3": "Panda",
	"option4": "Grizzley",
	"answer": "1"
}, {
	"question": "What was the highest grossing movie of 2017?",
	"option1": "Fast and Furious 8",
	"option2": "Star Wars: Episode 8",
	"option3": "Wonder Woman",
	"option4": "Spider-Man Homecoming",
	"answer": "1"
}, {
	"question": "What WWE superstar is not an actor these days?",
	"option1": "Batista",
	"option2": "John Cena",
	"option3": "Dwayne The Rock Johnson",
	"option4": "Rey Mysterio",
	"answer": "3"
}, {
	"question": "What NALCS team is the first to elminate TSM in a round before the finals?",
	"option1": "Cloud 9",
	"option2": "Clutch Gaming",
	"option3": "Counter Logic Gaming",
	"option4": "Echo Fox",
	"answer": "1"
}, {
	"question": "Who won the World Cup in 2014?",
	"option1": "France",
	"option2": "Brazil",
	"option3": "Italy",
	"option4": "Germany",
	"answer": "3"
}, {
	"question": "Who was the number 2 pick in the NBA draft in 2017?",
	"option1": "Lavar Ball",
	"option2": "Lonzo Ball",
	"option3": "Jayson Tatum",
	"option4": "Donovan Mitchell",
	"answer": "1"
}, {
	"question": "Who is the most recent player to average a triple double in the NBA regular season?",
	"option1": "Lebron James",
	"option2": "James Harden",
	"option3": "Ben Simmons",
	"option4": "Russell Westbrook",
	"answer": "3"
}, {
	"question": "Who finished the 2017 calendar year with the most goals?",
	"option1": "Lionel Messi",
	"option2": "Neymar",
	"option3": "Cristiano Ronaldo",
	"option4": "Harry Kane",
	"answer": "3"
}];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

// this grabs the question from the question array above and loads out the options too
function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

// this function allows us to move onto the next question
function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Select an answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer === answer){
		score++;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion === totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion === totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}
// declares the function to run
loadQuestion(currentQuestion);