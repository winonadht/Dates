function joursEcoulesDepuis(date) {
    const horodatageDate = new Date(date).getTime();
    const horodatageActuel = Date.now();
    const differenceMs = horodatageActuel - horodatageDate;
    const joursEcoules = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    return joursEcoules;
  }
  
  const joursDepuisNaissance = joursEcoulesDepuis('1995-09-22');
  console.log(`Nombre de jours écoulés depuis ma date de naissance : ${joursDepuisNaissance} jours.`);