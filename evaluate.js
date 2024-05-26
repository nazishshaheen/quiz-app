


let marks = 0;

function checkAnswer(e){
    if(e.target.dataset.correct === 'true'){
        ++marks;
    }
}


function showResult(){
    alert('congrats! your marks is '+ marks);
}

export{
    checkAnswer,
    showResult
}