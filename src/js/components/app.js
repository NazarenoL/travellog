import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "../store";

import Footer from "./footer";
import Intro from "./intro";
import Location from "./location";
import Map, { Viewport } from "./map";
import Navigation from "./navigation";
import Region from "./region";

class App extends Component {
  render() {
    return (
      <>
        <div id="map">
          <Map />
        </div>
        <div id="writing">
          <Navigation />

          <Intro />

          <Region icon={"map-us-pa"} name="Pennsylvania">
            <Location
              name="Location One"
              description={<p>This place was pretty great.</p>}
              date="Jan 1"
              viewport={new Viewport(41.221494, -75.40171, 12.5, 35, 40)}
            />
            <Location
              name="Location Two"
              description={<p>But this place was even better..</p>}
              date="Jan 16"
              viewport={new Viewport(40.740883, -75.748217, 11, 55, 40)}
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
wrapper
  ? ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      wrapper
    )
  : false;
