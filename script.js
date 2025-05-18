const questions = [
  {
    question: "Você vai dirigir no pátio da empresa. O que deve fazer primeiro?",
    options: [
      { text: "Colocar o cinto de segurança e verificar os espelhos", correct: true },
      { text: "Ligar o som do carro bem alto", correct: false },
    ]
  },
  {
    question: "Ao ver um pedestre próximo à faixa, você deve:",
    options: [
      { text: "Parar o veículo e dar a preferência", correct: true },
      { text: "Aumentar a velocidade e buzinar", correct: false },
    ]
  },
  {
    question: "Você notou que os freios estão com problema. O que fazer?",
    options: [
      { text: "Reportar imediatamente e não usar o carro", correct: true },
      { text: "Usar mesmo assim, mas com cuidado", correct: false },
    ]
  },
  {
    question: "É obrigatório o uso de EPI ao sair do veículo em área industrial?",
    options: [
      { text: "Sim, principalmente colete refletivo e capacete", correct: true },
      { text: "Não, só se alguém estiver olhando", correct: false },
    ]
  }
];

let currentQuestion = 0;
let score = 0;

function startGame() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("score").textContent = "Pontuação: 0";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.onclick = () => handleAnswer(option.correct);
    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(isCorrect) {
  if (isCorrect) {
    alert("✅ Correto! Segurança em primeiro lugar!");
    score += 10;
  } else {
    alert("❌ Incorreto! Isso pode causar acidentes.");
  }

  document.getElementById("score").textContent = "Pontuação: " + score;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("question").textContent = "🎉 Fim de jogo! Sua pontuação: " + score;
  document.getElementById("options").innerHTML = "";
}
