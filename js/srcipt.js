var APIKey = "c1bc0050e8b1441f96eb602f81355ba2";
var city = "Miami";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL);