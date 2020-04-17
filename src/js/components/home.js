import React, { Component } from "react";
import { connect } from "react-redux";
import marked from "marked";
import { Link } from "react-router-dom";

import Intro from "./intro";
import { Viewport } from "./map";

import { flyTo, setDataLayer } from "../actions";

class Home extends Component {
  componentDidMount() {
    this.props.flyTo(new Viewport(0, 0, 1, 0, 0));
    this.props.setDataLayer({
      type: "fill",
      paint: { "fill-color": "#128d98", "fill-opacity": 0.5 }
    });
  }

  render() {
    return (
      <>
        <Intro
          title={"Naz's Travel Log"}
          description={
            "I have been lucky to travel to more than a few places in the world. Lorem ipsum"
          }
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
  { setDataLayer, flyTo }
)(Home);
