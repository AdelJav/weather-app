import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import Icon from "./Icon";

export default function Forecast(props) {
  let [dataForecast, setdataForecast] = useState({ ready: false });
  let [requestUrl, setrequestUrl] = useState(
    `https://api.openweathermap.org/data/2.5/forecast?q=Vienna&cnt=4&appid=2daf65f0cdaa917f11026e8a128ce271&units=metric`
  );

  useEffect(() => {
    setrequestUrl(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.data}&cnt=4&appid=2daf65f0cdaa917f11026e8a128ce271&units=metric`
    );
    axios.get(requestUrl).then(dForecast);
  }, [props.data, requestUrl]);

  function dForecast(response) {
    console.log(props.classNr);
    setdataForecast({
      ready: true,
      temperature: response.data.list[props.forDay].main.temp,
      wind: response.data.list[props.forDay].wind.speed,
      date: new Date(response.data.list[props.forDay].dt * 1000),
      icon: response.data.list[props.forDay].weather[0].icon,
      description: response.data.list[props.forDay].weather[0].description,
    });
  }

  if (dataForecast.ready) {
    let roundTemp = Math.round(dataForecast.temperature);
    let roundWind = Math.round(dataForecast.wind);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekDay = days[dataForecast.date.getDay()];
    console.log(weekDay);

    //let day = days[props.date.getDay()];
    return (
      <div>
        <p className={`temp${props.classNr}`}>{roundTemp}°C</p>
        <div className={`picture-day${props.classNr}`}>
          <Icon code={dataForecast.icon} size={64} />
        </div>

        <div className="card-body cbody">
          <h5 className={`card-title day${props.classNr}`}>{weekDay}</h5>
          <p className={`card-text details${props.classNr}`}>
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
