//timer
// this will take care of the seconds and minutes giving the user a 2 minute count 
var totalSec = 120;
var c_minutes = parseInt(totalSec/60);
var c_seconds = parseInt(totalSec%60);

function CheckTime () {
    document.getElementById("timer").innerHTML = 'Time Left:' + c_minutes + 'minutes' + c_seconds + 'seconds';

    if (totalSec === 0) {
        setTimeout('document.quiz.submit()',1);
    }
    else {
        totalSec = totalSec - 1;
        var c_minutes = parseInt(totalSec/60);
        var c_seconds = parseInt(totalSec%60);
        setTimeout("CheckTime()",1000);
    }
};
setTimeout("CheckTime()",1000);

// all of the questions that will be used in the quiz
    var myQuestions = [
      {
        question: "Who is the last Premier League team to go undefeated?",
        answers: {
          a: 'Manchester United',
          b: 'Manchester City',
          c: 'Arsenal'
        },
        correctAnswer: 'c'
      },
      {
        question: "Who is the most recent player to average a triple double in the regular NBA season?",
        answers: {
          a: 'Russell Westbrook',
          b: 'Lebron James',
          c: 'James Harden'
        },
        correctAnswer: 'a'
      },
      {
        question: "Which WWE wrestler is not a big movie actor today?",
        answers: {
          a: 'Batista',
          b: 'Rey Mysterio',
          c: 'Dwayne The Rock Johnson',
        },
        correctAnswer: 'b'
      },
      {
        question: "Which NALCS team is the first to knockout TSM out of the playoffs in a round that is not the final?",
        answers: {
          a: 'Cloud 9',
          b: 'Counter Logic Gaming',
          c: 'Clutch Gaming'
        },
        correctAnswer: 'c'
      },
      {
        question: "Who won the last World Cup in 2014?",
        answers: {
          a: 'Germany',
          b: 'Brazil',
          c: 'Italy'
        },
        correctAnswer: 'a'
      },
      {
        question: "What type of bear is best?",
        answers: {
          a: 'Brown Bear',
          b: 'Polar Bear',
          c: 'False, Black Bear'
        },
        correctAnswer: 'c'
      },
      {
        question: "What was the most played Esport in 2017?",
        answers: {
          a: 'Dota 2',
          b: 'League of Legends',
          c: 'Counter-Strike: Global Offensive'
        },
        correctAnswer: 'a'
      },
      {
        question: "What was the highest grossing movie of 2017?",
        answers: {
          a: 'Fast and Furious 8',
          b: 'Star Wars: Episode 8',
          c: 'Spider-Man Homecoming'
        },
        correctAnswer: 'b'
    }
    ];

// this is putting all the informatinon in the divs with the id names quiz results and submit 
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            
            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}