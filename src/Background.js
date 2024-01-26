import React from "react";
import winter2 from "./images/winter2.jpg";
import spring2 from "./images/spring2.jpg";
import summer2 from "./images/summer2.jpg";
import autumn2 from "./images/autumn2.jpg";

import "./Background.css";
import { divide } from "fontawesome";

export default function Background() {
  const d = new Date();
  let month = d.getMonth();

  if (month < 3) {
    return (
      <img
        src={winter2}
        alt="winter2"
        className="img-fluid d-none d-sm-block backimage"
      />
    );
  }
  if (month < 6) {
    return (
      <img
        src={spring2}
        alt="spring2"
        className="img-fluid d-none d-sm-block backimage"
      />
    );
  }
  if (month < 9) {
    return (
      <img
        src={summer2}
        alt="summer2"
        className="img-fluid d-none d-sm-block backimage"
      />
    );
  } else {
    return (
      <img
        src={autumn2}
        alt="autumn2"
        className="img-fluid d-none d-sm-block backimage"
      />
    );
  }
}
