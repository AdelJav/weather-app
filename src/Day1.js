import React from "react";
import "./Day1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export default function Day1(props) {
  let temp = Math.round(props.data.temperature);
  let desc = props.data.description;
  let win = Math.round(props.data.wind);
  //console.log(props.data.description);
  return (
    <div className="picture-day1">
      <p className="temp1">{temp}°C</p>
      <div className="icon1">
        <FontAwesomeIcon icon={faCloud} />
      </div>
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
