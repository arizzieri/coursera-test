// Andrea Rizzieri - Solution for Module 4 Assignment
// script.js 
// It contains the main program (inside a self-invoking function)
// which checks the first letter of each item in the array
// and calls the correct global function

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
