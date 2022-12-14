const searchBtn = document.getElementById("search-btn");
//const searchForm = document.getElementById("search-form");
const recentSearches = document.getElementById("recent-searches");
const APIkey = "1ca1a82fc99c6fa9c9cf0d400c675270";
var city = document.getElementById("search-input");
var test = "london";
var geoQuery = `http://api.openweathermap.org/geo/1.0/direct?q=${test}&appid=${APIkey}`;
//var weatherURL = `api.openweathermap.org/data/2.5/forecast/daily?q=london&cnt={5}&appid=${APIkey} `;

//function searchHandler(event) {
//event.preventDefault();
//if (!city) {
//console.error("Search value is required");

function getCity(event) {
  fetch(geoQuery)
    .then((res) => res.json())
    .then((jsonData) => {
      var lat = jsonData[0].lat;
      var lon = jsonData[0].lon;

      var weatherURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`;

      fetch(weatherURL).then((response) => console.log(response));
    });
}

searchBtn.addEventListener("click", getCity);
