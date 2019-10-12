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
// Selecting our elements
  var startBtn = document.querySelector("#start");
  var quizContainer=document.querySelector("#quiz-container")
  var allChoicesBtn = document.querySelector("#choices");
  var questionID = document.querySelector("#question");
  var aBtn = document.querySelector("#A")
  var bBtn = document.querySelector("#B")
  var cBtn = document.querySelector("#C")
  var dBtn = document.querySelector("#D")
  var choiceClass =document.querySelector(".choice");
  var timer = document.querySelector("#count-down-timer");

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

allChoicesBtn.addEventListener("click", nextQuestion)

  function nextQuestion (){
    questionNumber++;
    insertQuestionChoices(questionNumber);
    if(questionNumber===questions.length-1){
        questionNumber=0;
    }
    questionTimer=15;
    questionCountDown();
    clearInterval(questionInterval);

  }

//Changing question by time
function questionCountDown() {
    questionInterval = setInterval(function(){
        questionTimer--;

        if(questionTimer===0){
        nextQuestion();
        clearInterval(questionInterval);
        }
        
    },1000);
}
