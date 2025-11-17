let questionsOriginal = [
    {
        question: "Qual é a principal diferença entre marketing e propaganda?",
        answers: [
            { text: "Marketing é mais amplo e envolve estratégia, enquanto propaganda é uma das ferramentas do marketing", correct: true },
            { text: "São sinônimos", correct: false },
            { text: "Propaganda vem antes do marketing", correct: false },
            { text: "Marketing serve apenas para redes sociais", correct: false }
        ]
    },
    {
        question: "O que significa o termo persona em marketing digital?",
        answers: [
            { text: "Um cliente fictício criado com base em dados reais para representar o público ideal", correct: true },
            { text: "Um cliente qualquer", correct: false },
            { text: "O dono da empresa", correct: false },
            { text: "O influenciador da marca", correct: false }
        ]
    },
    {
        question: "O que é funil de vendas?",
        answers: [
            { text: "O caminho que o cliente percorre desde o primeiro contato até a compra", correct: true },
            { text: "Um modelo de anúncio pago", correct: false },
            { text: "Uma técnica de pós-venda", correct: false },
            { text: "Uma estratégia de distribuição", correct: false }
        ]
    },
    {
        question: "No marketing, o conceito de \"valor percebido\" se refere a:",
        answers: [
            { text: "O preço real do produto", correct: false },
            { text: "O quanto o cliente acredita que o produto vale", correct: true },
            { text: "O custo de produção", correct: false },
            { text: "A margem de lucro da empresa", correct: false }
        ]
    },
    {
        question: "O que é o Customer Lifetime Value (CLV)?",
        answers: [
            { text: "O valor total que um cliente gera para a empresa durante todo o relacionamento com a marca", correct: true },
            { text: "O valor da primeira compra de um cliente", correct: false },
            { text: "O investimento feito em marketing digital", correct: false },
            { text: "O número de clientes fidelizados", correct: false }
        ]
    },
    {
        question: "Qual é o principal objetivo do branding?",
        answers: [
            { text: "Aumentar as vendas imediatas", correct: false },
            { text: "Criar uma identidade e construir a percepção da marca ao longo do tempo", correct: true },
            { text: "Fazer campanhas de desconto", correct: false },
            { text: "Lançar novos produtos", correct: false }
        ]
    },
    {
        question: "O que significa a sigla ROI no marketing?",
        answers: [
            { text: "Retorno sobre investimento (Return on Investment)", correct: true },
            { text: "Receita obtida interna", correct: false },
            { text: "Registro oficial de informações", correct: false },
            { text: "Relatório operacional interno", correct: false }
        ]
    },
    {
        question: "No marketing de conteúdo, o que é um \"lead\"?",
        answers: [
            { text: "Uma oportunidade de venda, geralmente alguém que demonstrou interesse na marca", correct: true },
            { text: "Um seguidor nas redes sociais", correct: false },
            { text: "Um funcionário da equipe de marketing", correct: false },
            { text: "Um post patrocinado", correct: false }
        ]
    },
    {
        question: "Qual é o papel do neuromarketing?",
        answers: [
            { text: "Estudar as reações emocionais e cerebrais dos consumidores para entender o comportamento de compra", correct: true },
            { text: "Criar novas redes sociais", correct: false },
            { text: "Produzir vídeos publicitários", correct: false },
            { text: "Medir o alcance de anúncios", correct: false }
        ]
    },
    {
        question: "O que é o conceito de posicionamento de marca?",
        answers: [
            { text: "O espaço que a marca ocupa na mente do consumidor em relação aos concorrentes", correct: true },
            { text: "O local físico onde a empresa está instalada", correct: false },
            { text: "A posição do logotipo em uma embalagem", correct: false },
            { text: "A ordem das campanhas no calendário", correct: false }
        ]
    },
    {
        question: "O que é o \"mix de marketing\"?",
        answers: [
            { text: "Conjunto de estratégias que englobam os 4 Ps: Produto, Preço, Praça e Promoção", correct: true },
            { text: "Mistura de campanhas publicitárias", correct: false },
            { text: "Estratégia de vendas diretas", correct: false },
            { text: "Planejamento de redes sociais", correct: false }
        ]
    },
    {
        question: "O que é o remarketing?",
        answers: [
            { text: "Estratégia que mostra anúncios novamente para pessoas que já visitaram o site ou interagiram com a marca", correct: true },
            { text: "Criação de uma nova marca", correct: false },
            { text: "Promoção feita apenas por influenciadores", correct: false },
            { text: "Venda em lojas físicas", correct: false }
        ]
    },
    {
        question: "O que significa market share?",
        answers: [
            { text: "A participação de uma empresa no mercado em relação aos concorrentes", correct: true },
            { text: "O total de produtos vendidos", correct: false },
            { text: "O valor investido em marketing", correct: false },
            { text: "O número de seguidores de uma marca", correct: false }
        ]
    },
    {
        question: "O que é o marketing de guerrilha?",
        answers: [
            { text: "Ações criativas e de baixo custo que surpreendem o público", correct: true },
            { text: "Campanha militar", correct: false },
            { text: "Estratégia usada apenas em TV", correct: false },
            { text: "Um tipo de pesquisa de mercado", correct: false }
        ]
    },
    {
        question: "Qual o principal objetivo de uma pesquisa de mercado?",
        answers: [
            { text: "Coletar informações sobre consumidores, concorrentes e tendências", correct: true },
            { text: "Aumentar vendas rapidamente", correct: false },
            { text: "Fazer propaganda de produtos", correct: false },
            { text: "Divulgar o nome da empresa", correct: false }
        ]
    },
    {
        question: "O que significa o termo benchmarking?",
        answers: [
            { text: "Analisar as melhores práticas do mercado para aplicar na própria empresa", correct: true },
            { text: "Criar novas marcas", correct: false },
            { text: "Fazer anúncios pagos", correct: false },
            { text: "Pesquisar preços de produtos", correct: false }
        ]
    },
    {
        question: "O que é o marketing de relacionamento?",
        answers: [
            { text: "Estratégia voltada a manter um vínculo duradouro com o cliente", correct: true },
            { text: "Estratégia de divulgação rápida", correct: false },
            { text: "Um tipo de marketing pessoal", correct: false },
            { text: "Vendas por telefone", correct: false }
        ]
    },
    {
        question: "Qual é o papel do storytelling no marketing?",
        answers: [
            { text: "Contar histórias que criem conexão emocional com o público", correct: true },
            { text: "Vender produtos com desconto", correct: false },
            { text: "Aumentar o número de curtidas", correct: false },
            { text: "Postar vídeos curtos nas redes", correct: false }
        ]
    },
    {
        question: "O que é o marketing verde?",
        answers: [
            { text: "Estratégia que valoriza práticas sustentáveis e respeito ao meio ambiente", correct: true },
            { text: "Campanha para produtos agrícolas", correct: false },
            { text: "Divulgação com a cor verde", correct: false },
            { text: "Marketing de tecnologia", correct: false }
        ]
    },
    {
        question: "O que é um KPI (Key Performance Indicator)?",
        answers: [
            { text: "Um indicador usado para medir o desempenho das estratégias de marketing", correct: true },
            { text: "Uma ferramenta de design gráfico", correct: false },
            { text: "Um plano de mídia", correct: false },
            { text: "Um tipo de cliente", correct: false }
        ]
    },
    {
        question: "O que é o marketing de influência?",
        answers: [
            { text: "Uso de influenciadores digitais para promover produtos ou marcas", correct: true },
            { text: "Divulgação feita apenas por celebridades", correct: false },
            { text: "Marketing voltado para empresas B2B", correct: false },
            { text: "Anúncios de rádio e TV", correct: false }
        ]
    },
    {
        question: "Qual é o principal foco do marketing pessoal?",
        answers: [
            { text: "Fortalecer a imagem e reputação de uma pessoa", correct: true },
            { text: "Criar produtos personalizados", correct: false },
            { text: "Montar campanhas para empresas", correct: false },
            { text: "Trabalhar com influenciadores", correct: false }
        ]
    },
    {
        question: "O que é o marketing sensorial?",
        answers: [
            { text: "Estratégia que usa os sentidos (visão, olfato, tato, audição e paladar) para criar experiências de marca", correct: true },
            { text: "Marketing de redes sociais", correct: false },
            { text: "Campanhas feitas apenas em lojas", correct: false },
            { text: "Divulgação com sons", correct: false }
        ]
    },
    {
        question: "O que é o B2B (Business to Business)?",
        answers: [
            { text: "Relação comercial entre empresas", correct: true },
            { text: "Venda direta ao consumidor final", correct: false },
            { text: "Comércio eletrônico", correct: false },
            { text: "Marketing de conteúdo", correct: false }
        ]
    },
    {
        question: "Qual é a diferença entre alcance e engajamento nas redes sociais?",
        answers: [
            { text: "Alcance é o número de pessoas que viram o conteúdo; engajamento é a interação com ele", correct: true },
            { text: "Alcance é o número de curtidas; engajamento é o número de visualizações", correct: false },
            { text: "São a mesma coisa", correct: false },
            { text: "Engajamento é sempre maior que o alcance", correct: false }
        ]
    },
    {
        question: "O que é o marketing omnichannel?",
        answers: [
            { text: "Estratégia que integra todos os canais de comunicação (online e offline) para uma experiência unificada do cliente", correct: true },
            { text: "Campanha apenas nas redes sociais", correct: false },
            { text: "Vendas diretas por telefone", correct: false },
            { text: "Marketing feito por e-mail", correct: false }
        ]
    },
    {
        question: "Qual dessas opções é um exemplo de marketing de escassez?",
        answers: [
            { text: "\"Últimas unidades disponíveis!\"", correct: true },
            { text: "\"Compre em qualquer momento\"", correct: false },
            { text: "\"Entrega gratuita em todo o país\"", correct: false },
            { text: "\"Produto em estoque permanente\"", correct: false }
        ]
    }
];

