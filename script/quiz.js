const songsId = document.getElementById("songsId");
let i = 0;
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const seekbar = document.getElementById("seekbar");
const buttonQuiz1 = document.createElement("button");
const buttonQuiz2 = document.createElement("button");
const buttonQuiz3 = document.createElement("button");

const questionContainer = document.getElementById("questionContainer");
const startButton = document.createElement("button");

const displayTimer = document.getElementById("timerText");
const circle = document.getElementById("progressCircle");

const question = document.createElement("h3");
const nextButton = document.getElementById("nextButton");
const readyTitle = document.getElementById("readyTitle");
const timerContainer = document.getElementById("timerContainer");
let timer = 30;
let interval;
let score = 0;

const radius = 50;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

const updateCircle = (timeLeft) => {
  const progress = timeLeft / 30;
  circle.style.strokeDashoffset = circumference * (1 - progress);
};

const footer = document.getElementById("footer");
const updateCounter = () => {
  footer.innerHTML = `
      <div>
        <p>
          Questions ${i + 1}/${quizArray.length}
        </p>
      </div>`;
};

// let easyValue = false;
// let hardValue = false;
// const easyButton = () => {
//   easyValue = true;
//   difficultyArray();
// };
// const hardButton = () => {
//   hardValue = true;
//   difficultyArray();
// };

const quizArrayEasy = [
  {
    name: "billiejean",
    src: "../assets/audio/billie jean-europe.mp3",
    question: "Who Sings This Song?",
    answers: ["MICHAEL JACKSON", "MANU CHAO", "YUNGBULD"],
    accepted: "MICHAEL JACKSON",
  },
  {
    name: "bohemianrapsody",
    src: "../assets/audio/bohemianrapsody-queen.mp3",
    question: "Who Sings This Song?",
    answers: ["MACHINE GUN KELLY", "QUEEN", "WITNEY"],
    accepted: "QUEEN",
  },
  {
    name: "themonster",
    src: "../assets/audio/the monster-rih eminem.mp3",
    question: "Who Sings This Song?",
    answers: ["ALBANO", "EMINEM-RIHANNA", "BOB MARLEY"],
    accepted: "EMINEM-RIHANNA",
  },
  {
    name: "diamonds",
    src: "../assets/audio/diamonds-rihanna.mp3",
    question: "Who Sings This Song?",
    answers: ["CARL COX", "RIHANNA", "LUCIO CORSI"],
    accepted: "RIHANNA",
  },
  {
    name: "heroes",
    src: "../assets/audio/heroes-david bowie.mp3",
    question: "Who Sings This Song?",
    answers: ["MICHAEL JACKSON", "NINA KRAVIZ", "DAVID BOWIE"],
    accepted: "DAVID BOWIE",
  },
  {
    name: "highwaytohell",
    src: "../assets/audio/high way to hell-acdc.mp3",
    question: "Who Sings This Song?",
    answers: ["NOTORIUS B.I.G.", "ACDC", "MINA"],
    accepted: "ACDC",
  },
  {
    name: "imissu",
    src: "../assets/audio/i miss u -blink.mp3",
    question: "Who Sings This Song?",
    answers: ["SNOOP DOG", "BLINK-182", "WAVES"],
    accepted: "BLINK-182",
  },
  {
    name: "intheend",
    src: "../assets/audio/in the end-linkin.mp3",
    question: "Who Sings This Song?",
    answers: ["MACKLEMORE", "LINKIN PARK", "METALLICA"],
    accepted: "LINKIN PARK",
  },
  {
    name: "she",
    src: "../assets/audio/she-green day.mp3",
    question: "Who Sings This Song?",
    answers: ["SIMPLE PLAN", "GREEN DAY", "SUM 41"],
    accepted: "GREEN DAY",
  },
  {
    name: "starship",
    src: "../assets/audio/starships-nicky minaj.mp3",
    question: "Who Sings This Song?",
    answers: ["BEYONCE", "SHAKIRA", "NICKY MINAJ"],
    accepted: "NICKY MINAJ",
  },
];

