function searchWeather() {
    // Retrieve the values of latitude and longitude input elements
    var latitude = document.querySelector("#latitudeInput").value;
    var longitude = document.querySelector("#longitudeInput").value;

    // Check if latitude and longitude values are valid (optional)
    if (!latitude || !longitude) {
        alert("Please enter valid latitude and longitude values.");
        return;
    }

    // Use latitude and longitude in your API request
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + "c1bc0050e8b1441f96eb602f81355ba2";

    // Perform the fetch with the updated URL

fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        // Update your HTML with the received weather data
        var name = document.querySelector(".name");
        var desc = document.querySelector(".desc");
        var temp = document.querySelector(".temp");
        var humid = document.querySelector(".humid");
        var wind = document.querySelector(".wind"); // Add this line

        name.textContent = data.name;
        desc.textContent = data.weather[0].description;
        temp.textContent = "Temperature: " + data.main.temp + " K";
        humid.textContent = "Humidity: " + data.main.humid + "%";
        wind.textContent = "Wind Speed: " + data.wind.speed + " m/s"; // Add this line

    })
    .catch(err => {
        alert("Error fetching weather data.");
        console.error(err);
    });
}
