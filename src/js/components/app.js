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

import chapter from "../../../content/tokyo.json";

class App extends Component {
  render() {
    return (
      <>
        <div id="map">
          <Map />
        </div>
        <div id="writing">
          <Navigation />

          <Intro
            title={chapter.title}
            description={chapter.description}
            icon={chapter.mapFontIcon}
          />
          {chapter.regions.map((region, regionIndex) => {
            return (
              <Region title={region.title} key={regionIndex}>
                {region.locations.map((location, locationIndex) => {
                  return <Location key={locationIndex} {...location} />;
                })}
              </Region>
            );
          })}

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
