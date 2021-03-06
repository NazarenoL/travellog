import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Intro from "./intro";
import { Viewport } from "./map";

import { settings } from "../content";
import {
  addToVisibleLocationsStack,
  removeFromVisibleLocationsStack,
  setDataLayer,
  VisibleLocation
} from "../actions";

const HOME_LOCATION_ID = "home";

class Home extends Component {
  componentDidMount() {
    this.props.addToVisibleLocationsStack(
      new VisibleLocation(HOME_LOCATION_ID, new Viewport(0, 0, 1, 0, 0))
    );
    this.props.setDataLayer({
      type: "fill",
      paint: { "fill-color": "#e58f52", "fill-opacity": 0.5 }
    });
  }

  componentWillUnmount() {
    this.props.removeFromVisibleLocationsStack(HOME_LOCATION_ID);
  }

  render() {
    return (
      <>
        <Intro
          title={settings.title}
          description={settings.home}
          icon={"map-wrld"}
        />
        <div className="chapters">
          {this.props.chapters.map(chapter => (
            <Link to={"/" + chapter.slug} key={chapter.slug}>
              <h2>{chapter.content.title}</h2>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default connect(
  null,
  { setDataLayer, addToVisibleLocationsStack, removeFromVisibleLocationsStack }
)(Home);
