const questionNumber = document.querySelector(".question-number");
const question = document.querySelector(".question");
const imageCard = document.querySelector(".image-container__card");

const answerA = document.querySelector("#answer-a");
const answerB = document.querySelector("#answer-b");
const answerC = document.querySelector("#answer-c");
const answerD = document.querySelector("#answer-d");

const questions = [
  {
    number: 1,
    text: "Which team won the 2021 America's Cup?",
    imgUrl:
      "https://i.guim.co.uk/img/media/3a3cfecfe9369abfdc4ea5e01ec15ae9d34880d6/0_0_4369_2622/master/4369.jpg?width=620&quality=85&auto=format&fit=max&s=9b1726f6d6a5f44068c63d27ab47c71b",
    answer: "New Zealand",
  },

  {
    number: 2,
    text: "Which band was responsible for the song 'Down Under'",
    image: "",
    answer: "Men at work",
  },

  {
    number: 3,
    text: "Who skippered the 2021 America's Cup UK team?",
    image: "",
    answer: "Ben Ainslie",
  },

  {
    number: 4,
    text: "What is this sail called?",
    image: "",
    answer: "Spinnaker",
  },

  {
    number: 5,
    text: "Which Island hosts Cowes Week?",
    image: "",
    answer: "Cowes",
  },

  {
    number: 6,
    text: "In which year was the first America's Cup?",
    image: "",
    answer: 1851,
  },

  {
    number: 7,
    text: "Sir Robin Knox-Johnson is famous for achieving what?",
    image: "",
    answer:
      "First person to perform a single-handed non-stop circumnavigation of the globe",
  },

  {
    number: 8,
    text: "Which larger brand sponsors a sailing regatta in St Maarten",
    image: "",
    answer: "HEINEKEN",
  },

  {
    number: 9,
    text: "What is the left hand side of a boat called?",
    image: "",
    answer: "Port",
  },

  {
    number: 10,
    text: "WHat is the code name for Jeff Bezos' new sailing yacht?",
    image: "",
    answer: "OCEANCO Y721",
  },
];
