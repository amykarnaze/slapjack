
class Game {
  constructor() {
    this.deck = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    this.centralPile = [];
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.currentPlayer = this.player1;
  }

  shuffle(array) {
      var tracker = array.length;
      var temporaryLocation;
      for (var i = 0; i < array.length; i++) {
        var newIndex = Math.floor(Math.random() * tracker);
        tracker--;
        temporaryLocation = array[tracker];
        array[tracker] = array[newIndex];
        array[newIndex] = temporaryLocation;
      }
      return array;
  }

  deal() {
    var firstHalf = this.deck.splice(0, 26);
    this.player1.hand = firstHalf;
    this.player2.hand = this.deck;
  }

  changePlayerTurn() {
    if (this.currentPlayer.id === 1 && this.player2.hand.length > 0) {
      this.currentPlayer = this.player2;
    } else if (this.currentPlayer.id === 2 && this.player1.hand.length > 0) {
      this.currentPlayer = this.player1;
    }
  }

  playToCenterPile() {
    // if (this.currentPlayer.pile > 0)
      var cardToPlay = this.currentPlayer.playCard();
      this.centralPile.unshift(cardToPlay);
      this.changePlayerTurn();
      console.log('center pile is', this.centralPile);
  }

  slapConditions() {
    if (this.centralPile[0] === this.centralPile[2] || this.centralPile[0] === this.centralPile[1] || this.centralPile === 11) {
      this.currentPlayer.pile.concat(this.centralPile)
      shuffle(this.currentPlayer.pile)
    } else {
      //player loses, reset game.  penalizing invalid slap
    }
  }
//
//  winningConditions() {
//
// // check by player w all the cards
//   }

}

//
// Player 1’s keyboard controls:
//
// q to deal a card
// f to slap
// Player 2’s keyboard controls:
//
// p to deal a card
// j to slap
