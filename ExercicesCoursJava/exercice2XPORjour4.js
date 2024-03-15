function abbrevName(name) {
    const words = name.split(' ');
    const abbreviated = words.map(word => word[0].toUpperCase() + '.').join(' ');
    return abbreviated.trim();
  }
  
  console.log(abbrevName("Robin Singh")); // ca affiche "Robin S."
  