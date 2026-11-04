/*
 * function: loadQuestions
 * 
 * returns a list of questions based on the given json path.
 * will safely throw an error with info in the dev console.
 *
 * note:
 * uses await fetch() instead of JSON.parse() because the latter is 
 * not properly supported on some browsers, fetch is the preferred method
*/
export async function loadQuestions(pathToJSON) {
    try {
        const response = await fetch(pathToJSON);

        if (!response.ok) {
            throw new Error("Could not load questions");
        }

        const questions = await response.json();

        questions.forEach((q, index) => {
            // Checks if the questions is valid JSON
            if (
                typeof q.question !== "string" ||
                !Array.isArray(q.answers) ||
                q.answers.length !== 4 ||
                !Number.isInteger(q.correct) ||
                q.correct < 0 ||
                q.correct > 3
            ) {
                throw new Error(
                    `Invalid question at position ${index}`
                );
            }
        });

        return questions;

    } catch (error) {
        console.error("Question loading failed:", error);
        throw error;
    }
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
