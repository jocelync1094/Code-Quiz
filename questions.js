//my questions
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
      title: "Arrays in JavaScript can be used to store ______.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
  },
  {
      title: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "None of the above"],
      answer: "Hyper Text Markup Language"
  },
  {
      title: "Inside which HTML element do we put the JavaScript Code?",
      choices: ["<body>", "<javascript>", "<script>", "<div>"],
      answer: "<script>"
  },
];
var questionNumber;
var totalTime = 15*questions.length;
var questionTimer =15;
var score = 75;

// Selecting our elements
var startBtn = document.querySelector("#start");
var quizContainer=document.querySelector("#quiz-container")
var scoreContainer = document.querySelector("#score-container")
var allChoicesBtn = document.querySelector("#choices");
var questionID = document.querySelector("#question");
var aBtn = document.querySelector("#A")
var bBtn = document.querySelector("#B")
var cBtn = document.querySelector("#C")
var dBtn = document.querySelector("#D")
var choiceClass =document.querySelector(".choice");
var timer = document.querySelector("#count-down-timer");
var yourScore = document.querySelector("#your-score");
var initialsInput = document.querySelector("#inputPassword2");
var submitBtn = document.querySelector(".submit-btn");

//start
startBtn.addEventListener("click",quizBegins);

function quizBegins (){
  startBtn.style="display:none";
  quizContainer.style="display:block";
  questionNumber = 0;
  timerCountDown();
  insertQuestionChoices(questionNumber);
  questionCountDown();
}

function timerCountDown (){
  var timerInterval = setInterval(function(){
      timer.innerHTML= "<div>" + "Timer: " + totalTime +"</div>";
      totalTime--;

      if(totalTime===0){
      clearInterval(timerInterval);
      }
      if(questionNumber===questions.length){
        clearInterval(timerInterval);
      }
      
  },1000);
}


function insertQuestionChoices (questionNumber) {
  questionID.textContent=questions[questionNumber].title;
  aBtn.textContent=questions[questionNumber].choices[0];
  bBtn.textContent=questions[questionNumber].choices[1];
  cBtn.textContent=questions[questionNumber].choices[2];
  dBtn.textContent=questions[questionNumber].choices[3];  
}


//Changing to the next question by click

var questionInterval;

allChoicesBtn.addEventListener("click", function (e){
  console.log("e is: ", e.path[0].id)
  checkAnswers(e);
  nextQuestion();
})

function nextQuestion (){
    

  questionNumber++;
  if(questionNumber<questions.length){
    insertQuestionChoices(questionNumber);

    console.log(questionNumber);
    questionTimer=15;
    questionCountDown();
    clearInterval(questionInterval);
    return;
  } else {
    quizContainer.style ="display:none";
    scoreContainer.style="display:inline-block";
    yourScore.textContent="Your final score is: " + score;
  }
  

}

//Changing question by time
function questionCountDown() {
  questionInterval = setInterval(function(){
      questionTimer--;

      if(questionTimer===0){
      score-=15;
      console.log(score);
      nextQuestion();
      clearInterval(questionInterval);
      }
      
  },1000);
}

//answercheck
function checkAnswers(event) {
  var userBtn = event.path[0].id;
  var userChoice;
  if (userBtn === "A"){
    userChoice = aBtn.textContent;
  } else if (userBtn === "B"){
    userChoice = bBtn.textContent; 
  } else if (userBtn === "C"){
    userChoice = cBtn.textContent;
  } else if (userBtn === "D"){
    userChoice = dBtn.textContent;
  }
  
  if (userChoice !== questions[questionNumber].answer){
    score -= 15;
    totalTime-=15;
    console.log("This is wrong");
    console.log(score);
  }else {
    console.log("This is correct");
    console.log(score);
  }
}
// storing initials in local storages

submitBtn.addEventListener("click",function (){
  var initials = initialsInput.value;
  localStorage.setItem("initials", initials);

})



