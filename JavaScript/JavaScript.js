const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const speedInput = document.getElementById('speed');
const textInput = document.getElementById('text');
//Syntax: element.addEventListener(Event, function, useCapture)
//Listen for a 'click' on the play button, and if you hear a 'click'. Play the value aka text that's in the textInput.
playButton.addEventListener('click', () => {
    playText(textInput.value)
})
pauseButton.addEventListener('click', pauseText);
stopButton.addEventListener('click',stopText)

function playText(text) {
    if (speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = speedInput.value
    utterance.addEventListener('end', () => {
        textInput.disabled = false
    })
    if (speechSynthesis.speaking) return;
    textInput.disabled = true
    speechSynthesis.speak(utterance)
}

function pauseText() {
   if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}
