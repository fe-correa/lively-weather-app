function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let realFeelElement = document.querySelector("#realFeel");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  realFeelElement.innerHTML = Math.round(response.data.temperature.feels_like);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "04ao55fe16ac1a26bc8c7f784363tbff";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=RiodeJaneiro&key=${apiKey}&unit=metric`;

axios.get(apiUrl).then(displayTemperature);
