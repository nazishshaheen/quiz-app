import questionArray from "./questions.js";
import { addQAnswers, nextQuestion } from "./questionbody.js";
import { showElement } from "./functions.js";

let questionElement = document.getElementById('question');
let answerBtn = document.getElementById('answer-button-container');
let nextBtn = document.getElementById('next-btn');

let questionIndex = 0;

function incrementQuestionIndex(){
    return questionIndex++;
}

function startQuiz() {
    questionIndex = 0;
    showQuestion();
}


function showQuestion() {
    let currentQuestion = questionArray[questionIndex];
    addQAnswers(currentQuestion, questionIndex);
}



function showAnswer(buttonContainer) {
    buttonContainer.childNodes.forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    })
    showElement(nextBtn);

}
function nextQuestionEvent() {
    nextQuestion(incrementQuestionIndex());
}
nextBtn.addEventListener('click', nextQuestionEvent)

startQuiz();

export {
    questionElement,
    answerBtn,
    nextBtn,
    questionIndex,
    incrementQuestionIndex,
    showAnswer,
    nextQuestionEvent
}