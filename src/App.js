import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Background from "./Background";
import Backgroundsmall from "./Backgroundsmall";
import Townselect from "./Townselect";
import Towndet1 from "./Towndet1";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <br />
      <div className="card cardbody">
        <Background />
        <Backgroundsmall />
        <div className="card-img-overlay">
          <div className="container text-center">
            <Townselect />
            <Towndet1 />
            <div className="card-group groupcards">
              <div className="card cardbody1">
                <Day1 />
              </div>
              <div className="card cardbody1">
                <Day2 />
              </div>
              <div className="card cardbody1">
                <Day3 />
              </div>
              <div className="card cardbody1">
                <Day4 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <br />
    </div>
  );
}

export default App;
