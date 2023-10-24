// quiz.js
const questions = [
  {
    type: "written",
    question: "笠井の下の名前は？（ひらがな）",
    answer: "しゅんき"
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
  },

  {
    type: "written",
    question: "1問目の質問：タカン装置が航空機から地上タカン局までの何を受信するか、その要素を3つ挙げてください。（「～,～,～」という形で）",
    answer: "直視距離情報,方位情報,局識別音"
  },
  {
    type: "written",
    question: "2問目の質問：粗方位測定及び精方位測定は、それぞれNRB、ARBに対する可変方位信号の何により行われるか。",
    answer: "位相比較"
  },
  {
    type: "options",
    question: "3問目の質問：F-15のタカン装置について、誤っているものを選べ。",
    options: ["上部タカンアンテナはドア3Rに装着されている。", "ブレードアンテナは、タカン/UHF/VHFアンテナのデュアル素子の一部である。", 
              "ブレードアンテナはタカン信号の送受信とUHF/VHFの送受信に使用される。", "上部タカンアンテナは円盤型アンテナであり、下部タカンアンテナはブレードアンテナとも呼ばれる。"],
    correctOption: 1,
  },
  
{
    type: "options",
    question: "4問目の質問:F-15タカン装置について、誤っているものを選べ",
    options: ["送受信機とアダプタが一緒に組み立てられた状態で、1つのLRUを構成する。", "ILS/TCNコントロールパネルは、座席の右側コンソールにある。", "F-15DJの場合、前席または後席において、制御権の切り替えはテイク・コマンド・コントロール・パネルによって行われる。", "タカン装置は、ドア3Rに搭載されている。"],
    correctOption: 2,
  },

{
    type: "options",
    question: "5問目の質問:F-15の関連装置について、誤っているものを選べ",
    options: ["HSIは、タカンの距離、方位、TO-FROM、コース・ディビエーションを表示する。", "ADIモード選択時HUDは、選択した地上タカン装置までの距離、選択したタカン進入コースに対するバンク・アングル・ステアリング及び選択したタカンモードを表示する。", "STEER MODEスイッチは、ADIの作動モードを選択する。", "テイク・コマンド・コントロール・パネルは、タカン送受信機の制御を前席または後席で実施するかを決定する。"],
    correctOption: 3,
  },

{
    type: "options",
    question: "6問目の質問:ILSについて、誤っているものを選べ。",
    options: ["VHFマーカー・ビーコン、ローカライザVHF送信設備及びグライド・スロープUHF送信設備からなる地上送信局と連携して作動する。", "ローカライザ周波数とグライド・スロープ周波数はペアになっており、ICAOが設定している。", "マーカー・ビーコン・アンテナは機体の上面に面一に取り付けられたVHFアンテナである。", "ビーコン・ライト・アセンブリは計器に取り付けられた表示灯アセンブリである。"],
    correctOption: 3,
  },
  {
    type: "options",
    question: "7問目の質問ILSについて、誤っているものを選べ:",
    options: ["GSUP/GSDN(ウインド6)は、グライド・スロープからの機体侵入角の高低を表示する。", "マーカー・ビーコン情報は、「BEACON」ライト点滅及びHUDディスプレイ・ユニット・コンバイニング・アセンブリに「MKR」として表示される。", "ヘッドセッドに出力するために、受信したオーディオ情報をMCCPに供給する。","グライド・スロープ又はローカライザ・ディビエーション信号が存在しない場合、又は信頼できない場合は、AIグライド・スロープ・ウォーニング・フラグが現れる。"],
    correctOption: 3,
  },
  {
    type: "options",
    question: "8問目の質問:HSIについて誤っているものを選べ",
    options: ["ベアリング・ポインターNo.1はADF相対方位を表示し、TCNを優先する。", "ベアリング・ポインターNo.2はINS用であり、CCからの目的地又はターゲットまでの相対方位を指示する。", "CC、TACAN装置、AHRS、ADFから出力される航法情報はFDAで処理される。", "AHRSは姿勢方位基準装置、ADFは自動方向探知装置である。"],
    correctOption: 1,
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
    options: ["BATHにを調整され、「ALN」ライトが点灯するまでの時間は、IMUよりINUの方が早い", "IMU及びINUの双方において、完全にアライメントされると、ライトが3Hzで点滅する", "NCIのDRDには、現在位置の座標、目標値地の座標、オフセット・ポイントの座標、風力及び風向、磁気偏差及び地上タカン局のデータが表示される", "NCI-CCデータの表示及び入力について、現在地データの入力条件は、航空機が地上にありNCIのモードスイッチがOFF以外にあり、WOWスイッチに荷重がある時に入力可能である"],
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
