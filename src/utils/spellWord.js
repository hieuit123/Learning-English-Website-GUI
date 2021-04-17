const voices = window.speechSynthesis.getVoices()
var msg = new SpeechSynthesisUtterance();
export default function say(m) {    
    msg.voice = voices[8];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = m;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
}        
