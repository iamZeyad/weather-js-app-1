async function getWeatherAsync() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const weatherIcon = document.getElementById("weather-icon");
    const weatherDescription = document.getElementById("weather-description");
    const weatherTemperature = document.getElementById("weather-temperature");

    // Fetch weather data
    const data = await doFetchAsync(latitude, longitude);

    // Hard-coded weather values
    const icon = "☀️";
    const description = 'nothing';
    const temperature = data.current.temperature_2m +'°C'

    weatherIcon.textContent = icon;
    weatherDescription.textContent = description;
    weatherTemperature.textContent = temperature;
}

async function doFetchAsync(latitude, longitude) {
    console.log(longitude + ' ' + latitude);
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude + '&current=temperature_2m&current=weathercode');
    const data = await response.json(); // Parse response as JSON
    return data;
}

async function temperature(data) {
    return data.current.temperature_2m + "°C";
}

function getWeatherFetch(){
        const latitude = document.getElementById("latitude").value;
        const longitude = document.getElementById("longitude").value;
        const weatherIcon = document.getElementById("weather-icon");
        const weatherDescription = document.getElementById("weather-description");
        const weatherTemperature = document.getElementById("weather-temperature");
    
        // Fetch weather data
        doFetch(latitude, longitude)
            .then(data => {
                // Hard-coded weather values
                const icon = "☀️";
                const description = 'nothing';
                const temperature = data.current.temperature_2m + '°C';
    
                weatherIcon.textContent = icon;
                weatherDescription.textContent = description;
                weatherTemperature.textContent = temperature;
            })
            .catch(error => {
                console.error("An error occurred:", error);
            });
    }
    
    function doFetch(latitude, longitude) {
        console.log(longitude + ' ' + latitude);
        return fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude + '&current=temperature_2m&current=weathercode')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Parse response as JSON
            });
    }

    function getWeatherXHR() {
        const latitude = document.getElementById("latitude").value;
        const longitude = document.getElementById("longitude").value;
        const weatherIcon = document.getElementById("weather-icon");
        const weatherDescription = document.getElementById("weather-description");
        const weatherTemperature = document.getElementById("weather-temperature");
    
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
    
                    // Hard-coded weather values
                    const icon = "☀️";
                    const description = 'nothing';
                    const temperature = data.current.temperature_2m + '°C';
    
                    weatherIcon.textContent = icon;
                    weatherDescription.textContent = description;
                    weatherTemperature.textContent = temperature;
                } else {
                    console.error("An error occurred:", xhr.statusText);
                }
            }
        };
        xhr.open("GET", `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&current=weathercode`, true);
        xhr.send();
    }
    