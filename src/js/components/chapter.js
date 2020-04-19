import React, { Component } from "react";
import { connect } from "react-redux";
import slugify from "slugify";

import Intro from "./intro";
import LocationWithVisibility from "./locationWithVisibility";
import Region from "./region";

import { regions, locations } from "../content";
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
        {this.props.regions.map((regionName, regionIndex) => {
          console.log(regionName, regionIndex, regions);
          let region = regions[slugify(regionName, { lower: true })];

          return (
            <Region title={region.title} key={regionIndex}>
              {region.locations.map((locationName, locationIndex) => {
                let location =
                  locations[slugify(locationName, { lower: true })];
                return (
                  <LocationWithVisibility key={locationIndex} {...location} />
                );
              })}
            </Region>
          );
        })}
      </>
    );
  }
}

export default connect(
  null,
  { flyTo }
)(Chapter);
