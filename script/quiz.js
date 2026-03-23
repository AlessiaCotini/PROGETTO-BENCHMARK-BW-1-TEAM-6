songsId = document.getElementById("songsId");
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
    src: "../assets/audio/sudinoi-pupo.mp3",
    question: `What Band play this song?`,
    dontepted: "ACDC",
    accepted: "PUPO",
    dontacc: "GORILLAZ",
  },
];
const questionContainer = document.getElementById("questionContainer");
const buttonQuiz1 = document.createElement("button");
const buttonQuiz2 = document.createElement("button");
const buttonQuiz3 = document.createElement("button");
buttonQuiz1.textContent = Object.values(quizArray[0])[3];
buttonQuiz1.textContent = Object.values(quizArray[0])[4];
buttonQuiz1.textContent = Object.values(quizArray[0])[5];
document.body.appendChild(buttonQuiz1);
document.body.appendChild(buttonQuiz2);
document.body.appendChild(buttonQuiz3);

let i = 0;

songsId.src = quizArray[0].src;
songsId.load();
songsId.play();

setTimeout(() => {
  songsId.pause();
  songsId.currentTime = 0;
}, 20000);
