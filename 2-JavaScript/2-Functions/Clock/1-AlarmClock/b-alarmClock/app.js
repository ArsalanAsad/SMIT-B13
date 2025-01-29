let alarmTime = null;

const clockElement = document.getElementById('clock');
const setAlarmButton = document.getElementById('set-alarm-btn');
const resetButton = document.getElementById('reset-btn');
const alarmTimeInput = document.getElementById('alarm-time');
const alarmMessage = document.getElementById('alarm-message');

// Function to display the current time in 12-hour format with AM/PM
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    //convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; //the hour '0' should be '12'.
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    //check if current time matches the alarm time
    if (alarmTime && formatTimeForComparison(now) === alarmTime) {
        alarmMessage.textContent = 'Alarm! Time to wake up!';
        alarmMessage.classList.add('show');
        const alarmSound = new Audio('alarm_sound.mp3')
        alarmSound.play();
    } else {
        alarmMessage.classList.remove('show');
    }
}