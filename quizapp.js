import questionArray from "./questions";
import { addAnswers } from "./questionbody";

let questionElement = document.getElementById('question');
let answerBtn = document.getElementById('answer-button-container');
let nextBtn = document.getElementById('next-btn');
let skipBtn = document.getElementById('skip-btn');

let marks = 0;
let questionIndex = 0;

function startQuiz() {
    questionIndex = 0;
    marks = 0;
    showQuestion();
}


function showQuestion() {
    let currentQuestion = questionArray[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;
    addAnswers(currentQuestion);
    
}

function selectAnswer(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
    }else{
        selectedBtn.classList.add('incorrect');
    }
    nextBtn.style.display = 'block';

}

startQuiz();

export{
    questionElement,
    answerBtn,
    nextBtn
}