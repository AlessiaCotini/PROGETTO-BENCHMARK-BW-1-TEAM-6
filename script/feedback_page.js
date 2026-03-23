let starSection = document.getElementById("iconsContainer")
const createStar = () => {
  for (let i = 0; i < 10; i++) {
    starSection.innerHTML += `<img src="./assets/star.svg" alt="star" id="star-${i + 1}" class="stars" onclick="feedbackValue(${i})" onmouseover="selectStars(${i})" onmouseout="unselectStars(${i})"/>`
  }
}

createStar()

// funzione per colorare stelline

const selectStars = (n) => {
  for (let i = 0; i <= n; i++) {
    document.getElementById(`star-${i + 1}`).classList.add("brightness-stars")
  }
  for (let i = 9; i > n; i--) {
    document
      .getElementById(`star-${i + 1}`)
      .classList.remove("brightness-stars")
  }
}

const unselectStars = (n) => {
  for (let i = 0; i <= n; i++) {
    document
      .getElementById(`star-${i + 1}`)
      .classList.remove("brightness-stars")
  }
}

// click che applica la funnzione e salva il voto

const feedbackValue = (n) => {
  for (let i = 0; i <= n; i++) {
    document.getElementById(`star-${i + 1}`).classList.add("clicked-stars")
  }
  for (let i = 9; i > n; i--) {
    document.getElementById(`star-${i + 1}`).classList.remove("clicked-stars")
  }
  console.log(n + 1)
  return n + 1
}

// form per tutti gli input
