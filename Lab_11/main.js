const input = document.querySelector(".location");
const key = "0026e0e835abcbdf25ead51fdb875765";

input.addEventListener("keypress", (e) => {
    if (e.keyCode == "13") {
        submit(input.value);
    }
});

function submit(value) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric&lang=az`
    )
        .then((res) => res.json())
        .then((data) => showData(data));
}

function showData(data) {
    let cityName = document.querySelector(".weather_result_location");
    cityName.innerText = `${data.name} ${data.country}`;

    let cityTemp = document.querySelector(".weather_result_temperature");
    cityTemp.innerText = `${data.main.temp}°C`;

    let cityDesc = document.querySelector(".weather_result_description");
    cityDesc.innerText = `${data.weather[0].description}`;

    let weatherIcon = document.querySelector(".weather_icon");
    weatherIcon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
}
