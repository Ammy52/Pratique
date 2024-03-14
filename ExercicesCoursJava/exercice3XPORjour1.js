// Demander à l'utilisateur le premier numéro
let input1 = prompt("Entrez le premier numéro:");

// Convertir le premier nombre en un nombre
let num1 = parseFloat(input1);

// Vérifier le type de la variable num1
console.log(typeof num1); // Il devrait être "number" après la conversion

// Demander à l'utilisateur le deuxième numéro
let input2 = prompt("Entrez le deuxième numéro:");

// Convertir le deuxième nombre en un nombre
let num2 = parseFloat(input2);

// Créer une fonction pour effectuer l'opération choisie
function calculate(operation) {
    let result;
    switch (operation) {
        case "addition":
            result = num1 + num2;
            break;
        case "soustraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Division par zéro !";
            }
            break;
        default:
            result = "Opération non valide";
    }
    return result;
}

// Demander à l'utilisateur de choisir l'opération
let operation = prompt("Choisissez une opération: addition, soustraction, multiplication ou division");

// Calculer le résultat en fonction de l'opération choisie
let result = calculate(operation);

// Afficher le résultat dans une alerte
alert("Le résultat de " + num1 + " " + operation + " " + num2 + " est : " + result);
