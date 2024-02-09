import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import Icon from "./Icon";

export default function ForecastF(props) {
  let [dataForecastF, setdataForecastF] = useState({ ready: false });
  let [requestUrlF, setrequestUrlF] = useState(
    `https://api.openweathermap.org/data/2.5/forecast?q=Vienna&appid=2daf65f0cdaa917f11026e8a128ce271&units=imperial`
  );

  useEffect(() => {
    setrequestUrlF(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.data}&appid=2daf65f0cdaa917f11026e8a128ce271&units=imperial`
    );
    axios.get(requestUrlF).then(dForecastF);
  }, [props.data, requestUrlF]);

  function dForecastF(response) {
    setdataForecastF({
      ready: true,
      temperature: response.data.list[props.forDay].main.temp,
      wind: response.data.list[props.forDay].wind.speed,
      date: new Date(response.data.list[props.forDay].dt * 1000),
      icon: response.data.list[props.forDay].weather[0].icon,
      description: response.data.list[props.forDay].weather[0].description,
      datetime: response.data.list[props.forDay].dt_txt,
    });
  }

  if (dataForecastF.ready) {
    let roundTemp = Math.round(dataForecastF.temperature);
    let roundWind = Math.round(dataForecastF.wind);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekDay = days[dataForecastF.date.getDay()];

    return (
      <div>
        <p className={`temp${props.classNr}`}>{roundTemp}°F</p>
        <div className={`picture-day${props.classNr}`}>
          <Icon code={dataForecastF.icon} size={62} />
        </div>

        <div className="card-body cbody">
          <h5 className={`card-title day${props.classNr}`}>{weekDay}</h5>

          <p className={`card-text details${props.classNr}`}>
            {dataForecastF.datetime}
            <br />
            {dataForecastF.description}
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
