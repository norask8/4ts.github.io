const player = document.getElementById('player');
const enemy = document.getElementById('enemy');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const restartButton = document.getElementById('restart');
const result = document.getElementById('result');
const finalScore = document.getElementById('final-score');

let score = 0;
let time = 30; // 初期制限時間

player.addEventListener('click', () => {
    movePlayer();
});

enemyMove();

function movePlayer() {
    player.style.bottom = '150px';
    player.style.width = '30px';
    player.style.height = '30px';

    setTimeout(() => {
        player.style.bottom = '20px';
        player.style.width = '50px';
        player.style.height = '50px';
        score++;
        scoreDisplay.textContent = score;
    }, 500);
}

function enemyMove() {
    const maxX = document.getElementById('game-container').clientWidth - enemy.clientWidth;

    let enemyX = maxX * Math.random();
    enemy.style.left = enemyX + 'px';

    setInterval(() => {
        enemyX = maxX * Math.random();
        enemy.style.left = enemyX + 'px';
    }, 2000);
}

function updateTimeDisplay() {
    timeDisplay.textContent = time;
}

function countdown() {
    if (time > 0) {
        time--;
        updateTimeDisplay();
    } else {
        endGame();
    }
}

setInterval(countdown, 1000);

function endGame() {
    showResult();
    clearInterval(countdown);
}

restartButton.addEventListener('click', () => {
    result.style.display = 'none';
    restartButton.style.display = 'none';
    resetGame();
});

function resetGame() {
    score = 0;
    time = 30;
    scoreDisplay.textContent = score;
    updateTimeDisplay();
    enemyMove();
}

function showResult() {
    result.style.display = 'block';
    finalScore.textContent = score;
    restartButton.style.display = 'block';
}
