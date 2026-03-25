const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.2)";
    img.style.transition = "transform 0.3s ease";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});
