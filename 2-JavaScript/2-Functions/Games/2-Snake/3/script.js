const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const gameOverDiv = document.getElementById('game-over');
const finalScoreSpan = document.getElementById('final-score');

const gridSize = 20;
const tileCount = canvas.width / gridSize;
let snake = [
    { x: 10, y: 10 }
];
let food = generateFood();
let dx = 1; // Start moving right
let dy = 0;
let score = 0;
let gameSpeed = 100;
let gameLoop;
let changingDirection = false;

document.addEventListener('keydown', changeDirection);
startGame();

function startGame() {
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(update, gameSpeed);
}

function update() {
    changingDirection = false;
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Check collisions
    if (isCollision(head)) {
        gameOver();
        return;
    }

    snake.unshift(head);

    // Check food collision
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = `Score: ${score}`;
        food = generateFood();
        increaseSpeed();
    } else {
        snake.pop();
    }

    draw();
}

function draw() {
    // Clear canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? '#45a049' : '#4CAF50';
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, 
                   gridSize - 2, gridSize - 2);
    });

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
}

function changeDirection(event) {
    if (changingDirection) return;
    changingDirection = true;

    const key = event.key;
    const goingUp = dy === -1;
    const goingDown = dy === 1;
    const goingRight = dx === 1;
    const goingLeft = dx === -1;

    if (key === 'ArrowLeft' && !goingRight) {
        dx = -1;
        dy = 0;
    }
    if (key === 'ArrowUp' && !goingDown) {
        dx = 0;
        dy = -1;
    }
    if (key === 'ArrowRight' && !goingLeft) {
        dx = 1;
        dy = 0;
    }
    if (key === 'ArrowDown' && !goingUp) {
        dx = 0;
        dy = 1;
    }
}

function generateFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    
    return newFood;
}

function isCollision(position) {
    return position.x < 0 || position.x >= tileCount || 
           position.y < 0 || position.y >= tileCount ||
           snake.some((segment, index) => 
               index !== 0 && segment.x === position.x && segment.y === position.y
           );
}

function increaseSpeed() {
    gameSpeed = Math.max(50, gameSpeed - 2);
    clearInterval(gameLoop);
    startGame();
}

function gameOver() {
    clearInterval(gameLoop);
    gameOverDiv.style.display = 'block';
    finalScoreSpan.textContent = score;
}

function restartGame() {
    snake = [{ x: 10, y: 10 }];
    food = generateFood();
    dx = 1;
    dy = 0;
    score = 0;
    gameSpeed = 100;
    scoreElement.textContent = `Score: ${score}`;
    gameOverDiv.style.display = 'none';
    startGame();
}