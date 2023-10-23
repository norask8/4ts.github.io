const questions = [
  {
    question: "1問目の質問：以下の要素を3つ挙げてください。",
    answer: ["正しい要素1", "正しい要素2", "正しい要素3"],
    type: "written",
  },
  {
    question: "2問目の質問",
    options: ["選択肢1", "選択肢2", "選択肢3", "正しい答え"],
  },
  // 他のクイズの質問を追加
];

let currentQuestionIndex = 0;
let correctCount = 0;
let wrongQuestions = [];

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const correctCountText = document.getElementById("correct-count");
const wrongQuestionsText = document.getElementById("wrong-questions");

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
  } else if (question.options) {
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option, question.answer));
      optionsContainer.appendChild(button);
    });
  }
}

function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    correctCount++;
  } else {
    wrongQuestions.push(currentQuestionIndex + 1);
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function checkWrittenAnswer(submittedAnswer, correctAnswers) {
  const submittedAnswers = submittedAnswer.split(', ').map(answer => answer.trim());

  const correct = correctAnswers.every(correctAnswer => submittedAnswers.includes(correctAnswer));

  if (correct) {
    correctCount++;
  } else {
    wrongQuestions.push(currentQuestionIndex + 1);
  }

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
  correctCountText.textContent = correctCount;
  wrongQuestionsText.textContent = wrongQuestions.join(", ");
}

displayQuestion();