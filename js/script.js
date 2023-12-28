function searchWeather() {
    
    var latitude = document.querySelector("#latitudeInput").value;
    var longitude = document.querySelector("#longitudeInput").value;

    
    if (!latitude || !longitude) {
        alert("Please enter valid latitude and longitude values.");
        return;
    }

  
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + "c1bc0050e8b1441f96eb602f81355ba2";

 

fetch(queryURL)
    .then(response => response.json())
    .then(data => {
       
        var name = document.querySelector(".name");
        var desc = document.querySelector(".desc");
        var temp = document.querySelector(".temp");
        var humid = document.querySelector(".humid");
        var wind = document.querySelector(".wind"); 

        name.textContent = data.name;
        desc.textContent = data.weather[0].description;
        temp.textContent = "Temperature: " + data.main.temp + " K";
        humid.textContent = "Humidity: " + data.main.humid + "%";
        wind.textContent = "Wind Speed: " + data.wind.speed + " m/s"; 

    })
    .catch(err => {
        alert("Error fetching weather data.");
        console.error(err);
    });
}
