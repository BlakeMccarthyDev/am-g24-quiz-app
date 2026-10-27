
document.getElementById("nav-open").onclick = toggleToolbar
document.getElementById("quiz-next-question").hidden = true

function answer(element) {
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

function toggleToolbar()
{
    if (document.getElementById("nav-home").hidden == false)
    {
        closeToolbar();
    }
    else{
        showToolbar();
    }
}

function showToolbar()
{
    document.getElementById("nav-home").hidden=false
    
}

function closeToolbar()
{
    document.getElementById("nav-home").hidden=true
}