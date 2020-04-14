import React, { Component } from "react";
import marked from "marked";

import Image1x1 from "../../images/image-1x1.jpg";
import Image2x1 from "../../images/image-2x1.jpg";
import Image3x1 from "../../images/image-3x1.jpg";

class Location extends Component {
  render() {
    return (
      <section
        className={this.props.isVisible ? "location active" : "location"}
      >
        <h3>{this.props.title}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(this.props.description ?? "")
          }}
        />
        <span className="date">{this.props.date}</span>

        <div className="grid">
          {!this.props.photos ||
            this.props.photos.map((photo, photoIndex) => {
              if (!photo.image || !photo.size) {
                return;
              }

              return (
                <div className={`box box--${photo.size}`} key={photoIndex}>
                  <div
                    className="image-wrapper"
                    style={{
                      backgroundImage: `url(${photo.image})`
                    }}
                  ></div>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}

export default Location;
