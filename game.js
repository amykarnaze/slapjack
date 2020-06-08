
class Game {
  constructor() {
    this.deck = this.makeDeck();
    this.centralPile = [];
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.currentPlayer = this.player1;
    this.isHandEmpty = false;
    this.otherPlayer = this.player2;
    // this.topCard = this.centralPile[0];
    // this.secondCard = this.centralPile[1];
    // this.thirdCard = this.centralPile[2];
  }

  makeDeck() {
    var deck = [];
    var suitColors = ['red', 'gold', 'green', 'blue'];
    var redSuit = this.createEachSuit('red');
    var goldSuit = this.createEachSuit('gold');
    var greenSuit = this.createEachSuit('green');
    var blueSuit = this.createEachSuit('blue');
    deck = deck.concat(redSuit, goldSuit, greenSuit, blueSuit);
    // shuffle(this.deck)
    return deck;
  }

  createEachSuit(suitColor) {
    var suit = [];
    for (var i = 1; i <= 13; i++) {
      var newCard = new Card(i, suitColor);
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
      console.log('central pile is', this.centralPile[0].value);
  }

  // play() {
  //   if (this.currentPlayer.hand.length > 0) {
  //     var cardToPlay = this.currentPlayer.playCard();
  //     this.centralPile.unshift(cardToPlay);
  //     this.changePlayerTurn();
  //   } else if (this.currentPlayer.hand.length === 0 && this.otherPlayer.hand.length === 0) {
  //     console.log('central pile is', this.centralPile[0].value);
  //     this.currentSlapper.hand.concat(this.centralPile)
  // }

  slapAction(playerName) {
    var firstCard = this.centralPile[0] && this.centralPile[0].value;
    var secondCard = this.centralPile[1] && this.centralPile[1].value;
    var thirdCard = this.centralPile[2] && this.centralPile[2].value;
    var doubleCondition = firstCard === secondCard;
    var sandwichCondition = firstCard === thirdCard;
    var jackCondition = firstCard === 10;
    var currentSlapper = this.player1.name === playerName ? this.player1 : this.player2;
    var nonSlapper = this.player1.name === playerName ? this.player2 : this.player1;
    if ((this.centralPile.length > 0 && jackCondition) || (this.centralPile.length > 1 && doubleCondition) || (this.centralPile.length > 2 && sandwichCondition)) {
      currentSlapper.hand = currentSlapper.hand.concat(this.centralPile);
      if (this.checkForWinConditons(currentSlapper, nonSlapper)) {
        endGame();
        shuffle(this.deck)
        //display winner
      }
      game.shuffle(currentSlapper.hand)
      this.centralPile = [];
    } else {
      var lostCard = currentSlapper.hand.pop();
      nonSlapper.hand.push(lostCard);
    }
  }

  checkForWinConditons(currentSlapper, nonSlapper) {
    if (currentSlapper.hand.length === 0 && this.centralPile[0].value !== 10) {
        return true;

    } else if (nonSlapper.hand.length === 0 && this.centralPile[0].value === 10) {
        return true;

    }
    }
      // endGame();


  emptyPile(currentSlapper, nonSlapper) {
    if (this.currentSlapper.hand === 0 && this.nonSlapper.hand === 0) {
      this.currentSlapper.hand.concat(this.centralPile)
      }
      shuffle(this.centerPile)
      deal()
    }
  }
  // checkWin() {
  //   //when player runs out of cards, and cant slap deck immediately
  //   //--> every play after look for win conditions
  //   // on every keydown when the player has cards in hand and slaps a 10, game is over
  //   if (currentPlayer.hand.length === 0 && currentPlayer.id === 1) {
  //     endGame();
  //     // saveWinsToStorage();
  //   }
  //   else if (currentPlayer.hand.length === 0 && currentPlayer.id === 2) {
  //     endGame();
  //     // saveWinsToStorage();
  //   }
  // }
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

// let currentSlapper, nonSlapper
// if (this.player1.name === playerName) {
//   currentSlapper = this.player1
//   nonSlapper = this.player2
// } else {
//   currentSlapper = this.player2
//   nonSlapper = this.player1
// }
