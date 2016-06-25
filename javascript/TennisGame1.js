var TennisGame = function(player1, player2) {
  this.player1Score = 0;
  this.player2Score = 0;
};

TennisGame.prototype.wonPoint = function(winner) {
  if (winner === "player1")
    this.player1Score += 1;
  else
    this.player2Score += 1;
};

var scoreBoardMap = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty"
};

TennisGame.prototype.getScore = function() {
  var player1Score = this.player1Score;
  var player2Score = this.player2Score;

  if (player1Score === player2Score) {
    if (player1Score > 2)return "Deuce";
    return scoreBoardMap[player1Score] + "-All";
  } else if (player1Score >= 4 || player2Score >= 4) {
    var difference = player1Score - player2Score;
    if (Math.abs(difference) === 1) {
      return player1Score > player2Score ? "Advantage player1" : "Advantage player2";
    }
    return player1Score > player2Score ? "Win for player1" : "Win for player2";
  } else {
    return scoreBoardMap[player1Score] + "-" + scoreBoardMap[player2Score];
  }
};

module.exports = TennisGame;
