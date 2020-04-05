import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    function handleResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }
}

for (let index = 0; index < 6; index++) {
    forecast = response.data.list[index];
    <div class="col-2">
        <h3>
           ${formatHours(forecast.dt * 1000)}
        </h3>
        <img
            src="http://openweathermap.org/img/wn/${
        forecast.weather[0].icon
        }@2x.png"
            />
        <div class="weather-forecast-temperature">
            <strong>
            ${Math.round(forecast.main.temp_max)}°
            </strong>
            |${Math.round(forecast.main.temp_min)}°
        </div>
        </div>
    `;
}

function search(city) {
    let apiKey = "5290a2f5a0efdbfee1a528a859569a81";
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
}