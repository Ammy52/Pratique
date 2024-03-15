const famille = {
    nom: "Smith",
    membres: 4,
    ville: "Paris",
    animaux: ["chat", "chien"]
  };
  
  // Afficher les clés de l'objet famille
  console.log("Clés de l'objet famille :");
  for (let key in famille) {
    console.log(key);
  }
  
  // Afficher les valeurs de l'objet famille
  console.log("Valeurs de l'objet famille :");
  for (let key in famille) {
    console.log(famille[key]);
  }
  