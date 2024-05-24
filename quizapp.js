let questionArray = [
    {
        question: "Which is the smallest continent in the world?",
        answer:[
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "America", correct: false},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answer:[
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Lion", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answer:[
            { text: "Vatican city", correct: true},
            { text: "Nepal", correct: false},
            { text: "India", correct: false},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is the largest dessert in the world?",
        answer:[
            { text: "Sahara", correct: false},
            { text: "Gobi", correct: false},
            { text: "Kalahari", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
]

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

    currentQuestion.answer.forEach(answer =>{
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    })
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