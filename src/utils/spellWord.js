var synth = window.speechSynthesis;
var voices = [];

export default function say(m) {
    voices = synth.getVoices()
    var msg = new SpeechSynthesisUtterance(m)
    msg.voice = voices[1]
    msg.pitch = 1
    msg.rate = 0.8
    synth.speak(msg)
}