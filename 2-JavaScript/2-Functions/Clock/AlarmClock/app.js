// let alarmTime = null;

// const clockElement = document.getElementById('clock');
// const setAlarmButton = document.getElementById('set-alarm-btn');
// const resetButton = document.getElementById('reset-btn');
// const alarmTimeInput = document.getElementById('alarm-time');
// const alarmMessage = document.getElementById('alarm-message');

// // Function to display the current time in 12-hour format with AM/PM
// function updateClock() {
//     const now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let ampm = hours >= 12 ? 'PM' : 'AM';

//     // Convert to 12-hour format
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

//     // Check if current time matches the alarm time in 12-hour format
//     if (alarmTime && formatTimeForComparison(now) === alarmTime) {
//         alarmMessage.textContent = 'ALARM! Time to wake up!';
//         alarmMessage.classList.add('show');
//         const alarmSound = new Audio('australia.mp3'); // Replace with your sound
//         alarmSound.play();
//     } else {
//         alarmMessage.classList.remove('show');
//     }
// }

// // Helper function to format time for alarm comparison (12-hour format)
// function formatTimeForComparison(now) {
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let ampm = hours >= 12 ? 'PM' : 'AM';

//     // Convert to 12-hour format
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0' + minutes : minutes;

//     return `${hours}:${minutes} ${ampm}`;
// }

// // Set alarm
// setAlarmButton.addEventListener('click', () => {
//     if (!alarmTimeInput.value) {
//         alarmMessage.textContent = 'Please select a valid time.';
//         alarmMessage.classList.add('show');
//         return;
//     }

//     alarmTime = alarmTimeInput.value;
//     alarmMessage.textContent = `Alarm set for ${alarmTime}`;
//     alarmMessage.classList.add('show');
// });

// // Reset alarm
// resetButton.addEventListener('click', () => {
//     alarmTime = null;
//     alarmMessage.textContent = '';
//     alarmMessage.classList.remove('show');
//     alarmTimeInput.value = '';
// });

// // Update the clock every second
// setInterval(updateClock, 1000);

// // Initial clock update
// updateClock();


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

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Check if current time matches the alarm time
    if (alarmTime && formatTimeForComparison(now) === alarmTime) {
        alarmMessage.textContent = 'ALARM! Time to wake up!';
        alarmMessage.classList.add('show');
        const alarmSound = new Audio('alarm_sound.mp3'); // Replace with your sound
        alarmSound.play();
    } else {
        alarmMessage.classList.remove('show');
    }
}

// Helper function to format time for alarm comparison (12-hour format with AM/PM)
function formatTimeForComparison(now) {
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
}

// Set alarm
setAlarmButton.addEventListener('click', () => {
    if (!alarmTimeInput.value) {
        alarmMessage.textContent = 'Please select a valid time.';
        alarmMessage.classList.add('show');
        return;
    }

    alarmTime = formatAlarmTime(alarmTimeInput.value); // format the alarm time
    alarmMessage.textContent = `Alarm set for ${alarmTime}`;
    alarmMessage.classList.add('show');
});

// Reset alarm
resetButton.addEventListener('click', () => {
    alarmTime = null;
    alarmMessage.textContent = '';
    alarmMessage.classList.remove('show');
    alarmTimeInput.value = '';
});

// Helper function to format the alarm time input (12-hour format with AM/PM)
function formatAlarmTime(inputTime) {
    const timeParts = inputTime.split(":");
    let hours = parseInt(timeParts[0]);
    const minutes = timeParts[1];
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    return `${hours}:${minutes} ${ampm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial clock update
updateClock();