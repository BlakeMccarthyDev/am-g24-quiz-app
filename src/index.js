import { loadQuestions } from "./quizLoader.js";

// Get HTML elements
const questionLabel = document.getElementById("quiz-question-label");
const resultLabel = document.getElementById("quiz-result-correctness");
const nextButton = document.getElementById("quiz-next-question");
const answerButtons = document.querySelectorAll(".quiz-answer");

// Quiz variables
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// Load questions
async function startQuiz() {
    try {
        questions = await loadQuestions("/decks/quiz1.json");

        if (questions.length === 0) {
            throw new Error("Question deck is empty");
        }

        showQuestion();

    } catch (error) {
        console.error("Quiz error:", error);

        questionLabel.textContent = "Unable to load questions.";

        answerButtons.forEach(button => {
            button.disabled = true;
        });
    }
}


// Display question
function showQuestion() {

    const currentQuestion = questions[currentQuestionIndex];

    questionLabel.textContent =
        `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;
        button.hidden = false;
        button.style.color = "";
    });

    resultLabel.textContent = "";

    nextButton.hidden = true;

    nextButton.textContent =
        currentQuestionIndex === questions.length - 1
            ? "Finish"
            : "Next";

    hasAnswered = false;
}


// Check answer
function answerQuestion(selectedIndex) {

    if (hasAnswered) return;

    hasAnswered = true;

    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedIndex === correctAnswer) {

        resultLabel.textContent = "Correct!";

        answerButtons[selectedIndex].style.color = "green";

        score++;

    } else {

        resultLabel.textContent = "Incorrect!";

        answerButtons[selectedIndex].style.color = "red";

        answerButtons[correctAnswer].style.color = "green";
    }

    answerButtons.forEach(button => {
        button.disabled = true;
    });

    nextButton.hidden = false;
}


// Attach events to answer buttons
answerButtons.forEach((button, index) => {

    button.addEventListener("click", () => {
        answerQuestion(index);
    });

});


// Next question
nextButton.addEventListener("click", () => {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

        showQuestion();

    } else {

        showResults();

    }

});


// Show final score
function showResults() {

    questionLabel.textContent = "Quiz complete!";

    resultLabel.textContent =
        `You scored ${score} out of ${questions.length}!`;

    answerButtons.forEach(button => {
        button.hidden = true;
    });

    nextButton.hidden = true;

}


// Start quiz only if this is a quiz page
if (questionLabel && resultLabel && nextButton) {
    startQuiz();
}
