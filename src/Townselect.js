import React from "react";
import "./Townselect.css";

export default function Townselect() {
  return (
    <form>
      <input
        type="text"
        name="Town"
        id="Town"
        placeholder="Select a town"
        className="inputtown"
      />
      <input type="submit" value="Search" className="submitButton" />
      <button className="current" id="current">
        Current
      </button>
      <span className="tempUnits">
        Temperature in{" "}
        <a href="`#`" id="tempC">
          °C
        </a>{" "}
        /
        <a href="`#`" id="tempF">
          °F
        </a>
      </span>
    </form>
  );
}
