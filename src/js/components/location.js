import React, { Component } from "react";
import marked from "marked";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import Image1x1 from "../../images/image-1x1.jpg";
import Image2x1 from "../../images/image-2x1.jpg";
import Image3x1 from "../../images/image-3x1.jpg";

class Location extends Component {
  render() {
    const SRLOptions = {
      settings: {
        transitionSpeed: 400
      },
      buttons: {
        showAutoplayButton: false,
        showDownloadButton: false,
        showFullscreenButton: false,
        showThumbnailsButton: false
      },
      caption: { showCaption: false },
      thumbnails: { showThumbnails: false }
    };

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

        <SimpleReactLightbox>
          <SRLWrapper options={SRLOptions}>
            <div class="grid">
              {!this.props.photos ||
                this.props.photos.map((photo, photoIndex) => {
                  if (!photo.image || !photo.size) {
                    return;
                  }

                  return (
                    <a
                      className={`box box--${photo.size}`}
                      key={photoIndex}
                      href={photo.image}
                      data-attribute="SRL"
                    >
                      <img src={photo.image} style={{ display: "none" }} />
                      <div
                        className="image-wrapper"
                        style={{
                          backgroundImage: `url(${photo.image})`
                        }}
                      ></div>
                    </a>
                  );
                })}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </section>
    );
  }
}

export default Location;
