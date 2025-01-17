
class Game {
  constructor(p1Wins, p2Wins) {
    this.deck = this.makeDeck();
    this.centralPile = [];
    this.player1 = new Player(1, p1Wins);
    this.player2 = new Player(2, p2Wins);
    this.currentPlayer = this.player1;
    this.isHandEmpty = false;
    this.otherPlayer = this.player2;
  }

  makeDeck() {
    var deck = [];
    var suitColors = ['red', 'gold', 'green', 'blue'];
    var redSuit = this.createEachSuit('red');
    var goldSuit = this.createEachSuit('gold');
    var greenSuit = this.createEachSuit('green');
    var blueSuit = this.createEachSuit('blue');
    deck = deck.concat(redSuit, goldSuit, greenSuit, blueSuit);
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
      this.currentPlayer = this.player2;
      this.otherPlayer = this.player1;
    } else if (this.currentPlayer.id === 2) {
        this.currentPlayer = this.player1;
        this.otherPlayer = this.player2;
    }
  }

  play(playerName) {
    if (this.currentPlayer.hand.length === 0 && this.otherPlayer.hand.length === 0) {
      this.currentPlayer.hand = this.centralPile;
      this.shuffle(this.currentPlayer.hand);
      this.centralPile = [];
    } else {
        if (this.currentPlayer.hand.length > 0 &&
          this.otherPlayer.hand.length > 0 &&
          this.currentPlayer.name === playerName) {
            var cardToPlay = this.currentPlayer.playCard();
            this.centralPile.unshift(cardToPlay);
            this.changePlayerTurn();
            console.log('central pile is', this.centralPile[0].value);
        } else if (this.currentPlayer.hand.length > 0 && this.currentPlayer.name === playerName) {
            var cardToPlay = this.currentPlayer.playCard();
            this.centralPile.unshift(cardToPlay);
        }
    }
  }

  slapAction(playerName) {
    var firstCard = this.centralPile[0] && this.centralPile[0].value;
    var secondCard = this.centralPile[1] && this.centralPile[1].value;
    var thirdCard = this.centralPile[2] && this.centralPile[2].value;
    var doubleCondition = firstCard === secondCard;
    var sandwichCondition = firstCard === thirdCard;
    var jackCondition = firstCard === 11;
    var currentSlapper = this.player1.name === playerName ? this.player1 : this.player2;
    var nonSlapper = this.player1.name === playerName ? this.player2 : this.player1;
    if ((this.centralPile.length > 0 && jackCondition) ||
      (this.centralPile.length > 1 && doubleCondition) ||
      (this.centralPile.length > 2 && sandwichCondition)) {
        currentSlapper.hand = currentSlapper.hand.concat(this.centralPile);
      if (this.checkForWinConditons(currentSlapper, nonSlapper)) {
        this.endGame();
        this.shuffle(this.deck)
      }
      game.shuffle(currentSlapper.hand)
      this.centralPile = [];
      return true;
    } else {
      if (this.checkForWinConditons(currentSlapper, nonSlapper)) {
        this.endGame();
        this.shuffle(this.deck)
      } else {
        var lostCard = currentSlapper.hand.pop();
        nonSlapper.hand.push(lostCard);
        return false;
      }
    }
  }

  checkForWinConditons(currentSlapper, nonSlapper) {
    if (currentSlapper.id === this.currentPlayer.id && this.centralPile[0].value === 11 && nonSlapper.hand.length === 0) {
      currentSlapper.updateWins();
      return true;
    }
    if (currentSlapper.id !== this.currentPlayer.id && this.centralPile[0].value !== 11 && currentSlapper.hand.length === 0) {
      nonSlapper.updateWins();
      return true;
    }
      return false;
  }

  endGame() {
    this.gameReset();
  }

  gameReset() {
   this.deck = this.centralPile.concat(this.player1.hand, this.player2.hand);
   this.shuffle(this.deck)
   this.player1.hand = [];
   this.player2.hand = [];
   this.deal();
  }

}
