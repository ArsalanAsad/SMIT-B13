const gameArea = document.getElementById("game-area");
const snake = document.getElementById("snake");
const ball = document.getElementById("ball");

// Focus the game area for keyboard events
gameArea.tabIndex = 0;
gameArea.focus();

// Snake movement variables
let snakeX = 120; // Initial X position
let snakeY = 10; // Initial Y position
let snakeSpeed = 10; // Movement speed in pixels
let direction = "right"; // Initial direction
let snakeBody = [{ x: snakeX, y: snakeY }]; // Array to store snake segments
let score = 0;

// Game area boundaries
const gameAreaRect = gameArea.getBoundingClientRect();
const gameAreaWidth = gameAreaRect.width;
const gameAreaHeight = gameAreaRect.height;

// Function to update the snake's position
const updateSnakePosition = () => {
    // Update snake's head position based on direction
    switch (direction) {
        case "right":
            snakeX += snakeSpeed;
            break;
        case "left":
            snakeX -= snakeSpeed;
            break;
        case "up":
            snakeY -= snakeSpeed;
            break;
        case "down":
            snakeY += snakeSpeed;
            break;
    }

    // Boundary checks to keep the snake inside the game area
    if (snakeX < 0) snakeX = 0; // Left boundary
    if (snakeX + 20 > gameAreaWidth) snakeX = gameAreaWidth - 20; // Right boundary (20 is the snake segment width)
    if (snakeY < 0) snakeY = 0; // Top boundary
    if (snakeY + 20 > gameAreaHeight) snakeY = gameAreaHeight - 20; // Bottom boundary (20 is the snake segment height)

    // Add new head position to the snake's body
    const newHead = { x: snakeX, y: snakeY };
    snakeBody.unshift(newHead);

    // Remove the tail if the snake didn't eat the ball
    if (!checkCollisionWithBall()) {
        snakeBody.pop();
    }

    // Render the snake
    renderSnake();
};

// Function to render the snake
const renderSnake = () => {
    snake.innerHTML = ""; // Clear previous segments
    snakeBody.forEach((segment, index) => {
        const segmentElement = document.createElement("div");
        segmentElement.className = "snake-segment";
        segmentElement.style.left = `${segment.x}px`;
        segmentElement.style.top = `${segment.y}px`;
        snake.appendChild(segmentElement);
    });
};

// Function to handle keyboard input
const handleKeyDown = (e) => {
    switch (e.code) {
        case "ArrowRight":
            if (direction !== "left") direction = "right"; // Prevent reversing direction
            break;
        case "ArrowLeft":
            if (direction !== "right") direction = "left";
            break;
        case "ArrowUp":
            if (direction !== "down") direction = "up";
            break;
        case "ArrowDown":
            if (direction !== "up") direction = "down";
            break;
    }
};

// Function to check collision with the ball
const checkCollisionWithBall = () => {
    const ballRect = ball.getBoundingClientRect();
    const head = snakeBody[0];

    if (
        head.x < ballRect.right &&
        head.x + 20 > ballRect.left &&
        head.y < ballRect.bottom &&
        head.y + 20 > ballRect.top
    ) {
        // Snake eats the ball
        score += 1;
        document.getElementById("score-display").textContent = `Score: ${score}, Name: Ahmed`;
        popTheBall(); // Reposition the ball
        return true;
    }
    return false;
};

// Function to generate a random number within a range
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

// Function to position the ball randomly within the game area
const popTheBall = () => {
    const maxTop = gameAreaHeight - ball.offsetHeight;
    const maxLeft = gameAreaWidth - ball.offsetWidth;

    const top = getRandomNumber(maxTop);
    const left = getRandomNumber(maxLeft);

    ball.style.top = `${top}px`;
    ball.style.left = `${left}px`;
};

// Function to move the snake continuously
const gameLoop = () => {
    updateSnakePosition();
    requestAnimationFrame(gameLoop); // Continuously update the snake's position
};

// Event listener for keyboard input
gameArea.addEventListener("keydown", handleKeyDown);

// Start the game loop
gameLoop();

// Initial ball position
popTheBall();