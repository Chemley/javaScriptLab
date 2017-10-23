function game() {
  var choice = prompt("Do you want to play? Type 'yes' or 'no.'");
  if (choice.toLowerCase() === "yes") {
    var userName = prompt("What is your name?");
    console.log("Excellent! Welcome " + userName + "!");
    startCombat(userName);
  } else {
    console.log("Goodbye!");
  }
}
game ();
//The getDamage function only needs to retun the math equation that you need to deal the damage.
function getDamage() {
  return (Math.floor(Math.random() * 5) + 1);
  }
// starts the game
function startCombat(name) {
var grantLives = 10;
var playerLives = 40;
var gamesWon = 0;
//While loop is nested in the game so it will loop only for the game.
while (grantLives > 0 && playerLives > 0) {
  var playGame = prompt("Do you want to attack or quit? Type 'attack' or 'quit.'");
  if (playGame.toLowerCase() === "attack") {
      if (grantLives >= 0){
        grantLives -= getDamage();
        playerLives -= getDamage();
        console.log(name + " score is " + playerLives);
        console.log("Grant's score is " + grantLives);
      }
      if (grantLives <= 0) {
        gamesWon = gamesWon + 1;
        console.log("You won " + gamesWon + " games!");
        grantLives +=10;
      }
      if (gamesWon === 3) {
        console.log("You defeated grant!");
        // To get it to stop running use null because the variable grantLives is looped to add 10 when it reaches zero. as a backup used break to stop the loop
        grantLives = null;
        break;
      }
// quits the game if the user types in quit. The break is a backup so the loop will stop running. 
  } else {
    console.log("Goodbye!");
    break;
    }
  }
}
