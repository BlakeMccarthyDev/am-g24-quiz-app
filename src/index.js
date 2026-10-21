document.getElementById("quiz-next-question").hidden = true

function answer(element ) {
    CorrectAnswer = "Answer 2"
    if (element.textContent == CorrectAnswer)
    {
        element.style.color = 'green';
        document.getElementById("quiz-result-correctness").textContent = "Correct!"
        document.getElementById("quiz-next-question").hidden = false
    }
    else
    {
        element.style.color = 'red';
        document.getElementById("quiz-result-correctness").textContent = "Incorrect!"
    }
}

