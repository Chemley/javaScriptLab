// Variables for program
var grantLives = 10;
var playerLives = 40;
var choice = prompt("Do you want to play? Type 'yes' or 'no.'");
var gamesWon = 0;

// Gets the username and displays the prompt to play the game.
if (choice === "yes") {
  var userName = prompt("What is your name?");
  console.log("Exellent! Welcome " + userName + "!");

  // While loop to keep it running until the gamesWon variable reaches 3.
  while (grantLives > 0 && playerLives > 0) {
    if (grantLives >= 0){
      grantLives -= (Math.floor(Math.random() * 2) + 1);
      console.log("Grant's score is " + grantLives);
      playerLives -= (Math.floor(Math.random() * 2) + 1);
      console.log(userName + " score is " + playerLives);
    }
    if (grantLives <= 0) {
      gamesWon = gamesWon + 1;
      console.log("You won " + gamesWon + " games!");
      grantLives +=10;
    }
    if (gamesWon === 3) {
      console.log("You defeated grant!");
      // To get it to stop running use null because the variable grantLives is looped to add 10 when it reaches zero.
      grantLives = null;
    }
  }
}

if (choice !== "yes"){
  console.log("Goodbye!");
}
