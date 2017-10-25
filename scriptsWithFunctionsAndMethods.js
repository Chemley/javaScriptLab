function game() {
  var choice = prompt("Defeat The All Mighity Grant! Type 'yes' or 'no' to play!");
  if (choice.toLowerCase() === "yes") {
    var userName = prompt("What is your name?");
    console.log("Excellent! Welcome " + userName + "!");
    startCombat(userName);
  } else {
    console.log("Goodbye!");
  }
}
game ();
//The playerAttackDamage & grantAttackDamage functions only needs to retun the math equation that you need to deal the damage.

// starts the game
function startCombat(playerName) {
var user = {
  health: 40,
  heal: 2,
  gamesWon: 0,
  playerAttackDamage: function(){
    return (Math.floor(Math.random() * 3) + 1);
  },
  healing: function (){
    return (Math.floor(Math.random() * 10) + 1);
  }
};

var comp = {
  name: "The All Mighity Grant",
  lives: 10,
  grantAttackDamage: function(){
    return (Math.floor(Math.random() * 3) + 1);
  }
};

//While loop is nested in the game so it will loop only for the game.
while (comp.lives > 0 && user.health > 0) {
  var playGame = prompt("Do you want to attack or quit? Type 'attack,' 'heal,' or 'quit.'");
  if (playGame.toLowerCase() === "attack") {
      if (comp.lives >= 0){
        comp.lives -= comp.grantAttackDamage();
        user.health -= user.playerAttackDamage();
        console.log(playerName + " score is " + user.health);
        console.log(comp.name + " score is " + comp.lives);
      }
      if (comp.lives <= 0) {
        user.gamesWon = user.gamesWon + 1;
        console.log("You won " + user.gamesWon + " games!");
        comp.lives +=10;
      }
      if (user.gamesWon === 5) {
        console.log("You defeated grant!");
        // To get it to stop running use null because the variable grantLives is looped to add 10 when it reaches zero. as a backup used break to stop the loop
        comp.lives = null;
        break;
      }
      if (user.health <= 0 && user.gamesWon !== 5) {
        console.log(comp.name + " is our winner. Better luck next time!")
      }
  } else if (playGame.toLowerCase() === "heal") {
    if (user.heal > 0) {
      user.heal -=1;
      user.health +=user.healing();
      console.log("You can heal " + user.heal + " more time. Your new health is " + user.health + ".");
    } else {
      console.log("Use what you've got! There ain't none here.");
    }
// quits the game if the user types in quit. The break is a backup so the loop will stop running.
  } else {
    console.log("Goodbye!");
    break;
    }
  }
}
