const myNum1 = Math.ceil(Math.random() * 10);
const myNum2 = Math.ceil(Math.random() * 10);

const myQuestion = document.getElementById('question');

const myInput = document.getElementById('input');
const myForm = document.getElementById('form');

const myScore = document.getElementById('score');

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

myScore.innerText = `score: ${score}`;

myQuestion.innerText = `What is ${myNum1} multiply by ${myNum2}?`;

const myCorrectAnswer = myNum1 * myNum2;

myForm.addEventListener("submit", () => {
    const userAns = +myInput.value;
    if (userAns == myCorrectAnswer) {
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }

});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}