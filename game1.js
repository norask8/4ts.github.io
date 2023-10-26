const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');

const clickButton = document.getElementById('clickButton');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('finalScore');
const timeSpan = document.getElementById('time');
const modeSelect = document.getElementById('modeSelect');

let score = 0;
let timeLeft = 30;
let maxClicks = 50;
let clicks = 0;

startButton.addEventListener('click', () => {
    const selectedMode = modeSelect.value;
    switch (selectedMode) {
        case 'easy':
            maxClicks = 30;
            timeLeft = 45;
            break;
        case 'normal':
            maxClicks = 50;
            timeLeft = 30;
            break;
        case 'hard':
            maxClicks = 70;
            timeLeft = 20;
            break;
    }
    clicks = 0;
    score = 0;
    updateUI();
    showGameScreen();
    gameInterval = setInterval(updateGame, 1000);
});

restartButton.addEventListener('click', () => {
    showStartScreen();
});

const showStartScreen = () => {
    startScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    resultScreen.style.display = 'none';
}

const showGameScreen = () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    resultScreen.style.display = 'none';
}

const showResultScreen = () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    finalScoreSpan.textContent = score;
}

const updateUI = () => {
    scoreSpan.textContent = score;
    timeSpan.textContent = timeLeft;
}

const gameOver = () => {
    clickButton.disabled = true;
    clearInterval(gameInterval);
    showResultScreen();
}

const checkGameEnd = () => {
    if (clicks >= maxClicks || timeLeft <= 0) {
        gameOver();
    }
}

clickButton.addEventListener('click', () => {
    if (timeLeft > 0) {
        score++;
        clicks++;
        updateUI();
        checkGameEnd();
    }
});

const updateGame = () => {
    timeLeft--;
    updateUI();
    checkGameEnd();
}

let gameInterval;
showStartScreen();
