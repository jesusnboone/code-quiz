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

var AnswerOneTrue = ""
var AnswerTwoTrue = ""
var AnswerThreeTrue = ""
var AnswerFourTrue = ""

questionAnswerOne.addEventListener("click", function(){
    AnswerOneTrue = "true"
});
questionAnswerTwo.addEventListener("click", function(){
    AnswerTwoTrue = "true"
});
questionAnswerThree.addEventListener("click", function(){
    AnswerThreeTrue = "true"
});
questionAnswerFour.addEventListener("click", function(){
    AnswerFourTrue = "true"
});

var questions = [
    { q: 'A very useful tool used during development and debugging for printing content to the debugger is:', a1: '1. Javascript', a2: '2. terminal/bash', a3: '3. for loops', a4: '4. console.log'},
    { q: 'Commonly used data typed DO NOT include:', a1: 'strings', a2: 'booleans', a3: 'alerts', a4: 'numbers' },
    { q: 'The condition in an if/else statement is enclosed with ____', a1: 'quotes', a2: 'curly brackets', a3: 'parenthesis', a4: 'square brackets'},
    { q: 'Arrays in Javascript can be used to store', a1: 'numbers and strings', a2: 'other arrays', a3: 'booleans', a4: 'all of the above'},
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

    question.textContent = (questions[0].q)
    questionAnswerOne.textContent = (questions[0].a1)
    questionAnswerTwo.textContent = (questions[0].a2)
    questionAnswerThree.textContent = (questions[0].a3)
    questionAnswerFour.textContent = (questions[0].a4)

    questionAnswerOne.addEventListener("click", function(){
        AnswerOneTrue = "true";
    });
    questionAnswerTwo.addEventListener("click", function(){
        AnswerTwoTrue = "true";
    });
    questionAnswerThree.addEventListener("click", function(){
        AnswerThreeTrue = "true";
    });
    questionAnswerFour.addEventListener("click", function(){
        AnswerFourTrue = "true";
    });

    if (questions[0].q && AnswerFourTrue) {
        console.log("awesome");
    }
}