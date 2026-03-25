const songsId = document.getElementById("songsId")
let i = 0
const playBtn = document.getElementById("playBtn")
const pauseBtn = document.getElementById("pauseBtn")
const seekbar = document.getElementById("seekbar")
const buttonQuiz1 = document.createElement("button")
const buttonQuiz2 = document.createElement("button")
const buttonQuiz3 = document.createElement("button")

const questionContainer = document.getElementById("questionContainer")
const startButton = document.createElement("button")

const displayTimer = document.getElementById("timerText")
const circle = document.getElementById("progressCircle")

const question = document.createElement("h3")
const nextButton = document.getElementById("nextButton")
const readyTitle = document.getElementById("readyTitle")
const timerContainer = document.getElementById("timerContainer")
let timer = 30
let interval
let score = 0

const radius = 50
const circumference = 2 * Math.PI * radius

circle.style.strokeDasharray = circumference
circle.style.strokeDashoffset = circumference

const updateCircle = (timeLeft) => {
  const progress = timeLeft / 30
  circle.style.strokeDashoffset = circumference * (1 - progress)
}

const footer = document.getElementById("footer")
const updateCounter = () => {
  footer.innerHTML = `
      <div>
        <p>
          Questions ${i + 1}/${quizArray.length}
        </p>
      </div>`
}

let easyValue = false
let hardValue = false
const easyButton = () => (easyValue = true)
const hardButton = () => (hardValue = true)

