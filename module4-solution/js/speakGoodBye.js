

(function(window){
var byeSpeaker ={};
// byeSpeaker.firstLetter = "other";

var speakWord = "Good Bye";
byeSpeaker.say = function speak(name) {
  console.log(speakWord + " " + name);
//   document.write ('<p>' + speakWord + " " + '<strong>' + name + '</strong>' + '</p>')
}
window.byeSpeaker = byeSpeaker;
})(window);
