import React from "react";
import "./Day1.css";
import Icon from "./Icon.js";

export default function Day1(props) {
  let temp = Math.round(props.data.temperature);
  let desc = props.data.description;
  let win = Math.round(props.data.wind);
  //console.log(props.data.icon);
  let icon = props.data.icon;
  return (
    <div className="cardDay1">
      <p className="temp1">{temp}°C</p>

      <Icon code={icon} size={75} />

      <div className="card-body cbody">
        <p className="card-text details1">
          {desc}
          <br />
          Wind {win} m/s
        </p>
      </div>
    </div>
  );
}
