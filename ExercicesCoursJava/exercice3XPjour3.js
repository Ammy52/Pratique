let userInput;
do {
  userInput = prompt("Entrez un numéro :");
  if (userInput !== null) {
    userInput = parseInt(userInput);
  }
} while (typeof userInput === "number" && userInput < 10);
