import React, { Component } from "react";
import MapGL from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibmF6YXJlbm9sIiwiYSI6ImNrNnBzaTA2YTAyanUzaHFscXViNGt1YmYifQ.TqHgHhcysFdfaH0QvP6MGg";

class Map extends Component {
  render() {
    return (
      <MapGL
        mapStyle="mapbox://styles/nazarenol/ck6puwuuj1hi41io6ocfo6mtf"
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    );
  }
}

export default Map;
