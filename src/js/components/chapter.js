import React, { Component } from "react";
import { connect } from "react-redux";

import Intro from "./intro";
import LocationWithVisibility from "./locationWithVisibility";
import Region from "./region";
import { Viewport } from "./map";

import {
  addToVisibleLocationsStack,
  removeFromVisibleLocationsStack,
  VisibleLocation
} from "../actions";

const CHAPTER_LOCATION_ID = "chapter";

class Chapter extends Component {
  componentWillMount() {
    this.props.addToVisibleLocationsStack(
      new VisibleLocation(
        CHAPTER_LOCATION_ID,
        new Viewport(
          this.props.latitude,
          this.props.longitude,
          this.props.zoom,
          this.props.bearing,
          this.props.pitch
        )
      )
    );
  }

  componentWillUnmount() {
    this.props.removeFromVisibleLocationsStack(CHAPTER_LOCATION_ID);
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
              <LocationWithVisibility
                key={locationIndex}
                regionTitle={region.title}
                {...location}
              />
            ))}
          </Region>
        ))}
      </>
    );
  }
}

export default connect(
  null,
  { addToVisibleLocationsStack, removeFromVisibleLocationsStack }
)(Chapter);
