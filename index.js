document.addEventListener("DOMContentLoaded", function () {
    // Questions -- More to Come
    const questions = [
        {
            question: "Which team has the most F1 Constructors' Championships?",
            answers: ["Ferrari", "Mercedes", "McLaren", "Red Bull"],
            correct: 0
        },
        {
            question: "Which racing series is known for the 24 Hours of Le Mans?",
            answers: ["Formula 1", "WEC", "IndyCar", "MotoGP"],
            correct: 1
        },
        {
            question: "Who won the 2021 F1 World Drivers' Championship?",
            answers: ["Lewis Hamilton", "Sebastian Vettel", "Max Verstappen", "Charles Leclerc"],
            correct: 2
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    const quizDiv = document.querySelector('.quiz');
    const questionsDiv = quizDiv.querySelector('.questions');
    const subtitle = quizDiv.querySelector('.subtitle');
    const buttons = document.querySelectorAll('.buttons button');
    const quizDoneDiv = document.querySelector('.quizdone');
    const scoreDiv = document.querySelector('.score');
    const restartBtn = document.getElementById('restart');
    const quizBg = document.querySelector('.quizheader .background');
subtitle.addEventListener('click', function(e) {
    e.preventDefault();
    if (quizBg) quizBg.style.opacity = "0";
});

    questionsDiv.style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    quizDoneDiv.style.display = 'none';

    // Start quiz 
    subtitle.addEventListener('click', startQuiz);

    function startQuiz(e) {
        e.preventDefault();
        subtitle.style.display = 'none';
        questionsDiv.style.display = '';
        document.querySelector('.buttons').style.display = '';
        quizDoneDiv.style.display = 'none';
        currentQuestion = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        questionsDiv.innerHTML = `<h2>${questions[currentQuestion].question}</h2>`;
        buttons.forEach((btn, idx) => {
            btn.textContent = questions[currentQuestion].answers[idx];
            btn.disabled = false;
            btn.classList.remove('correct', 'wrong');
        });
    }

    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            buttons.forEach(b => b.disabled = true);
            if (idx === questions[currentQuestion].correct) {
                btn.classList.add('correct');
                score++;
            } else {
                btn.classList.add('wrong');
                buttons[questions[currentQuestion].correct].classList.add('correct');
            }
            setTimeout(nextQuestion, 900);
        });
    });

    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionsDiv.style.display = 'none';
        document.querySelector('.buttons').style.display = 'none';
        quizDoneDiv.style.display = '';
        scoreDiv.textContent = `You scored ${score} out of ${questions.length}!`;
    }

    restartBtn.addEventListener('click', function () {
        subtitle.style.display = '';
        questionsDiv.style.display = 'none';
        document.querySelector('.buttons').style.display = 'none';
        quizDoneDiv.style.display = 'none';
        scoreDiv.textContent = '';
    });
});