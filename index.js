document.addEventListener("DOMContentLoaded", function () {
    // Quiz data (add an 'img' property for each question if you want an image)
    const quizQuestions = [
        {
            question: "Which team has the most F1 Constructors' Championships?",
            answers: ["Ferrari", "Mercedes", "McLaren", "Red Bull"],
            correct: 0,
            img: "images/f1_wcc_trophy.png"
        },
        {
            question: "Which racing series is known for the 24 Hours of Le Mans?",
            answers: ["Formula 1", "WEC", "IndyCar", "MotoGP"],
            correct: 1,
            img: "images/wec_lemans_quiz.jpg"
        },
        {
            question: "Who won the 2021 F1 World Drivers' Championship?",
            answers: ["Lewis Hamilton", "Sebastian Vettel", "Max Verstappen", "Charles Leclerc"],
            correct: 2,
            img: "images/maxvlewis_quiz.jpg"
        }
    ];

    const quizDiv = document.querySelector('.quiz');
    const beforeQuizDiv = document.querySelector('.beforequiz');
    const startBtn = document.getElementById('start-quiz-btn');
    let currentQuestion = 0;
    let userAnswers = [];

    function renderQuiz() {
        quizDiv.innerHTML = `
            <h2 class="quiz-title">Test Your Wheel Knowledge</h2>
            <div class="quiz-content-row">
                <div class="quiz-questions"></div>
                <div class="quiz-image"></div>
            </div>
            <button id="quiz-next">Next</button>
            <div class="quiz-results"></div>
            <button id="quiz-restart" style="display:none;">Restart Quiz</button>
        `;
        showQuestion();
        document.getElementById('quiz-next').onclick = nextHandler;
        document.getElementById('quiz-restart').onclick = restartQuiz;
    }

    function showQuestion() {
        const q = quizQuestions[currentQuestion];
        const answersHtml = q.answers.map((ans, idx) => {
            const selected = userAnswers[currentQuestion] == idx ? "selected" : "";
            return `
                <div class="quiz-answer ${selected}" data-idx="${idx}">${ans}</div>
            `;
        }).join('');
        quizDiv.querySelector('.quiz-questions').innerHTML = `
            <div class="quiz-question"><strong>Q${currentQuestion + 1}:</strong> ${q.question}</div>
            <div class="quiz-answers">${answersHtml}</div>
        `;
        // Show image if present
        const imgDiv = quizDiv.querySelector('.quiz-image');
        if (q.img) {
            imgDiv.innerHTML = `<img src="${q.img}" alt="Question image" class="quiz-q-img">`;
        } else {
            imgDiv.innerHTML = "";
        }
        quizDiv.querySelector('.quiz-results').textContent = '';
        document.getElementById('quiz-next').textContent = currentQuestion === quizQuestions.length - 1 ? "Submit" : "Next";
        document.getElementById('quiz-next').disabled = typeof userAnswers[currentQuestion] === "undefined";

        // Add click events for answers
        quizDiv.querySelectorAll('.quiz-answer').forEach(ansDiv => {
            ansDiv.onclick = function () {
                userAnswers[currentQuestion] = parseInt(ansDiv.dataset.idx);
                // Remove selected from all, add to clicked
                quizDiv.querySelectorAll('.quiz-answer').forEach(div => div.classList.remove('selected'));
                ansDiv.classList.add('selected');
                document.getElementById('quiz-next').disabled = false;
            };
        });
    }

    function nextHandler() {
        if (typeof userAnswers[currentQuestion] === "undefined") return;
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        let numCorrect = 0;
        let wrongQuestions = [];
        quizQuestions.forEach((q, i) => {
            if (userAnswers[i] === q.correct) {
                numCorrect++;
            } else {
                wrongQuestions.push(i + 1); // Question numbers are 1-based
            }
        });
        quizDiv.querySelector('.quiz-questions').innerHTML = '';
        quizDiv.querySelector('.quiz-image').innerHTML = '';
        let resultText = `You got ${numCorrect} out of ${quizQuestions.length} correct!`;
        if (wrongQuestions.length > 0) {
            resultText += `<br>Questions you got wrong: ${wrongQuestions.join(', ')}`;
        }
        quizDiv.querySelector('.quiz-results').innerHTML = resultText;
        document.getElementById('quiz-next').style.display = 'none';
        document.getElementById('quiz-restart').style.display = '';
    }

    function restartQuiz() {
        currentQuestion = 0;
        userAnswers = [];
        // Animate quiz out, beforequiz in
        quizDiv.classList.add('hide');
        setTimeout(() => {
            quizDiv.style.display = "none";
            beforeQuizDiv.style.display = "";
            beforeQuizDiv.classList.remove('hide');
            document.getElementById('quiz-next').style.display = '';
            document.getElementById('quiz-restart').style.display = 'none';
        }, 500);
    }

    // Start button logic
    if (startBtn) {
        startBtn.addEventListener('click', function () {
            // Animate beforequiz out, quiz in
            beforeQuizDiv.classList.add('hide');
            setTimeout(() => {
                beforeQuizDiv.style.display = "none";
                quizDiv.style.display = "";
                quizDiv.classList.remove('hide');
                currentQuestion = 0;
                userAnswers = [];
                renderQuiz();
            }, 500);
        });
    }

    // Hide quiz initially
    quizDiv.style.display = "none";
});