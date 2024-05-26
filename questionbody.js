import questionArray from "./questions";
import { questionElement, answerBtn, nextBtn } from "./quizapp";

function nextQuestion(prevQuestion) {
    if (prevQuestion + 1 < questionArray.length) {
        if (prevQuestion === questionArray.length - 1) {
            nextBtn.disabled = true;
        }
        let currentQuestion = questionArray[prevQuestion + 1]
        questionElement.innerHTML = currentQuestion.question;
    } else {
        alert('last question');
    }
}

function addAnswers(currentQuestion) {
    currentQuestion.answer.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

export{
    addAnswers
}