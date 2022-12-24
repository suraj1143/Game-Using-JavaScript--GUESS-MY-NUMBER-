'use strict';

let sercretNumber  = Math.trunc(Math.random() * 20)+1;
let primaryScore = 20;


document.querySelector('.again').addEventListener('click', function () {
    sercretNumber  = Math.trunc(Math.random() * 20)+1;
    primaryScore = 20;
    document.querySelector('.result').textContent = '🤔 Start Gusessing...';
    document.querySelector('.qnmark').textContent = '❓ ';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.scoreResult').textContent = 0;
})
document.querySelector('.check').addEventListener('click', function () {
    const num = Number(document.querySelector('.guess').value);

    if(num > sercretNumber){
        document.querySelector('.result').textContent = '⬆ Too High';
        primaryScore--;
        document.querySelector('.scoreResult').textContent = primaryScore;
        if(primaryScore == 0){
            document.querySelector('.result').textContent = '😿 You Loss The Match';
        }

    } else if(num < sercretNumber){
        document.querySelector('.result').textContent = '⬆ Too Low';
        primaryScore--;
        document.querySelector('.scoreResult').textContent = primaryScore;
        if(primaryScore == 0){
            document.querySelector('.result').textContent = '😿 You Loss The Match';
        }
    }else if(num === sercretNumber) {
        document.querySelector('.result').textContent = '😝 You are Winner';
        document.querySelector('.qnmark').textContent = num;
        let highScore =  Number(document.querySelector('.highscoreResult').textContent);
        if(primaryScore > highScore){
            document.querySelector('.highscoreResult').textContent = primaryScore; 
        }
    }
}
)


