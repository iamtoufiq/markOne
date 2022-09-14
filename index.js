var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("what is your Name ? ");
console.log("Welcome " + userName + ". I want to know how much you know about me, so you must respond.")

function play(question, answer) {
  console.log("---------------------------------------------------------------------------")
  console.log(questions[i].option)
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Your answer is right");
    score += 2;

  }
  else {
    console.log("You answer is wrong");
    score--;
  }
  console.log("current score :", score);
}

var questions = [
  {
    question: "Where am I from ?",
    answer: "A",
    option: "A -> Maharastra , B -> Uttar Pradesh , C -> Madhya Pradesh ,D ->Other "
  },
  {
    question: "🏏 Who is taufique's favourite cricketer ?",
    answer: "C",
    option: "A -> Sachin Tendulkar , B -> MS Dhoni , C -> Jos Buttler ,D ->Other "
  },
  {
    question: "What does taufique drink the most ?",
    answer: "D",
    option: "A -> 🍺 Alcohol , B -> ☕ Coffee , C -> 🥛 Butter Milk ,D -> ☕ Tea "
  },
  {
    question: "🍫 Which chocolate does taufiq love the most?",
    answer: "A",
    option: "A -> Dairy Milk , B -> 5 Star , C -> Perk ,D -> Munch"
  },
  {
    question: "If taufiq meets a genie, what would be taufiq's wish?",
    answer: "D",
    option: "A -> 👑 To be the king of the world , B -> 💑 Beautiful wife , C -> 💸 Rs100 crore ,D ->Other "
  }
]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  // console.log(questions[i].option)
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your score is : " + score);

var highScore = [
  {
    name: 'first unknown',
    score: 9
  },
  {
    name: "second unknown",
    score: 8
  },
  {
    name: "third unknown",
    score: 7
  }
]

for (let i = 0; i < 2; i++) {
  if (highScore[i].score < score) {

    highScore[i + 1].score = highScore[i].score;
    highScore[i + 1].name = highScore[i].name;

    highScore[i].name = userName;
    highScore[i].score = score;

    // highScore[i+1].score=highScore[i].score;
    // highScore[i+1].name=highScore[i].name;
    break;
  }
}
console.log("---------------------------------------------------------------------------")
console.log("View the top rankings; if you happen to be there, ping me, and I'll update it.")
for (var j = 0; j < 3; j++) {
  console.log(j + 1 + ":" + highScore[j].name)
}