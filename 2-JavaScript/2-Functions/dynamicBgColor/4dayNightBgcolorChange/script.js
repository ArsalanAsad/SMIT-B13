function updateBackground() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Display current time
    const timeString = now.toLocaleTimeString();
    document.getElementById('currentTime').textContent = timeString;
    
    // Determine if it's day or night (6:00 AM to 6:00 PM is day)
    const isDayTime = hours >= 6 && (hours < 18 || (hours === 18 && minutes === 0));
    
    // Update background and message
    const body = document.body;
    const timeStatus = document.getElementById('timeStatus');
    
    if (isDayTime) {
        body.classList.remove('night');
        body.classList.add('day');
        timeStatus.textContent = 'Good Day!';
    } else {
        body.classList.remove('day');
        body.classList.add('night');
        timeStatus.textContent = 'Good Night!';
    }
}

// Update immediately
updateBackground();

// Update every second to keep time display current
// (Background change will still happen at the right times)
setInterval(updateBackground, 1000);