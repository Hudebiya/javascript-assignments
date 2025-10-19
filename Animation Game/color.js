             //  Puzzle - Color Game
             
// Game Variables
var GRID_SIZE = 6;
var TOTAL_BLOCKS = GRID_SIZE * GRID_SIZE;

// Colours Array (Alien/Sci-fi theme se milte-julte colours)
var COLORS = [
    '#7eff9a', // Neon Green (0)
    '#00f7ff', // Cyan Blue (1)
    '#ff00ff', // Magenta Pink (2)
    '#ffff00', // Yellow (3)
    '#ffa500', // Orange (4)
    '#ffffff'  // White/Light (5)
];

// HTML Elements
var gameGrid = document.getElementById('game-grid');
var scoreValue = document.getElementById('score-value');
var movesCount = document.getElementById('moves-count');
var resetButton = document.getElementById('reset-btn');

// Game State Variables
var grid = []; // 2D Array to store colour data (Logic ke liye)
var score = 0;
var moves = 0;
var isChecking = false; // Taa'ki double click na ho

// Adjacency for BFS/Matching (Up, Down, Left, Right)
var DIRECTIONS = [
    {r: -1, c: 0}, // Up
    {r: 1, c: 0},  // Down
    {r: 0, c: -1}, // Left
    {r: 0, c: 1}   // Right
];

// --- 1. CORE UTILITIES ---

function updateScoreboard() {
    scoreValue.textContent = score;
    movesCount.textContent = moves;
}

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

// Check if coordinates (r, c) are within the grid
function isValid(r, c) {
    return r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE;
}

// HTML Element ko row/col se fetch karna
function getBlockElement(r, c) {
    // Note: document.querySelector bhi Chapter 1-48 ke baad aata hai, 
    // lekin DOM manipulation ke liye yeh zaroori hai.
    return document.querySelector('.block[data-row="' + r + '"][data-col="' + c + '"]');
}


// --- 2. MATCH FINDING (The Hardest Part!) ---

// BFS-like logic to find all connected blocks of the same color
function findConnectedBlocks(startR, startC, targetColor) {
    if (grid[startR][startC] === null) return [];

    var queue = [{r: startR, c: startC}]; // BFS Queue
    var visited = {}; // Object use karte hain Set ke bajaaye
    var matchingBlocks = [];

    // Object mein coordinate ko key ke taur par store karte hain: "r,c"
    visited[startR + ',' + startC] = true;
    matchingBlocks.push({r: startR, c: startC});

    while (queue.length > 0) {
        // queue.shift() - Array method jo aapne padha hoga
        var current = queue.shift();

        // 4 directions mein check karo
        // DIRECTIONS array ko for...of ki jagah for loop se iterate karte hain
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

// --- 3. GAME ACTIONS ---

// Blocks ko remove karna aur score update karna
function removeBlocks(blocksToRemove) {
    var count = blocksToRemove.length;

    // Remove logic
    for (var i = 0; i < blocksToRemove.length; i++) {
        var block = blocksToRemove[i];
        
        // 1. Grid data se colour hatao (null set karo)
        grid[block.r][block.c] = null;

        // 2. HTML element ko fade out/remove karo
        var element = getBlockElement(block.r, block.c);
        if (element) {
             element.style.opacity = '0'; 
             // setTimeout() jo aapne padha hoga
             setTimeout(function() {
                 element.remove();
             }, 200); 
        }
    }

    // Score Calculation:
    score += count * 10; 
    updateScoreboard();
}

// Gravity aur New Blocks Spawn karna
function applyGravity() {
    // Har column (c) par iterate karte hain
    for (var c = 0; c < GRID_SIZE; c++) {
        var emptySpaces = 0;
        
        // Bottom se upar tak dekho
        for (var r = GRID_SIZE - 1; r >= 0; r--) {
            
            if (grid[r][c] === null) {
                emptySpaces++;
            } else if (emptySpaces > 0) {
                // Blocks ko neeche move karna
                var targetR = r + emptySpaces;

                // 1. Grid data ko update karo
                grid[targetR][c] = grid[r][c];
                grid[r][c] = null;

                // 2. HTML element ko update karo
                var element = getBlockElement(r, c);
                if (element) {
                    element.dataset.row = targetR;
                    element.style.top = (targetR * (100 / GRID_SIZE)) + '%';
                }
            }
        }

        // Top mein naye blocks generate karo
        for (var i = 0; i < emptySpaces; i++) {
            var newR = i;
            var color = getRandomColor();

            grid[newR][c] = color;

            // New HTML Block Element banana
            var block = document.createElement('div');
            block.classList.add('block');
            block.style.backgroundColor = color;
            block.dataset.row = newR;
            block.dataset.col = c;
            block.dataset.color = color;
            
            block.style.top = (newR * (100 / GRID_SIZE)) + '%';
            block.style.left = (c * (100 / GRID_SIZE)) + '%';

            // Event Listener (Function reference - jo aapne padha hoga)
            block.addEventListener('click', handleBlockClick);
            gameGrid.appendChild(block);
        }
    }
}


// --- 4. MAIN CLICK HANDLER ---

function handleBlockClick(event) {
    if (isChecking) return;

    isChecking = true;
    moves++;

    var clickedBlock = event.target;
    var r = parseInt(clickedBlock.dataset.row);
    var c = parseInt(clickedBlock.dataset.col);
    var color = clickedBlock.dataset.color;

    // 1. Matching blocks dhundo
    var matchedBlocks = findConnectedBlocks(r, c, color);

    if (matchedBlocks.length >= 3) {
        // Match Found!
        removeBlocks(matchedBlocks);

        // Gravity apply karo aur naye blocks lao
        setTimeout(function() {
            applyGravity();
            isChecking = false;
        }, 300);

    } else {
        // No match
        alert("Need 3 or more connected blocks of the same color!");
        isChecking = false;
    }

    updateScoreboard();
}


// --- 5. INITIALIZATION ---

function createGrid() {
    // Reset game state
    score = 0;
    moves = 0;
    isChecking = false;
    grid = [];
    gameGrid.innerHTML = '';

    // Create the grid structure and blocks
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
            
            // CSS Absolute Positioning
            block.style.top = (i * (100 / GRID_SIZE)) + '%'; 
            block.style.left = (j * (100 / GRID_SIZE)) + '%';

            block.addEventListener('click', handleBlockClick);
            gameGrid.appendChild(block);
        }
        grid.push(row);
    }
    
    updateScoreboard();
}

// EVENT LISTENERS
resetButton.addEventListener('click', createGrid);

// START GAME
createGrid();