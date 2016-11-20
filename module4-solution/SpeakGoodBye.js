// Andrea Rizzieri - Solution for Module 4 Assignment
// SpeakGoodBye.js
// It contains the global method byeSpeaker for the window object

(function(window){
	var byeSpeaker = {};
	var speakWord = "Good Bye";

	byeSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;
})(window);