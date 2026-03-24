const wrongAnswer = document.getElementById("wrong");
const correctAnswer = document.getElementById("correct");
const doughnut = document.getElementById("cakeResult");

let savedScore = Number(localStorage.getItem("score"));
let total = Number(localStorage.getItem("total"));
let correct = savedScore;
let wrong = total - savedScore;
new Chart(doughnut, {
  type: "doughnut",
  data: {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        data: [correct, wrong],
        backgroundColor: ["#00FFFF", "#C2128D"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

correctAnswer.innerHTML = "<h2>Correct answers</h2>" + " " + correct;
wrongAnswer.innerHTML = "<h2>Wrong answers</h2>" + " " + wrong;
