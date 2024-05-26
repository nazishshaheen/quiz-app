import questionArray from "./questions.js";
import { questionElement, answerBtn, nextBtn, showAnswer, nextQuestionEvent, incrementQuestionIndex } from "./quizapp.js";
import { hideElement, showElement} from "./functions.js";
import { checkAnswer, showResult } from "./evaluate.js";

function nextQuestion(prevQuestion) {
    answerBtn.innerHTML = null;
    if (prevQuestion < questionArray.length - 2) {
        hideElement(nextBtn);
    }else{
        showElement(nextBtn);
    }
    showElement(document.getElementById('skip-btn'));
    if (prevQuestion + 1 < questionArray.length) {
        console.log(prevQuestion, questionArray.length);
        if (prevQuestion === questionArray.length - 2) {
            nextBtn.innerText = 'Submit';
            document.getElementById('skip-btn').style.display = 'none';
            nextBtn.removeEventListener('click', nextQuestionEvent);
            nextBtn.addEventListener('click', () => {
                showResult();
            });
        }
        let currentQuestion = questionArray[prevQuestion + 1]
        let questionIndex = prevQuestion + 1;
        addQAnswers(currentQuestion, questionIndex);
    }
    // incrementQuestionIndex();
}

function addQAnswers(currentQuestion, questionIndex) {
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        } else {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', (e) => {
            showAnswer(e.target.parentElement);
            checkAnswer(e);
            hideElement(document.getElementById('skip-btn'))
        });
    })
}

export {
    addQAnswers,
    nextQuestion
}