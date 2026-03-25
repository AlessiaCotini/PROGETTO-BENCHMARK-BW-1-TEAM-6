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
    labels: ["Wrong", "Correct"],
    datasets: [
      {
        data: [wrong, correct],
        backgroundColor: ["#C2128D ", "#00FFFF"],
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

correctAnswer.innerHTML =
  "<h2>Correct: </h2>" + " " + (correct * 100) / total + "%";
wrongAnswer.innerHTML = "<h2>Wrong: </h2>" + " " + (wrong * 100) / total + "%";
