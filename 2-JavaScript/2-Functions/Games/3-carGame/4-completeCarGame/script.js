const startBtn = document.getElementById('startBtn');
const gameContainer = document.querySelector('.game-container');
const startScreen = document.querySelector('.start-screen');
const car = document.getElementById('car');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const highScoreDisplay = document.getElementById('highScore');
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
let scoreMultiplier = 1;
let gameIntervals = [];
let highScore = localStorage.getItem('highScore') || 0;
highScoreDisplay.textContent = `High Score: ${highScore}`;

// Game initialization
function initGame() {
    gameActive = true;
    score = 0;
    level = 1;
    obstacleSpeed = 2;
    spawnRate = 1500;
    hasShield = false;
    scoreMultiplier = 1;
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

// Mobile touch controls
let touchStartX = 0;
document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});
document.addEventListener('touchmove', (e) => {
    if (!gameActive) return;
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    carLeft = Math.max(0, Math.min(gameWidth - carWidth, carLeft + deltaX * 0.1));
    car.style.left = carLeft + 'px';
    touchStartX = touchEndX;
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
        if (gameActive) increaseScore(10 * scoreMultiplier);
    }, obstacleSpeed * 1000);
}

function createPowerup() {
    const powerup = document.createElement('div');
    powerup.classList.add('powerup');
    const powerupType = Math.random();
    if (powerupType < 0.33) {
        powerup.classList.add('shield');
    } else if (powerupType < 0.66) {
        powerup.classList.add('speed');
    } else {
        powerup.classList.add('multiplier');
    }
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
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        highScoreDisplay.textContent = `High Score: ${highScore}`;
    }
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
            if (powerup.classList.contains('shield')) {
                activateShield();
            } else if (powerup.classList.contains('speed')) {
                increaseSpeed();
            } else if (powerup.classList.contains('multiplier')) {
                activateMultiplier();
            }
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

function increaseSpeed() {
    obstacleSpeed *= 0.8;
    spawnRate *= 0.8;
    gameIntervals.forEach(clearInterval);
    gameIntervals = [
        setInterval(createObstacle, spawnRate),
        setInterval(checkCollision, 10),
        setInterval(updateLevel, 3000),
        setInterval(createPowerup, 10000)
    ];
}

function activateMultiplier() {
    scoreMultiplier = 2;
    setTimeout(() => {
        scoreMultiplier = 1;
    }, 5000);
}

function createParticles(x, y) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        gameContainer.appendChild(particle);
        setTimeout(() => particle.remove(), 500);
    }
}

function endGame() {
    gameActive = false;
    collisionSound.play();
    backgroundMusic.pause();
    gameIntervals.forEach(clearInterval);
    createParticles(carLeft + carWidth / 2, 500 - 80);
    alert(`Game Over! Final Score: ${score}`);
    startScreen.classList.remove('hidden');
    gameContainer.classList.add('hidden');
}