import React from "react";
import "./Day1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export default function Day1() {
  return (
    <div className="picture-day1">
      <p className="temp1" id="temp1">
        19°C
      </p>
      <div className="icon1">
        <FontAwesomeIcon icon={faCloud} />
      </div>
      <div className="card-body cbody">
        <p className="card-text details1" id="details1">
          Mostly cloudy
          <br />
          Wind 19 m/s
        </p>
      </div>
    </div>
  );
}