const quizArrayHard = [
  {
    name: "bittersweetsymphony",
    src: "../assets/audio/Bitter Sweet Siymphony- The verve.mp3",
    question: "Who Sings This Song?",
    answers: ["THE VERVE", "GAZZELLE", "YUNGBULD"],
    accepted: "THE VERVE",
  },
  {
    name: "bloodyvalentine",
    src: "../assets/audio/Bloody Valentine- MGK.mp3",
    question: "Who Sings This Song?",
    answers: ["MACE", "MGK", "KASABIAN"],
    accepted: "MGK",
  },
  {
    name: "californication",
    src: "../assets/audio/Californication- Red Hot Chili Peppers.mp3",
    question: "Who Sings This Song?",
    answers: ["RED HOT CHILI PEPPERS", "AVRIL LAVIGNE", "GODDAMN"],
    accepted: "RED HOT CHILI PEPPERS",
  },
  {
    name: "changes",
    src: "../assets/audio/Changes-2Pac.mp3",
    question: "Who Sings This Song?",
    answers: ["LUCIO BATTISTI", "NIRVANA", "2PAC"],
    accepted: "2PAC",
  },
  {
    name: "clocks",
    src: "../assets/audio/Clocks-Coldplay.mp3",
    question: "Who Sings This Song?",
    answers: ["BEYONCE", "LUCIO DALLA", "COLDPLAY"],
    accepted: "COLDPLAY",
  },
  {
    name: "iloveyou",
    src: "../assets/audio/I Love You-Fontaines DC.mp3",
    question: "Who Sings This Song?",
    answers: ["PIXIES", "FONTAINES D.C.", "GREEN DAY"],
    accepted: "FONTAINES D.C.",
  },
  {
    name: "iris",
    src: "../assets/audio/Iris-Goo Goo Dolls (1).mp3",
    question: "Who Sings This Song?",
    answers: ["GOO GOO DOLLS", "GORILLAZ", "MIA MARTINI"],
    accepted: "GOO GOO DOLLS",
  },
  {
    name: "mywholeworld",
    src: "../assets/audio/My Whole World-GDFRND.mp3",
    question: "Who Sings This Song?",
    answers: ["LAURA PAUSINI", "GOOD FRIENDS", "GDFRND"],
    accepted: "GDFRND",
  },
  {
    name: "one",
    src: "../assets/audio/One-Metallica.mp3",
    question: "Who Sings This Song?",
    answers: ["METALLICA", "ROMINA POWER", "JUICE WORLD"],
    accepted: "METALLICA",
  },
  {
    name: "sudinoi",
    src: "../assets/audio/Su Di Noi-Pupo.mp3",
    question: "Who Sings This Song?",
    answers: ["ACDC", "PUPO", "GORILLAZ"],
    accepted: "PUPO",
  },
];

let quizArray = [];

startButton.addEventListener("click", () => {
  if (quizArray.length === 0) {
    alert("Seleziona almeno una difficoltà!");
    return;
  }
});

const updateDifficulty = () => {
  const isEasy = document.getElementById("easyMode").checked;
  const isHard = document.getElementById("hardMode").checked;
  const isAll = document.getElementById("allMode").checked;

  if (isAll) {
    quizArray = [...quizArrayEasy, ...quizArrayHard];
  } else if (isEasy) {
    quizArray = [...quizArrayEasy];
  } else if (isHard) {
    quizArray = [...quizArrayHard];
  } else {
    quizArray = []; //
  }
  shuffle(quizArray);
  startButton.style.opacity = quizArray.length > 0 ? 1 : 0.5;
  startButton.disabled = quizArray.length === 0;
};

document
  .getElementById("easyMode")
  .addEventListener("change", updateDifficulty);
document
  .getElementById("hardMode")
  .addEventListener("change", updateDifficulty);
document.getElementById("allMode").addEventListener("change", updateDifficulty);

startButton.style.opacity = quizArray.length > 0 ? 1 : 0.5;
startButton.disabled = quizArray.length === 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

startButton.innerText = "Let's GOOO!!";
startButton.classList.add("startButton");
questionContainer.appendChild(startButton);
displayTimer.style.opacity = 0;
buttonQuiz1.style.opacity = 0;
buttonQuiz2.style.opacity = 0;
buttonQuiz3.style.opacity = 0;
question.style.opacity = 0;
nextButton.style.opacity = 0;
readyTitle.style.opacity = 1;
timerContainer.style.opacity = 0;
playBtn.style.opacity = 0;
pauseBtn.style.opacity = 0;
seekbar.style.opacity = 0;

startButton.addEventListener("click", () => {
  displayTimer.style.opacity = 1;
  buttonQuiz1.style.opacity = 1;
  buttonQuiz2.style.opacity = 1;
  buttonQuiz3.style.opacity = 1;
  question.style.opacity = 1;
  startButton.style.opacity = 0;
  readyTitle.style.opacity = 0;
  timerContainer.style.opacity = 1;
  document.getElementById("difficultMode").style.opacity = 0;

  i = 0;
  timer = 30;
  updateCircle(timer);

  interval = setInterval(() => {
    displayTimer.textContent = timer;
    updateCircle(timer);

    if (timer <= 10) {
      circle.style.stroke = "red";
    } else {
      circle.style.stroke = "#00FFFF";
    }

    timer--;

    if (timer < 0) {
      timer = 30;
      updateCircle(timer);
      i++;

      if (i >= quizArray.length) {
        endGame();
        return;
      }

      loadQuestion();
      updateCounter();
    }
  }, 1000);

  loadQuestion();
  updateCounter();
});

