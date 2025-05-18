// Definir os elementos do HTML
const startButton = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next-btn');
const feedbackText = document.getElementById('feedback');
const finalScoreText = document.getElementById('final-score');
const restartButton = document.getElementById('restart-btn');

// Perguntas e respostas sobre segurança no trânsito e no trabalho
const questions = [
    {
        question: "O que significa o Maio Amarelo?",
        answers: [
            "Campanha de conscientização sobre segurança no trânsito",
            "Campanha de prevenção contra incêndios",
            "Campanha de reciclagem",
            "Campanha de vacinação"
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é a principal causa de acidentes de trabalho?",
        answers: [
            "Falta de equipamentos de segurança",
            "Falta de motivação",
            "Falta de treinamentos",
            "Desatenção e pressa"
        ],
        correctAnswer: 3
    },
    {
        question: "Qual é a cor do sinal de trânsito que indica 'atenção'?",
        answers: [
            "Vermelho",
            "Amarelo",
            "Verde",
            "Azul"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual a medida de segurança importante no trânsito?",
        answers: [
            "Usar cinto de segurança",
            "Conversar ao celular enquanto dirige",
            "Dirigir sem faróis à noite",
            "Ultrapassar em faixas contínuas"
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é a principal causa de acidentes de trânsito?",
        answers: [
            "Excesso de velocidade",
            "Defeito nos veículos",
            "Maus motoristas",
            "Falta de sinalização"
        ],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Eventos de clique nos botões
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartGame);

// Função que começa o jogo
function startGame() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    loadQuestion();
}

// Função para carregar a pergunta e as respostas
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    answersContainer.innerHTML = ''; // Limpar respostas anteriores

    // Criar botões para cada resposta
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(index));
        answersContainer.appendChild(button);
    });

    feedbackText.textContent = '';
    nextButton.classList.add('hidden');
}

// Função que verifica a resposta
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswer) {
        feedbackText.textContent = 'Resposta correta!';
        score++;
    } else {
        feedbackText.textContent = 'Resposta errada!';
    }

    nextButton.classList.remove('hidden');
}

// Função para ir para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

// Função que exibe a pontuação final
function endGame() {
    quizScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    finalScoreText.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

// Função para reiniciar o jogo
function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    startScreen.classList.remove('hidden');
    endScreen.classList.add('hidden');
}
