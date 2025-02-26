const input = document.querySelector(".location");
const key = "896dd11f133491313ff2476e302b4db2";

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submit(input.value);
  }
});

function submit(value) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric&lang=az`
  )
    .then((res) => res.json())
    .then((data) => showData(data))
    .catch(() => alert("Şəhər tapılmadı!"));
}

function showData(data) {
  document.querySelector(
    ".weather_location"
  ).innerText = `${data.name}, ${data.sys.country}`;
  document.querySelector(
    ".weather_temperature"
  ).innerText = `${data.main.temp}°C`;
  document.querySelector(".weather_description").innerText =
    data.weather[0].description;
  document
    .querySelector(".weather-icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
}
