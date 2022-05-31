import questionsArr from "./data/questions";

const questionNumber = document.querySelector(".question-number");
const question = document.querySelector(".question");
const imageCard = document.querySelector(".image-container__card");

const answerA = document.querySelector("#answer-a");
const answerB = document.querySelector("#answer-b");
const answerC = document.querySelector("#answer-c");
const answerD = document.querySelector("#answer-d");

const quizCards = (array) => {
  const quizHTML = array.map((questionsArr) => {
    return ` <h3 class="question-number">Question - ${}</h3>
        <p class="question">What is this?</p>
        <div class="image-container">
          <div class="image-container__card" id="question-image-1"></div>
          <!-- <div class="image-container=__card" id="question-image-2"></div>></div>
          <div class="image-container=__card" id="question-image-3"></div>></div>
          <div class="image-container=__card" id="question-image-4"></div>></div> -->
        </div>`;
  });
};

console.log(questionsArr)