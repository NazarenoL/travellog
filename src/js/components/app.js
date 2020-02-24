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

import region from "../../../content/tokyo.json";

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

          <Region icon={region.mapFontIcon} title={region.title}>
            {region.locations.map((value, index) => {
              return <Location key={index} {...value} />;
            })}

            {
              // <Location
              //   title="Location Two"
              //   description={<p>But this place was even better..</p>}
              //   date="Jan 16"
              //   viewport={new Viewport(40.740883, -75.748217, 11, 55, 40)}
              // />
            }
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
