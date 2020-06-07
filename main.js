// var Game = require('./game.js');
// examine value of suit and grab background img
// only care about image of top card
var newGame = new Game();
newGame.shuffle(newGame.deck);
newGame.deal();

document.addEventListener('keydown', keyPress);

function keyPress() {
  if (event.key === 81) {
    game.player1.playToCenterPile();
  }
  if (event.key === 70) {
    game.player1.checkSlap();
  }
  if (event.key === 80) {
    game.player2.playToCenterPile();
  }
  if (event.key === 74) {
    game.player2.checkSlap();
  } else {
    // reset game?
  }
}
