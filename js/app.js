const API_KEY = `250adabebcb34ee4c0b52076dc0f94ad`;
const loadWeather = () => {
    const fieldData = document.getElementById("search-text");
    let fieldValue = fieldData.value;
    if (fieldValue === ""){

    }
    else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${fieldValue}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
    }
    fieldValue = "";
};

const displayWeather = (weather) => {
    const display = document.getElementById("static-weather-info");
    display.textContent = "";
    const div = document.createElement("div");
    // let tempConvert = weather.main.temp - 273.15;
    // const tempConvertInCelcius = parseFloat(tempConvert).toFixed(2);
    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">
    <h1>${weather.name}</h1>
    <h3><span>${weather.main.temp}</span>&deg;C</h3>
    <h1 class="lead">${weather.weather[0].main}</h1>
    `;
    display.appendChild(div);
    
};