import React, { Component } from "react";

import Intro from "./intro";
import LocationWithVisibility from "./locationWithVisibility";
import Region from "./region";

class Chapter extends Component {
  render() {
    return (
      <>
        <Intro
          title={this.props.title}
          description={this.props.description}
          icon={this.props.mapFontIcon}
        />
        {this.props.regions.map((region, regionIndex) => {
          return (
            <Region title={region.title} key={regionIndex}>
              {region.locations.map((location, locationIndex) => {
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

export default Chapter;
