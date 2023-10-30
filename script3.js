// quiz.js
const questions = [
  {
    type: "written",
    question: "笠井の下の名前は？（ひらがな）",
    answer: "しゅんき"
  },
  {
    type: "written",
    question: "1問目の質問：地上局の質問装置と機上局の応答装置で構成される2次レーダーである味方識別装置は、機上局側にも質問装置を搭載することで空対空間でも何を取得できるようになるか",
    answer: "識別情報"
  },
  {
    type: "written",
    question: "2問目の質問：インタロゲータ、トランスポンダの周波数（MHz）（数字のみで「～,～」という形で答えよ）",
    answer: "1030,1090"
  },
  {
    type: "options",
    question: "3問目の質問：SIFについて誤っているものを選べ。",
    options: ["インタロゲータは、1030MHzの搬送波をパルス変調し、各モードに応じた送信信号を作成する。", "送信信号は3本のパルスからなり、送信信号を構成する制御信号は単一パルスで構成される。", 
              "応答信号を構成するコードパルスは13本のパルスからなる。", "応答信号を構成する応答コードは、２または４桁の数値で表され、パイロット、整備員等によって設定される。また、設定できる数値は、全てのモードで設定範囲が一緒である。"],
    correctOption: 4,
  },

  {
    type: "options",
    question: "9問目の質問:UPX-111のその他の機能について、誤っているものを選べ",
    options: ["系切替機能は、送受信部及び制御部それぞれに対し、運用系と待機系の切り替えを行う機能であり、外部方式と内部方式がある。", "I/F選択機能は、連接レーダーに合わせてデータ内容及びIFFメンテナンス・パネル上の各画面を変更する機能である。", "標準時刻生成機能は、GPS信号から標準時刻を生成し、構成品の時刻同期を行う。"],
    correctOption: 3,
  }
];

let currentQuestionIndex = 0;
let correctCount = 0;
let continuousCorrectCount = 0;
const wrongQuestions = [];

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const correctCountText = document.getElementById("correct-count");
const continuousCorrectCountText = document.getElementById("continuous-correct-count");
const wrongQuestionsText = document.getElementById("wrong-questions");
const wrongQuestionsList = document.createElement("ul");
wrongQuestionsText.appendChild(wrongQuestionsList);

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.textContent = question.question;

  optionsContainer.innerHTML = "";

  if (question.type === "written") {
    const input = document.createElement("input");
    input.type = "text";
    optionsContainer.appendChild(input);

    const submitButton = document.createElement("button");
    submitButton.textContent = "回答する";
    submitButton.addEventListener("click", () => checkWrittenAnswer(input.value, question.answer));
    optionsContainer.appendChild(submitButton);
  } else if (question.type === "options") {
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkOptionAnswer(index + 1, question.correctOption));
      button.classList.add("choice");
      optionsContainer.appendChild(button);
    });
  }
}

function checkWrittenAnswer(answer, correctAnswer) {
  if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    correctCount++;
    continuousCorrectCount++;
  } else {
    continuousCorrectCount = 0;
    const question = questions[currentQuestionIndex];
    wrongQuestions.push({ questionIndex: currentQuestionIndex, questionText: question.question, correctOption: question.answer });
  }

  displayNextQuestion();
}

function checkOptionAnswer(selectedOption, correctOption) {
  if (selectedOption === correctOption) {
    correctCount++;
    continuousCorrectCount++;
  } else {
    continuousCorrectCount = 0;
    const question = questions[currentQuestionIndex];
    wrongQuestions.push({ questionIndex: currentQuestionIndex, questionText: question.question, correctOption: question.options[question.correctOption - 1] });
  }

  displayNextQuestion();
}

function displayNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionText.textContent = "クイズ終了";
  optionsContainer.innerHTML = "";
  correctCountText.textContent = "正解数: " + correctCount;

  if (continuousCorrectCount > 1) {
    continuousCorrectCountText.textContent = continuousCorrectCount + "問連続正解";
  }

  if (wrongQuestions.length > 0) {
    wrongQuestionsText.style.display = "block";
    wrongQuestionsList.innerHTML = "";
    wrongQuestions.forEach((wrongQuestion) => {
      const listItem = document.createElement("li");
      listItem.textContent = "問題 " + wrongQuestion.questionIndex + ": " + wrongQuestion.questionText + " (正解: " + wrongQuestion.correctOption + ")";
      wrongQuestionsList.appendChild(listItem);
    });
  }
}

displayQuestion();