const quizArrayEasy = [
  {
    name: "billiejean",
    src: "../assets/audio/billie jean-europe.mp3",
    question: "What Band Plays This Song?",
    answers: ["MICHAEL JACKSON", "MANU CHAO", "YUNGBULD"],
    accepted: "MICHAEL JACKSON",
  },
  {
    name: "bohemianrapsody",
    src: "../assets/audio/bohemianrapsody-queen.mp3",
    question: "What Band Plays This Song?",
    answers: ["MACHINE GUN KELLY", "QUEEN", "WITNEY"],
    accepted: "QUEEN",
  },
  {
    name: "themonster",
    src: "../assets/audio/the monster-rih eminem.mp3",
    question: "What Band Plays This Song?",
    answers: ["ALBANO", "EMINEM-RIHANNA", "BOB MARLEY"],
    accepted: "EMINEM-RIHANNA",
  },
  {
    name: "diamonds",
    src: "../assets/audio/diamonds-rihanna.mp3",
    question: "What Band Plays This Song?",
    answers: ["CARL COX", "RIHANNA", "LUCIO CORSI"],
    accepted: "RIHANNA",
  },
  {
    name: "heroes",
    src: "../assets/audio/heroes-david bowie.mp3",
    question: "What Band Plays This Song?",
    answers: ["MICHAEL JACKSON", "NINA KRAVIZ", "DAVID BOWIE"],
    accepted: "DAVID BOWIE",
  },
  {
    name: "highwaytohell",
    src: "../assets/audio/high way to hell-acdc.mp3",
    question: "What Band Plays This Song?",
    answers: ["NOTORIUS B.I.G.", "ACDC", "MINA"],
    accepted: "ACDC",
  },
  {
    name: "imissu",
    src: "../assets/audio/i miss u -blink.mp3",
    question: "What Band Plays This Song?",
    answers: ["SNOOP DOG", "BLINK-182", "WAVES"],
    accepted: "BLINK-182",
  },
  {
    name: "intheend",
    src: "../assets/audio/in the end-linkin.mp3",
    question: "What Band Plays This Song?",
    answers: ["MACKLEMORE", "LINKIN PARK", "METALLICA"],
    accepted: "LINKIN PARK",
  },
  {
    name: "she",
    src: "../assets/audio/she-green day.mp3",
    question: "What Band Plays This Song?",
    answers: ["SIMPLE PLAN", "GREEN DAY", "SUM 41"],
    accepted: "GREEN DAY",
  },
  {
    name: "starship",
    src: "../assets/audio/starships-nicky minaj.mp3",
    question: "What Band Plays This Song?",
    answers: ["BEYONCE", "SHAKIRA", "NICKY MINAJ"],
    accepted: "NICKY MINAJ",
  },
]
const quizArrayHard = [
  {
    name: "bittersweetsymphony",
    src: "../assets/audio/Bitter Sweet Siymphony- The verve.mp3",
    question: "What Band Plays This Song?",
    answers: ["THE VERVE", "GAZZELLE", "YUNGBULD"],
    accepted: "THE VERVE",
  },
  {
    name: "bloodyvalentine",
    src: "../assets/audio/Bloody Valentine- MGK.mp3",
    question: "What Band Plays This Song?",
    answers: ["MACE", "MGK", "KASABIAN"],
    accepted: "MGK",
  },
  {
    name: "californication",
    src: "../assets/audio/Californication- Red Hot Chili Peppers.mp3",
    question: "What Band Plays This Song?",
    answers: ["RED HOT CHILI PEPPERS", "AVRIL LAVIGNE", "GODDAMN"],
    accepted: "RED HOT CHILI PEPPERS",
  },
  {
    name: "changes",
    src: "../assets/audio/Changes-2Pac.mp3",
    question: "What Band Plays This Song?",
    answers: ["LUCIO BATTISTI", "NIRVANA", "2PAC"],
    accepted: "2PAC",
  },
  {
    name: "clocks",
    src: "../assets/audio/Clocks-Coldplay.mp3",
    question: "What Band Plays This Song?",
    answers: ["BEYONCE", "LUCIO DALLA", "COLDPLAY"],
    accepted: "COLDPLAY",
  },
  {
    name: "iloveyou",
    src: "../assets/audio/I Love You-Fontaines DC.mp3",
    question: "What Band Plays This Song?",
    answers: ["PIXIES", "FONTAINES D.C.", "GREEN DAY"],
    accepted: "FONTAINES D.C.",
  },
  {
    name: "iris",
    src: "../assets/audio/Iris-Goo Goo Dolls (1).mp3",
    question: "What Band Plays This Song?",
    answers: ["GOO GOO DOLLS", "GORILLAZ", "MIA MARTINI"],
    accepted: "GOO GOO DOLLS",
  },
  {
    name: "mywholeworld",
    src: "../assets/audio/My Whole World-GDFRND.mp3",
    question: "What Band Plays This Song?",
    answers: ["LAURA PAUSINI", "GOOD FRIENDS", "GDFRND"],
    accepted: "GDFRND",
  },
  {
    name: "one",
    src: "../assets/audio/One-Metallica.mp3",
    question: "What Band Plays This Song?",
    answers: ["METALLICA", "ROMINA POWER", "JUICE WORLD"],
    accepted: "METALLICA",
  },
  {
    name: "sudinoi",
    src: "../assets/audio/Su Di Noi-Pupo.mp3",
    question: "What Band Plays This Song?",
    answers: ["ACDC", "PUPO", "GORILLAZ"],
    accepted: "PUPO",
  },
]

let quizArray = []

