// script.js
const timeDisplay = document.getElementById('time');
const dateDisplay = document.getElementById('date');
const alarmTimeInput = document.getElementById('alarmTime');
const setAlarmButton = document.getElementById('setAlarm');
const stopAlarmButton = document.getElementById('stopAlarm');
const alarmStatus = document.getElementById('alarmStatus');
const alarmSound = document.getElementById('alarmSound');

let alarmTime = null;
let isAlarmRinging = false;
let currentTheme = 'light';

// Update time and date
function updateDateTime() {
    const now = new Date();
    
    // Update time
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeDisplay.textContent = now.toLocaleTimeString('en-US', timeOptions);
    
    // Update date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', dateOptions);
    
    // Check alarm
    const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    if (alarmTime && currentTime === alarmTime && !isAlarmRinging) {
        triggerAlarm();
    }
}

function triggerAlarm() {
    isAlarmRinging = true;
    alarmStatus.textContent = 'ALARM RINGING!';
    alarmStatus.classList.add('active');
    document.body.classList.add('alarm-ringing');
    
    // Play sound
    alarmSound.loop = true;
    alarmSound.play().catch(error => console.log('Audio error:', error));
    
    // Enable stop button
    stopAlarmButton.disabled = false;
}

function stopAlarm() {
    isAlarmRinging = false;
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.body.classList.remove('alarm-ringing');
    alarmStatus.classList.remove('active');
    stopAlarmButton.disabled = true;
    alarmTime = null;
    alarmTimeInput.value = '';
}

// Theme toggle
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
}

// Event listeners
setAlarmButton.addEventListener('click', () => {
    if (alarmTimeInput.value) {
        alarmTime = alarmTimeInput.value;
        alarmStatus.textContent = `Alarm set for ${alarmTime}`;
        alarmStatus.classList.add('active');
        stopAlarmButton.disabled = false;
    }
});

stopAlarmButton.addEventListener('click', stopAlarm);

// Initialize
setInterval(updateDateTime, 1000);
updateDateTime();

// Handle visibility change
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && isAlarmRinging) {
        alarmSound.play().catch(console.error);
    }
});