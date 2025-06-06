const car = document.getElementById('car');
const gameContainer = document.querySelector('.game-container');

let carLeft = 125; // Initial position of the car
const carWidth = 50;
const gameWidth = 300;
let obstacles = []; // Array to store all obstacles

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
    gameContainer.appendChild(obstacle);
    obstacles.push(obstacle);

    // Remove the obstacle when it goes out of the screen
    setTimeout(() => {
        obstacle.remove();
        obstacles = obstacles.filter(obs => obs !== obstacle);
    }, 2000); // Match the animation duration
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
            alert('Game Over!');
            window.location.reload(); // Restart the game
        }
    }
}

// Spawn obstacles at random intervals
setInterval(createObstacle, 1500); // Adjust the interval for difficulty

// Check for collisions continuously
setInterval(checkCollision, 10);