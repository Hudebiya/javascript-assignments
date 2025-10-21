// Game Variables
var GRID_SIZE = 6;
var MOVES_LIMIT = 30; 

var COLORS = [
    '#38d45aff', 
    '#1ec1c7ff', 
    '#a33a3fff'  
];

var gameGrid = document.getElementById('game-grid');
var scoreValue = document.getElementById('score-value');
var movesCount = document.getElementById('moves-count');
var resetButton = document.getElementById('reset-btn');

var grid = [];
var score = 0;
var moves = MOVES_LIMIT;
var isChecking = false;

var DIRECTIONS = [
    {r: -1, c: 0}, 
    {r: 1, c: 0},
    {r: 0, c: -1},
    {r: 0, c: 1}
];


function updateScoreboard() {
    scoreValue.textContent = score;
    movesCount.textContent = moves;
}

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function isValid(r, c) {
    return r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE;
}

function getBlockElement(r, c) {
    return document.querySelector('.block[data-row="' + r + '"][data-col="' + c + '"]');
}


function findConnectedBlocks(startR, startC, targetColor) {
    if (grid[startR][startC] === null) return [];

    var queue = [{r: startR, c: startC}];
    var visited = {};
    var matchingBlocks = [];

    visited[startR + ',' + startC] = true;
    matchingBlocks.push({r: startR, c: startC});

    while (queue.length > 0) {
        var current = queue.shift();

        for (var k = 0; k < DIRECTIONS.length; k++) {
            var dir = DIRECTIONS[k];
            var nextR = current.r + dir.r;
            var nextC = current.c + dir.c;
            var nextCoord = nextR + ',' + nextC;

            if (isValid(nextR, nextC) && !visited[nextCoord] && grid[nextR][nextC] === targetColor) {
                
                visited[nextCoord] = true;
                matchingBlocks.push({r: nextR, c: nextC});
                queue.push({r: nextR, c: nextC});
            }
        }
    }

    return matchingBlocks;
}


function removeBlocks(blocksToRemove) {
    var count = blocksToRemove.length;

    for (var i = 0; i < blocksToRemove.length; i++) {
        var block = blocksToRemove[i];
        
        grid[block.r][block.c] = null;

        var element = getBlockElement(block.r, block.c);
        if (element) {
             element.style.opacity = '0'; 
             
             element.remove(); 
        }
    }

    score += count * 10;
}

function applyGravity() {
    for (var c = 0; c < GRID_SIZE; c++) {
        var emptySpaces = 0;
        
        for (var r = GRID_SIZE - 1; r >= 0; r--) {
            if (grid[r][c] === null) {
                emptySpaces++;
            } else if (emptySpaces > 0) {
                var targetR = r + emptySpaces;

                grid[targetR][c] = grid[r][c];
                grid[r][c] = null;

                var element = getBlockElement(r, c);
                if (element) {
                    element.dataset.row = targetR;
                    element.style.top = (targetR * (100 / GRID_SIZE)) + '%';
                }
            }
        }

        for (var i = 0; i < emptySpaces; i++) {
            var newR = i; 
            var color = getRandomColor();

            grid[newR][c] = color;

            var block = document.createElement('div');
            block.classList.add('block');
            block.style.backgroundColor = color;
            
            block.style.top = ( (newR - emptySpaces) * (100 / GRID_SIZE) ) + '%'; 
            block.style.left = (c * (100 / GRID_SIZE)) + '%';
            
            block.dataset.row = newR;
            block.dataset.col = c;
            block.dataset.color = color;

            block.addEventListener('click', handleBlockClick);
            gameGrid.appendChild(block);
            
            (function(b, finalR) {
                setTimeout(function() {
                    b.style.top = (finalR * (100 / GRID_SIZE)) + '%';
                }, 50);
            })(block, newR);
        }
    }
}


function handleBlockClick(event) {
    if (isChecking || moves <= 0) return;

    isChecking = true;
    moves--; 

    var clickedBlock = event.target;
    var r = parseInt(clickedBlock.dataset.row);
    var c = parseInt(clickedBlock.dataset.col);
    var color = clickedBlock.dataset.color;

    var matchedBlocks = findConnectedBlocks(r, c, color);

    if (matchedBlocks.length >= 3) {
        // Match Found!
        removeBlocks(matchedBlocks);

        setTimeout(function() {
            applyGravity();
            isChecking = false;
            updateScoreboard();

            if (moves === 0) {
                setTimeout(function() {
                    Swal.fire({
                        title: 'GAME OVER!',
                        text: 'Your final score is: ' + score + ' points. Great effort!',
                        icon: 'success',
                        confirmButtonText: 'Play Again',
                        allowOutsideClick: false
                    }).then((result) => {
                        if (result.isConfirmed) {
                            createGrid(); 
                        }
                    });
                }, 500);
            }

        }, 50); 

    } else {
        
        Swal.fire({
            icon: 'warning',
            title: 'No Match!',
            text: 'Need 3 or more connected blocks of the same color to score.',
            showConfirmButton: false,
            timer: 1500
        });
        
        moves++;
        isChecking = false;
        updateScoreboard();
    }
}

function createGrid() {
    score = 0;
    moves = MOVES_LIMIT; 
    isChecking = false;
    grid = [];
    gameGrid.innerHTML = '';

    for (var i = 0; i < GRID_SIZE; i++) {
        var row = [];
        for (var j = 0; j < GRID_SIZE; j++) {
            
            var color = getRandomColor();
            row.push(color); 
            
            var block = document.createElement('div');
            block.classList.add('block');
            block.style.backgroundColor = color;
            
            block.dataset.row = i;
            block.dataset.col = j;
            block.dataset.color = color; 
            
            block.style.top = (i * (100 / GRID_SIZE)) + '%'; 
            block.style.left = (j * (100 / GRID_SIZE)) + '%';

            block.addEventListener('click', handleBlockClick);
            gameGrid.appendChild(block);
        }
        grid.push(row);
    }
    
    updateScoreboard();
}

resetButton.addEventListener('click', createGrid);

createGrid();