
(function(window){
var helloSpeaker ={};
// helloSpeaker.firstLetter = "j";
var speakWord = "Hello";


helloSpeaker.say = function speak(name) {
  console.log(speakWord + " " + name);
//   document.write ('<p>' + speakWord + " " + '<strong>' + name + '</strong>' + '</p>')
}
window.helloSpeaker = helloSpeaker;
})(window);
