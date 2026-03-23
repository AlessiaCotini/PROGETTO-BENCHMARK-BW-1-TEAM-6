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
const quizArray = [
  {
    name: "bittersweetsymphony",
    src: "../assets/audio/Bitter Sweet Siymphony- The verve.mp3",
    question: `What Band play this song?`,
    accepted: "THE VERVE",
    dontacc: "GAZZELLE",
    tre: "YUNGBULD",
  },
  {
    name: "bloodyvalentine",
    src: "../assets/audio/Bloody Valentine- MGK.mp3",
    question: `What Band play this song?`,
    uno: "MACE",
    accepted: "MGK",
    dontacc: "KASABIAN",
  },
  {
    name: "californication",
    src: "../assets/audio/Californication- Red Hot Chili Peppers.mp3",
    question: `What Band play this song?`,
    accepted: "RED HOT CHILI PEPPERS",
    dontacc: "AVRIL LAVIGNE",
    tre: "GODDAMN",
  },
  {
    name: "changes",
    src: "../assets/audio/Changes-2Pac.mp3",
    question: `What Band play this song?`,
    dontacc: "LUCIO BATTISTI",
    due: "NIRVANA",
    accepted: "2PAC",
  },
  {
    name: "clocks",
    src: "../assets/audio/Clocks-Coldplay.mp3",
    question: `What Band play this song?`,
    dontacc: "BEYONCE",
    due: "LUCIO DALLA",
    accepted: "COLDPLAY",
  },
  {
    name: "iloveyou",
    src: "../assets/audio/I Love You-Fontaines DC.mp3",
    question: `What Band play this song?`,
    dontacc: "PIXIES",
    accepted: "FONTAINES D.C.",
    tre: "GREEN DAY",
  },
  {
    name: "iris",
    src: "../assets/audio/Iris-Goo Goo Dolls (1).mp3",
    question: `What Band play this song?`,
    accepted: "GOO GOO DOLLS",
    dontacc: "GORILLAZ",
    tre: "MIA MARTINI",
  },
  {
    name: "mywholeworld",
    src: "../assets/audio/My Whole World-GDFRND.mp3",
    question: `What Band play this song?`,
    uno: "LAURA PAUSINI",
    dontacc: "GOOD FRIENDS",
    accepted: "GDFRND",
  },
  {
    name: "one",
    src: "../assets/audio/One-Metallica.mp3",
    question: `What Band play this song?`,
    accepted: "METALLICA",
    due: "ROMINA POWER",
    dontacc: "JUICE WORLD",
  },
  {
    name: "sudinoi",
    src: "../assets/audio/Su Di Noi-Pupo.mp3",
    question: `What Band play this song?`,
    dontepted: "ACDC",
    accepted: "PUPO",
    dontacc: "GORILLAZ",
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

  let interval = setInterval(() => {
    displayTimer.innerHTML = timer;
    timer--;
    if (timer < 0) {
      timer = 30;
      i++;
      songsId.pause();
      songsId.currentTime = 0;
      songsId.src = quizArray[i].src;
      buttonQuiz1.textContent = Object.values(quizArray[i])[3];
      buttonQuiz2.textContent = Object.values(quizArray[i])[4];
      buttonQuiz3.textContent = Object.values(quizArray[i])[5];
      songsId.load();
      songsId.play();
    }
  }, 1000);
  songsId.src = quizArray[i].src;
  songsId.load();
  songsId.play();
});

question.textContent = "What Band play this song?";
questionContainer.appendChild(question);

buttonQuiz1.textContent = Object.values(quizArray[i])[3];
buttonQuiz2.textContent = Object.values(quizArray[i])[4];
buttonQuiz3.textContent = Object.values(quizArray[i])[5];
buttonQuiz1.classList.add("quizButton");
buttonQuiz2.classList.add("quizButton");
buttonQuiz3.classList.add("quizButton");
questionContainer.appendChild(buttonQuiz1);
questionContainer.appendChild(buttonQuiz2);
questionContainer.appendChild(buttonQuiz3);

buttonQuiz1.addEventListener("click", function () {
  checkAnswer(3);
});
buttonQuiz2.addEventListener("click", function () {
  checkAnswer(4);
});
buttonQuiz3.addEventListener("click", function () {
  checkAnswer(5);
});

function checkAnswer(ee) {
  const currentQuestion = quizArray[i];
  /*songsId.pause();
  songsId.currentTime = 0;
  songsId.src = quizArray[i].src;
  buttonQuiz1.textContent = Object.values(quizArray[i])[3];
  buttonQuiz2.textContent = Object.values(quizArray[i])[4];
  buttonQuiz3.textContent = Object.values(quizArray[i])[5];
  songsId.load();
  songsId.play();*/
  if (Object.keys(quizArray[i])[ee] === "accepted") {
    score++;
    console.log("Good choise!", score);
  } else {
    console.log("Oh...no!");
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

  buttonQuiz1.textContent = Object.values(quizArray[i])[3];
  buttonQuiz2.textContent = Object.values(quizArray[i])[4];
  buttonQuiz3.textContent = Object.values(quizArray[i])[5];

  songsId.load();
  songsId.play();
}
/*
songsId.src = quizArray[i].src;
songsId.load();
songsId.play();*/

/*
document.getElementById("scoreContainer").innerHTML = "Score: " + score;
function endGame() {
  songsId.pause();
  alert(`Hai fatto ${score} su ${quizArray.length}`);
}*/
