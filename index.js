const searchBtn = document.getElementById("search-btn");
const recentSearches = document.getElementById("recent-searches");
const APIkey = "1ca1a82fc99c6fa9c9cf0d400c675270";

function getCity(event) {
  var city = document.getElementById("search-input").value;

  var geoQuery = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIkey}`;
  fetch(geoQuery)
    .then((res) => res.json())
    .then((jsonData) => {
      console.log(jsonData);
      var lat = jsonData[0].lat;
      var lon = jsonData[0].lon;

      var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`;
      fetch(weatherURL)
        .then((weatherData) => weatherData.json())
        .then((jsonWeather) => {
          console.log(jsonWeather);
          getWeather(jsonWeather);
        });
    });
}
let cityName = document.getElementById("city-name");
let cityDate = document.getElementById("city-date");
let cityTemp = document.getElementById("city-temp");
let cityWind = document.getElementById("city-wind");
let cityHumidity = document.getElementById("city-humidity");

let nextDay = document.getElementById("next-day").children;
let secondDay = document.getElementById("second-day").children;
let thirdDay = document.getElementById("third-day").children;
let fourthDay = document.getElementById("fourth-day").children;
let fifthDay = document.getElementById("fifth-day").children;

let dateAndTime = jsonWeather.list[0].dt_txt;
let stringDateAndTime = String(dateAndTime);
let splitDateAndTime = stringDateAndTime.split(" ");
let date = splitDateAndTime[0];

//   function getWeather(cityWeather) {
//     cityName.innerHTML = city;
//     cityTemp.innerHTML = cityWeather.list[0].main.temp;
//     cityWind.innerHTML = cityWeather.list[0].wind.speed;
//     cityHumidity.innerHTML = cityWeather.list[0].main.humidity;
//     //console.log(cityWeather);
//     nextDay[0].innerHTML =
//     nextDay[1].innerHTML =
//     nextDay[2].innerHTML =
//     nextDay[3].innerHTML =

//     secondDay[0].innerHTML =
//     secondDay[1].innerHTML =
//     secondDay[2].innerHTML =
//     secondDay[3].innerHTML =

//     thirdDay[0].innerHTML =
//     thirdDay[1].innerHTML =
//     thirdDay[2].innerHTML =
//     thirdDay[3].innerHTML =

//     fourthDay[0].innerHTML =
//     fourthDay[1].innerHTML =
//     fourthDay[2].innerHTML =
//     fourthDay[3].innerHTML =

//     fifthDay[0].innerHTML =
//     fifthDay[1].innerHTML =
//     fifthDay[2].innerHTML =
//     fifthDay[3].innerHTML =

//   }
// }

// //const nextDay = document.getElementById("myDIV").children
// let count = document.getElementById("next-day").children;
// function countChildren() {
//   console.log(count);
// }

// countChildren();

searchBtn.addEventListener("click", getCity);
