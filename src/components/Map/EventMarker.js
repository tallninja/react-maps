import React, { Component } from "react";
import { Marker } from "@react-google-maps/api";

class EventMarker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedLocation: this.props.position };
  }

  handleDragEnd = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    this.setState({ selectedLocation: newLocation });
  };

  render() {
    console.log(this.state.selectedLocation);
    return (
      <Marker
        draggable
        position={this.props.position}
        onDragEnd={this.handleDragEnd}
      />
    );
  }
}

export default EventMarker;
