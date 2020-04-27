import React, { Component } from "react";
import { connect } from "react-redux";
import VisibilitySensor from "react-visibility-sensor";

import Location from "./location";
import { Viewport } from "./map";

import { flyTo } from "../actions";

class LocationWithVisibility extends Component {
  state = { isVisible: false };

  visibilityChange = isVisible => {
    this.setState(state => ({
      isVisible: isVisible
    }));

    if (isVisible) {
      this.props.flyTo(
        new Viewport(
          this.props.latitude,
          this.props.longitude,
          this.props.zoom,
          this.props.bearing,
          this.props.pitch
        )
      );
    }
  };

  render() {
    return (
      <VisibilitySensor
        onChange={this.visibilityChange}
        partialVisibility={true}
        minTopValue={100}
      >
        <Location isVisible={this.state.isVisible} {...this.props} />
      </VisibilitySensor>
    );
  }
}

export default connect(
  null,
  { flyTo }
)(LocationWithVisibility);
