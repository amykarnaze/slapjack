class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.id = {
      01: '01',
      02: '02',
      03: '03',
      04: '04',
      05: '05',
      06: '06',
      07: '07',
      08: '08',
      09: '09',
      10: '10',
      11: 'jack',
      13: 'queen',
      12: 'king'
    }
    this.src = `${suit}-${this.id[value]}`
    }
  }
//   each card instance can have id w/ numbers and value can be assest
//
//   convert numbers to picture in html.
//
// class centerPile {
//   constructor() {
//
//   }
// }
//
//
//   makeSuit() {
//     for (var i = 0; i < deck.length; i--)
//   }
//
//   class DeckCard {
//   constructor(id, number) {
//     this.id = this.id[i];
//     this.number = number;
// }
// }
// }
//
// var i;
//
// function makeSuit(){
//   var i;
//     for (var i = 0; i < this.id.length; i++) {
//       var i = this.id[i];
//     }
//
//   // return i;
// }
//
// function makeDeck() {
// var deckTotal = new DeckCard({id: i, number: number})
//
// return deckTotal
// }
//
// this.deck = ['./assets/blue-02.png','./assets/blue-03.png',
// './assets/blue-04.png','./assets/blue-05.png','./assets/blue-06.png',
// './assets/blue-07.png',
// './assets/blue-08.png',
// './assets/blue-08.png',
// './assets/blue-10.png',
// './assets/blue-jack.png',
// './assets/blue-queen.png',
// './assets/blue-king.png',
// './assets/gold-01.png',
// './assets/gold-02.png',
// './assets/gold-03.png',
// './assets/gold-04.png',
// './assets/gold-05.png',
// './assets/gold-06.png',
// './assets/gold-07.png',
// './assets/gold-08.png',
// './assets/gold-09.png',
// './assets/gold-10.png',
// './assets/gold-jack.png',
// './assets/gold-king.png',
// './assets/gold-queen.png',
// './assets/green-01.png',
// './assets/green-02.png',
// './assets/green-03.png',
// './assets/green-04.png',
// './assets/green-05.png',
// './assets/green-06.png',
// './assets/green-07.png',
// './assets/green-08.png',
// './assets/green-09.png',
// './assets/green-10.png',
// './assets/green-jack.png',
// './assets/green-queen.png',
// './assets/green-king.png',
// './assets/red-01.png',
// './assets/red-02.png',
// './assets/red-03.png',
// './assets/red-04.png',
// './assets/red-05.png',
// './assets/red-06.png',
// './assets/red-07.png',
// './assets/red-08.png',
// './assets/red-09.png',
// './assets/red-10.png',
// './assets/red-jack.png',
// './assets/red-queen.png',
// './assets/red-king.png'])
//
// // allPossibleCards = [
// //   // './assets/back.png',
// //   './assets/blue-01.png',
// //   './assets/blue-02.png',
// //   './assets/blue-03.png',
// //   './assets/blue-04.png',
// //   './assets/blue-05.png',
// //   './assets/blue-06.png',
// //   './assets/blue-07.png',
// //   './assets/blue-08.png',
// //   './assets/blue-08.png',
// //   './assets/blue-10.png',
// //   './assets/blue-jack.png',
// //   './assets/blue-queen.png',
// //   './assets/blue-king.png',
// //   './assets/gold-01.png',
// //   './assets/gold-02.png',
// //   './assets/gold-03.png',
// //   './assets/gold-04.png',
// //   './assets/gold-05.png',
// //   './assets/gold-06.png',
// //   './assets/gold-07.png',
// //   './assets/gold-08.png',
// //   './assets/gold-09.png',
// //   './assets/gold-10.png',
// //   './assets/gold-jack.png',
// //   './assets/gold-king.png',
// //   './assets/gold-queen.png',
// //   './assets/green-01.png',
// //   './assets/green-02.png',
// //   './assets/green-03.png',
// //   './assets/green-04.png',
// //   './assets/green-05.png',
// //   './assets/green-06.png',
// //   './assets/green-07.png',
// //   './assets/green-08.png',
// //   './assets/green-09.png',
// //   './assets/green-10.png',
// //   './assets/green-jack.png',
// //   './assets/green-queen.png',
// //   './assets/green-king.png',
// //   './assets/red-01.png',
// //   './assets/red-02.png',
// //   './assets/red-03.png',
// //   './assets/red-04.png',
// //   './assets/red-05.png',
// //   './assets/red-06.png',
// //   './assets/red-07.png',
// //   './assets/red-08.png',
// //   './assets/red-09.png',
// //   './assets/red-10.png',
// //   './assets/red-jack.png',
// //   './assets/red-queen.png',
// //   './assets/red-king.png',
// //   './assets/wild.png'
// // ];
// // pull out value of 01
// //split string at a dash