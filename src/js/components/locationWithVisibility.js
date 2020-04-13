import React, { Component } from "react";
import { connect } from "react-redux";
import VisibilitySensor from "react-visibility-sensor";

import Location from "./location";

import { flyTo } from "../actions";

class LocationWithVisibility extends Component {
  state = { isVisible: false };

  visibilityChange = isVisible => {
    this.setState(state => ({
      isVisible: isVisible
    }));

    if (isVisible) {
      this.props.flyTo(this.props.viewport);
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
