var playerOne = new Player(id, wind, hand);
var playerTwo = new Player(id, wind, hand);

var allPossibleCards = [
  './assets/back.png',
  './assets/blue-01.png',
  './assets/blue-02.png',
  './assets/blue-03.png',
  './assets/blue-04.png',
  './assets/blue-05.png',
  './assets/blue-06.png',
  './assets/blue-07.png',
  './assets/blue-08.png',
  './assets/blue-08.png',
  './assets/blue-10.png',
  './assets/blue-jack.png',
  './assets/blue-king.png',
  './assets/blue-queen.png',
  './assets/gold-01.png',
  './assets/gold-02.png',
  './assets/gold-03.png',
  './assets/gold-04.png',
  './assets/gold-05.png',
  './assets/gold-06.png',
  './assets/gold-07.png',
  './assets/gold-08.png',
  './assets/gold-09.png',
  './assets/gold-10.png',
  './assets/gold-jack.png',
  './assets/gold-king.png',
  './assets/gold-queen.png',
  './assets/green-01.png',
  './assets/green-02.png',
  './assets/green-03.png',
  './assets/green-04.png',
  './assets/green-05.png',
  './assets/green-06.png',
  './assets/green-07.png',
  './assets/green-08.png',
  './assets/green-09.png',
  './assets/green-10.png',
  './assets/green-jack.png',
  './assets/green-queen.png',
  './assets/green-king.png',
  './assets/red-01.png',
  './assets/red-02.png',
  './assets/red-03.png',
  './assets/red-04.png',
  './assets/red-05.png',
  './assets/red-06.png',
  './assets/red-07.png',
  './assets/red-08.png',
  './assets/red-09.png',
  './assets/red-10.png',
  './assets/red-jack.png',
  './assets/red-queen.png',
  './assets/red-king.png',
  './assets/wild.png',





];

shuffle deck

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function shuffle() {
  for (var i = allPossibleCards.length -1; i >0; i--)
 var random = allPossibleCards[getRandomIndex(allPossibleCards)]

give half deck to p1 other half to p2
akternate. if downclick p cant p again
if click

var cardPile = [];
3 array
array 1- index
array 2
array 3
deal deck out to players

track players turn

deal card to cardPile

slap attempts jacks, doubles, and sandwiches

Update player wins count

reset dect and players to play next game after won


Player 1’s keyboard controls:



q to deal a card
f to slap
Player 2’s keyboard controls:

p to deal a card
j to slap
