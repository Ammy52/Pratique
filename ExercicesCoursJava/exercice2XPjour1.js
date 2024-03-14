// Partie I
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Création de myWatchedSeriesLength
const myWatchedSeriesLength = myWatchedSeries.length;

// Création de myWatchedSeriesSentence
const myWatchedSeriesSentence = myWatchedSeries.join(", ").replace(/,([^,]*)$/, ' and$1');

// Afficher la phrase avec console.log()
console.log("I watched " + myWatchedSeriesLength + " series: " + myWatchedSeriesSentence + ".");

// Partie II
// Remplacer "The Big Bang Theory" par "Friends"
const indexTBBT = myWatchedSeries.indexOf("the big bang theory");
if (indexTBBT !== -1) {
    myWatchedSeries[indexTBBT] = "Friends";
}

// Ajout d'une autre série à la fin du tableau
myWatchedSeries.push("La dame et le dragon");

// Ajout de la série préférée au début du tableau
myWatchedSeries.unshift("50 Nuances de Grey");

// Supprimer la série "black mirror"
const indexBlackMirror = myWatchedSeries.indexOf("black mirror");
if (indexBlackMirror !== -1) {
    myWatchedSeries.splice(indexBlackMirror, 1);
}

// Afficher la troisième lettre de la série "Money Heist"
const thirdLetter = myWatchedSeries[myWatchedSeries.indexOf("money heist")][2];
console.log("The third letter of Money Heist is: " + thirdLetter);

// Afficher le tableau après toutes les modifications
console.log(myWatchedSeries);