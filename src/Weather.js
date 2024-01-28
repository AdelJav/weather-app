import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import axios from "axios";

import Background from "./Background";
import Backgroundsmall from "./Backgroundsmall";
import Day1 from "./Day1";
import Day1F from "./Day1F";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import TimeInfo from "./TimeInfo";

export default function Weather(props) {
  let [input, setInput] = useState(props.defaultInput);
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [weatherDataF, setWeatherDataF] = useState({ ready: false });

  function convertToFahrenheit(event) {
    event.preventDefault();
    setWeatherData({ ready: false });
    searchF();
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setWeatherDataF({ ready: false });
    search();
  }

  function setData(response) {
    //console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      town: response.data.name,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function setDataF(response) {
    //console.log(response);
    setWeatherDataF({
      ready: true,
      temperature: response.data.main.temp,
      town: response.data.name,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function inputValue(event) {
    setInput(event.target.value);
  }

  function search() {
    let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
    axios.get(url).then(setData);
  }

  function searchF() {
    let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(setDataF);
  }

  if (weatherData.ready) {
    return (
      <div className="card cardbody">
        <Background />
        <Backgroundsmall />
        <div className="card-img-overlay">
          <div className="container text-center">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                name="Town"
                placeholder="Select a town"
                className="inputtown"
                onChange={inputValue}
              />
              <input type="submit" value="Search" className="submitButton" />
              <button className="current" id="current">
                Current
              </button>
              <span className="tempUnits">
                Temperature in °C /
                <a href="`#`" onClick={convertToFahrenheit}>
                  °F
                </a>
              </span>
            </form>

            <h1> {weatherData.town}</h1>
            <TimeInfo date={weatherData.date} />
            <div className="card-group groupcards">
              <div className="card cardbody1">
                <Day1 data={weatherData} />
              </div>
              <div className="card cardbody1">
                <Day2 />
              </div>
              <div className="card cardbody1">
                <Day3 />
              </div>
              <div className="card cardbody1">
                <Day4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (weatherDataF.ready) {
    return (
      <div className="card cardbody">
        <Background />
        <Backgroundsmall />
        <div className="card-img-overlay">
          <div className="container text-center">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                name="Town"
                placeholder="Select a town"
                className="inputtown"
                onChange={inputValue}
              />
              <input type="submit" value="Search" className="submitButton" />
              <button className="current" id="current">
                Current
              </button>
              <span className="tempUnits">
                Temperature in{" "}
                <a href="`#`" onClick={convertToCelsius}>
                  °C
                </a>{" "}
                / °F
              </span>
            </form>

            <h1> {weatherDataF.town}</h1>
            <TimeInfo date={weatherDataF.date} />
            <div className="card-group groupcards">
              <div className="card cardbody1">
                <Day1F data={weatherDataF} />
              </div>
              <div className="card cardbody1">
                <Day2 />
              </div>
              <div className="card cardbody1">
                <Day3 />
              </div>
              <div className="card cardbody1">
                <Day4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
