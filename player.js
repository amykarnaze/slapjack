class Player {
  constructor(id, wins) {
    this.id = id;
    this.wins = wins;
    this.hand = [];
  }

  playCard(currentPlayer) {
    var playCard = this.hand.shift();
    game.centralPile.push(playCard);
  }

  saveWinsToStorage() {

  }

}
