// script.js
document.getElementById('getWeatherButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a city name.');
    }
});

function fetchWeather(location) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            document.getElementById('weatherDisplay').innerText = error.message;
        });
}

function displayWeather(data) {
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    
    document.getElementById('weatherDisplay').innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Condition: ${weatherDescription}</p>
    `;
}