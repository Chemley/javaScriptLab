var start = document.getElementById("start");
  start.onclick = function() {
    var userName = prompt("What is your name?");
    document.getElementById("start").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
  }
