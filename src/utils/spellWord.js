var synth = window.speechSynthesis;

export default function say(m) {
    var utterance = new SpeechSynthesisUtterance(m)
    synth.speak(utterance)
}