readlineSync = require("readline-sync");
var score = 0;

userName = readlineSync.question("What is your name? ");
console.log("Welcome, Play your best "+userName+" ");

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Yes!! you are correct");
    score=score + 1;
  }
  else{
    console.log("Oops! you are worng ");
    score = score - 1;
  }
  console.log("Current score "+score);
  console.log("---------------");
}
var questions =[
  {
    question: " 1Q. The full name of Uday Kumar is? ",
    answer: "dusari uday kumar",
  },
  {
    question:"2Q. Where does Uday live in india? (state name) ",
    answer: "telangana",
  },
  {
    question: "3Q. Favourite food for Uday? (non veg) ",
    answer: "chicken",
  },

]

for(var i = 0;i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("Total Score: "+score);
if(score == 3){
  console.log("Woohoo !! You know more about Uday");
  console.log("ping me the screenshot i will update the LeaderBoard ");
}
else{
  console.log("Better Luck Next Time "+userName);
}
var leaderBoard = [
  {
    name:"Uday",
    marks: 3,
  },
  {
    name: "Spc",
    marks: 3,
  },
  ]
  console.log("--------------------")
console.log("----Highest Score----");
console.log("Name/Score");
for(var i = 0; i<leaderBoard.length; i++){
  console.log(leaderBoard[i].name , leaderBoard[i].marks);
}