// Array para armazenar questões embaralhadas
let questions = [];

// Função para embaralhar array (Fisher-Yates shuffle)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Embaralhar também as respostas de cada questão
    shuffled.forEach(question => {
        for (let i = question.answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question.answers[i], question.answers[j]] = [question.answers[j], question.answers[i]];
        }
    });
    return shuffled;
}

// Estado do jogo
let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 30;
let timerInterval = null;
let totalTime = 0;
let startTime = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

// Cores para as respostas (estilo Kahoot)
const answerColors = [
    'linear-gradient(135deg, #46178f 0%, #722f9e 100%)',
    'linear-gradient(135deg, #722f9e 0%, #9c46d2 100%)',
    'linear-gradient(135deg, #46178f 0%, #722f9e 100%)',
    'linear-gradient(135deg, #722f9e 0%, #9c46d2 100%)'
];

const answerLabels = ['A', 'B', 'C', 'D'];

// Elementos do DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const scorePercentageElement = document.getElementById('score-percentage');
const correctAnswersElement = document.getElementById('correct-answers');
const wrongAnswersElement = document.getElementById('wrong-answers');
const totalTimeElement = document.getElementById('total-time');
const feedbackContainer = document.getElementById('feedback-container');
const pointsEarnedElement = document.getElementById('points-earned');
const timeUsedElement = document.getElementById('time-used');
const particlesContainer = document.getElementById('particles');
const confettiContainer = document.getElementById('confetti-container');

