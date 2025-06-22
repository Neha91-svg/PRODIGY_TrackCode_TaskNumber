const apiKey = "6faf5a2348cd42674cdc0edf6da2c8bd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;

const input = document.querySelector("input");
const form = document.querySelector("form");

const citySection = document.getElementById("city");
const temperatureSection = document.querySelector(".temperature");
const description = document.querySelector(".description");

const clouds = document.getElementById("clouds");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");

const main = document.querySelector("main");

// Handle form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (city !== "") {
        fetchWeather(city);
        input.value = ""; // clear input
    }
});

// Fetch weather data
function fetchWeather(city) {
    fetch(`${apiUrl}&q=${city},IN`)
        .then(res => res.json())
        .then(data => {
            if (data.cod === 200) {
                updateWeather(data);
            } else {
                showError();
            }
        })
        .catch(() => {
            showError();
        });
}

// Update UI with weather data
function updateWeather(data) {
    // City and flag
    citySection.querySelector("figcaption").innerText = data.name;
    citySection.querySelector("img").src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;

    // Weather icon and temperature
    temperatureSection.querySelector("img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    temperatureSection.querySelector("figcaption span").innerText = Math.round(data.main.temp);

    // Description and other data
    description.innerText = data.weather[0].description;
    clouds.innerText = data.clouds.all;
    humidity.innerText = data.main.humidity;
    pressure.innerText = data.main.pressure;

    main.classList.remove("error");
}

// Show error briefly
function showError() {
    main.classList.add("error");
    setTimeout(() => {
        main.classList.remove("error");
    }, 2000);
}

// Load default weather on start
window.addEventListener("load", () => {
    fetchWeather("New York");
});
