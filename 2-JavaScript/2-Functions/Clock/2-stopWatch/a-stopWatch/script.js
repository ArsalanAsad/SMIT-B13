let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.querySelector('.display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStop() {
    if (startStopBtn.textContent === 'Start') {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        startStopBtn.textContent = 'Start';
    }
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(Math.floor(elapsedTime / 1000));
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);