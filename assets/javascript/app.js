//timer
var counter = 0;
var timeleft = 30;
function setup() {
    noCanvas();

    var timer = select('#timer')
    timer.html(timeleft - counter)

    function timeIt(){ 
        counter++;
        timer.html(timeleft - counter);

    }

    setInterval(timeIt, 1000);
}

// all of the questions that will be used in the quiz
(function() {
    const Questions = [
      {
        question: "Who is the last Premier League team to go undefeated?",
        answers: {
          a: "Manchester United",
          b: "Manchester City",
          c: "Arsenal"
        },
        correctAnswer: "c"
      },
      {
        question: "Who is the most recent player to average a triple double in the regular NBA season?",
        answers: {
          a: "Russell Westbrook",
          b: "Lebron James",
          c: "James Harden"
        },
        correctAnswer: "a"
      },
      {
        question: "Which WWE wrestler is not a big movie actor today?",
        answers: {
          a: "Batista",
          b: "Rey Mysterio",
          c: "Dwayne 'The Rock' Johnson",
        },
        correctAnswer: "b"
      },
      {
        question: "Which NALCS team is the first to knockout TSM out of the playoffs in a round that is not the final?",
        answers: {
          a: "Cloud 9",
          b: "Counter Logic Gaming",
          c: "Clutch Gaming"
        },
        correctAnswer: "c"
      },
      {
        question: "Who won the last World Cup in 2014?",
        answers: {
          a: "Germany",
          b: "Brazil",
          c: "Italy"
        },
        correctAnswer: "a"
      },
      {
        question: "What type of bear is best?",
        answers: {
          a: "Brown Bear",
          b: "Polar Bear",
          c: "False, Black Bear"
        },
        correctAnswer: "c"
      },
      {
        question: "What was the most played Esport in 2017?",
        answers: {
          a: "Dota 2",
          b: "League of Legends",
          c: "Counter-Strike: Global Offensive"
        },
        correctAnswer: "a"
      },
      {
        question: "What was the highest grossing movie of 2017?",
        answers: {
          a: "Fast and Furious 8",
          b: "Star Wars: Episode 8",
          c: "Spider-Man Homecoming"
        },
        correctAnswer: "b"
      },
    ];
  
    function Quiz() {
      // This is where the output to the quiz go
      const output = [];
  
      Questions.forEach((currentQuestion, questionNumber) => {
        // User picked answers
        const answers = [];
  
        for (letter in currentQuestion.answers) {
          // adding a radio style button to the HTML 
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // adding questions and answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      Questions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${Questions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
   Quiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();