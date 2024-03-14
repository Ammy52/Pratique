// Inviter l'utilisateur à saisir un numéro et le stocker dans une variable
let numero = parseInt(prompt("Entrez un numéro :"));

// Vérifier si le numéro est pair ou impair
if (numero % 2 === 0) {
    // Si le numéro est pair
    console.log(numero + " est un nombre pair.");
} else {
    // Si le numéro est impair
    console.log(numero + " est un nombre impair.");
}
