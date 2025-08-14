// Variáveis globais
let currentQuestion = 0;
let userAnswers = {};
let quizCompleted = false;
let score = 0;

// Elementos DOM
const questionCard = document.getElementById('questionCard');
const resultsContainer = document.getElementById('resultsContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const questionTitle = document.getElementById('questionTitle');
const questionImage = document.getElementById('questionImage');
const questionText = document.getElementById('questionText');
const trueBtn = document.getElementById('trueBtn');
const falseBtn = document.getElementById('falseBtn');
const userAnswerDiv = document.getElementById('userAnswer');
const userAnswerText = document.getElementById('userAnswerText');
const currentScore = document.getElementById('currentScore');
const finalScore = document.getElementById('finalScore');
const scorePercentage = document.getElementById('scorePercentage');
const resultsGrid = document.getElementById('resultsGrid');

// Inicializar o quiz
document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
});

// Carregar questão atual
function loadQuestion() {
    if (currentQuestion >= quizData.questions.length) {
        showResults();
        return;
    }

    const question = quizData.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

    // Atualizar UI
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Questão ${currentQuestion + 1} de ${quizData.questions.length}`;
    questionTitle.textContent = `Questão ${currentQuestion + 1}`;
    questionText.textContent = question.question;
    questionImage.src = question.image;
    
    // Resetar botões
    trueBtn.disabled = false;
    falseBtn.disabled = false;
    trueBtn.style.opacity = '1';
    falseBtn.style.opacity = '1';
    
    // Esconder resposta do usuário
    userAnswerDiv.style.display = 'none';
    
    // Atualizar score atual
    updateCurrentScore();
}

// Lidar com resposta do usuário
function handleAnswer(answer) {
    if (quizCompleted) return;

    // Salvar resposta
    userAnswers[currentQuestion] = answer;

    // Desabilitar botões
    trueBtn.disabled = true;
    falseBtn.disabled = true;

    // Mostrar resposta do usuário
    userAnswerText.textContent = `Você respondeu: ${answer ? 'Verdadeiro' : 'Falso'}`;
    userAnswerDiv.style.display = 'block';

    // Calcular nova pontuação
    score = 0;
    for (let i = 0; i <= currentQuestion; i++) {
        if (userAnswers[i] === quizData.questions[i].correctAnswer) {
            score++;
        }
    }

    // Atualizar score atual
    updateCurrentScore();

    // Se é a última pergunta, completar o quiz
    if (currentQuestion === quizData.questions.length - 1) {
        quizCompleted = true;
        setTimeout(() => {
            showResults();
        }, 1500);
    } else {
        // Avançar para próxima pergunta
        setTimeout(() => {
            currentQuestion++;
            loadQuestion();
        }, 1500);
    }
}

// Atualizar pontuação atual
function updateCurrentScore() {
    const answeredQuestions = Object.keys(userAnswers).length;
    currentScore.textContent = `Pontuação atual: ${score}/${answeredQuestions}`;
}

// Mostrar resultados finais
function showResults() {
    questionCard.style.display = 'none';
    document.querySelector('.score-card').style.display = 'none';
    resultsContainer.style.display = 'block';

    // Atualizar score final
    const percentage = Math.round((score / quizData.questions.length) * 100);
    finalScore.textContent = `${score}/${quizData.questions.length}`;
    scorePercentage.textContent = `Você acertou ${score} de ${quizData.questions.length} questões (${percentage}%)`;

    // Gerar resultados detalhados
    generateDetailedResults();
}

// Gerar resultados detalhados
function generateDetailedResults() {
    resultsGrid.innerHTML = '';

    quizData.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;

        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        resultItem.innerHTML = `
            <div class="result-header">
                <div class="result-icon ${isCorrect ? 'correct' : 'incorrect'}">
                    <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                </div>
                <div class="result-content">
                    <h3 class="result-question">
                        Questão ${index + 1}: ${question.question}
                    </h3>
                    <div class="result-badges">
                        <span class="badge user-answer">
                            Sua resposta: ${userAnswer ? 'Verdadeiro' : 'Falso'}
                        </span>
                        <span class="badge correct-answer">
                            Correto: ${question.correctAnswer ? 'Verdadeiro' : 'Falso'}
                        </span>
                    </div>
                    <p class="result-explanation">
                        ${question.explanation}
                    </p>
                </div>
            </div>
        `;

        resultsGrid.appendChild(resultItem);
    });
}

// Resetar quiz
function resetQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    quizCompleted = false;
    score = 0;

    // Voltar para o início
    resultsContainer.style.display = 'none';
    questionCard.style.display = 'block';
    document.querySelector('.score-card').style.display = 'block';
    
    loadQuestion();
}

// Tratamento de erro para imagens
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar handler de erro para imagens
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Animações suaves
function animateScore() {
    const scoreElement = document.getElementById('finalScore');
    const targetScore = score;
    let currentScore = 0;
    
    const interval = setInterval(() => {
        if (currentScore < targetScore) {
            currentScore++;
            scoreElement.textContent = `${currentScore}/${quizData.questions.length}`;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

// Adicionar efeitos visuais nos botões
trueBtn.addEventListener('mouseenter', function() {
    if (!this.disabled) {
        this.style.transform = 'scale(1.05)';
    }
});

trueBtn.addEventListener('mouseleave', function() {
    if (!this.disabled) {
        this.style.transform = 'scale(1)';
    }
});

falseBtn.addEventListener('mouseenter', function() {
    if (!this.disabled) {
        this.style.transform = 'scale(1.05)';
    }
});

falseBtn.addEventListener('mouseleave', function() {
    if (!this.disabled) {
        this.style.transform = 'scale(1)';
    }
});

// Feedback visual ao clicar
function addClickFeedback(button) {
    button.style.transform = 'scale(0.98)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}