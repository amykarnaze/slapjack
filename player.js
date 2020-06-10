class Player {
  constructor(id, wins) {
    this.id = id;
    this.wins = wins ? wins : 0;
    this.hand = [];
    this.name = `player${id}`;
  }

  playCard() {
    if (game.currentPlayer.hand.length > 0) {
      var removeCardToPlay = this.hand.shift();
      return removeCardToPlay;
    }
  }

  updateWins() {
    this.wins ++;
  }

  saveWinsToStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.wins))
  }

}
