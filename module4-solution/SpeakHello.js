// Andrea Rizzieri - Solution for Module 4 Assignment
// SpeakHello.js
// It contains the global method helloSpeaker for the window object

(function (window) {
	var helloSpeaker = {};	
	var speakWord = "Hello";

	helloSpeaker.speak = function(name){
  		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;
})(window);