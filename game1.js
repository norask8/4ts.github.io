const runner = document.querySelector('.runner');
const startButton = document.getElementById('start');
const resultDiv = document.getElementById('result');
const scoreSpan = document.getElementById('score');

let isRunning = false;
let score = 0;
let timeLeft = 30; // 制限時間（秒）

startButton.addEventListener('click', () => {
    if (!isRunning) {
        startGame();
    }
});

function startGame() {
    isRunning = true;
    startButton.disabled = true;
    resultDiv.classList.add('hidden');

    // プレイヤーの初期位置
    let playerPosition = 0;
    runner.style.left = playerPosition + 'px';

    // タイマーを開始
    const timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            endGame(timer);
        }
    }, 1000);

    // ゲームループ
    const gameLoop = setInterval(() => {
        playerPosition += 5; // プレイヤーの移動速度
        runner.style.left = playerPosition + 'px';

        // ゴールに到達したら得点を加算
        if (playerPosition >= 300) {
            score += 10;
            scoreSpan.textContent = score;
            playerPosition = 0;
            runner.style.left = playerPosition + 'px';
        }
    }, 20);
}

function endGame(timer) {
    isRunning = false;
    startButton.disabled = false;
    clearInterval(timer);
    clearInterval(gameLoop);
    resultDiv.classList.remove('hidden');
}
