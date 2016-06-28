var TennisGame = function(player1, player2) {
  this.player1 = 0;
  this.player2 = 0;
};

TennisGame.prototype.wonPoint = function(winner) {
  if (winner === "player1")
    this.player1 += 1;
  else
    this.player2 += 1;
};

TennisGame.prototype.getScore = function() {
  var player1 = this.player1;
  var player2 = this.player2;
  var leader = player1 > player2 ? "player1" : "player2";
  var leadSize = Math.abs(player1 - player2);
  var scoreBoard = {0: "Love", 1: "Fifteen", 2: "Thirty", 3: "Forty"};

  if (player1 === player2)
    return player1 > 2 ? "Deuce" : scoreBoard[player1] + "-All";

  if (player1 < 4 && player2 < 4)
    return scoreBoard[player1] + "-" + scoreBoard[player2];

  if (leadSize <= 1) return "Advantage " + leader;
  if (leadSize > 1) return "Win for " + leader;
};

module.exports = TennisGame;
