var inputTxt;

function Speak(inputTxt) {
  var msg = new SpeechSynthesisUtterance(inputTxt); 
  msg.rate = 1.5;
  msg.pitch = 5;
  msg.voice = speechSynthesis.getVoices().filter(function(voice) { 
    return voice.name == 'Google 國語（台灣）'; })[0]; 
  speechSynthesis.speak(msg);
}