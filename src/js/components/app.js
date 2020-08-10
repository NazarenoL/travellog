import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import store from "../store";

import Chapter from "./chapter";
import Footer from "./footer";
import Home from "./home";
import Map, { Viewport } from "./map";
import Navigation from "./navigation";

import { visibleChapters } from "../content";

ReactGA.initialize(process.env.GA_TRACKING_ID);
const history = createBrowserHistory();
history.listen(location => {
  console.log("location listened!");
  // Record a pageview for the given page
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Router history={history}>
        <div id="map">
          <Map />
        </div>
        <div id="writing">
          <Navigation chapters={visibleChapters} />
          <Switch>
            {chapters.map(chapter => (
              <Route path={"/" + chapter.slug} key={chapter.slug}>
                <Chapter {...chapter.content} />
              </Route>
            ))}
            <Route path={"/"}>
              <Home chapters={visibleChapters} />
            </Route>
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
