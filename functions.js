import { nextQuestion } from "./questionbody.js";
import { incrementQuestionIndex, questionIndex } from "./quizapp.js";


function skip(){
    nextQuestion(questionIndex);
    incrementQuestionIndex()
}

function showElement(element){
    element.style.display = 'block';
}

function hideElement(element){
    element.style.display = 'none';
}

document.getElementById('skip-btn').addEventListener('click',skip);

export{
    skip,
    showElement,
    hideElement
}