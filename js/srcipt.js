var button = document.querySelector(".button");
var cityInput = document.querySelector("#cityInput");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={c1bc0050e8b1441f96eb602f81355ba2}")


var APIKey = "c1bc0050e8b1441f96eb602f81355ba2";
var city = "";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var url = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=+{API key}"
fetch(queryURL);

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://api.github.com/users/octocat/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);
