var title = document.getElementById("title");
var start = document.getElementById("start");
var instruction = document.getElementById("instruction");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var end = document.getElementById("end");
var final = document.getElementById("final");
var form = document.getElementById("form");
var questionAnswerOne = document.getElementById("q-answer-one");
var questionAnswerTwo = document.getElementById("q-answer-two");
var questionAnswerThree = document.getElementById("q-answer-three");
var questionAnswerFour = document.getElementById("q-answer-four");

var questions = [
    { q: 'A very useful tool used during development an debugging for printing content to the debugger is:', a1: '1. Javascript', a2: '2. terminal/bash', a3: '3.'},
    { q: 'Commonly used data typed DO NOT include:', a: '' },
    { q: 'The condition in an if/else statement is enclosed with ____', a: 't' },
    { q: 'Arrays in Javascript can be used to store', a: 'f' },
    { q: 'String values must be inclosed within ____ when being assigned to variables', a1: 'commas', a2: 'curly brackets', a3: 'quotes', a4: 'parenthesis'}
];

var score = 0;

question.style.display = "none";
answers.style.display = "none";
end.style.display = "none";
final.style.display = "none";
form.style.display = "none";

function startQuiz() {
    title.style.display = "none";
    start.style.display = "none";
    instruction.style.display = "none";

    question.style.display = "block";
    answers.style.display = "block";

    for (var i = 0; i < questions.length; i++) {
        question.textContent = (questions[i].q)
        questionAnswerOne.textContent = (questions[i].a1)
        questionAnswerTwo.textContent = (questions[i].a2)
        questionAnswerThree.textContent = (question[i].a3)
        questionAnswerFour.textContent = (question[i].a4)
    }
}




//answer
// Display current question to user and ask OK/Cancel
//var answer = (questions[i].q);}
// Loop over every question object
//for (var i = 0; i < questions.length; i++) {
//question.style.textContent = ("questions[i].q")
// Display current question to user and ask OK/Cancel
//var answer = (questions[i].q);}
// Compare answers
   // if (
        //(answer === true && questions[i].a === 't') ||
        //(answer === false && questions[i].a === 'f')
         // ) {
            // Increase score
          //  score++;
          //  alert('Correct!');
          //} else {
         //   alert('Wrong!');
          //}
       // }