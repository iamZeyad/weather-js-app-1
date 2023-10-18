function getWeather() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const weatherIcon = document.getElementById("weather-icon");
    const weatherDescription = document.getElementById("weather-description");
    const weatherTemperature = document.getElementById("weather-temperature");

    // Hard-coded weather values
    const icon = "☀️";
    const description = "Sunny";
    const temperature = "25°C";

    weatherIcon.textContent = icon;
    weatherDescription.textContent = description;
    weatherTemperature.textContent = temperature;
}