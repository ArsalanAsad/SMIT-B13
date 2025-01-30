const timeDisplay = document.getElementById('time');
const alarmTimeInput = document.getElementById('alarmTime');
const setAlarmButton = document.getElementById('setAlarm');
const stopAlarmButton = document.getElementById('stopAlarm');
const alarmStatus = document.getElementById('alarmStatus');

let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    if (alarmTime && `${hours}:${minutes}` === alarmTime) {
        triggerAlarm();
    }
}

function triggerAlarm() {
    alarmStatus.textContent = 'Alarm is ringing!';
    stopAlarmButton.disabled = false;
    alarmTimeout = setTimeout(() => {
        alarmStatus.textContent = '';
        stopAlarmButton.disabled = true;
    }, 60000); // Alarm stops after 1 minute
}

setAlarmButton.addEventListener('click', () => {
    const time = alarmTimeInput.value;
    if (time) {
        alarmTime = time;
        alarmStatus.textContent = `Alarm set for ${time}`;
    }
});

stopAlarmButton.addEventListener('click', () => {
    clearTimeout(alarmTimeout);
    alarmStatus.textContent = 'Alarm stopped';
    stopAlarmButton.disabled = true;
});

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately