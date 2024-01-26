import React from "react";
import winter1 from "./images/winter1.jpg";
import spring1 from "./images/spring1.jpg";
import summer1 from "./images/summer1.jpg";
import autumn1 from "./images/autumn1.jpg";

import "./Backgroundsmall.css";

export default function Backgroundsmall() {
  const d = new Date();
  let month = d.getMonth();

  if (month < 3) {
    return (
      <img
        src={winter1}
        alt="winter1"
        className=" d-block d-sm-none backimagesmall"
      />
    );
  }
  if (month < 6) {
    return (
      <img
        src={spring1}
        alt="spring1"
        className="img-fluid d-block d-sm-none backimagesmall"
      />
    );
  }
  if (month < 9) {
    return (
      <img
        src={summer1}
        alt="summer1"
        className="img-fluid d-block d-sm-none backimagesmall"
      />
    );
  } else {
    return (
      <img
        src={autumn1}
        alt="autumn1"
        className="img-fluid d-block d-sm-none backimagesmall"
      />
    );
  }
}
