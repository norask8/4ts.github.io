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
    question: "4問目の質問:IFFについて誤っているものを選べ",
    options: ["IFFとは、あらゆる状況下で、敵か味方かの区別を確実に行うためにある。", "モード５は、2段階の機能を持ち、それぞれをモード5レベル1、モード5レベル2と呼ぶ。レベル1及びレベル
            2は、それぞれ８通りの送信フォーマットを持つ。", "インタロゲータは、1026MHz及び1034MHzの2周波を使用した最小周波数偏移変調（MSK）方式である。", "トランスポンダは、1086MHz及び1094MHzの2周波を使用したMSK方式によって応答信号を符号化する。"],
    correctOption: 2,
  },

{
    type: "options",
    question: "5問目の質問:GTCについて、誤っているものを選べ",
    options: ["GTCは、自局の質問信号に対する応答信号であるかどうかを判定する機能である。", "GTCカーブに達した応答信号は、自局に対する応答信号として判定する。", "GTCは、最大探知距離以遠からの応答信号及びフルーツ信号を除去する。", "フルーツ処理は、RSLS及びGTCでは取り除けなかったフルーツ信号を処理する機能である。"],
    correctOption: 3,
  },

{
    type: "options",
    question: "6問目の質問:測角処理について、誤っているものを選べ。",
    options: ["スライディング・ウィンドウ方式は、目標からの応答信号が得られた場合をヒット、得られなかった場合をミスヒットとし、これらの2つの状態から目標の方位方向の幅を検出し、目標中心方位を測角する方式である。", "モノパルス測角方式は、∑パターン。Δパターンの２つの受信パターンで得られる応答信号を振幅比較することで、現時点での空中線中心方位からの偏移角を算出し、真の航空機目標を測角する。", "モード5（レベル2）を使用した場合は、応答信号が同期されるため、応答信号から取得される緯度及び経度の情報を使用し、角度情報を算出する。", "FPS-2及びFPS-3SのSIF空中線はNAT-79、FPS-3L及びFPS-5のSIF空中線はNAT-114である。"],
    correctOption: 3,
  },
  {
    type: "options",
    question: "7問目の質問：SIF空中線及びUPX-111について、誤っているものを選べ:",
    options: ["和差空中線とは、１つの空中戦で2つのビームパターンを形成できる空中線である。アンテナ素子の給電系を二重にし、各素子に対する給電位相を変えることで和パターンと差パターンを形成する。", "UPX-111は、連接するレーダーによって型式が異なり、固定式用と移動式用に大別される。", "モード５制御について、設定可能な質問制御は2種類あり、設定によって送信範囲及び送信可能なフォーマットが異なる。","NAT-114は和差空中線方式のSIF空中線であり、ファン・ビームを包囲方向に電子操作する機能を有する。"],
    correctOption: 3,
  },
  {
    type: "options",
    question: "8問目の質問:UPX-111の受信機能について誤っているものを選べ",
    options: ["信号方向切替は、送受信部内のデュープレクサによって、応答信号（∑）及びSLS信号（Δ）をSIF空中線または受信系統に伝送する。", "飽和/破壊保護は、送受信部内のリミッタにより、後段の構成品を飽和及び過電力による破壊から保護する。", "GTCは、SIFのみで使用する。これは、モード５の応答信号に与えられた遅延時間によっては、次のPRTで応答信号を受信するためである。", "RSLSに使用するSLSビームは、和差空中線とSLS空中線を用いる連接レーダーにおいては、∑パターンとΔパターンの両方を使用する。"],
    correctOption: 4,
  },

  {
    type: "options",
    question: "9問目の質問:UPX-111のその他の機能について、誤っているものを選べ",
    options: ["系切替機能は、送受信部及び制御部それぞれに対し、運用系と待機系の切り替えを行う機能であり、外部方式と内部方式がある。", "I/F選択機能は、連接レーダーに合わせてデータ内容及びIFFメンテナンス・パネル上の各画面を変更する機能である。", "標準時刻生成機能は、GPS信号から標準時刻を生成し、構成品の時刻同期を行う。"],
    correctOption: 4,
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
