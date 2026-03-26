window.onload = function () {
  if (sessionStorage.getItem("quiz_annullato") === "true") {
    alert("Hai lasciato la pagina del quiz! Il tentativo è stato annullato.");
    // Importante: rimuovi il segnale così l'alert non compare a ogni refresh
    sessionStorage.removeItem("quiz_annullato");
  }
};
