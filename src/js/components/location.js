import React, { Component } from "react";
import { connect } from "react-redux";
import marked from "marked";

import Image1x1 from "../../images/image-1x1.jpg";
import Image2x1 from "../../images/image-2x1.jpg";
import Image3x1 from "../../images/image-3x1.jpg";
import VisibilitySensor from "react-visibility-sensor";

import { flyTo } from "../actions";

class Location extends Component {
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
        <section
          className={this.state.isVisible ? "location active" : "location"}
        >
          <h3>{this.props.title}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: marked(this.props.description) }}
          />
          <span className="date">{this.props.date}</span>

          <div className="grid">
            {this.props.photos.map((photo, photoIndex) => {
              return (
                <div className={`box box--${photo.size}`} key={photoIndex}>
                  <div
                    className="image-wrapper"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("./../../images/" + photo.filename) +
                        ")"
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </section>
      </VisibilitySensor>
    );
  }
}

export default connect(
  null,
  { flyTo }
)(Location);
