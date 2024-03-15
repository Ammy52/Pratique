const people = ["Greg", "Mary", "Devon", "James"];

// Supprimer "Greg" du tableau
const indexGreg = people.indexOf("Greg");
if (indexGreg !== -1) {
  people.splice(indexGreg, 1);
}

// Remplacer "James" par "Jason"
const indexJames = people.indexOf("James");
if (indexJames !== -1) {
  people[indexJames] = "Jason";
}

// Ajouter votre nom à la fin du tableau
const yourName = "YourName";
people.push(yourName);

// Console.log l'index de Mary
const indexMary = people.indexOf("Mary");
console.log("Index de Mary:", indexMary);

// Faire une copie du tableau sans "Mary" ni votre nom
const peopleCopy = people.slice(1, 3);

// Index de "Foo"
const indexFoo = people.indexOf("Foo");
console.log("Index de Foo:", indexFoo); // Renvoie -1 car "Foo" n'est pas présent 

// Variable last pour le dernier élément du tableau
const last = people[people.length - 1];

// Parcourir le tableau et console.log chaque personne
for (let person of people) {
  console.log(person);
}

// Parcourir le tableau et quitter la boucle après "Devon"
for (let person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}