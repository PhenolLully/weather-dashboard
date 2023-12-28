var button = document.querySelector(".button");
var cityInput = document.querySelector("#cityInput");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

function searchWeather(){
    var cityInput = document.querySelector("#cityInput");
    var latitude = document.querySelector("#latitudeInput") 
    var longitude = document.querySelector("#longitudeInput") 
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=c1bc0050e8b1441f96eb602f81355ba2";

     
  fetch(queryURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    
    name.textContent = data.name;
    desc.textContent = data.weather[0].description;
    temp.textContent = data.main.temp;
  });
}


