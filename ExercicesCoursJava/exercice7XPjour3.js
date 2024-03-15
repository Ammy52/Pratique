const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Trier les noms par ordre alphabétique
const sortedNames = names.sort();

// Prendre la première lettre de chaque nom et concaténer
let secretSocietyName = "";
for (let name of sortedNames) {
  secretSocietyName += name[0];
}

console.log("Le nom de leur société secrète est :", secretSocietyName);
