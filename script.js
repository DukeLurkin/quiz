
var currentQuestion = 0;
var questions = [
    "Why are Final Fantasy 7 & Bloodborne the best games ever made?",
    "What is the name of Clouds OG motorcycle?",
    "Why are the Moon Light Holy Sword and the Chikage the best weapons?",
    "Why is bitcoin the best money ever created?",
    "Why will Chainlink flip BTC and ETH?",
    "Please enter your name"
]

var choices = [['What?', 'Huh?', 'YES!!!', 'Donkey Kong sucks'],
['Hardy Daytona', 'Aerith', 'RedXIII', 'Barret'],
['IDK', 'Im lost', 'Who?', 'BECAUSE AWESOME!'],
['Its not', 'I love fiat!', ' Durability, Portability, Divisibility, Fungibility, Scarcity, and Acceptability', 'The FED rules!'],
['It wont', 'Because its the pipes supplying & communicating with everything', 'It cant', 'I dont believe it']];

var answers = ['YES!!!', 'Hardy Daytona', 'BECAUSE AWESOME!',
' Durability, Portability, Divisibility, Fungibility, Scarcity, and Acceptability', 
'Because its the pipes supplying & communicating with everything'];

var highScores = JSON.parse(localStorage.getItem("highScoresData")) || [];
var timeEL = document.querySelector(".timer")
var secondsLeft = 60;
var userAnswer = 0;
var score = 0;

let initialInput = document.createElement('input');


let startQuizButton = document.getElementById('quiz-start-button');
startQuizButton.addEventListener('click', function (event) {
    questionTitle.textContent = questions[currentQuestion];
    startQuizButton.remove();
    createAndReplaceButtons(currentQuestion);

})

startQuizButton.addEventListener('click', function (event) {
    function setTime() {

        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEL.textContent = "Quiz ends in: " + secondsLeft;

            if (secondsLeft <= 0 || currentQuestion === 5) {

                if (currentQuestion !== 5) {
                    currentQuestion = 5;
                    nextQuestion(5);
                }

                let inputBox = document.querySelector('#questionArea');
                inputBox.append(initialInput);
                let submitButton = document.createElement('button');
                submitButton.innerHTML = "submit";
                let submitScore = document.getElementById('submitScore');
                submitScore.append(submitButton);
                submitButton.addEventListener('click', function () {
                    submitHighScore();
                    showHighScores();

                })

                buttonA.remove();
                buttonB.remove();
                buttonC.remove();
                buttonD.remove();
                clearInterval(timerInterval);
            }

        }, 1000);
    } setTime();
});

function submitHighScore() {
    console.log(initialInput.value);
    console.log(secondsLeft);
    highScores.push({
        "initial": initialInput.value,
        "score": secondsLeft
    });
    localStorage.setItem("highScoresData", JSON.stringify(highScores));
}


function showHighScores() {
    let highScoreArea = document.getElementById('high-score-area');
    highScoreArea.classList.remove('high-scores');

    let titleArea = document.getElementById("questionTitle");
    titleArea.textContent = "High Scores";

    let submitArea = document.getElementById("submitScore");
    submitArea.remove();

    let listOfScoresSection = document.getElementById("listOfScores");
    let listOfScores = document.createElement("ul")
    listOfScores.id = "scoreList"
    listOfScoresSection.append(listOfScores)

    initialInput.style.display = "none";

    for (let index = 0; index < highScores.length; index++) {
        const userData = highScores[index];
        const userInitials = userData.initial;
        const userScore = userData.score;
        console.log(userInitials);
        console.log(userScore);
        // let initialDiv = document.createElement("div");
        // let scoreDiv = document.createElement("div");
        // initialDiv.append(userInitials);
        // scoreDiv.append(userScore);
        let scoreList = document.querySelector("#scoreList")
        let userScoreDisplay = document.createElement("li")
        userScoreDisplay.textContent = `${userInitials}: ${userScore}`;
        scoreList.appendChild(userScoreDisplay);

        // listOfScores.append(userInitials, userScore);
    }
}




let questionTitle = document.getElementById('questionTitle');


// create start button event listener takes us to the quiz
let buttonA = document.createElement('button');
let buttonB = document.createElement('button');
let buttonC = document.createElement('button');
let buttonD = document.createElement('button');

buttonA.classList.add('quiz-buttons');
buttonB.classList.add('quiz-buttons');
buttonC.classList.add('quiz-buttons');
buttonD.classList.add('quiz-buttons');



buttonA.addEventListener('click', function (event) {

    if (buttonA.textContent === answers[currentQuestion]) {
        console.log("correct");

    }
    else {
        secondsLeft -= 10;
        // wrong
        console.log('wrong');
    }
    currentQuestion++;
    nextQuestion(currentQuestion);
})



buttonB.addEventListener('click', function (event) {

    if (buttonB.textContent === answers[currentQuestion]) {
        // then correct answer
        console.log("correct");

    }
    else {
        secondsLeft -= 10;
        // wrong
        console.log('wrong');
    }
    currentQuestion++;
    nextQuestion(currentQuestion);
})



buttonC.addEventListener('click', function (event) {
    if (buttonC.textContent === answers[currentQuestion]) {
        // then correct answer
        console.log("correct");

    }
    else {
        secondsLeft -= 10;
        // wrong
        console.log('wrong');
    }
    currentQuestion++;
    nextQuestion(currentQuestion);
})


buttonD.addEventListener('click', function (event) {
    if (buttonD.textContent === answers[currentQuestion]) {
        // then correct answer
        console.log("correct");


    }
    else {
        secondsLeft -= 10;
        // wrong
        console.log('wrong');
    }
    currentQuestion++;
    nextQuestion(currentQuestion);
})


function nextQuestion(questionNumber) {
    questionTitle.textContent = questions[questionNumber];
    if (questionNumber > 4) {

        return;
    }
    buttonA.textContent = choices[questionNumber][0];
    buttonB.textContent = choices[questionNumber][1];
    buttonC.textContent = choices[questionNumber][2];
    buttonD.textContent = choices[questionNumber][3];
    console.log(questionNumber);
}



function createAndReplaceButtons(questionNumber) {

    buttonA.textContent = choices[questionNumber][0];
    buttonB.textContent = choices[questionNumber][1];
    buttonC.textContent = choices[questionNumber][2];
    buttonD.textContent = choices[questionNumber][3];

    questionArea.appendChild(buttonA);
    questionArea.appendChild(buttonB);
    questionArea.appendChild(buttonC);
    questionArea.appendChild(buttonD);

    questionArea.style.display = 'flex';
    questionArea.style.maxWidth = '25%';
    questionArea.style.flexDirection = 'column';
    questionArea.style.margin = 'auto';
    questionArea.style.border = 'none';
}








