const startBtn = document.getElementById('startBtn');
const gameContainer = document.querySelector('.game-container');
const startScreen = document.querySelector('.start-screen');
const car = document.getElementById('car');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const collisionSound = document.getElementById('collisionSound');
const powerupSound = document.getElementById('powerupSound');
const backgroundMusic = document.getElementById('backgroundMusic');

let gameActive = false;
let carLeft = 125;
const carWidth = 50;
const gameWidth = 300;
let obstacles = [];
let powerups = [];
let score = 0;
let level = 1;
let obstacleSpeed = 2;
let spawnRate = 1500;
let hasShield = false;
let gameIntervals = [];

// Game initialization
function initGame() {
    gameActive = true;
    score = 0;
    level = 1;
    obstacleSpeed = 2;
    spawnRate = 1500;
    hasShield = false;
    carLeft = 125;
    scoreDisplay.textContent = `Score: ${score}`;
    levelDisplay.textContent = `Level: ${level}`;
    car.style.left = carLeft + 'px';
    obstacles.forEach(obs => obs.remove());
    powerups.forEach(pu => pu.remove());
    obstacles = [];
    powerups = [];
}

// Start game
startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    initGame();
    backgroundMusic.play();
    
    // Start game loops
    gameIntervals = [
        setInterval(createObstacle, spawnRate),
        setInterval(checkCollision, 10),
        setInterval(updateLevel, 3000),
        setInterval(createPowerup, 10000)
    ];
});

// Car movement
document.addEventListener('keydown', (event) => {
    if (!gameActive) return;
    if (event.key === 'ArrowLeft' && carLeft > 0) {
        carLeft -= 10;
    } else if (event.key === 'ArrowRight' && carLeft < gameWidth - carWidth) {
        carLeft += 10;
    }
    car.style.left = carLeft + 'px';
});

function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.classList.add(`type${Math.random() < 0.7 ? 1 : 2}`);
    obstacle.style.left = Math.random() * (gameWidth - 50) + 'px';
    obstacle.style.animationDuration = `${obstacleSpeed}s`;
    gameContainer.appendChild(obstacle);
    obstacles.push(obstacle);

    setTimeout(() => {
        obstacle.remove();
        obstacles = obstacles.filter(obs => obs !== obstacle);
        if (gameActive) increaseScore(10);
    }, obstacleSpeed * 1000);
}

function createPowerup() {
    const powerup = document.createElement('div');
    powerup.classList.add('powerup');
    powerup.style.left = Math.random() * (gameWidth - 30) + 'px';
    powerup.style.animationDuration = `${obstacleSpeed}s`;
    gameContainer.appendChild(powerup);
    powerups.push(powerup);

    setTimeout(() => {
        powerup.remove();
        powerups = powerups.filter(pu => pu !== powerup);
    }, obstacleSpeed * 1000);
}

function increaseScore(points) {
    score += points;
    scoreDisplay.textContent = `Score: ${score}`;
}

function updateLevel() {
    if (score >= level * 500) {
        level++;
        levelDisplay.textContent = `Level: ${level}`;
        obstacleSpeed *= 0.9;
        spawnRate *= 0.9;
        
        // Update intervals
        gameIntervals.forEach(clearInterval);
        gameIntervals = [
            setInterval(createObstacle, spawnRate),
            setInterval(checkCollision, 10),
            setInterval(updateLevel, 3000),
            setInterval(createPowerup, 10000)
        ];
    }
}

function checkCollision() {
    if (!gameActive) return;
    
    const carRect = car.getBoundingClientRect();
    
    // Check obstacle collisions
    obstacles.forEach(obstacle => {
        const obstacleRect = obstacle.getBoundingClientRect();
        if (checkCollisionBetween(carRect, obstacleRect)) {
            if (hasShield) {
                removeShield();
            } else {
                endGame();
            }
        }
    });
    
    // Check powerup collisions
    powerups.forEach(powerup => {
        const powerupRect = powerup.getBoundingClientRect();
        if (checkCollisionBetween(carRect, powerupRect)) {
            powerupSound.play();
            activateShield();
            powerup.remove();
            powerups = powerups.filter(pu => pu !== powerup);
        }
    });
}

function checkCollisionBetween(rect1, rect2) {
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

function activateShield() {
    hasShield = true;
    const shield = document.createElement('div');
    shield.classList.add('shield');
    car.appendChild(shield);
}

function removeShield() {
    hasShield = false;
    const shield = document.querySelector('.shield');
    if (shield) shield.remove();
}

function endGame() {
    gameActive = false;
    collisionSound.play();
    backgroundMusic.pause();
    gameIntervals.forEach(clearInterval);
    alert(`Game Over! Final Score: ${score}`);
    startScreen.classList.remove('hidden');
    gameContainer.classList.add('hidden');
}