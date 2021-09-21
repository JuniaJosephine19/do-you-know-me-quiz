// mark One
const chalk = require("chalk");

var questionOne = {
  question: "Where do I live? ",
  answer: "Chennai",
};
var questionTwo = {
  question: "Am I older than 25? ",
  answer: "yes",
};
var questionThree = {
  question: "What do I love to eat? ",
  answer: "Dosa",
};
var questionFour = {
  question: "Am I Indian? ",
  answer: "yes",
};
var questionFive = {
  question: "Have I lived alone? ",
  answer: "yes",
};
var question = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var score = 0;
var readlineSync = require("readline-sync");
var highScore = [{
    name: "Ashwin",
    score: 5,
  },
  {
    name: "Sheela",
    score: 5,
  }
]

function play(questionAsked) {
  var userAnswer = readlineSync.question(chalk.keyword('teal')(questionAsked.question));
  if (userAnswer.toUpperCase() === questionAsked.answer.toUpperCase()) {
    console.log(chalk.greenBright("You were Right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("You were Wrong!"));
  }
  console.log("Your score is " + score + "\n");
}

for (var i = 0; i < question.length; i++) {
  play(question[i]);
}

console.log(chalk.magenta("Yay!! Your final score is " + score));
console.log(chalk.yellowBright("\nHigh Scores"));
console.log(chalk.yellowBright("-----------"));

for (var i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name, highScore[i].score);
}