// Game Constants
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 10;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };

// DOM References
const scoreBox = document.getElementById('scoreBox');
const hiscoreBox = document.getElementById('hiscoreBox');
const board = document.getElementById('board');

// HiScore
let hiscore = localStorage.getItem("hiscore");
let hiscoreval = hiscore ? JSON.parse(hiscore) : 0;
hiscoreBox.innerHTML = "HiScore: " + hiscoreval;

// Main loop
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) return;
    lastPaintTime = ctime;
    gameEngine();
}

// Collision
function isCollide(snake) {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }
    return snake[0].x <= 0 || snake[0].x >= 18 || snake[0].y <= 0 || snake[0].y >= 18;
}

// Generate Food
function generateFood() {
    let a = 2, b = 16;
    food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    while (snakeArr.some(s => s.x === food.x && s.y === food.y)) {
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }
}

// Game Engine
function gameEngine() {
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over. Press any key to play again!");
        snakeArr = [{ x: 13, y: 15 }];
        score = 0;
        scoreBox.innerHTML = "Score: " + score;
        musicSound.play();
    }

    // Eating Food
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        foodSound.play();
        score++;
        if (score > hiscoreval) {
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        generateFood();
    }

    // Move Snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Display
    board.innerHTML = "";
    snakeArr.forEach((s, i) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = s.y;
        snakeElement.style.gridColumnStart = s.x;
        snakeElement.classList.add(i === 0 ? 'head' : 'snake');
        board.appendChild(snakeElement);
    });

    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

// Key controls
window.addEventListener('keydown', e => {
    inputDir = inputDir.x === 0 && inputDir.y === 0 ? { x: 0, y: 1 } : inputDir;
    moveSound.play();
    switch (e.key) {
        case "ArrowUp": if (inputDir.y !== 1) inputDir = { x: 0, y: -1 }; break;
        case "ArrowDown": if (inputDir.y !== -1) inputDir = { x: 0, y: 1 }; break;
        case "ArrowLeft": if (inputDir.x !== 1) inputDir = { x: -1, y: 0 }; break;
        case "ArrowRight": if (inputDir.x !== -1) inputDir = { x: 1, y: 0 }; break;
    }
});

// Touch controls
let touchStartX = 0, touchStartY = 0;
window.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
});
window.addEventListener('touchend', e => {
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0 && inputDir.x !== -1) inputDir = { x: 1, y: 0 };
        else if (dx < 0 && inputDir.x !== 1) inputDir = { x: -1, y: 0 };
    } else {
        if (dy > 0 && inputDir.y !== -1) inputDir = { x: 0, y: 1 };
        else if (dy < 0 && inputDir.y !== 1) inputDir = { x: 0, y: -1 };
    }
    moveSound.play();
});

musicSound.play();
window.requestAnimationFrame(main);
