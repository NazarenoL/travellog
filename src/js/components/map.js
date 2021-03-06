import React, { Component } from "react";
import { connect } from "react-redux";
import { easeCubic } from "d3-ease";
import { isEqual, last } from "lodash";

import MapGL, { FlyToInterpolator, Layer, Source } from "react-map-gl";

const countriesGeoJson = require("@geo-maps/countries-land-10km");

import { settings } from "../content";
import { flyTo } from "../actions";

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

class Map extends Component {
  state = { countries: null };

  _onViewportChange = viewport => {
    this.props.flyTo(viewport);
  };

  componentDidMount() {
    let countries_visited = settings.countries_visited;
    let countries = countriesGeoJson();

    countries.features = countries.features.filter(x =>
      countries_visited.includes(x.properties.A3)
    );

    this.setState(state => ({
      countries: countries
    }));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      !isEqual(
        prevProps.visibleLocationsStack,
        this.props.visibleLocationsStack
      )
    ) {
      let nextViewport = last(this.props.visibleLocationsStack).viewport;
      this.props.flyTo(nextViewport);
    }
  }

  render() {
    return (
      <MapGL
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={this._onViewportChange}
        mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
        transitionDuration={1500}
        transitionInterpolator={new FlyToInterpolator()}
        transitionEasing={easeCubic}
        {...this.props.viewport}
        width="100%"
        height="100%"
      >
        <Source type="geojson" data={this.state.countries}>
          {this.props.datalayer == null ? (
            <></>
          ) : (
            <Layer {...this.props.datalayer} />
          )}
        </Source>
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  viewport: state.viewport,
  visibleLocationsStack: state.visibleLocationsStack,
  datalayer: state.datalayer
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
