import questionsArr from "./data/questions.js";

const questionNumber = document.querySelector(".question-number");
const question = document.querySelector(".question");
const imageCard = document.querySelector(".image-container__card");
const questionCard = document.querySelector(".question-card");

const answerA = document.querySelector("#answer-a");
const answerB = document.querySelector("#answer-b");
const answerC = document.querySelector("#answer-c");
const answerD = document.querySelector("#answer-d");
const answerButtons = [];

const getButtonId = (event) => {
  if (event.target.id === "true") {
    event.target.style.backgroundColor = "#61d636";
  } else {
    event.target.style.backgroundColor = "#d60200";
  }
  console.log(event.target.id);
};

const getButtons = () => {
  const buttons = document.querySelectorAll(".answer-container__button");
  buttons.forEach((button) => button.addEventListener("click", getButtonId));
};

const quizCards = (array) => {
  const quizHTML = array
    .map((questionsArr) => {
      return `  
        <h3 class="question-number">Question - ${questionsArr.number}</h3>
        <p class="question">${questionsArr.text}</p>
        <div class="image-container">
        <img src="${questionsArr.imgUrl}" alt="">
        </div>
        <section class="answer-container">
      <button class="answer-container__button" id=${questionsArr.answerA[1]}>${questionsArr.answerA[0]}</button>
      <button class="answer-container__button" id=${questionsArr.answerB[1]}>${questionsArr.answerB[0]}</button>
      <button class="answer-container__button" id=${questionsArr.answerC[1]}>${questionsArr.answerC[0]}</button>
      <button class="answer-container__button" id=${questionsArr.answerD[1]}>${questionsArr.answerD[0]}</button>
    </section>`;
    })
    .join("");

  questionCard.innerHTML = quizHTML;
  getButtons();
};

quizCards(questionsArr);

const timerClock = document.querySelector("#timer");
let timeSecond = 60;

timerClock.innerHTML = timeSecond;

let countDown = setInterval(() => {
  timeSecond--;
  timerClock.innerHTML = timeSecond;
  if (timeSecond <= 0) {
    clearInterval(countDown);

    gameMessageContainer.innerHTML = `<p>Game Over</p>`;
  }
}, 1000);
