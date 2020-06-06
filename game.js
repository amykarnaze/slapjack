
class Game {
    constructor() {
      this.deck = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
      this.centralPile = [];
      this.player1 = new Player({id: 1, wins: 0, hand: []});
      this.player2 = new Player({id: 2, wins: 0, hand: []});
      this.counter = 0;
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
        this.player1.hand.push(this.deck);
        this.player2.hand.push(firstHalf);
        this.deck = 0;
      }

      playerTurn() {
        this.currentPlayer = !this.currentPlayer;

      //   if (this.counter === 0) {
      //     this.currentPlayer = this.player1;
      //       this.counter ++;
      //   } else {
      //     this.currentPlayer = this.player2;
      //     this.counter = 0;
      //   }
      // }

    }



  // playCards(currentPlayer) {
  //player.playCard();
  // }



// module.exports = Game;

// whose turn is it???


// give half deck to p1 other half to p2
// akternate. if downclick p cant p again
// if click
//
// var cardPile = [];
// 3 array
// array 1- index
// array 2
// array 3
// deal deck out to players
//
// track players turn
//
// deal card to cardPile
//
// slap attempts jacks, doubles, and sandwiches
//
// Update player wins count
//
// reset dect and players to play next game after won
//
//
// Player 1’s keyboard controls:
//
//
//
// q to deal a card
// f to slap
// Player 2’s keyboard controls:
//
// p to deal a card
// j to slap
