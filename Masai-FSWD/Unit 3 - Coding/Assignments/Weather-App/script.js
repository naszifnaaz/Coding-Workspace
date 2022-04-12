async function searchCity() {
    let city = document.getElementById("search-city").value;
    let key = "0a0e75a5fc9539c7b8d9432bb6c0bce6";
    let weather_div = (document.querySelector("#weather-details").innerHTML = "");
    var map = document.getElementById("gmap_canvas");
    map.setAttribute("src", "");

    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        );
        let data = await response.json();
        console.log(data);

        renderWeather(data);
    } catch (err) {
        console.log(err);
    }
}

function renderWeather(data) {
    let weather_div = document.querySelector("#weather-details");

    var icon = document.createElement("img");
    icon.setAttribute("class", "weather-icon");
    icon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );

    var city = document.createElement("p");
    city.setAttribute("class", "city-name");
    city.textContent = data.name;

    var name = document.createElement("p");
    name.setAttribute("class", "place-name");
    name.textContent = data.weather[0].main;

    var description = document.createElement("p");
    description.setAttribute("class", "description");
    description.textContent = data.weather[0].description;

    var temp = document.createElement("p");
    temp.setAttribute("class", "temp");
    temp.textContent = `Temp : ${data.main.temp}°`;

    var humidity = document.createElement("p");
    humidity.setAttribute("class", "humidity");
    humidity.textContent = `Humidity : ${data.main.humidity}%`;

    var pressure = document.createElement("p");
    pressure.setAttribute("class", "pressure");
    pressure.textContent = `Pressure : ${data.main.pressure}mb`;

    var flex_1 = document.createElement("div");
    flex_1.setAttribute("class", "flex-1");

    var flex_2 = document.createElement("div");
    flex_2.setAttribute("class", "flex-2");
    flex_2.append(description, temp, humidity, pressure);

    flex_1.append(icon, city, name);

    weather_div.append(flex_1, flex_2);
    weather_div.style.padding = "0 50px";
    weather_div.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

    var map = document.getElementById("gmap_canvas");
    map.setAttribute(
        "src",
        `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    );
    var map_container = document.getElementById("embed-map");
    map_container.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

    dialyForecast();
}
async function dialyForecast() {
    var dialy_forecast = document.getElementById("#dialy-forecast");
    let key = "0a0e75a5fc9539c7b8d9432bb6c0bce6";
    let city = document.getElementById("search-city").value;
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`;

    try {
        let result = await fetch(url);
        let data = await result.json();
        renderDailyForcast(data);
    } catch (err) {
        console.log(err);
    }
}

function renderDailyForcast(data) {
    var data = data.list;
    console.log(data);
    var forecast_div = document.getElementById("dialy-forecast");
    forecast_div.innerHTML = "";

    data.map(function (elem) {
        var forecast = document.createElement("div");
        forecast.setAttribute("class", "forecast");

        var icon = document.createElement("img");
        icon.setAttribute("class", "forecast-img");
        icon.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`
        );

        var title = document.createElement("p");
        title.setAttribute("class", "fc-title");
        title.textContent = elem.weather[0].main;

        var desc = document.createElement("p");
        desc.setAttribute("class", "fc-desc");
        desc.textContent = elem.weather[0].description;

        var temp = document.createElement("p");
        temp.setAttribute("class", "fc-temp");
        temp.textContent = `${elem.main.temp}°C`;

        forecast.style.padding = "1rem";
        forecast.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

        forecast.append(icon, title, desc, temp);
        forecast_div.append(forecast);
        console.log(forecast_div);
    });
}
