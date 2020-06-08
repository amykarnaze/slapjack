
class Game {
  constructor() {
    this.deck = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    this.centralPile = [];
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.currentPlayer = this.player1;
    this.isHandEmpty = false;
    this.otherPlayer = this.player2;
  }

  makeDeck() {
    var deck = [];
    var suits = ['red', 'gold', 'green', 'blue'];
    var redSuit = this.createEachSuit('red');
    var goldSuit = this.createEachSuit('gold');
    var greenSuit = this.createEachSuit('green');
    var blueSuit = this.createEachSuit('blue');
    deck = deck.concat(redSuit, goldSuit, greenSuit, blueSuit);
  }

  createEachSuit() {
    var suit = [];
    for (var i = 1; i <= 13; i++) {
      var newCard = newCard(i, suitColor);
      suit.push(newCard);
    }
    return suit;
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
    this.player1.hand = this.deck.splice(0, 26);
    this.player2.hand = this.deck.splice(0, 26);
  }

  changePlayerTurn() {
    if (this.currentPlayer.id === 1) {
       // && this.player2.hand.length > 0
      this.currentPlayer = this.player2;
      this.otherPlayer = this.player1;
    } else if (this.currentPlayer.id === 2) {
      // && this.player1.hand.length > 0
      this.currentPlayer = this.player1;
      this.otherPlayer = this.player2;
    }
  }

  play() {
    if (this.currentPlayer.hand.length > 0) {
      var cardToPlay = this.currentPlayer.playCard();
      this.centralPile.unshift(cardToPlay);
      }
      this.changePlayerTurn();
      console.log('center pile is', this.centralPile);
  }

  checkForWinConditons() {
    if (this.otherPlayer.hand.length === 0 && this.centralPile[0] === 10 && this.currentPlayer.hand.length > 0) {
      endGame();
    }
  }

  slapAction() {
    if (this.centralPile[0] === this.centralPile[2] || this.centralPile[0] === this.centralPile[1] || this.centralPile[0] === 10) {
      this.currentSlapper.hand = this.currentSlapper.hand.concat(this.centralPile);
      newGame.shuffle(this.currentPlayer.hand)
      this.centralPile = [];
      checkForWinConditons();
//** GET this.currentSlapper FROM EVENT ** WHO IS CURRENT SLAPPER AND NON SLAPPPER**
    } else {
      var lostCard = this.currentSlapper.hand.pop();
      this.nonSlapper.hand.push(lostCard);
    }
  }

  checkWin() {
    //when player runs out of cards, and cant slap deck immediately
    //--> every play after look for win conditions
    // on every keydown when the player has cards in hand and slaps a 10, game is over
    if (currentPlayer.hand.length === 0 && currentPlayer.id === 1) {
      endGame();
      // saveWinsToStorage();
    }
    else if (currentPlayer.hand.length === 0 && currentPlayer.id === 2) {
      endGame();
      // saveWinsToStorage();
    }
  }
  //   else {
  //   if (opponentHand === [] && this.centralPile[0] === 11)
  // }

  // return T/f
  //if true, win met
  //if false return out.
 // check by player w all the cards
 // lose game in else
//   }

  endGame() {
   this.deck = this.centralPile.concat(this.player1.hand, this.player2.hand);
   this.shuffle(this.deck)
   this.deal();
  }
}


// find source for key codes
//
// Player 1’s keyboard controls:
//
// q to deal a card
// f to slap
// Player 2’s keyboard controls:
//
// p to deal a card
// j to slap
