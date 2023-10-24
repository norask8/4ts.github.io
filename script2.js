const questions = [
  {
    question: "1問目の質問：タカン装置が航空機から地上タカン局までの何を受信するか、その要素を3つ挙げてください。（「～, ～, ～」という形で）※「～,」のあとに半角のスペース入れないと正解判定でないですごめんなさい。",
    answer: ["直視距離情報","方位情報","局識別音"],
    type: "written",
  },
  {
    question: "2問目の質問：粗方位測定及び精方位測定は、それぞれNRB、ARBに対する可変方位信号の何により行われるか。",
    answer: ["位相比較"],
    type: "written",
  },
  {
    question: "3問目の質問：F-15のタカン航空機について、誤っているものを選べ。",
    options: ["上部タカンアンテナはドア3Rに装着されている。", "ブレードアンテナは、タカン/UHF/VHFアンテナのデュアル素子の一部である。", 
              "タカン信号の送受信とUHF/VHFの送受信に使用される。", "上部タカンアンテナは円盤型アンテナであり、下部タカンアンテナはブレードアンテナとも呼ばれる。"],
    correctOption: 1,
  },
  
{
    question: "4問目の質問:F-15タカン装置について、誤っているものを選べ",
    options: ["送受信機とアダプタが一緒に組み立てられた状態で、1つのLRUを構成する。", "ILS/TCNコントロールパネルは、座席の右側コンソールにある。", "F-15DJの場合、前席または後席において、制御権の切り替えはテイク・コマンド・コントロール・パネルによって行われる。", "タカン装置は、ドア3Rに搭載されている。"],
    correctOption: 2,
  },

{
    question: "5問目の質問:F-15の関連装置について、誤っているものを選べ",
    options: ["HSIは、タカンの距離、方位、TO-FROM、コース・ディビエーションを表示する。", "ADIモード選択時HUDは、選択した地上タカン装置までの距離、選択したタカン進入コースに対するバンク・アングル・ステアリング及び選択したタカンモードを表示する。", "STEER MODEスイッチは、ADIの作動モードを選択する。", "テイク・コマンド・コントロール・パネルは、タカン送受信機の制御を前席または後席で実施するかを決定する。"],
    correctOption: 3,
  },

{
    question: "6問目の質問:ILSについて、誤っているものを選べ。",
    options: ["VHFマーカー・ビーコン、ローカライザVHF送信設備及びグライド・スロープUHF送信設備からなる地上送信局と連携して作動する。", "ローカライザ周波数とグライド・スロープ周波数はペアになっており、ICAOが設定している。", "マーカー・ビーコン・アンテナは機体の上面に面一に取り付けられたVHFアンテナである。", "ビーコン・ライト・アセンブリは計器に取り付けられた表示灯アセンブリである。"],
    correctOption: 3,
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

/* quiz.js */
// ... 既存のコード ...

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
      button.addEventListener("click", () => checkOptionAnswer(index + 1, question.correctOption));
      button.classList.add("choice"); // .choice クラスを追加
      optionsContainer.appendChild(button);
    });
  }
}

// ... 既存のコード ...

function checkOptionAnswer(selectedOption, correctOption) {
  if (selectedOption === correctOption) {
    correctCount++;
  } else {
    wrongQuestions.push({ questionIndex: currentQuestionIndex + 1, correctOption });
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
    wrongQuestions.push({ questionIndex: currentQuestionIndex + 1, correctAnswer: correctAnswers.join(', ') });
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
  
  if (wrongQuestions.length > 0) {
    const wrongQuestionsList = document.createElement("ul");
    wrongQuestions.forEach(wrongQuestion => {
      const listItem = document.createElement("li");
      listItem.textContent = `問題 ${wrongQuestion.questionIndex}: 正解 - ${wrongQuestion.correctOption || wrongQuestion.correctAnswer}`;
      wrongQuestionsList.appendChild(listItem);
    });
    wrongQuestionsText.textContent = "間違えた問題:";
    wrongQuestionsText.appendChild(wrongQuestionsList);
  } else {
    wrongQuestionsText.textContent = "間違えた問題はありません。";
  }
}

displayQuestion();
