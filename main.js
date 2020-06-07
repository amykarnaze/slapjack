// var Game = require('./game.js');
// examine value of suit and grab background img
// only care about image of top card
var newGame = new Game();
newGame.deal();
// ** Deal with draw **
// } else if(this.currentPlayer.hand.length === 0 && this.otherPlayer.hand.length === 0) {
// this.isDraw = true;
  // ** make alert w this later
// document.addEventListener('keydown', keyPress);
//
// function keyPress() {
//   // p1 q, deal = 81
//   if (event.key === 81) {
//     game.player1.playToCenterPile();
//   }
//   // p1 f, slap = 70
//   if (event.key === 70) {
//     game.player1.checkSlap();
//   }
//   // p2, p, deal = 80
//   if (event.key === 80) {
//     game.player2.playToCenterPile();
//   }
//   // p2, j, slap = 74
//   if (event.key === 74) {
//     game.player2.checkSlap();
//   }
//
// }
//
// hideBackOfCard() {
// or show/flip card value
// }
//
// function headerAlert() {
// var headerText = document.querySelector('header');
// if (){}
// headerText.innerText = `BAD SLAP! forfeits a card to Player 2`
// if (){}
// headerText.innerText = `BAD SLAP! Player 2 forfeits a card to Player 1`
// if (){}
// headerText.innerText = `SLAPJACK! Player 1 takes the pile!`
// if (){}
// headerText.innerText = `SLAPJACK! Player 2 takes the pile!`
// if (){}
// headerText.innerText = `SLAPJACK! Player 1 wins!`
// if (){}
// headerText.innerText = `SLAPJACK! Player 2 wins!`
//
// }
//
// // if card is not a double, sandwich or jack &&
// if (event.key === 70 || event.key === 74 && this.currentPlayer) {
//   endGame();
// }
//
// changePlayerWins() {
//   var player1Text = document.querySelector('.p1-Wins');
//   var player2Text = document.querySelector('.p2-Wins');
//   player1Text.innerText = `${game.player1.wins} Wins`;
//   player2Text.innerText = `${game.player2.wins} Wins`;
// }


// jack only condition:
//if keydown is 70 and central pile has an 11, concat arrays.

// if (event.key === 70 && game.centralPile[0] == 11) {
//   game.currentPlayer.hand.concat(game.centralPile)
//   shuffle();
// }
