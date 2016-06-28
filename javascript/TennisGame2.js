var TennisGame2 = function(player1, player2) {
  this.player1Score = 0;
  this.player2Score = 0;
};

var scoreBord = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty"
};

TennisGame2.prototype.getScore = function() {
  var player1 = this.player1Score;
  var player2 = this.player2Score;

  if(isTied(player1, player2)) {
    return player1 > 2 ? "Deuce" : scoreBord[player1] + "-All";
  }

  if(playerLeading(player1, player2)) {
    return scoreBord[player1] + "-" + scoreBord[player2];
  }

  if(gameOver(player1, player2)) {
    return player1 > player2 ? "Win for player1" : "Win for player2";
  }

  if(playerHasAdvantage(player1, player2)) {
    return player1 > player2 ? "Advantage player1" : "Advantage player2";
  }
};

TennisGame2.prototype.SetP1Score = function(number) {
  for (var i = 0; i < number; i++) {
    this.P1Score();
  }
};

TennisGame2.prototype.SetP2Score = function(number) {
  for (var i = 0; i < number; i++) {
    this.P2Score();
  }
};

TennisGame2.prototype.P1Score = function() {
  this.player1Score++;
};

TennisGame2.prototype.P2Score = function() {
  this.player2Score++;
};

TennisGame2.prototype.wonPoint = function(player) {
  if (player === "player1")
    this.P1Score();
  else
    this.P2Score();
};


var gameOver = function(player1, player2) {
  var player1Won = player1 >= 4 && (player1 - player2) >= 2;
  var player2Won = player2 >= 4 && (player2 - player1) >= 2;
  return player1Won || player2Won;
};

var playerLeading = function(player1, player2) {
  var player1leading = player1 > player2 && player1 < 4;
  var player2leading = player2 > player1 && player2 < 4;
  return player1leading || player2leading
};

var isTied = function(player1, player2) {
  return player1 === player2;
};

var playerHasAdvantage = function (player1, player2) {
  return player1 >= 3 || player2Score >= 3;
};

module.exports = TennisGame2;
