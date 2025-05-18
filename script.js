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
    // Adicione mais perguntas aqui...
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

function startQuiz() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    answersDiv.innerHTML = '';

    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.innerHTML = `<input type="radio" name="answer" value="${index}" id="answer-${index}">
                               <label for="answer-${index}">${option}</label>`;
        answersDiv.appendChild(answerDiv);
    });

    // Exibe o botão "Próxima Pergunta"
    nextBtn.style.display = 'block'; 
}

// Função para continuar para a próxima pergunta
function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);
        if (answerIndex !== questions[currentQuestionIndex].answer) {
            incorrectAnswers++;
        }

        currentQuestionIndex++;

        // Se houver mais perguntas, carrega a próxima. Caso contrário, mostra o resultado
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
        
        // Esconde o botão "Próxima Pergunta" até a próxima pergunta ser carregada
        nextBtn.style.display = 'none';
    } else {
        alert('Escolha uma resposta!');
    }
}

function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    if (incorrectAnswers >= 12) {
        resultText.textContent = `Você perdeu! Acertou ${questions.length - incorrectAnswers} perguntas.`;
    } else {
        resultText.textContent = `Parabéns! Você acertou ${questions.length - incorrectAnswers} perguntas.`;
    }
}

function restartQuiz() {
    incorrectAnswers = 0;
    currentQuestionIndex = 0;
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
}
