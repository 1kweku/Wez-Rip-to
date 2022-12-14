const searchBtn = document.getElementById("search-btn");
//const searchForm = document.getElementById("search-form");
const recentSearches = document.getElementById("recent-searches");
const APIkey = "1ca1a82fc99c6fa9c9cf0d400c675270";
var city = document.getElementById("search-input");
var queryURL = `api.openweathermap.org/data/2.5/forecast/daily?q=${city.value}&cnt={5}&appid=${APIkey} `;

//function searchHandler(event) {
//event.preventDefault();
//if (!city) {
//console.error("Search value is required");

function getWeather(event) {
  fetch(queryURL)
    .then((res) => res.json())
    .then((jsonData) => console.log(data));
}

searchBtn.addEventListener("click", getWeather);
