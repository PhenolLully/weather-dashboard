function searchWeather() {
    
    var latitude = document.querySelector("#latitudeInput").value;
    var longitude = document.querySelector("#longitudeInput").value;

    
    if (!latitude || !longitude) {
        alert("Please enter valid latitude and longitude values.");
        return;
    }

  
    var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + "c1bc0050e8b1441f96eb602f81355ba2";
    var forecastURL =  "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + "c1bc0050e8b1441f96eb602f81355ba2";
 

fetch(currentWeatherURL)
    .then(response => response.json())
    .then(data => {
       console.log(data);
        var name = document.querySelector(".name");
        var date = document.querySelector(".date")
        var desc = document.querySelector(".desc");
        var temp = document.querySelector(".temp");
        var wind = document.querySelector(".wind");
        var humid = document.querySelector(".humid"); 

        var translatedDate = new Date (data.dt);

        name.textContent = data.name;
        date.textContent = "Date: " + translatedDate;
        desc.textContent = data.weather[0].description;
        temp.textContent = "Temperature: " + data.main.temp + " K";
        wind.textContent = "Wind Speed: " + data.wind.speed + " m/s"; 
        humid.textContent = "Humidity: " + data.main.humidity + "%";

fetch(forecastURL)
    .then(response => response.json())
    .then(forecastData => {
        var dayCounter = 1;
        for(i=0; i<forecastData.list.length; i+=8 ){
            var forecast = forecastData.list[i];
            var divTemp = document.querySelector(`#divTemp${dayCounter}`);
            var divWind = document.querySelector(`#divWind${dayCounter}`);
            var divHumid = document.querySelector(`#divHumid${dayCounter}`);

            divTemp.textContent = "Temperature: " + forecast.main.temp + " K";
            divWind.textContent = "Wind Speed: " + forecast.wind.speed + " m/s";
            divHumid.textContent = "Humidity: " + forecast.main.humidity + "%";
            dayCounter++;
        }

        console.log(forecastData);  
                })
    .catch(err => {
        alert("Error fetching 5-day forecast data.");
        console.error(err);
    });
    })
    .catch(err => {
        alert("Error fetching weather data.");
        console.error(err);
    });
}
