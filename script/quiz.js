const songsId = document.getElementById("songsId");
let i = 0;
const buttonQuiz1 = document.createElement("button");
const buttonQuiz2 = document.createElement("button");
const buttonQuiz3 = document.createElement("button");
const questionContainer = document.getElementById("questionContainer");
const startButton = document.createElement("button");
const displayTimer = document.getElementById("timerContainer");
const question = document.createElement("h3");
let timer = 30;
let results = [];
let interval;
let score = 0;
const quizArray = [
  {
    name: "bittersweetsymphony",
    src: "../assets/audio/Bitter Sweet Siymphony- The verve.mp3",
    question: "What Band play this song?",
    answers: ["THE VERVE", "GAZZELLE", "YUNGBULD"],
    accepted: "THE VERVE",
  },
  {
    name: "bloodyvalentine",
    src: "../assets/audio/Bloody Valentine- MGK.mp3",
    question: "What Band play this song?",
    answers: ["MACE", "MGK", "KASABIAN"],
    accepted: "MGK",
  },
  {
    name: "californication",
    src: "../assets/audio/Californication- Red Hot Chili Peppers.mp3",
    question: "What Band play this song?",
    answers: ["RED HOT CHILI PEPPERS", "AVRIL LAVIGNE", "GODDAMN"],
    accepted: "RED HOT CHILI PEPPERS",
  },
  {
    name: "changes",
    src: "../assets/audio/Changes-2Pac.mp3",
    question: "What Band play this song?",
    answers: ["LUCIO BATTISTI", "NIRVANA", "2PAC"],
    accepted: "2PAC",
  },
  {
    name: "clocks",
    src: "../assets/audio/Clocks-Coldplay.mp3",
    question: "What Band play this song?",
    answers: ["BEYONCE", "LUCIO DALLA", "COLDPLAY"],
    accepted: "COLDPLAY",
  },
  {
    name: "iloveyou",
    src: "../assets/audio/I Love You-Fontaines DC.mp3",
    question: "What Band play this song?",
    answers: ["PIXIES", "FONTAINES D.C.", "GREEN DAY"],
    accepted: "FONTAINES D.C.",
  },
  {
    name: "iris",
    src: "../assets/audio/Iris-Goo Goo Dolls (1).mp3",
    question: "What Band play this song?",
    answers: ["GOO GOO DOLLS", "GORILLAZ", "MIA MARTINI"],
    accepted: "GOO GOO DOLLS",
  },
  {
    name: "mywholeworld",
    src: "../assets/audio/My Whole World-GDFRND.mp3",
    question: "What Band play this song?",
    answers: ["LAURA PAUSINI", "GOOD FRIENDS", "GDFRND"],
    accepted: "GDFRND",
  },
  {
    name: "one",
    src: "../assets/audio/One-Metallica.mp3",
    question: "What Band play this song?",
    answers: ["METALLICA", "ROMINA POWER", "JUICE WORLD"],
    accepted: "METALLICA",
  },
  {
    name: "sudinoi",
    src: "../assets/audio/Su Di Noi-Pupo.mp3",
    question: "What Band play this song?",
    answers: ["ACDC", "PUPO", "GORILLAZ"],
    accepted: "PUPO",
  },
];

startButton.innerText = "START GAME";
startButton.classList.add("startButton");
questionContainer.appendChild(startButton);
displayTimer.style.opacity = 0;
buttonQuiz1.style.opacity = 0;
buttonQuiz2.style.opacity = 0;
buttonQuiz3.style.opacity = 0;
question.style.opacity = 0;
startButton.addEventListener("click", () => {
  displayTimer.style.opacity = 1;
  buttonQuiz1.style.opacity = 1;
  buttonQuiz2.style.opacity = 1;
  buttonQuiz3.style.opacity = 1;
  question.style.opacity = 1;
  startButton.style.opacity = 0;
  i = 0;
  interval = setInterval(() => {
    displayTimer.innerHTML = timer;
    timer--;

    if (timer < 0) {
      timer = 30;
      i++;

      if (i >= quizArray.length) {
        endGame();
        return;
      }

      songsId.pause();
      songsId.currentTime = 0;

      songsId.src = quizArray[i].src;
      songsId.load();
      songsId.play();

      question.textContent = quizArray[i].question;

      buttonQuiz1.textContent = quizArray[i].answers[0];
      buttonQuiz2.textContent = quizArray[i].answers[1];
      buttonQuiz3.textContent = quizArray[i].answers[2];
    }
  }, 1000);
  songsId.src = quizArray[i].src;
  songsId.load();
  songsId.play();
});
question.textContent = "What Band play this song?";
questionContainer.appendChild(question);
buttonQuiz1.textContent = quizArray[i].answers[0];
buttonQuiz2.textContent = quizArray[i].answers[1];
buttonQuiz3.textContent = quizArray[i].answers[2];
buttonQuiz1.classList.add("quizButton");
buttonQuiz2.classList.add("quizButton");
buttonQuiz3.classList.add("quizButton");
questionContainer.appendChild(buttonQuiz1);
questionContainer.appendChild(buttonQuiz2);
questionContainer.appendChild(buttonQuiz3);
buttonQuiz1.addEventListener("click", function () {
  checkAnswer(buttonQuiz1.textContent);
});
buttonQuiz2.addEventListener("click", function () {
  checkAnswer(buttonQuiz2.textContent);
});
buttonQuiz3.addEventListener("click", function () {
  checkAnswer(buttonQuiz3.textContent);
});
function checkAnswer(selectedAnswer) {
  if (selectedAnswer === quizArray[i].accepted) {
    score++;
    console.log("Good!", score);
  } else {
    console.log("Oh no,try again!");
  }

  i++;
  timer = 30;

  if (i >= quizArray.length) {
    endGame();
    return;
  }

  songsId.pause();
  songsId.currentTime = 0;

  songsId.src = quizArray[i].src;
  songsId.load();
  songsId.play();

  question.textContent = quizArray[i].question;

  buttonQuiz1.textContent = quizArray[i].answers[0];
  buttonQuiz2.textContent = quizArray[i].answers[1];
  buttonQuiz3.textContent = quizArray[i].answers[2];
}

function endGame() {
  songsId.pause();
  songsId.currentTime = 0;
  question.style.opacity = 0;
  buttonQuiz1.style.opacity = 0;
  buttonQuiz2.style.opacity = 0;
  buttonQuiz3.style.opacity = 0;
  displayTimer.style.opacity = 0;
  const endMessage = document.createElement("h2");
  questionContainer.appendChild(endMessage);
  localStorage.setItem("score", score);
  localStorage.setItem("total", quizArray.length);
}
