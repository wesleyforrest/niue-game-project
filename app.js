import questionsArr from "./data/questions.js";

const questionNumber = document.querySelector(".question-number");
const question = document.querySelector(".question");
const imageCard = document.querySelector(".image-container__card");
const questionCard = document.querySelector(".question-card");

const answerA = document.querySelector("#answer-a");
const answerB = document.querySelector("#answer-b");
const answerC = document.querySelector("#answer-c");
const answerD = document.querySelector("#answer-d");

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
      <button class="answer-container__button" id="answer-a">${questionsArr.answerA}</button>
      <button class="answer-container__button" id="answer-b">${questionsArr.answerB}</button>
      <button class="answer-container__button" id="answer-c">${questionsArr.answerC}</button>
      <button class="answer-container__button" id="answer-d">${questionsArr.answerD}</button>
    </section>`;
    })
    .join("");

  questionCard.innerHTML = quizHTML;
};
quizCards(questionsArr);
console.log(questionsArr[0].number);
