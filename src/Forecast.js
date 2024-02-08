import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import Icon from "./Icon";

export default function Forecast(props) {
  console.log(props);

  //const apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  //let input = useState(props.data);
  let [dataForecast, setdataForecast] = useState({ ready: false });
  //let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.input}&cnt=3&appid=${apiKey}&units=metric`;
  let [requestUrl, setrequestUrl] = useState(
    `https://api.openweathermap.org/data/2.5/forecast?q=Vienna&cnt=4&appid=2daf65f0cdaa917f11026e8a128ce271&units=metric`
  );

  //console.log(input);

  useEffect(() => {
    setrequestUrl(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.data}&cnt=4&appid=2daf65f0cdaa917f11026e8a128ce271&units=metric`
    );
    axios.get(requestUrl).then(dForecast);
  }, [props.data, requestUrl]);

  //console.log(requestUrl);

  function dForecast(response) {
    //console.log(response.data.list[0].weather[0].icon);
    setdataForecast({
      ready: true,
      temperature: response.data.list[1].main.temp,
      wind: response.data.list[1].wind.speed,
      date: new Date(response.data.list[1].dt * 1000),
      icon: response.data.list[1].weather[0].icon,
      //icon: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      description: response.data.list[1].weather[0].description,
    });
    //console.log(dataForecast.icon);
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
        <p className="temp2">{roundTemp}°C</p>
        <div className="picture-day2">
          <Icon code={dataForecast.icon} size={64} />
        </div>

        <div className="card-body cbody">
          <h5 className="card-title day2">{weekDay}</h5>
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
