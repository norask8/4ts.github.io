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
              "応答信号を構成するコードパルスは13本のパルスからなる。", "応答信号を構成する応答コードは、２または４桁の数値で表され、パイロット、整備員等によって設定される。また、設定できる数値は、全手のモードで設定範囲が一緒である。"],
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
    question: "9問目の質問:HSIの指示と警報について、誤っているものを選べ",
    options: ["故障指示器は通常黒色であり、BIT故障があるときは白色になる。", "「OFF」フラグは電源を切ると現れる。", "コンティニュアスBITは、HSI監視パラメータが故障を検知すると、HSIの故障指示器を白色に指示させ、ASPの故障指示器「61」は、HISINO-GO信号によってオレンジ色にラッチする。", "アビオニクス・ステータス・パネルはドア30に装着されている。"],
    correctOption: 4,
  },
  {
    type: "options",
    question: "10問目の質問:慣性航法装置の特徴について誤っているものを選べ",
    options: ["地球上のいかなる場所でも使用可能", "高度の制限がない", "天候等の制限がない", "慣性空間でなければ使用できない","電波を放射しないため、敵側から探知される危険性が少ない","装置が複雑かつ高価である","装置の起動等に時間を要する"],
    correctOption: 4,
  },

  {
    type: "options",
    question: "11問目の質問:プラットフォーム方式の慣性航法装置の特徴について、誤っているものを選べ",
    options: ["精度向上が容易", "必要な計算が少ないため、コンピュータの処理能力が小さくて済む", "ジンバル機構が必要なため、整備性が悪い", "座標変換等を行うので、試算による誤差要素が付加される"],
    correctOption: 4,
  },

  {
    type: "options",
    question: "12問目の質問:アライメントについて、誤っているものを選べ",
    options: ["ノーマルアライメントは、基準方位にBATHを用いたアライメントである", "急速アライメントは、時間短縮を図ったもので、高い精度は期待できない", "メモライズ・アライメントは、機首方位がメモリされた後は、機体を移動させてはならない", "インフライト・アライメントには、約30分間の時間を要し、水平で直線飛行を継続させなければならない"],
    correctOption: 1,
  },

  {
    type: "written",
    question: "13問目の質問：慣性航法装置を用いて地理座標をプロットするのに必要な要素を3つ挙げよ。(〜, 〜, 〜という形で) ",
    answer: "加速度,速度,距離"
  },

  {
    type: "options",
    question: "14問目の質問:慣性航法装置の主要構成品について、誤っているものを選べ",
    options: ["NCIは、座席の左側コンソールにある", "IMU及びINUの双方において、バッテリの電源をOFFにするときにBIT点検を実施する", "INUは、センサー・アセンブリ、デジタルコンピュータ、電源、バッテリから構成される", "センサー・アセンブリは、機体軸に固定されている"],
    correctOption: 1,
  },
    {
    type: "options",
    question: "15問目の質問:慣性航法装置と信号のやりとりを行っている装置について、正しいものを選べ",
    options: ["RADERは、IMUからの姿勢情報と速度情報をアンテナの安定とレーダー・クラッタ追尾を行うためにそれぞれ使用する", "AHRSは、IMUからのピッチ、ロール及び垂直速度を受け、姿勢保持モードで使用する", "AFCSは、コンパス・モードになると、マグネティック・ヘディングは、IMUに送られる"],
    correctOption: 1,
  },

  {
    type: "options",
    question: "16問目の質問:慣性航法装置のスイッチの機能について、誤っているものを選べ",
    options: ["CCCにセットすると、CCデータの書き込み又は読み出しのために、NCIに電源を供給する", "OFFにセットし、電源を切った後、IMUなら最低10秒、INUなら最低15秒は内部データ処理のため機体電源の停止及び電源の再投入を行ってはならない", "NAV INSにセットすると、プライマリ航法モードになり、航空機の加速度を感知し適正な補正をし、航空機の速度及び位置を計算する", "ALIGN STORによるGCアライメントは、GCアライメント後に航空機が動いていない場合にのみ有効であり、アライメント時間はIMUで3分以内、INUで30秒±10秒である"],
    correctOption: 2,
  },

  {
    type: "options",
    question: "17問目の質問:ALIGN GCによるGCアライメント及びNCIについて、誤っているものを選べ",
    options: ["BATHにを調整され、「ALN」ライトが点灯するまでの時間は、IMUよりINUの方が遅い", "IMU及びINUの双方において、完全にアライメントされると、ライトが3Hzで点滅する", "NCIのDRDには、現在位置の座標、目標値地の座標、オフセット・ポイントの座標、風力及び風向、磁気偏差及び地上タカン局のデータが表示される", "NCI-CCデータの表示及び入力について、現在地データの入力条件は、航空機が地上にありNCIのモードスイッチがOFF以外にあり、WOWスイッチに荷重がある時に入力可能である"],
    correctOption: 1,
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
