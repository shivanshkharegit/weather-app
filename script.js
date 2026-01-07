// Dark/Light mode
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
}

function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

// Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');

const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const description = document.getElementById('description');

// Mock weather database
const mockWeatherData = {
  Delhi: { temp: 30, humidity: 70, desc: "Clear Sky" },
  Mumbai: { temp: 32, humidity: 75, desc: "Humid" },
  Bangalore: { temp: 28, humidity: 65, desc: "Cloudy" },
  Kolkata: { temp: 31, humidity: 80, desc: "Rainy" },
  default: { temp: 28, humidity: 60, desc: "Sunny" }
};

// Function to fetch mock weather
function fetchWeather(){
  const city = cityInput.value.trim();
  const data = mockWeatherData[city] || { ...mockWeatherData["default"], name: city || "Delhi" };

  cityName.textContent = (city || "Delhi") + ", IN";
  temperature.textContent = "Temperature: " + data.temp + " °C";
  humidity.textContent = "Humidity: " + data.humidity + "%";
  description.textContent = "Weather: " + data.desc;
}

// Event listeners
searchBtn.addEventListener('click', fetchWeather);
cityInput.addEventListener('keypress', e => {
  if(e.key === "Enter") fetchWeather();
});

// Initial display
fetchWeather();
