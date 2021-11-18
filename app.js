let now = new Date();
let day = now.getDay();
let date = now.getDate();
let month = now.getMonth();
let hours = now.getHours();
let minutes = now.getMinutes();
let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];
let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
let changeDate = document.querySelector("h3");
changeDate.innerHTML = `${days[day]}, ${date} ${months[month]} ${hours}:${minutes}`;
let changeCity = document.querySelector(".search-icon");

function showTemp(response) {
    let changeTemp = document.querySelector(".main-temp");
    changeTemp.innerHTML = `${Math.round(response.data.main.temp)}°C`;
    // console.log(response.data);
    let changeIcon = document.querySelector(".main-icon");
    changeIcon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    let changeDescription = document.querySelector(".description");
    changeDescription.innerHTML = `${response.data.weather[0].description}`;
    let changeWind = document.querySelector(".wind");
    changeWind.innerHTML = `Wind: ${response.data.wind.speed}m/s`;
    let changeHumidity = document.querySelector(".humidity");
    changeHumidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
    let changePressure = document.querySelector(".pressure");
    changePressure.innerHTML = `Pressure: ${response.data.main.pressure} hPa`;
}

function changing(event) {
    event.preventDefault();
    let input = document.querySelector(".city-name");
    let city = document.querySelector("#search-city");
    input.innerHTML = `${city.value}`;
    let apiKey = "817ba81a0b3c35bf55e8a2bffc249d16";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}`).then(showTemp);
}
changeCity.addEventListener("click", changing);