const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Rome", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Quelle est la capitale du Japon ?",
        options: ["Séoul", "Pékin", "Tokyo", "Hanoï"],
        answer: "Tokyo"
    },
    {
        question: "Quelle est la capitale de l'Australie ?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Quelle est la capitale du Canada ?",
        options: ["Vancouver", "Toronto", "Ottawa", "Montréal"],
        answer: "Ottawa"
    },
    {
        question: "Quelle est la capitale de l'Italie ?",
        options: ["Florence", "Milan", "Rome", "Naples"],
        answer: "Rome"
    },
    {
        question: "Quelle est la capitale de l'Inde ?",
        options: ["New Delhi", "Mumbai", "Kolkata", "Bangalore"],
        answer: "New Delhi"
    },
    {
        question: "Quelle est la capitale de l'Allemagne ?",
        options: ["Hambourg", "Berlin", "Munich", "Francfort"],
        answer: "Berlin"
    },
    {
        question: "Quelle est la capitale du Brésil ?",
        options: ["Rio de Janeiro", "São Paulo", "Brasilia", "Salvador"],
        answer: "Brasilia"
    },
    {
        question: "Quelle est la capitale de la Russie ?",
        options: ["Saint-Pétersbourg", "Moscou", "Novosibirsk", "Kazan"],
        answer: "Moscou"
    },
    {
        question: "Quelle est la capitale de l'Afrique du Sud ?",
        options: ["Johannesburg", "Le Cap", "Durban", "Pretoria"],
        answer: "Pretoria"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showHomeScreen() {
    document.getElementById('home-screen').style.display = 'block';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
}

function showQuizScreen() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    document.getElementById('result-screen').style.display = 'none';

    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => handleOptionClick(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('next-btn').style.display = 'none';
}

function handleOptionClick(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    document.getElementById('next-btn').style.display = 'block';
}

function showResultScreen() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';

    document.getElementById('score').innerText = `Votre score est ${score} sur ${questions.length}.`;
}

document.getElementById('start-btn').addEventListener('click', showQuizScreen);
document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResultScreen();
    }
});
document.getElementById('play-again-btn').addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    showQuizScreen();
});
document.getElementById('back-home-btn').addEventListener('click', showHomeScreen);

showHomeScreen();
