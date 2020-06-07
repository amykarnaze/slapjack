class Player {
  constructor(id, wins) {
    this.id = id;
    this.wins = wins;
    this.hand = [];
  }

  playCard() {
    var removeCardToPlay = this.hand.shift();
    console.log('Low', removeCardToPlay)
    return removeCardToPlay;
  }

  saveWinsToStorage() {
    this.wins++
  }

}
