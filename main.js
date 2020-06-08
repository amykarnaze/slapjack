// var Game = require('./game.js');
// examine value of suit and grab background img
// only care about image of top card
var game = new Game();
game.shuffle(game.deck);
game.deal();
// ** Deal with draw **
// } else if(this.currentPlayer.hand.length === 0 && this.otherPlayer.hand.length === 0) {
// this.isDraw = true;
  // ** make alert w this later
window.addEventListener('keydown', keyPress);
//
function keyPress(event) {
  console.log(event)
  // p1 q, deal = 81
  if (event.key === 'q') {
    game.play('player1');

  // p1 f, slap = 70
  }else if (event.key === 'f') {
    game.slapAction('player1');

  // p2, p, deal = 80
  }else if (event.key === 'p') {
    game.play('player2');

  // p2, j, slap = 74
  }else if (event.key === 'j') {
    game.slapAction('player2');
    // game.player2.slapAction();
  }
  updateDisplay();
}

function updateDisplay() {
  var monitor = document.querySelector('.monitor');
  var topCard = game.centralPile[0];
  var centralCardImage = document.querySelector('.central-pile .card-image');
  if (topCard) {
    centralCardImage.src = `./assets/${topCard.src}.png`;
  } else {
    centralCardImage.src = `./assets/wild.png`;
  }
  const template = `
  <div>
    <h3>Game</h3>
    <p>Current Player: ${game.currentPlayer.id}</p>
    <p>central Pile: ${game.centralPile.map(card => card.value)}</p>
    <p>Pile Length: ${game.centralPile.length}</p>
    </div>
    <div>
    <h3>Player 1</h3>
    <p>Hand: ${game.player1.hand.map(card => card.value)}</p>
    <p>Hand Length: ${game.player1.hand.length}</p>
    <p>Wins: ${game.player1.wins}</p>
    </div>
    <div>
    <h3>Player 2</h3>
      <p>Hand: ${game.player2.hand.map(card => card.value)}</p>
      <p>Length: ${game.player2.hand.length}</p>
      <p>Wins: ${game.player2.wins}</p>
    </div>

  `;
  monitor.insertAdjacentHTML('afterbegin', template);
}

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
