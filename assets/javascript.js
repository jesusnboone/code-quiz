var title = document.getElementById("title");
var start = document.getElementById("start");
var timer = document.getElementById("timer");
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

function questionTwo () {

    question.textContent = (questions[1].q)
    questionAnswerOne.textContent = (questions[1].a1)
    questionAnswerTwo.textContent = (questions[1].a2)
    questionAnswerThree.textContent = (questions[1].a3)
    questionAnswerFour.textContent = (questions[1].a4)

    questionAnswerOne.addEventListener("click", function(){
        time=time-10
        questionThree()
    });
    questionAnswerTwo.addEventListener("click", function(){
            time=time-10
            questionThree()
    });
    questionAnswerThree.addEventListener("click", function(){
       questionThree()
    });
    questionAnswerFour.addEventListener("click", function(){
            time=time-10
            questionThree()
    });
}

function questionThree () {
    question.textContent = (questions[2].q)
    questionAnswerOne.textContent = (questions[2].a1)
    questionAnswerTwo.textContent = (questions[2].a2)
    questionAnswerThree.textContent = (questions[2].a3)
    questionAnswerFour.textContent = (questions[2].a4)

    questionAnswerOne.addEventListener("click", function(){
        time=time-10
        questionFour()
    });
    questionAnswerTwo.addEventListener("click", function(){
        time=time-10
        questionFour()
    });
    questionAnswerThree.addEventListener("click", function(){
       questionFour()
    });
    questionAnswerFour.addEventListener("click", function(){
        time=time-10
        questionFour()
    });
}

function questionFour () {
    question.textContent = (questions[3].q)
    questionAnswerOne.textContent = (questions[3].a1)
    questionAnswerTwo.textContent = (questions[3].a2)
    questionAnswerThree.textContent = (questions[3].a3)
    questionAnswerFour.textContent = (questions[3].a4)

    questionAnswerOne.addEventListener("click", function(){
        time=time-10
        questionFive();
    });
    questionAnswerTwo.addEventListener("click", function(){
        time=time-10
        questionFive();
    });
    questionAnswerThree.addEventListener("click", function(){
        time=time-10
        questionFive();
    });
    questionAnswerFour.addEventListener("click", function(){
        questionFive();
    });
}

function questionFive () {
    question.textContent = (questions[4].q)
    questionAnswerOne.textContent = (questions[4].a1)
    questionAnswerTwo.textContent = (questions[4].a2)
    questionAnswerThree.textContent = (questions[4].a3)
    questionAnswerFour.textContent = (questions[4].a4)

    questionAnswerOne.addEventListener("click", function(){
        time=time-10
        highScore ();
    });
    questionAnswerTwo.addEventListener("click", function(){
        time=time-10
        highScore ();
    });
    questionAnswerThree.addEventListener("click", function(){
        highScore ();
    });
    questionAnswerFour.addEventListener("click", function(){
        time=time-10
        highScore ();
    });
}
var questions = [
    { q: 'A very useful tool used during development and debugging for printing content to the debugger is:', a1: '1. Javascript', a2: '2. terminal/bash', a3: '3. for loops', a4: '4. console.log'},
    { q: 'Commonly used data typed DO NOT include:', a1: 'strings', a2: 'booleans', a3: 'alerts', a4: 'numbers' },
    { q: 'The condition in an if/else statement is enclosed with ____', a1: 'quotes', a2: 'curly brackets', a3: 'parenthesis', a4: 'square brackets'},
    { q: 'Arrays in Javascript can be used to store', a1: 'numbers and strings', a2: 'other arrays', a3: 'booleans', a4: 'all of the above'},
    { q: 'String values must be inclosed within ____ when being assigned to variables', a1: 'commas', a2: 'curly brackets', a3: 'quotes', a4: 'parenthesis'}
];
var score = 0;
var time = 75;

timer.textContent = ("Time:" + time);
question.style.display = "none";
answers.style.display = "none";
end.style.display = "none";
final.style.display = "none";
form.style.display = "none";

function startQuiz() {
    var time = 74;

    var timeInterval = setInterval(function () {
      timer.textContent = ("Time:" + time);
      time--;
      if (time===0 || time<0) {
        timer.textContent = ("Time:0")
        clearInterval(timeInterval);
        highScore();

      }
    
    }, 1000);

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
        time=time-10
        questionTwo()
    });
    questionAnswerTwo.addEventListener("click", function(){
        time=time-10
        questionTwo()
    });
    questionAnswerThree.addEventListener("click", function(){
        time=time-10
        questionTwo()
    });
    questionAnswerFour.addEventListener("click", function(){
        questionTwo()
    });
}

function highScore () {
    question.style.display = "none";
    answers.style.display = "none";
    end.style.display = "block";
    final.style.dispaly = "block";
    final.textContent = ("Your final score is" + timer);
    form.style.display = "block";
}