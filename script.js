//dates
function timeDisplay() {
  let today = new Date();
  let currentDay = today.getDay();
  let currentHours = today.getHours();
  let currentMinutes = today.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  if (currentMinutes < 10) {
    return `${days[currentDay]} ${currentHours}:0${currentMinutes}`;
  } else {
    return `${days[currentDay]} ${currentHours}:${currentMinutes}`;
  }
}
let todayDisplay = document.querySelector(".todayInfo");
todayDisplay.innerHTML = timeDisplay();
// cel or Far
function fahrenheit(event) {
  event.preventDefault();
  let currentTmp = document.querySelector("#currentTmpDisplay");
  currentTmp.innerHTML = 72;
}

let fahrenheitDisplay = document.querySelector("#fahrenheitTmp");
fahrenheitDisplay.addEventListener("click", fahrenheit);

//input
function submitForm(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;
}
let signUpForm = document.querySelector("#CityLookUp");
signUpForm.addEventListener("submit", submitForm);

//api
function retrievePosition(position) {
  let apiKey = "9fcea006200cbfdcbad380c282e76781";
  let city = document.querySelector("#city-input");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
}
function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `#CityLookup`;
  h1.innerHTML = `${response.data.name}`;
}

navigator.geolocation.getCurrentPosition(retrievePosition);
