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
        backgroundColor: ["#C2128D", "#00FFFF"],
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
  "<h2>Correct: </h2>" + " " + ((correct * 100) / total).toFixed(2) + "%";
wrongAnswer.innerHTML =
  "<h2>Wrong: </h2>" + " " + ((wrong * 100) / total).toFixed(2) + "%";

const erroriSalvati = JSON.parse(localStorage.getItem("errors")) || [];
const resultsId = document.getElementById("resultsId");

if (erroriSalvati.length === 0) {
  resultsId.innerHTML = "<p>You Are a PRO! 🏆</p>";
} else {
  let html = "<h3>Wrong Answers 😒:</h3><ul>";
  erroriSalvati.forEach((e) => {
    html += `<li>
               <strong>${e.question}</strong><br>
               Your Choice: <span style="color:red">${e.yourChoice}</span> 🔴<br>
               Correct Choice: <span style="color:green">${e.rightChoice}</span> 🟢
             </li>`;
  });
  html += "</ul>";
  resultsId.innerHTML = html;
}
const retryBtn = document.createElement("button");
retryBtn.classList.add("retryBtn");
retryBtn.textContent = "RETRY 🤘🏽";
retryBtn.style.marginTop = "20px";
retryBtn.style.padding = "10px 20px";
retryBtn.style.fontSize = "16px";
retryBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "quiz.html";
});
resultsId.appendChild(retryBtn);
