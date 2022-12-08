const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const speedInput = document.getElementById('speed');
const textInput = document.getElementById('text');
const clearButton = document.getElementById('clear-button');



playButton.addEventListener('click', () => {
    playText(textInput.value);
})
pauseButton.addEventListener('click', pauseText);
stopButton.addEventListener('click', stopText);
clearButton.addEventListener('click', clearText);

const isDisabled = true;

function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speedInput.value;

    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume();
    }

    utterance.addEventListener('end', () => {
        textInput.disabled = !isDisabled;
    })

    if (speechSynthesis.speaking) return
    textInput.disabled = isDisabled
    speechSynthesis.speak(utterance)
}




function pauseText() {
   if (speechSynthesis.speaking) speechSynthesis.pause();
}



function stopText() {
    speechSynthesis.resume();
    speechSynthesis.cancel();
}



function clearText() {
    textInput.value = '';
    textInput.disabled = !isDisabled;
    speechSynthesis.cancel();
}


const commentInput = document.getElementById('comment-input');
const textLocation = document.getElementById('textLocation');
const btn = document.getElementById('btn');
const numComments = document.getElementById('Number-Of-Comments');
const body = document.getElementById('body');
const newComment = document.createElement("div");

document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to my AI talking computer project!!!');
})

// document.onload(body.classList.add('hello'));

commentInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        textLocation.innerHTML += commentInput.value;
    }
})
