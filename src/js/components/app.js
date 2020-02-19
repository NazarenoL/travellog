import React, { Component } from "react";
import ReactDOM from "react-dom";

import Footer from "./footer";
import Intro from "./intro";
import Location from "./location";
import Map from "./map";
import Navigation from "./navigation";
import Region from "./region";

class App extends Component {
  render() {
    return (
      <>
        <Map />
        <div id="writing">
          <Navigation />

          <Intro />

          <Region icon={"map-us-pa"} name="Pennsylvania">
            <Location
              name="Location One"
              description={<p>This place was pretty great.</p>}
              date="Jan 1"
            />
            <Location
              name="Location Two"
              description={<p>But this place was even better..</p>}
              date="Jan 16"
            />
          </Region>

          <Footer />
        </div>
      </>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
