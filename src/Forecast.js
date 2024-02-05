import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let input = useState(props.data);
  let [dataForecast, setdataForecast] = useState({ ready: false });
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=3&appid=${apiKey}&units=metric`;
  //let [weatherDataF, setWeatherDataF] = useState({ ready: false });

  useEffect(() => {
    axios.get(url).then(setdForecast);
  }, [props.data]);

  function setdForecast(response) {
    //console.log(response.data.list[0].weather[0].icon);
    setdataForecast({
      ready: true,
      temperature: response.data.list[0].main.temp,
      wind: response.data.list[0].wind.speed,
      date: new Date(response.data.list[0].dt * 1000),
      //icon: response.data.list[0].weather[0].icon,
      icon: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      description: response.data.list[0].weather[0].description,
    });
    //console.log(dataForecast.icon);
  }

  if (dataForecast.ready) {
    let roundTemp = Math.round(dataForecast.temperature);
    let roundWind = Math.round(dataForecast.wind);
    return (
      <div>
        <p className="temp2">{roundTemp}°C</p>
        <div className="picture-day2">
          <img src={dataForecast.icon} alt="Weather icon"></img>
        </div>

        <div className="card-body cbody">
          <h5 className="card-title day2">Tue</h5>
          <p className="card-text details2">
            {dataForecast.description}
            <br />
            Wind {roundWind} m/s
          </p>
        </div>
      </div>
    );
  } else {
    return <div> loading</div>;
  }
}
