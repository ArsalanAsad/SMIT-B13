// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const currentDate = document.getElementById('current-date');
const currentTemp = document.getElementById('current-temp');
const weatherDesc = document.getElementById('weather-desc');
const weatherIcon = document.getElementById('weather-icon');
const forecastContainer = document.getElementById('forecast-container');

// Sample weather data (in a real app, you would fetch this from an API)
const weatherData = {
    city: "New York",
    current: {
        temp: 72,
        description: "Sunny",
        icon: "sun"
    },
    forecast: [
        { day: "Mon", icon: "sun", high: 75, low: 62 },
        { day: "Tue", icon: "cloud-sun", high: 70, low: 60 },
        { day: "Wed", icon: "cloud", high: 68, low: 58 },
        { day: "Thu", icon: "cloud-rain", high: 65, low: 55 },
        { day: "Fri", icon: "sun", high: 72, low: 60 }
    ]
};

// Initialize the app
function init() {
    displayCurrentDate();
    displayWeather(weatherData);
    
    // Event listeners
    searchBtn.addEventListener('click', handleSearch);
    cityInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

// Display current date
function displayCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    currentDate.textContent = today.toLocaleDateString('en-US', options);
}

// Display weather data
function displayWeather(data) {
    cityName.textContent = data.city;
    currentTemp.textContent = data.current.temp;
    weatherDesc.textContent = data.current.description;
    weatherIcon.className = `fas fa-${data.current.icon}`;
    
    // Clear previous forecast
    forecastContainer.innerHTML = '';
    
    // Add forecast cards
    data.forecast.forEach(day => {
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-day">${day.day}</div>
            <div class="forecast-icon"><i class="fas fa-${day.icon}"></i></div>
            <div class="forecast-temp">
                <span class="high">${day.high}°</span>
                <span class="low">${day.low}°</span>
            </div>
        `;
        forecastContainer.appendChild(card);
    });
}

// Handle search
function handleSearch() {
    const city = cityInput.value.trim();
    if (city) {
        // In a real app, you would fetch weather data for the city here
        // For now, we'll just update the city name
        weatherData.city = city;
        displayWeather(weatherData);
        cityInput.value = '';
    } else {
        alert('Please enter a city name');
    }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);