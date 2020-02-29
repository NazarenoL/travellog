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
