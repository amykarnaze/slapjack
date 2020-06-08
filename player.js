class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
    this.name = `player${id}`;
  }

  playCard() {
    var removeCardToPlay = this.hand.shift();
    // console.log('Low', removeCardToPlay)
    return removeCardToPlay;
  }

  // saveWinsToStorage() {
  //   this.wins++
  //   localStorage.setItem('string', JSON.stringify())
  // }

}
