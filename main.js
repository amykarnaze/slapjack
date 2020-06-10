
var game = new Game();

game.shuffle(game.deck);
game.deal();

window.addEventListener('keydown', keyPress);
//
function keyPress(event) {
  var headerText = document.querySelector('header');
  var totalWinsBeforeP1 = game.player1.wins
  var totalWinsBeforeP2 = game.player2.wins;
  if (event.key === 'q') {
    headerText.innerText = '';
    game.play('player1');
  } else if (event.key === 'f') {
    headerText.innerText = '';
    headerAlert('player1', game.slapAction('player1'));
  } else if (event.key === 'p') {
    headerText.innerText = '';
    game.play('player2');
  } else if (event.key === 'j') {
    headerText.innerText = '';
    headerAlert('player2', game.slapAction('player2'));
    //j runs HA and in order to evaluate slap Action at player 2, if good, T, if bad F
  }
  updateDisplay();
  if (totalWinsBeforeP1 !== game.player1.wins) {
    winAlert('player1');
  }
  if (totalWinsBeforeP2 !== game.player2.wins) {
    winAlert('player2');
  }
}

function headerAlert(playerName, isSlapGood) {
  var headerText = document.querySelector('header');
  if (!isSlapGood) {
    headerText.innerText = `BAD SLAP! ${playerName} forfeits a card`
  }
  if (isSlapGood){
    headerText.innerText = `SLAPJACK! ${playerName} takes the pile!`
  }
}

function winAlert(playerName) {
  document.querySelector('header').innerText = `SLAPJACK! ${playerName} wins!`
  //refactor to only when a win happens

}
//find out how to pass it who won
function updateWinCount() {
  
  document.querySelector('.p2-wins').innerText = `${game.player2.wins} wins`;
  document.querySelector('.p1-wins').innerText = `${game.player1.wins} wins`;
}

function updateDisplay() {
  var topCard = game.centralPile[0];
  var centralCardImage = document.querySelector('.central-pile .card-image');
  if (topCard) {
    centralCardImage.src = `./assets/${topCard.src}.png`;
  } else {
    centralCardImage.src = `./assets/back.png`;
  }
}
