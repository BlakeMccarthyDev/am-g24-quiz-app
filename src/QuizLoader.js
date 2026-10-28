function LoadQuestions(pathToJSON) {
    js = JSON.parse(open(pathToJSON))
    console.log(js)
    return ["Hello"]
}

/* 

TODO: MAKE JSON FILES USING THIS STRUCTURE

JSON STRUCTURE

{
    "question" : "",
    "answers" : [
        "",
        "",
        "",
        ""
    ],
    "correct": 0
}

QUESTION: A STRING FOR THE QUESTION 
ANSWERS: A ARRAY OF STRINGS FOR THE ANSWERS, FOUR IN TOTAL
CORRECT: A INTEGER INDICATING WHICH OF THE 4 ANSWERS IS THE CORRECT ONE

*/