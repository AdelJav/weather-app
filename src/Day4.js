import React from "react";
import "./Day4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

export default function Day4() {
  return (
    <div>
      <p className="temp4" id="temp4">
        17°C
      </p>
      <div className="picture-day4">
        <FontAwesomeIcon icon={faCloudRain} />
      </div>

      <div className="card-body cbody">
        <h5 className="card-title day4" id="day4">
          Friday
        </h5>
        <p className="card-text details4" id="details4">
          Mostly cloudy
          <br />
          Wind 19 m/s
        </p>
      </div>
    </div>
  );
}
