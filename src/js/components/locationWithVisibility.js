import React, { Component } from "react";
import { connect } from "react-redux";
import VisibilitySensor from "react-visibility-sensor";

import Location from "./location";
import { Viewport } from "./map";

import {
  addToVisibleLocationsStack,
  removeFromVisibleLocationsStack,
  VisibleLocation
} from "../actions";

class LocationWithVisibility extends Component {
  state = { isVisible: false };

  visibilityChange = isVisible => {
    this.setState(state => ({
      isVisible: isVisible
    }));

    let visibleLocation = new VisibleLocation(
      this.props.regionTitle + "-" + this.props.title,
      new Viewport(
        this.props.latitude,
        this.props.longitude,
        this.props.zoom,
        this.props.bearing,
        this.props.pitch
      )
    );

    if (isVisible) {
      this.props.addToVisibleLocationsStack(visibleLocation);
    } else {
      this.props.removeFromVisibleLocationsStack(visibleLocation.id);
    }
  };

  componentWillUnmount;

  render() {
    return (
      <VisibilitySensor
        onChange={this.visibilityChange}
        partialVisibility={true}
        minTopValue={150}
      >
        <Location
          isVisible={this.state.isVisible}
          addLightboxWrapper={true}
          {...this.props}
        />
      </VisibilitySensor>
    );
  }
}

export default connect(
  null,
  { addToVisibleLocationsStack, removeFromVisibleLocationsStack }
)(LocationWithVisibility);
