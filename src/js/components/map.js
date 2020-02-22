import React, { Component } from "react";
import { connect } from "react-redux";
import { easeCubic } from "d3-ease";

import MapGL, { FlyToInterpolator } from "react-map-gl";

import { flyTo } from "../actions";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibmF6YXJlbm9sIiwiYSI6ImNrNnBzaTA2YTAyanUzaHFscXViNGt1YmYifQ.TqHgHhcysFdfaH0QvP6MGg";

class Map extends Component {
  _onViewportChange = viewport => {
    this.props.flyTo(viewport);
  };

  render() {
    return (
      <MapGL
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={this._onViewportChange}
        mapStyle="mapbox://styles/nazarenol/ck6puwuuj1hi41io6ocfo6mtf?optimize=true"
        transitionDuration={1500}
        transitionInterpolator={new FlyToInterpolator()}
        transitionEasing={easeCubic}
        {...this.props.viewport}
        width="100%"
        height="100%"
      />
    );
  }
}

const mapStateToProps = state => ({
  viewport: state.viewport
});

export default connect(
  mapStateToProps,
  { flyTo }
)(Map);

// export default Map;
export class Viewport {
  constructor(latitude, longitude, zoom, bearing, pitch) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.zoom = zoom;
    this.bearing = bearing;
    this.pitch = pitch;
  }
}
