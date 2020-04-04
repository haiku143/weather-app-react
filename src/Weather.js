import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "4d792cfd34dd05c4d245cf45fd0ef7bf";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 10:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div classname="row">
        <div className="col-6">
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Sunny" />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Preciptitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
