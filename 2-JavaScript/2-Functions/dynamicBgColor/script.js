function updateBackgroundAndIcon() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const body = document.body;
    const icon = document.getElementById('time-icon');
    const clock = document.getElementById('clock');
  
    // Convert 24-hour format to 12-hour format
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const twelveHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM
  
    // Format time as HH:MM:SS AM/PM
    const timeString = `${twelveHour}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    clock.textContent = timeString;
  
    // Change background color and icon based on the hour
    if (hour >= 6 && hour < 12) {
      // Morning (6 AM - 11:59 AM)
      body.style.backgroundColor = '#FFD700'; // Light Yellow
      icon.textContent = '🌞'; // Sun icon
    } else if (hour >= 12 && hour < 18) {
      // Afternoon (12 PM - 5:59 PM)
      body.style.backgroundColor = '#87CEEB'; // Sky Blue
      icon.textContent = '🌞'; // Sun icon
    } else if (hour >= 18 && hour < 21) {
      // Evening (6 PM - 8:59 PM)
      body.style.backgroundColor = '#FFA500'; // Orange
      icon.textContent = '🌇'; // Sunset icon
    } else {
      // Night (9 PM - 5:59 AM)
      body.style.backgroundColor = '#00008B'; // Dark Blue
      icon.textContent = '🌙'; // Moon icon
    }
  }
  
  // Update the background, icon, and time every second
  setInterval(updateBackgroundAndIcon, 1000);
  
  // Initial call to set the background, icon, and time when the page loads
  updateBackgroundAndIcon();