// Configurar número total de questões
totalQuestionsSpan.textContent = questionsOriginal.length;

// Criar partículas de fundo
function createParticles() {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Criar confete
function createConfetti() {
    const colors = ['#8B4A6B', '#D65A95', '#E67CA8', '#F4A4C1'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Inicializar partículas
createParticles();

// Event Listeners
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', resetGame);

// Função para iniciar o jogo
function startGame() {
    // Embaralhar questões
    questions = shuffleArray(questionsOriginal);
    
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    totalTime = 0;
    
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    showQuestion();
}

// Função para mostrar a questão atual
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }
    
    // Esconder feedback da questão anterior
    feedbackContainer.style.display = 'none';
    
    const question = questions[currentQuestionIndex];
    
    // Animação de transição da pergunta
    questionText.style.animation = 'none';
    setTimeout(() => {
        questionText.textContent = question.question;
        questionText.style.animation = 'textReveal 0.8s ease';
    }, 100);
    
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    // Limpar respostas anteriores
    answersContainer.innerHTML = '';
    
    // Criar botões de resposta com animação
    question.answers.forEach((answer, index) => {
        setTimeout(() => {
            const answerBtn = document.createElement('button');
            answerBtn.className = 'answer-btn';
            answerBtn.style.background = answerColors[index];
            answerBtn.dataset.correct = answer.correct;
            
            answerBtn.innerHTML = `
                <span class="answer-label">${answerLabels[index]}</span>
                <span class="answer-text">${answer.text}</span>
            `;
            
            answerBtn.addEventListener('click', () => selectAnswer(answerBtn, answer.correct));
            answerBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                answerBtn.style.transform = 'scale(0.95)';
            });
            answerBtn.addEventListener('touchend', (e) => {
                e.preventDefault();
                answerBtn.style.transform = '';
            });
            
            answersContainer.appendChild(answerBtn);
        }, index * 100);
    });
    
    // Iniciar timer
    timeRemaining = 30;
    timerElement.textContent = timeRemaining;
    timerElement.classList.remove('warning');
    timerElement.style.animation = 'timerEntrance 0.5s ease';
    
    startTime = Date.now();
    startTimer();
}

