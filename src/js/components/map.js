import React, { Component } from "react";
import MapGL, { FlyToInterpolator } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibmF6YXJlbm9sIiwiYSI6ImNrNnBzaTA2YTAyanUzaHFscXViNGt1YmYifQ.TqHgHhcysFdfaH0QvP6MGg";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { viewport: this.props.viewport };

    this.flyTo = this.flyTo.bind(this);
  }

  flyTo(viewport) {
    this.setState(state => ({ viewport: viewport }));
  }

  render() {
    return (
      <MapGL
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/nazarenol/ck6puwuuj1hi41io6ocfo6mtf"
        latitude={this.state.viewport.latitude}
        longitude={this.state.viewport.longitude}
        zoom={this.state.viewport.zoom}
        bearing={this.state.viewport.bearing}
        pitch={this.state.viewport.pitch}
        transitionDuration={1000}
        transitionInterpolator={new FlyToInterpolator()}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    );
  }
}

export default Map;
export class Viewport {
  constructor(latitude, longitude, zoom, bearing, pitch) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.zoom = zoom;
    this.bearing = bearing;
    this.pitch = pitch;
  }
}
