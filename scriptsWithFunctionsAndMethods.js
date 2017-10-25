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
//The playerAttackDamage & grantAttackDamage functions only needs to retun the math equation that you need to deal the damage.

// starts the game
function startCombat(playerName) {
var user = {
  health: 40,
  heal: 0,
  playerAttackDamage: function(){
    return (Math.floor(Math.random() * 5) + 1);
  },
  healing: function (){
    return (Math.floor(Math.random() * 10) + 1);
  }
};

var comp = {
  name: "All Mighity Grant",
  lives: 10,
  grantAttackDamage: function(){
    return (Math.floor(Math.random() * 3) + 1);
  }
};

//var grantLives = 10;
//var playerLives = 40;
var gamesWon = 0;
//While loop is nested in the game so it will loop only for the game.
while (comp.lives > 0 && user.health > 0) {
  var playGame = prompt("Do you want to attack or quit? Type 'attack' or 'quit.'");
  if (playGame.toLowerCase() === "attack") {
      if (comp.lives >= 0){
        comp.lives -= comp.grantAttackDamage();
        user.health -= user.playerAttackDamage();
        console.log(playerName + " score is " + user.health);
        console.log(comp.name + " score is " + comp.lives);
      }
      if (comp.lives <= 0) {
        gamesWon = gamesWon + 1;
        console.log("You won " + gamesWon + " games!");
        comp.lives +=10;
      }
      if (gamesWon === 3) {
        console.log("You defeated grant!");
        // To get it to stop running use null because the variable grantLives is looped to add 10 when it reaches zero. as a backup used break to stop the loop
        comp.lives = null;
        break;
      }
  } else if (playGame.toLowerCase() === "heal"){
    if (user.heal <= 1) {
      user.heal = user.heal + 1;
      user.health += user.healing();
      console.log("You can heal " + user.heal + " more time.");
    } else if (user.healCount === 2) {
      console.log("Use what you've got! There ain't none here.");
    }
// quits the game if the user types in quit. The break is a backup so the loop will stop running.
  } else {
    console.log("Goodbye!");
    break;
    }
  }
}
