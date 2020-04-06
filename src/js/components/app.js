import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "../store";

import Chapter from "./chapter";
import Footer from "./footer";
import Map, { Viewport } from "./map";
import Navigation from "./navigation";

import chapter from "../../../content/tokyo.json";
import chapters from "../../../content/index.js";

class App extends Component {
  render() {
    console.log(chapters.entries());
    return (
      <Router>
        <div id="map">
          <Map />
        </div>
        <div id="writing">
          <Navigation chapters={chapters} />
          <Switch>
            {chapters.map(chapter => (
              <Route path={"/" + chapter.slug} key={chapter.slug}>
                <Chapter {...chapter.content} />
              </Route>
            ))}
          </Switch>
          <Footer />
        </div>
      </Router>
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
