import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <br />
      <Weather defaultInput="Vienna" />
      <Footer />

      <br />
    </div>
  );
}
