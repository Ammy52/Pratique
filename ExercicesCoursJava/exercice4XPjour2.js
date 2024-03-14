const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// Vérifier le nombre d'utilisateurs connectés à la discussion de groupe
if (users.length === 0) {
    console.log("Personne n'est en ligne.");
} else if (users.length === 1) {
    console.log(users[0] + " est en ligne.");
} else if (users.length === 2) {
    console.log(users[0] + " et " + users[1] + " sont en ligne.");
} else {
    let count = users.length - 2;
    console.log(users[0] + ", " + users[1] + " et " + count + " autres sont en ligne.");
}
