import React from "react";
import "./Tempunits.css";

export default function Tempunits() {
  return (
    <div className="tempUnits">
      Temperature in{" "}
      <a href="`#`" id="tempC">
        °C
      </a>{" "}
      /
      <a href="`#`" id="tempF">
        °F
      </a>
    </div>
  );
}
