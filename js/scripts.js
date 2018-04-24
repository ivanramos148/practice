function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

function Player() {
  this.roll = 0;
  this.currentScore = 0;
  this.permaScore = 0;
}
Player.prototype.playerRoll = function() {
  if (this.roll == 1) {
    this.currentScore = 0;
  } else {
    this.currentScore += this.roll;
  }
}
Player.prototype.playerHold = function() {
  this.permaScore += this.currentScore
  this.currentScore = 0
  // $('#playerOneRoll').fadeOut();
}
Player.prototype.winChecker = function() {
  if(this.permaScore >= 100){
    alert('you win!');
  }
}
//User Interface
$(document).ready(function() {
  var playerOne = new Player
  var playerTwo = new Player
  $("#playerOneRoll").submit(function(event) {
    $("#answers").empty('');
    event.preventDefault();
    playerOne.roll = diceRoll();
    playerOne.playerRoll();
    $("#answers").append(playerOne.currentScore + ' ' + playerOne.roll)
  });
  $("#playerOneHold").submit(function(event) {
    $("#playerHold").empty('')
    event.preventDefault();
    playerOne.playerHold();
    playerOne.winChecker();
    $("#playerHold").append(playerOne.permaScore)
  });
});
