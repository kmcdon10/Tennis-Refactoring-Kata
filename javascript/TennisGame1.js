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

var scoreBoard = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty"
};

TennisGame.prototype.getScore = function() {
  var player1Score = this.player1;
  var player2Score = this.player2;

  if (player1Score === player2Score) {
    if (player1Score > 2)return "Deuce";
    return scoreBoard[player1Score] + "-All";
  }
  else if (player1Score > 3 || player2Score > 3) {
    var leadPlayer = player1Score > player2Score ? "player1" : "player2";
    var absoluteDifference = Math.abs(player1Score - player2Score);

    return absoluteDifference === 1 ? "Advantage " + leadPlayer : "Win for " + leadPlayer;
  }
  return scoreBoard[player1Score] + "-" + scoreBoard[player2Score];
};

module.exports = TennisGame;
