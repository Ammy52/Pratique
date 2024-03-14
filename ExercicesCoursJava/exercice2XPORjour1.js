// 1. Déclarez deux variables contenant des chaînes de caractères
let str1 = "mix";
let str2 = "pod";

// 2. Découpez et échangez les 2 premiers caractères des deux chaînes
let exchangedStr1 = str2.substring(0, 2) + str1.substring(2);
let exchangedStr2 = str1.substring(0, 2) + str2.substring(2);

// 3. Créez une troisième variable contenant la concaténation des deux chaînes
let newWord = exchangedStr1 + " " + exchangedStr2;

// 4. Affichez la nouvelle chaîne concaténée
console.log(newWord); // Le résultat sera 'pox mid'
