import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import "./Map.css";

import EventMarker from "./EventMarker";
import EventInfoWindow from "./EventInfoWindow";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultCenter: {
        lat: 0,
        lng: 0,
      },
      center: null,
      mapStyles: {
        width: "50% !important",
        height: "100vh !important",
      },
      zoom: 10,
      error: null,
    };
  }

  componentDidMount = () => {
    this.getUserLocation();
  };

  getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        }),
      (err) => this.setState({ error: err.message })
    );
  };

  render() {
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerClassName="google-maps"
          mapContainerStyle={this.state.mapStyles}
          zoom={this.state.zoom}
          center={
            this.state.center ? this.state.center : this.state.defaultCenter
          }
        >
          <EventMarker position={this.state.center} />
          <EventInfoWindow position={this.state.center} />
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default Map;
