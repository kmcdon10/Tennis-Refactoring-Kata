var TennisGame = function(player1, player2) {
  this.player1Score = 0;
  this.player2Score = 0;
};


TennisGame.prototype.getScore = function() {
  var player1 = this.player1Score;
  var player2 = this.player2Score;
  var leader = player1 > player2 ? "player1" : "player2";
  var leadSize = Math.abs(player1 - player2);
  var score = {0: "Love", 1: "Fifteen", 2: "Thirty", 3: "Forty"};

  if (isDeuce(player1, player2)) return "Deuce";
  if (isTied(player1, player2)) return  score[player1] + "-All";
  if (noClearWinner(player1, player2)) return score[player1] + "-" + score[player2];

  if (leadSize <= 1) return "Advantage " + leader;
  if (leadSize > 1) return "Win for " + leader;
};

TennisGame.prototype.SetP1Score = function(points) {
  this.player1Score += points;
};

TennisGame.prototype.SetP2Score = function(points) {
  this.player2Score += points;
};

TennisGame.prototype.wonPoint = function(winner) {
  if (winner === "player1")
    this.player1Score += 1;
  else
    this.player2Score += 1;
};

var isTied = function(player1, player2) {
  return player1 === player2;
};

var isDeuce = function(player1, player2) {
  return player1 === player2 && player1 > 2;
};

var noClearWinner = function(player1, player2) {
  return player1 < 4 && player2 < 4;
};

module.exports = TennisGame;
