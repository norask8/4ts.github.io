const clickButton = document.getElementById('clickButton');
const scoreSpan = document.getElementById('score');
const timeSpan = document.getElementById('time');
const modeSelect = document.getElementById('modeSelect');

let score = 0;
let timeLeft = 30; // 制限時間（秒）
let maxClicks = 50; // 目標のクリック回数
let clicks = 0;

modeSelect.addEventListener('change', () => {
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
    clearInterval(gameInterval);
    gameInterval = setInterval(updateGame, 1000);
});

const updateUI = () => {
    scoreSpan.textContent = score;
    timeSpan.textContent = timeLeft;
}

const gameOver = () => {
    clickButton.disabled = true;
    clickButton.textContent = "ゲームオーバー";
    clickButton.style.backgroundColor = "#e74c3c";
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

let gameInterval = setInterval(updateGame, 1000);
