import React, { Component } from "react";
import { connect } from "react-redux";

import Intro from "./intro";
import LocationWithVisibility from "./locationWithVisibility";
import Region from "./region";

import { flyTo } from "../actions";

class Chapter extends Component {
  componentDidMount() {
    this.props.flyTo(this.props.viewport);
  }

  render() {
    return (
      <>
        <Intro
          title={this.props.title}
          description={this.props.description}
          icon={this.props.mapFontIcon}
        />
        {this.props.regions.map((region, regionIndex) => (
          <Region title={region.title} key={regionIndex}>
            {region.locations.map((location, locationIndex) => (
              <LocationWithVisibility key={locationIndex} {...location} />
            ))}
          </Region>
        ))}
      </>
    );
  }
}

export default connect(
  null,
  { flyTo }
)(Chapter);
