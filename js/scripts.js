//Business Logic
function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}
function Player(name) {
  this.name = name;
  this.roll = 0;
  this.currentScore = 0;
  this.total = 0;
}
Player.prototype.playerRoll = function() {
  if (this.roll == 1) {
    this.currentScore = 0;
  } else {
    this.currentScore += this.roll;
  }
}
Player.prototype.playerHold = function() {
  this.total += this.currentScore;
}
Player.prototype.setToZero = function() {
  this.currentScore = 0;
  this.roll = 0;
}
Player.prototype.winChecker = function() {
  if (this.total >= 100) {
    alert(this.name + "wins!");
  }
}
Player.prototype.PlayerOneHitsOne = function() {
  if (this.roll == 1) {
    this.roll = 0;
    alert(this.name + "'s turn is over");
    $("#playerOneRoll").fadeOut();
    $("#playerTwoRoll").fadeIn();
  }
}
Player.prototype.PlayerTwoHitsOne = function() {
  if (this.roll == 1) {
    this.roll = 0;
    alert(this.name + "'s turn is over");
    $("#playerTwoRoll").fadeOut();
    $("#playerOneRoll").fadeIn();
  }
}
//User Interface
$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    var userOne = $('#player1').val();
    var userTwo = $('#player2').val();
    var playerOne = new Player(userOne);
    var playerTwo = new Player(userTwo);
    $("#playerOneName").append(playerOne.name + ':');
    $("#playerTwoName").append(playerTwo.name + ':');

    $("#playerOneRoll").submit(function(event) {
      $("#playerOneResults").empty('');
      event.preventDefault();
      playerOne.roll = diceRoll();
      playerOne.playerRoll();
      playerOne.PlayerOneHitsOne();
      $("#playerOneResults").append('Player score: ' + playerOne.currentScore + ' dice: ' + playerOne.roll);
    });
    $("#playerOneHold").submit(function(event) {
      $("#playerOnePerma").empty('');
      $("#playerOneRoll").fadeOut();
      $("#playerTwoRoll").fadeIn();
      event.preventDefault();
      playerOne.playerHold();
      playerOne.winChecker();
      $("#playerOnePerma").append('total: ' + playerOne.total);
    });
    //
    //PlayerTwo
    //
    $("#playerTwoRoll").submit(function(event) {
      $("#playerTwoResults").empty('');
      event.preventDefault();
      playerTwo.roll = diceRoll();
      playerTwo.playerRoll();
      playerTwo.PlayerTwoHitsOne();
      $("#playerTwoResults").append('Player score: ' + playerTwo.currentScore + ' dice: ' + playerTwo.roll);
    });
    //PlayerTwoHold
    $("#playerTwoHold").submit(function(event) {
      $("#playerTwoPerma").empty('');
      $("#playerTwoRoll").fadeOut();
      $("#playerOneRoll").fadeIn();
      event.preventDefault();
      playerTwo.playerHold();
      playerTwo.winChecker();
      $("#playerTwoPerma").append('total: ' + playerTwo.total);
    });
  });
});
