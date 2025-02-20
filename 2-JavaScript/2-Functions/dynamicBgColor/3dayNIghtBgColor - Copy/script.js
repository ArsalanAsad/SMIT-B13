function updateBackgroundAndIcon() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const body = document.body;
    const icon = document.getElementById('time-icon')
    const colck = document.getElementById('clock')
    const timeString = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    colck.textContent = timeString

    if (hour >= 6 && hour < 12) {
        body.style.backgroundColor = '#FFD700';
        icon.textContent = '🌞';
    } else if (hour >= 12 && hour < 18) {
        body.style.backgroundColor = '#87CEEB';
        icon.textContent = '🌞';
    } else if (hour >= 18 && hour < 21) {
        body.style.backgroundColor = '#FFA500';
        icon.textContent = '🌇';
    } else {
        body.style.backgroundColor = '#00008B';
        icon.textContent = '🌙';
    }
}

setInterval (updateBackgroundAndIcon, 1000);

updateBackgroundAndIcon();