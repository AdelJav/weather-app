import React from "react";
import "./Day3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

export default function Day3() {
  return (
    <div>
      <p className="temp3" id="temp3">
        18°C
      </p>
      <div className="picture-day3">
        <FontAwesomeIcon icon={faCloudSun} />
      </div>

      <div className="card-body cbody">
        <h5 className="card-title day3" id="day3">
          Thursday
        </h5>
        <p className="card-text details3" id="details3">
          Mostly cloudy
          <br />
          Wind 19 m/s
        </p>
      </div>
    </div>
  );
}
