var title = document.getElementById("title");
var start = document.getElementById("start");
var instruction = document.getElementById("instruction");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var end = document.getElementById("end");
var final = document.getElementById("final");
var form = document.getElementById("form");

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
}