var start = document.getElementById("start");
  start.onclick = function() {
    var userName = prompt("What is your name?");
    document.getElementById("start").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
    player.name = userName;
    startGame();
  }

var player = {
  name: "",
  health: 40,
  wins: 0,
  healCount: 0,
  playerAttackDamage: function() {
    return (Math.floor(Math.random() * 3) + 1);
  },
  healing: function (){
    this.health += (Math.floor(Math.random() * 10) + 1);
  }
}

var comp = {
  name: "The All Mighty Grant",
  health: 10,
  grantAttackDamage: function() {
    return (Math.floor(Math.random() * 5) + 1);
  }
}

//shows the players health by number.
function startGame() {
  document.getElementsByClassName("playerName").innerHTML = player.name;
  document.getElementById("playerScore").innerHTML = player.health;
  document.getElementById("grantSpan").innerHTML = comp.health;
var startAttack = document.getElementById("attack");
startAttack.onclick = function() {
  player.health -= comp.grantAttackDamage();
  comp.health -= player.playerAttackDamage();
  if (comp.health <= 0 && player.health >= 0) {
      comp.health = 10;
      player.wins++;
      document.getElementById("wins").value = player.wins;
      console.log(player.wins);
    }

    if (player.wins === 5 && player.health >= 0) {
        alert("You win!");
        document.getElementById("start").style.display = "block";
        document.getElementById("secondPage").style.display = "none";
      }

    if (player.health <=0 && player.wins !==5) {
        alert("Game over! You lost!");
        document.getElementById("start").style.display = "block";
        document.getElementById("secondPage").style.display = "none";
    }
    document.getElementById("healthBar").value = player.health;
    document.getElementById("grantHealthBar").value = comp.health;
    document.getElementById("name").innerHTML = player.name;
    document.getElementById("playerScore").innerHTML = player.health;
    document.getElementById("grantSpan").innerHTML = comp.health;
  }
}




// healing
var healing = document.getElementById("heal");
healing.onclick = function(){
  if (player.healCount <=1) {
    player.healing();
    document.getElementById("healCount").value = (player.healCount++);
    document.getElementById("playerScore").innerHTML = player.health;
  }
}

// end game
var quit = document.getElementById("quit")
quit.onclick = function() {
  alert("Game Over!")
  document.getElementById("start").style.display = "block";
  document.getElementById("secondPage").style.display = "none";
  player.health = 40;
  comp.health = 10;
}
