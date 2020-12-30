import React, { Component } from "react";
import { InfoWindow } from "@react-google-maps/api";

class EventInfoWindow extends Component {
  render() {
    return (
      <div>
        <InfoWindow position={this.props.position}>
          <div>Info Window</div>
        </InfoWindow>
      </div>
    );
  }
}

export default EventInfoWindow;