function loadQuestion() {
  playBtn.style.opacity = 1;
  pauseBtn.style.opacity = 1;
  seekbar.style.opacity = 1;
  songsId.pause();
  songsId.currentTime = 0;

  songsId.src = quizArray[i].src;
  songsId.load();
  songsId.play();

  question.textContent = quizArray[i].question;

  buttonQuiz1.textContent = quizArray[i].answers[0];
  buttonQuiz2.textContent = quizArray[i].answers[1];
  buttonQuiz3.textContent = quizArray[i].answers[2];

  playBtn.addEventListener("click", () => {
    songsId.play();
  });

  pauseBtn.addEventListener("click", () => {
    songsId.pause();
  });
  songsId.addEventListener("timeupdate", () => {
    const progress = (songsId.currentTime / songsId.duration) * 100;
    seekbar.value = progress || 0;
  });
  seekbar.addEventListener("click", (e) => {
    const rect = seekbar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    const percentage = clickX / width;
    songsId.currentTime = percentage * songsId.duration;
  });
}

question.textContent = "Who Sings This Song?";
questionContainer.appendChild(question);
const gif = document.createElement("img");
gif.src = "../assets/mxjfiles-soundwave-23744.gif";
gif.alt = "waves";
gif.style.display = "block";
gif.style.margin = "0px auto";
questionContainer.appendChild(gif);
buttonQuiz1.classList.add("quizButton");
buttonQuiz2.classList.add("quizButton");
buttonQuiz3.classList.add("quizButton");

questionContainer.appendChild(buttonQuiz1);
questionContainer.appendChild(buttonQuiz2);
questionContainer.appendChild(buttonQuiz3);

buttonQuiz1.addEventListener("click", () =>
  checkAnswer(buttonQuiz1.textContent, buttonQuiz1),
);
buttonQuiz2.addEventListener("click", () =>
  checkAnswer(buttonQuiz2.textContent, buttonQuiz2),
);
buttonQuiz3.addEventListener("click", () =>
  checkAnswer(buttonQuiz3.textContent, buttonQuiz3),
);
let resultsOfQuiz = [];
function checkAnswer(selectedAnswer, buttonClicked) {
  buttonQuiz1.disabled = true;
  buttonQuiz2.disabled = true;
  buttonQuiz3.disabled = true;

  const correctAnswer = quizArray[i].accepted;

  if (selectedAnswer === correctAnswer) {
    score++;
    console.log("Good!", score);
    buttonClicked.style.borderColor = "green";
  } else {
    console.log("Wrong!");
    buttonClicked.style.borderColor = "red";
    resultsOfQuiz.push({
      question: quizArray[i].question,
      yourChoice: selectedAnswer,
      rightChoice: correctAnswer,
    });
    [buttonQuiz1, buttonQuiz2, buttonQuiz3].forEach((btn) => {
      if (btn.textContent === correctAnswer) btn.style.borderColor = "green";
    });
  }
  setTimeout(() => {
    [buttonQuiz1, buttonQuiz2, buttonQuiz3].forEach((btn) => {
      btn.style.borderColor = "";
      btn.disabled = false;
    });

    i++;
    timer = 30;
    updateCircle(timer);

    if (i >= quizArray.length) {
      endGame();
      return;
    }

    loadQuestion();
    updateCounter();
  }, 1000);
}

function endGame() {
  clearInterval(interval);
  songsId.pause();
  songsId.currentTime = 0;
  localStorage.setItem("score", score);
  localStorage.setItem("total", quizArray.length);
  localStorage.setItem("errors", JSON.stringify(resultsOfQuiz));
  question.style.opacity = 0;
  buttonQuiz1.style.opacity = 0;
  buttonQuiz2.style.opacity = 0;
  buttonQuiz3.style.opacity = 0;
  displayTimer.style.opacity = 0;
  timerContainer.style.opacity = 0;
  playBtn.style.opacity = 0;
  pauseBtn.style.opacity = 0;
  seekbar.style.opacity = 0;
  nextButton.style.opacity = 1;
  nextButton.addEventListener("click", () => {
    window.location.href = "results.html";
  });
}

document.addEventListener("visibilitychange", function () {
  if (document.hidden && i < quizArray.length) {
    sessionStorage.setItem("quiz_annullato", "true");
    window.location.replace("welcome.html");
  }
});
