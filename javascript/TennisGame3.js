var TennisGame = function(player1Name, player2Name) {
    this.player1 = 0;
    this.player2 = 0;
};

TennisGame.prototype.getScore = function() {
  var player1 = this.player1;
  var player2 = this.player2;
  var leader = player1 > player2 ? "player1" : "player2";
  var score = ["Love", "Fifteen", "Thirty", "Forty"];

  if (isDeuce(player1, player2)) return "Deuce";
  if (isTied(player1, player2)) return score[player1] + "-All";
  if (isCloseScore(player1, player2)) return score[player1] + "-" + score[player2];
  if (isGamePoint(player1, player2)) return "Advantage " + leader;
  else return "Win for " + leader;

};

TennisGame.prototype.wonPoint = function(winner) {
    if (winner == "player1")
      this.player1 += 1;
    else
      this.player2 += 1;
};

var isDeuce = function (player1, player2) {
    return player1 === player2 && player1 > 2;
};

var isCloseScore = function(player1, player2) {
  return player1 < 4 && player2 < 4 && player1 + player2 < 6;
};

var isGamePoint = function(player1, player2) {
  var difference = Math.abs(player1 - player2);
  return difference <= 1;
};

var isTied = function(player1, player2) {
  return player1 === player2;
};

module.exports = TennisGame;
