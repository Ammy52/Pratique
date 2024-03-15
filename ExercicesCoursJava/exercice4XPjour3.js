const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

// Console.log le nombre d'étages du bâtiment
console.log("Nombre d'étages du bâtiment:", building.numberOfFloors);

// Console.log combien d'appartements se trouvent aux étages 1 et 3
console.log("Nombre d'appartements au premier étage:", building.numberOfAptByFloor.firstFloor);
console.log("Nombre d'appartements au troisième étage:", building.numberOfAptByFloor.thirdFloor);

// Console.log le nom du deuxième locataire et le nombre de pièces qu'il possède dans son appartement
const secondTenant = building.nameOfTenants[1];
const roomsOfSecondTenant = building.numberOfRoomsAndRent[secondTenant][0];
console.log("Nom du deuxième locataire:", secondTenant);
console.log("Nombre de pièces dans son appartement:", roomsOfSecondTenant);

// Vérifiez si la somme du loyer de Sarah et David est supérieure à celle de Dan
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Le loyer de Dan a été augmenté à 1200.");
} else {
    console.log("Le loyer de Dan n'a pas été augmenté.");
}

console.log("Le nouveau loyer de Dan:", building.numberOfRoomsAndRent.dan[1]);
