function calculerHeure() {
  const nombreHeures = parseFloat(
    document.getElementById("nombreHeures").value
  );
  const resultatElement = document.getElementById("resultat");

  if (!isNaN(nombreHeures)) {
    const horodatageFutur = Date.now() + nombreHeures * 60 * 60 * 1000;
    const heureFutur = new Date(horodatageFutur);
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    resultatElement.textContent = `Dans ${nombreHeures} heures, il sera : ${heureFutur.toLocaleString(
      "fr-FR",
      options
    )}`;
  } else {
    resultatElement.textContent = "Veuillez entrer un nombre valide d'heures.";
  }
}

// function futur() {
//   const horodatageNow = Date.now();
//   const horodatageFutur = horodatageNow + 80000 * 60 * 60 * 1000;
//   const heureFutur = new Date(horodatageFutur);
//   const options = { hour: "numeric", minute: "numeric", second: "numeric" };
//   document.getElementById(
//     "futur"
//   ).textContent = `Dans 80 000 heures, il sera : ${heureFutur.toLocaleString(
//     "fr-FR",
//     options
//   )}`;

//   setTimeout(function () {
//     location.reload();
//   }, 3000);
// }
