const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const speedInput = document.getElementById('speed');
const textInput = document.getElementById('text');
const clearButton = document.getElementById('clear-button');
const isDisabled = true;

playButton.addEventListener('click', () => playText(textInput.value));
pauseButton.addEventListener('click', pauseText);
stopButton.addEventListener('click', stopText);
clearButton.addEventListener('click', clearText);

// This function reads the text out loud that the user inputs
function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speedInput.value;

    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume();
    }

    utterance.addEventListener('end', () => {
        textInput.disabled = !isDisabled;
    })
    
    if (speechSynthesis.speaking) return;
    textInput.disabled = isDisabled;
    speechSynthesis.speak(utterance);
}

// Pause reading out loud
function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause();
}

// Stop reading out loud
function stopText() {
    textInput.disabled = !isDisabled;
    speechSynthesis.cancel();
}

// Clear all input
function clearText() {
    textInput.value = '';
    textInput.disabled = !isDisabled;
    speechSynthesis.cancel();
}

document.addEventListener('DOMContentLoaded', () => {
    alert("Welcome to Naz's Talking Computer Project!");
})

// commentInput.addEventListener('keydown', (event) => {
//     if(event.key === 'Enter') {
//         textLocation.innerHTML += commentInput.value;
//     }
// })