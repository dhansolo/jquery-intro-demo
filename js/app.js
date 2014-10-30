/* app.js
* main script file for our little application
* */

"use strict";

var tile = 'img/sec1.jpg';
var info = 'some other data';

var gameBoard = $('#game-board');

// Create and configure a new <img> element
var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');

// Use the .data() method to associate extra data with HTML elements
newTile.data('assocTile', tile); // First param is key
newTile.data('tileInfo', info); // Second param is value

// Add to the board
gameBoard.append(newTile);

// When an image in game-board is clicked
$('#game-board img').click(function(){
	// remember that 'this' refers to the DOM element that raised the event; wrapped in jQuery $() to get more functionality
	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);
	clickedImage.attr('alt', tileData2);

	console.log(tileData1);
	console.log(tileData2);
});


var array = ['a', 'b', 'c', 'd'];
_.forEach(array, function(element, index) {
	console.log(element);
	console.log(index);
})

var numArray = [1,2,3,4,5,6,7,8,9,10];

// how me the even values of the array
var evens = _.filter(numArray, function(num) {return 0 == num % 2;});
console.log(evens);

//Shuffle() returns a new shuffled array, leaving the original array intact
var shuffledArray = _.shuffle(numArray);
console.log(shuffledArray);
console.log(numArray);
console.log(array);
//console.log(unionArray);


/*



*/


var startTime = _.now();
console.log(startTime);

var timer; // Hold our timer value

// Use window.setInterval to create a timer that runs a function every second
timer = window.setInterval(onTimer, 1000);
function onTimer() {
	// Compare the value of _.now() to start time to get elapsed time
	// Math.floor() rounds down to the nearest integer
	var elapsedSeconds = Math.floor((_.now() - startTime) / 1000);
	console.log(elapsedSeconds);
	$('#game-board h2').css("font-size", elapsedSeconds + 'px');
}

function stopTimer() {
	window.clearInterval(timer);
	$('#game-board').empty() // Clearing the game-board of all of its contents
}

$('jumbotron').click(stopTimer);





















