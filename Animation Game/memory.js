var cardSymbols = [
    'symbol-a', 
    'symbol-b', 
    'symbol-c', 
    'symbol-d', 
    'symbol-e', 
    'symbol-f'
];

var cards = []; 
var hasFlippedCard = false;
var lockBoard = false; 
var firstCard, secondCard;
var matchedPairs = 0;
var moves = 0;
var timer;
var time = 0;

// HTML Elements
var gameBoard = document.getElementById('game-board');
var timeValue = document.getElementById('time-value');
var movesValue = document.getElementById('moves-value');
var restartButton = document.getElementById('restart-btn');

function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function startTimer() {
    clearInterval(timer);
    time = 0;
    timer = setInterval(function() {
        time++;
        timeValue.textContent = time;
    }, 1000); 
}

function createBoard() {

    cards = cardSymbols.concat(cardSymbols); 
    shuffle(cards);

    gameBoard.innerHTML = ''; 
    matchedPairs = 0;
    moves = 0;
    movesValue.textContent = moves;

    for (var i = 0; i < cards.length; i++) {
        var symbol = cards[i];
        
        var cardContainer = document.createElement('div');
        cardContainer.classList.add('col-3', 'card-container'); 
        
        cardContainer.dataset.symbol = symbol;

        var cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        var cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.textContent = symbol; 

        var cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.textContent = '?'; 

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardContainer.appendChild(cardInner);

        cardContainer.addEventListener('click', flipCard);
        gameBoard.appendChild(cardContainer);
    }
    
    startTimer(); 
}

function flipCard(event) {
    
    if (lockBoard) return;
    
    var currentCard = event.currentTarget;
    
    if (currentCard === firstCard) return;

    currentCard.classList.add('flipped');
    
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = currentCard;
        return;
    }

    secondCard = currentCard;
    moves++;
    movesValue.textContent = moves;

    checkForMatch();
}

function checkForMatch() {
    var isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matchedPairs++;
    
    resetBoard(); 
    
    if (matchedPairs === cardSymbols.length) {
    
        gameOver();
    }
}

function unflipCards() {
    lockBoard = true; 

    setTimeout(function() {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        
        resetBoard(); 
    }, 1500); 
}

function resetBoard() {

    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function gameOver() {
    clearInterval(timer); 
    
    Swal.fire({
        title: 'CONGRATULATIONS!',
        text: 'You won in ' + time + ' seconds and ' + moves + ' moves.',
        icon: 'success',
        confirmButtonText: 'Play Again',
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            createBoard(); 
        }
    });
}


restartButton.addEventListener('click', createBoard);

createBoard();