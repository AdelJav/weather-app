import React from "react";
import "./Day2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function Day2() {
  return (
    <div>
      <p className="temp2" id="temp2">
        20°C
      </p>
      <div className="picture-day2">
        <FontAwesomeIcon icon={faSun} />
      </div>

      <div className="card-body cbody">
        <h5 className="card-title day2" id="day2">
          Wednesday
        </h5>
        <p className="card-text details2" id="details2">
          Mostly cloudy
          <br />
          Wind 19 m/s
        </p>
      </div>
    </div>
  );
}
