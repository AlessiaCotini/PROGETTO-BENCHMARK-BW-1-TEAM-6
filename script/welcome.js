window.onload = function () {
  if (sessionStorage.getItem("quiz_annullato") === "true") {
    alert("Hai lasciato la pagina del quiz! Il tentativo è stato annullato.");
    sessionStorage.removeItem("quiz_annullato");
  }
};
