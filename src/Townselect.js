import React, { useState } from "react";
import "./Townselect.css";
import axios from "axios";

export default function Townselect() {
  let apiKey = "9347o49b938f15b43a2at5d07eb97eb4";
  let url = `https://api.shecodes.io/weather/v1/current?query=${input}&appid=${apiKey}&units=metric`;

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
