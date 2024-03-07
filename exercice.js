/*Exercice 1 pour le jour 2 de Java*/
              
/*Instructions const people = ["Greg", "Mary", "Devon", "James"];*/

/*Partie I */

/*Sup Greg*/
people.shift();

/*Rempl James par Jason*/
const indexJames = people.indexOf("James");
people[indexJames] = "Jason";

/*Ajouter mon nom à la fin*/
people.push("Ammy");

/*Afficher Mary*/
console.log("Index de Mary:", people.indexOf("Mary"));

/*Copie du tableau sans "Mary" ni Ammy*/
const peopleCopy = people.slice(1, -1);

/*Affiche l'index de Foo */
console.log("Index de Foo:", people.indexOf("Foo"));

/*Cré une variable last pour stocker le dernier élément du tableau*/
const last = people[people.length - 1];

/*Partie II */

/*Parcours le tableau et affiche chaq personne*/
for (let person of people) {
  console.log(person);
}

/*Parcours le tableau et quitte la boucle après avoir affiché "Devon"*/
for (let person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}