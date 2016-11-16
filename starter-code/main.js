var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

if (cardOne===cardTwo) {
	alert("You found a match!")
} else {
	alert("Sorry, try again")
}

var gameBoard=document.getElementsByClassName('board').id='game-board';
var board=document.getElementById('game-board');
function createBoard () {
for (var i = 0; i<cards.length; i++) {
 var cardElement = document.createElement('div');
 cardElement.className = 'card';
 cardElement.setAttribute('data-card', cards [i]);
 cardElement.addEventListener('click', isTwoCards);
 cardElement.innerHTML()
board.appendChild(cardElement);
board.appendChild(cardElement);
};

function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card' === 'king') {
		this.innerHTML = "<img src='https://pixabay.com/en/crown-jewel-king-ornate-queen-1296751/'>";
	} else {
		this.innerHTML= "<img src='https://pixabay.com/en/crown-king-queen-royal-royalty-1515871/'>";
	} 