// Função do timer
function startTimer() {
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = timeRemaining;
        
        if (timeRemaining <= 10) {
            timerElement.classList.add('warning');
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    }, 1000);
}

// Função quando o tempo acaba
function timeUp() {
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => {
        btn.classList.add('disabled');
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        } else {
            btn.classList.add('incorrect');
        }
    });
    
    totalTime += 30000; // Adicionar os 30 segundos completos
    wrongAnswers++;
    
    // Mostrar feedback de tempo esgotado
    feedbackContainer.style.display = 'block';
    pointsEarnedElement.textContent = `Tempo esgotado!`;
    pointsEarnedElement.style.color = '#D65A95';
    timeUsedElement.textContent = `Tempo usado: 30.0s`;
    
    setTimeout(() => {
        nextQuestion();
    }, 2500);
}

// Função para selecionar resposta
function selectAnswer(button, isCorrect) {
    clearInterval(timerInterval);
    
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => {
        btn.classList.add('disabled');
        btn.removeEventListener('click', selectAnswer);
    });
    
    const timeTaken = Date.now() - startTime;
    totalTime += timeTaken;
    const timeTakenSeconds = (timeTaken / 1000).toFixed(1);
    
    if (isCorrect) {
        button.classList.add('correct');
        correctAnswers++;
        // Calcular pontos baseado na velocidade (máximo 1000 pontos)
        // Quanto mais rápido, mais pontos (máximo 2000 pontos)
        const timeBonus = Math.max(0, Math.floor((30000 - timeTaken) / 15));
        const points = 1000 + timeBonus;
        score += points;
        scoreElement.textContent = score.toLocaleString('pt-BR');
        
        // Criar confete para acerto
        createConfetti();
        
        // Mostrar feedback positivo
        feedbackContainer.style.display = 'block';
        pointsEarnedElement.textContent = `+${points.toLocaleString('pt-BR')} pontos!`;
        pointsEarnedElement.style.color = '#8B4A6B';
        timeUsedElement.textContent = `Tempo usado: ${timeTakenSeconds}s`;
    } else {
        button.classList.add('incorrect');
        wrongAnswers++;
        
        // Mostrar resposta correta
        answerButtons.forEach(btn => {
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
            }
        });
        
        // Mostrar feedback negativo
        feedbackContainer.style.display = 'block';
        pointsEarnedElement.textContent = `Resposta incorreta!`;
        pointsEarnedElement.style.color = '#D65A95';
        timeUsedElement.textContent = `Tempo usado: ${timeTakenSeconds}s`;
    }
    
    setTimeout(() => {
        nextQuestion();
    }, 2500);
}

// Função para próxima questão
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Função para encerrar o jogo
function endGame() {
    gameScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    // Animação de contagem dos pontos
    let currentScore = 0;
    const targetScore = score;
    const scoreInterval = setInterval(() => {
        currentScore += Math.ceil(targetScore / 30);
        if (currentScore >= targetScore) {
            currentScore = targetScore;
            clearInterval(scoreInterval);
        }
        finalScoreElement.textContent = currentScore.toLocaleString('pt-BR');
    }, 30);
    
    scorePercentageElement.textContent = `${percentage}% de acerto`;
    correctAnswersElement.textContent = correctAnswers;
    wrongAnswersElement.textContent = wrongAnswers;
    totalTimeElement.textContent = `${Math.round(totalTime / 1000)}s`;
    
    // Criar confete final se tiver bom desempenho
    if (percentage >= 70) {
        setTimeout(() => {
            createConfetti();
        }, 500);
    }
}

// Função para resetar o jogo
function resetGame() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    
    clearInterval(timerInterval);
}

