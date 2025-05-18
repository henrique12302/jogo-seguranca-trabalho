// Array de perguntas do quiz
const questions = [
    {
        question: "O Maio Amarelo é uma campanha de conscientização sobre:",
        options: ["Trânsito", "Acidentes de trabalho", "Poluição", "Saúde mental"],
        answer: 0
    },
    {
        question: "Quantas pessoas morrem por acidentes de trânsito por ano no Brasil?",
        options: ["50.000", "40.000", "30.000", "20.000"],
        answer: 0
    },
    {
        question: "O que o uso do cinto de segurança pode evitar?",
        options: ["Lesões graves e morte", "Amputações", "Queimaduras", "Nenhuma das opções"],
        answer: 0
    },
    {
        question: "Qual é o objetivo principal do Maio Amarelo?",
        options: ["Prevenir acidentes de trânsito", "Promover eventos esportivos", "Apoiar campanhas de saúde", "Aumentar a arrecadação de multas"],
        answer: 0
    },
    // Mais perguntas podem ser adicionadas aqui
];

// Variáveis de controle do quiz
let currentQuestionIndex = 0;
let incorrectAnswers = 0;

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question');
const answersDiv = document.getElementById('answers');
const resultText = document.getElementById('result-text');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

// Iniciar quiz
startBtn.addEventListener('click', startQuiz);
// Próxima pergunta
nextBtn.addEventListener('click', nextQuestion);
// Reiniciar quiz
restartBtn.addEventListener('click', restartQuiz);

// Função para iniciar o quiz
function startQuiz() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadQuestion();
}

// Função para carregar a pergunta e suas opções
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    answersDiv.innerHTML = '';

    // Cria as opções de resposta
    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="answer-${index}">
            <label for="answer-${index}">${option}</label>
        `;
        answersDiv.appendChild(answerDiv);
    });

    // Esconde o botão "Próxima Pergunta" inicialmente
    nextBtn.style.display = 'none';
}

// Função para mostrar o botão "Próxima Pergunta"
function showNextButton() {
    nextBtn.style.display = 'block';
}

// Função para verificar a resposta selecionada e avançar para a próxima pergunta
function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // Verifica se a resposta está correta
        const answerIndex = parseInt(selectedAnswer.value);
        if (answerIndex !== questions[currentQuestionIndex].answer) {
            incorrectAnswers++;
        }

        // Avança para a próxima pergunta
        currentQuestionIndex++;

        // Se houver mais perguntas, carrega a próxima. Caso contrário, mostra o resultado
        if (currentQuestionIndex < questions.length) {
            loadQuestion(); // Carrega a próxima pergunta
        } else {
            showResult(); // Mostra o resultado
        }

        // Esconde o botão "Próxima Pergunta" até a próxima pergunta ser carregada
        nextBtn.style.display = 'none';

    } else {
        alert('Escolha uma resposta!');
    }
}

// Função para mostrar o resultado do quiz
function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    // Exibe o texto do resultado baseado na quantidade de respostas incorretas
    if (incorrectAnswers >= 12) {
        resultText.textContent = `Você perdeu! Acertou ${questions.length - incorrectAnswers} perguntas.`;
    } else {
        resultText.textContent = `Parabéns! Você acertou ${questions.length - incorrectAnswers} perguntas.`;
    }
}

// Função para reiniciar o quiz
function restartQuiz() {
    incorrectAnswers = 0;
    currentQuestionIndex = 0;
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
}
