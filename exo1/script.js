function afficherHeure(ville, decalage) {
    const maintenant = new Date();
    const heureLocale = new Date(maintenant.getTime() + decalage * 60 * 60 * 1000);
    
    console.log(`Heure actuelle à ${ville}: ${heureLocale.toLocaleTimeString()}`);
  }
  
  afficherHeure("Ancrage (États-Unis)", -9);
  afficherHeure("Reykjavik (Islande)", 0);
  afficherHeure("Saint-Pétersbourg (Russie)", 3);
  afficherHeure("Bruxelles (Belgique)", 1);
