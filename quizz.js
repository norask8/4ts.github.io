// quiz.js
const questions = [
  {
    type: "written",
    question: "日本の首都は？",
    answer: "東京"
  },
  {
    type: "options",
    question: "次のうち、最も大きな惑星は？",
    options: ["地球", "火星", "木星", "金星"],
    correctOption: 3
  },
  {
    type: "options",
    question: "次の内、哺乳動物はどれ？",
    options: ["カメ", "カモメ", "カブト虫", "カンガルー"],
    correctOption: 4
  },
  {
    type: "options",
    question: "最初のプログラミング言語は？",
    options: ["Python", "Java", "FORTRAN", "C"],
    correctOption: 3
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
