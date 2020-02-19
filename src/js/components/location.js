import React, { Component } from "react";

import Image1x1 from "../../images/image-1x1.jpg";
import Image2x1 from "../../images/image-2x1.jpg";
import Image3x1 from "../../images/image-3x1.jpg";
import VisibilitySensor from "react-visibility-sensor";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };

    this.visibilityChange = this.visibilityChange.bind(this);
  }

  visibilityChange(isVisible) {
    this.setState(state => ({
      isVisible: isVisible
    }));
  }

  render() {
    return (
      <VisibilitySensor
        onChange={this.visibilityChange}
        partialVisibility={true}
        minTopValue={250}
      >
        <section className={this.state.isVisible ? "active" : ""}>
          <h3>{this.props.name}</h3>
          {this.props.description}
          <span className="date">{this.props.date}</span>

          <div className="grid">
            <div className="box box--2x2">
              <div
                className="image-wrapper"
                style={{ backgroundImage: "url(" + Image3x1 + ")" }}
              ></div>
            </div>
            <div className="box box--1x1">
              <div
                className="image-wrapper"
                style={{ backgroundImage: "url(" + Image2x1 + ")" }}
              ></div>
            </div>
            <div className="box box--1x1">
              <div
                className="image-wrapper"
                style={{ backgroundImage: "url(" + Image1x1 + ")" }}
              ></div>
            </div>
          </div>
        </section>
      </VisibilitySensor>
    );
  }
}

export default Location;
