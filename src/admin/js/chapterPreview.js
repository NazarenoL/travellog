import React, { Component } from "react";

import Intro from "../../js/components/intro";
import Location from "../../js/components/location";
import Region from "../../js/components/region";

class ChapterPreview extends Component {
  _renderLocations(locations) {
    return locations.map((location, locationIndex) => {
      // Convert photos urls for preview
      if (location.photos) {
        location.photos = location.photos.map((photo, photoIndex) => {
          return {
            size: photo.size,
            image: this.props.getAsset(photo.image).toString()
          };
        });
      }

      return <Location isVisible={true} key={locationIndex} {...location} />;
    });
  }

  render() {
    return (
      <>
        <Intro
          title={this.props.title || ""}
          description={this.props.description || ""}
          icon={this.props.mapFontIcon || ""}
        />
        {!this.props.regions ||
          this.props.regions.map((region, regionIndex) => (
            <Region title={region.title} key={regionIndex}>
              {!region.locations || this._renderLocations(region.locations)}
            </Region>
          ))}
      </>
    );
  }
}

export default ChapterPreview;
// Override images with temp asset path
// @see https://www.netlifycms.org/docs/customization/
