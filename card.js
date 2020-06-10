class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.id = {
      1: '01',
      2: '02',
      3: '03',
      4: '04',
      5: '05',
      6: '06',
      7: '07',
      8: '08',
      9: '09',
      10: '10',
      11: 'jack',
      13: 'queen',
      12: 'king'
    }
    this.src = `${suit}-${this.id[value]}`
  }
}
