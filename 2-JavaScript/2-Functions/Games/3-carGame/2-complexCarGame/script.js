const car = document.getElementById('car');
const gameContainer = document.querySelector('.game-container');
const scoreDisplay = document.getElementById('score');
const collisionSound = document.getElementById('collisionSound');
const backgroundMusic = document.getElementById('backgroundMusic');

let carLeft = 125; // Initial position of the car
const carWidth = 50;
const gameWidth = 300;
let obstacles = []; // Array to store all obstacles
let score = 0;
let obstacleSpeed = 2; // Initial obstacle speed
let gameInterval; // For increasing speed over time

// Move the car left and right
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && carLeft > 0) {
        carLeft -= 10;
    } else if (event.key === 'ArrowRight' && carLeft < gameWidth - carWidth) {
        carLeft += 10;
    }
    car.style.left = carLeft + 'px';
});

// Function to create a new obstacle
function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    const obstacleLeft = Math.floor(Math.random() * (gameWidth - 50)); // Random position
    obstacle.style.left = obstacleLeft + 'px';
    obstacle.style.animationDuration = `${obstacleSpeed}s`; // Set obstacle speed
    gameContainer.appendChild(obstacle);
    obstacles.push(obstacle);

    // Remove the obstacle when it goes out of the screen
    setTimeout(() => {
        obstacle.remove();
        obstacles = obstacles.filter(obs => obs !== obstacle);
        increaseScore(); // Increase score when obstacle is avoided
    }, obstacleSpeed * 1000); // Match the animation duration
}

// Function to increase the score
function increaseScore() {
    score += 10;
    scoreDisplay.textContent = `Score: ${score}`;
}

// Function to check collisions
function checkCollision() {
    const carRect = car.getBoundingClientRect();
    for (let obstacle of obstacles) {
        const obstacleRect = obstacle.getBoundingClientRect();
        if (
            carRect.left < obstacleRect.right &&
            carRect.right > obstacleRect.left &&
            carRect.top < obstacleRect.bottom &&
            carRect.bottom > obstacleRect.top
        ) {
            collisionSound.play(); // Play collision sound
            backgroundMusic.pause(); // Stop background music
            alert(`Game Over! Your score is ${score}`);
            window.location.reload(); // Restart the game
        }
    }
}

// Function to increase obstacle speed over time
function increaseSpeed() {
    if (obstacleSpeed > 0.5) { // Limit the minimum speed
        obstacleSpeed -= 0.1; // Increase speed by reducing animation duration
    }
}

// Start the game
function startGame() {
    backgroundMusic.play(); // Play background music
    setInterval(createObstacle, 1500); // Spawn obstacles every 1.5 seconds
    setInterval(checkCollision, 10); // Check for collisions continuously
    gameInterval = setInterval(increaseSpeed, 5000); // Increase speed every 5 seconds
}

// Start the game when the page loads
startGame();