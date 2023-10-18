const questions = [
  { question: "質問1: 機上航法について、誤っている選択肢を選べ",
  choices: [
    "針路には真針路と磁針路がある。",
    "偏差とは子午線と磁気子午線との交角である。",
     "相対方位とは、機首を測定の基準として、ある地点を見る方位を水平角度で測った方位をいう。",
      "国際海上マイルの１NMは、約1600ｍである。"],
  correctAnswer: 3 },
  { question: "質問2: VORについて誤っている選択肢を選べ",
  choices: [
    "ＶＯＲとは、超短波全方位レンジビーコンのことである。",
     "ＶＯＲ受信機は、局に対する局方位、設定コースに対するコース偏位及び局識別音をパイロットに供給する。",
      "ＶＯＲ受信機は複合装置であるＶＯＲ／ＩＬＳ受信機としても搭載される。",
       "ＶＯＲ受信機の主要構成品は、（１）送受信機、（２）制御器、（３）ＶＯＲアンテナ　である。"],
   correctAnswer: 3 },
   { question: "質問3: 自立航法装置の構成要素ではないものを選べ",
   choices: [
     "速度検出部",
      "コード検出部",
       "計算機部",
        "表示部"],
    correctAnswer: 1 },
    { question: "質問4: ドプラー航法装置について、誤っている選択肢を選べ",
    choices: [
      "ドプラー航法装置は、地上の援助施設無しで航行できる。",
       "ドプラー周波数偏移は、航空機の大気速度及び偏流角などを求めるのに使う。",
        "ドプラー航法装置のアンテナは、常に地表に対して水平に保持する必要がある。",
         "実用されているドプラー・レーダーは、4本のビームを発射する方式が多い。"],
     correctAnswer: 1 },
     { question: "質問5: AWRについて、誤っている選択肢を選べ",
     choices: [
       "航空気象レーダー装置（AWR）は、危険を事前に回避するための装置である。",
        "気象レーダーは、気象観測用のファンビーム及び地形観測用のペンシルビームを放射する。",
         "カラー表示器の場合は、雲の状態が何種類かの色で区分されて表される。",
          "カラー表示でないレーダースコープには、雨及び雲からのエコー強弱が輝度の強弱として表示される。"],
      correctAnswer: 1 },
      { question: "質問6: 電波高度計（RALT）について、誤っている選択肢を選べ",
      choices: [
        "航空機と大地間の絶対高度を測定する。",
         "低高度用（０～５０００ft）と高高度用（０～７００００ft）があるが、偵察機を除き低高度用が装備されている。",
          "高度計の指示器は、高度指示及び表示機能のみを有する。",
           "パルス方式では、極めて幅の狭いパルス状の電波を作る。"],
       correctAnswer: 2 },
       { question: "質問7: 編隊航法装置（SKE）について、誤っている選択肢を選べ",
       choices: [
         "編隊飛行中の全ての航空機の相対距離、相対方位角は、アジマス・レンジ・インジケータに表示される。",
          "相互干渉が発生しないように時分割によるパルス送受信方式を採用している。",
           "スロット番号は1~39を使用する。",
            "方位測定は、ディレクショナル・アンテナで距離測定用パルスを受診した時のアンテナ回転速度から、編隊内全機の相対方位を測定する。"],
        correctAnswer: 2 },
        { question: "質問8: 対地接近警報装置（GPWS）について、誤っている選択肢を選べ",
        choices: [
          "予期せざる地表への接近及び衝突を防止する。",
           "発達した積乱雲等を事前に回避する。",
            "同時に２つ以上の警報音が出ないように優先順位が決められている。",
             "上昇する際は警報音は鳴らない。"],
         correctAnswer: 1 },
         { question: "質問9: 衛星航法装置（GPS）について、誤っている選択肢を選べ",
         choices: [
           "宇宙部分、地上部分、利用者部分で構成されている。",
            "宇宙部分は、24個の周回衛星で構成されており、6本の軌道に各4個の衛星が配置されている。",
             "GPS衛星からの送信周波数に２つの周波数を用いるのは電離層での電波伝搬遅延を補正するためである。",
              "送信信号は、粗測定信号（C/Aコード）と精密測定信号（Pコード）があり、いずれも暗号化されている。"],
          correctAnswer: 0 },
          { question: "質問10: 笠井の誕生日について、正しいものを選べ",
          choices: [
            "7月16日",
             "12月12日",
              "6月8日",
               "4月21日"],
           correctAnswer: 0 },
];
let currentQuestion = 0; let score = 0; function displayQuestion() { if (currentQuestion < questions.length) { const questionElement = document.getElementById("question"); const choicesElement = document.getElementById("choices"); questionElement.textContent = questions[currentQuestion].question; choicesElement.innerHTML = ""; for (let i = 0; i < questions[currentQuestion].choices.length; i++) { const choiceButton = document.createElement("button"); choiceButton.textContent = questions[currentQuestion].choices[i]; choiceButton.className = "choice"; choiceButton.onclick = () => checkAnswer(i); choicesElement.appendChild(choiceButton); } } else { showResult(); } } function checkAnswer(choice) { const resultElement = document.getElementById("result"); if (choice === questions[currentQuestion].correctAnswer) { score++; resultElement.textContent = "正解"; } else { resultElement.textContent = "不正解"; } currentQuestion++;
// ユーザーが正解か不正解を確認できる時間を設けるため、次の問題を表示する前に一時停止
setTimeout(displayQuestion, 1000); // 2秒後に次の問題を表示
 } function showResult() { const resultElement = document.getElementById("result"); resultElement.textContent = `正解数: ${score} / ${questions.length}`; } displayQuestion();
