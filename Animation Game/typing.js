            //  Typing Game

var PHRASES = [
    "A happy puppy plays in the garden all day long.",
    "The fluffy bunny hops quickly across the bright green grass.",
    "Tiny kittens love to chase a rolling ball of yarn.",
    "A sleepy brown bear enjoys honey from a large jar.",
    "Colorful parrots talk and sing a sweet jungle song."
];

var currentPhrase = '';
var timer;
var time = 0;
var errors = 0;
var phraseIndex = 0;

// HTML Elements
var phraseDisplay = document.getElementById('phrase-display');
var typingInput = document.getElementById('typing-input');
var timeValue = document.getElementById('time-value');
var wpmValue = document.getElementById('wpm-value');
var restartButton = document.getElementById('restart-btn');

function startTimer() {
    clearInterval(timer);
    time = 0;
    timeValue.textContent = time;
    timer = setInterval(function() {
        time++;
        timeValue.textContent = time;
    
        calculateWPM(); 
    }, 1000); 
}

function calculateWPM() {
    var typedCharacters = typingInput.value.length;
    var minutes = time / 60;
    if (minutes === 0) return 0;

    var wpm = Math.round((typedCharacters / 5) / minutes);
    wpmValue.textContent = wpm;
    return wpm;
}


function loadNewPhrase() {

    phraseIndex = Math.floor(Math.random() * PHRASES.length);
    currentPhrase = PHRASES[phraseIndex];
    phraseDisplay.innerHTML = ''; 
    
    currentPhrase.split('').forEach(char => {
        var charSpan = document.createElement('span');
        charSpan.textContent = char;
        phraseDisplay.appendChild(charSpan);
    });

    typingInput.value = ''; 
    typingInput.disabled = false;
    typingInput.focus(); 
    errors = 0;
}


function processInput() {
    var typedText = typingInput.value;
    var phraseChars = phraseDisplay.querySelectorAll('span');
    var isFinished = true;
    
    if (typedText.length === 1 && time === 0) {
        startTimer();
    }

    phraseChars.forEach((charSpan, index) => {
        var typedChar = typedText[index];

        charSpan.classList.remove('correct', 'incorrect', 'current');

        if (typedChar == null) {
            
            charSpan.classList.add('current');
            isFinished = false;
        } else if (typedChar === charSpan.textContent) {
        
            charSpan.classList.add('correct');
        } else {
        
            charSpan.classList.add('incorrect');
            isFinished = false;
    
        }
    });

    if (isFinished && typedText.length === currentPhrase.length) {
        clearInterval(timer); 
        typingInput.disabled = true;
        showResult();
    }
}


function showResult() {
    var finalWPM = calculateWPM();
    var accuracy = Math.round(((currentPhrase.length - errors) / currentPhrase.length) * 100);

    Swal.fire({
        title: '🌟 Challenge Complete! 🌟',
        html: 'You typed the phrase in **' + time + ' seconds**.<br>' + 
              '<span class="text-success fw-bold">WPM: ' + finalWPM + '</span><br>' +
              '<span class="text-info">Accuracy: ' + accuracy + '%</span>',
        icon: 'success',
        confirmButtonText: 'Try Another Code!',
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            loadNewPhrase();
        }
    });
}


typingInput.addEventListener('input', processInput);
restartButton.addEventListener('click', loadNewPhrase);

loadNewPhrase();