if (easyValue && hardValue) {
  quizArray = quizArrayHard.concat(quizArrayEasy)
} else if (hardValue) {
  quizArray = quizArrayHard
} else {
  quizArray = quizArrayEasy
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
shuffle(quizArray)
startButton.innerText = "Let's GOOO!!"
startButton.classList.add("startButton")
questionContainer.appendChild(startButton)
displayTimer.style.opacity = 0
buttonQuiz1.style.opacity = 0
buttonQuiz2.style.opacity = 0
buttonQuiz3.style.opacity = 0
question.style.opacity = 0
nextButton.style.opacity = 0
readyTitle.style.opacity = 1
timerContainer.style.opacity = 0
playBtn.style.opacity = 0
pauseBtn.style.opacity = 0
seekbar.style.opacity = 0

startButton.addEventListener("click", () => {
  displayTimer.style.opacity = 1
  buttonQuiz1.style.opacity = 1
  buttonQuiz2.style.opacity = 1
  buttonQuiz3.style.opacity = 1
  question.style.opacity = 1
  startButton.style.opacity = 0
  readyTitle.style.opacity = 0
  timerContainer.style.opacity = 1

  i = 0
  timer = 30
  updateCircle(timer)

  interval = setInterval(() => {
    displayTimer.textContent = timer
    updateCircle(timer)

    if (timer <= 10) {
      circle.style.stroke = "red"
    } else {
      circle.style.stroke = "#00FFFF"
    }

    timer--

    if (timer < 0) {
      timer = 30
      updateCircle(timer)
      i++

      if (i >= quizArray.length) {
        endGame()
        return
      }

      loadQuestion()
      updateCounter()
    }
  }, 1000)

  loadQuestion()
  updateCounter()
})

function loadQuestion() {
  playBtn.style.opacity = 1
  pauseBtn.style.opacity = 1
  seekbar.style.opacity = 1
  songsId.pause()
  songsId.currentTime = 0

  songsId.src = quizArray[i].src
  songsId.load()
  songsId.play()

  question.textContent = quizArray[i].question

  buttonQuiz1.textContent = quizArray[i].answers[0]
  buttonQuiz2.textContent = quizArray[i].answers[1]
  buttonQuiz3.textContent = quizArray[i].answers[2]

  playBtn.addEventListener("click", () => {
    songsId.play()
  })

  pauseBtn.addEventListener("click", () => {
    songsId.pause()
  })
  songsId.addEventListener("timeupdate", () => {
    const progress = (songsId.currentTime / songsId.duration) * 100
    seekbar.value = progress || 0
  })
  seekbar.addEventListener("click", (e) => {
    const rect = seekbar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const width = rect.width

    const percentage = clickX / width
    songsId.currentTime = percentage * songsId.duration
  })
}

question.textContent = "What Band Plays This Song?"
questionContainer.appendChild(question)
const gif = document.createElement("img")
gif.src = "../assets/mxjfiles-soundwave-23744.gif"
gif.alt = "waves"
gif.style.display = "block"
gif.style.margin = "0px auto"
questionContainer.appendChild(gif)
buttonQuiz1.classList.add("quizButton")
buttonQuiz2.classList.add("quizButton")
buttonQuiz3.classList.add("quizButton")

questionContainer.appendChild(buttonQuiz1)
questionContainer.appendChild(buttonQuiz2)
questionContainer.appendChild(buttonQuiz3)

buttonQuiz1.addEventListener("click", () =>
  checkAnswer(buttonQuiz1.textContent),
)
buttonQuiz2.addEventListener("click", () =>
  checkAnswer(buttonQuiz2.textContent),
)
buttonQuiz3.addEventListener("click", () =>
  checkAnswer(buttonQuiz3.textContent),
)

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === quizArray[i].accepted) {
    score++
    console.log("Good!", score)
  } else {
    console.log("Wrong!")
  }

  i++
  timer = 30
  updateCircle(timer)

  if (i >= quizArray.length) {
    endGame()
    return
  }

  loadQuestion()
  updateCounter()
}

function endGame() {
  clearInterval(interval)

  songsId.pause()
  songsId.currentTime = 0

  question.style.opacity = 0
  buttonQuiz1.style.opacity = 0
  buttonQuiz2.style.opacity = 0
  buttonQuiz3.style.opacity = 0
  displayTimer.style.opacity = 0
  timerContainer.style.opacity = 0
  playBtn.style.opacity = 0
  pauseBtn.style.opacity = 0
  seekbar.style.opacity = 0

  const endMessage = document.createElement("h2")
  questionContainer.appendChild(endMessage)

  localStorage.setItem("score", score)
  localStorage.setItem("total", quizArray.length)

  nextButton.style.opacity = 1
}
