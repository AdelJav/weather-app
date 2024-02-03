import React, { useState } from "react";
//import "./Forecest.css";
import axios from "axios";

export default function Forecast(props) {
  let input = useState(props.data);
  let [dataForecast, setdataForecast] = useState({ ready: false });
  //let [weatherDataF, setWeatherDataF] = useState({ ready: false });
  forecastSearch();

  function forecastSearch() {
    let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=3&appid=${apiKey}&units=metric`;
    axios.get(url).then(setdForecast);
  }

  function setdForecast(response) {
    //console.log(response.data.list[0].main.temp);
    setdataForecast({
      ready: true,
      temperature: response.data.list[0].main.temp,
      wind: response.data.list[0].wind.speed,
      date: new Date(response.data.list[0].dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.list[0].weather.icon}@2x.png`,
      description: response.data.list[0].weather.description,
    });
    console.log(dataForecast.temperature);
  }

  if (dataForecast.ready) {
    return (
      <div>
        <p className="temp2">{dataForecast.temperature}°C</p>
        <div className="picture-day2">{dataForecast.icon}</div>

        <div className="card-body cbody">
          <h5 className="card-title day2">{dataForecast.date}</h5>
          <p className="card-text details2">
            Mostly cloudy
            <br />
            Wind 19 m/s
          </p>
        </div>
      </div>
    );
  } else {
    return <div> loading</div>;
  }
}
