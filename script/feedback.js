let starSection = document.getElementById("iconsContainer");
const createStar = () => {
  for (let i = 0; i < 10; i++) {
    starSection.innerHTML += `<img src="./assets/star.svg" alt="star" id="star-${i + 1}" class="stars" onclick="feedbackValue(${i})" onmouseover="selectStars(${i})" onmouseout="unselectStars(${i})"/>`;
  }
};

createStar();
const selectStars = (n) => {
  for (let i = 0; i <= n; i++) {
    document.getElementById(`star-${i + 1}`).classList.add("brightness-stars");
  }
  for (let i = 9; i > n; i--) {
    document
      .getElementById(`star-${i + 1}`)
      .classList.remove("brightness-stars");
  }
};

const unselectStars = (n) => {
  for (let i = 0; i <= n; i++) {
    document
      .getElementById(`star-${i + 1}`)
      .classList.remove("brightness-stars");
  }
};

let feedbackValueResult = 0;

const feedbackValue = (n) => {
  if (n === -1) {
    for (let i = 9; i > n; i--) {
      document
        .getElementById(`star-${i + 1}`)
        .classList.remove("clicked-stars");
    }
  } else {
    for (let i = 0; i <= n; i++) {
      document.getElementById(`star-${i + 1}`).classList.add("clicked-stars");
    }
    for (let i = 9; i > n; i--) {
      document
        .getElementById(`star-${i + 1}`)
        .classList.remove("clicked-stars");
    }
    feedbackValueResult = n + 1;
    return n + 1;
  }
};
const formFeedback = document.getElementById("open-feedback");
formFeedback.addEventListener("submit", function (e) {
  const inputFeedbackValue = document.getElementById("input-feedback").value;
  console.log("Il voto al quiz è stato:", feedbackValueResult);
  console.log("Il commento al quiz è stato:", inputFeedbackValue);
  formFeedback.reset();
  feedbackValue(-1);
  localStorage.clear();
});
