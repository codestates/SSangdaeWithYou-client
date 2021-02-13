import React from "react";
import { geolocated } from "react-geolocated";

class UserLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ! count 얌생이 수정 필요
      didUpdateCount: 0
    }
  }

  componentDidUpdate() {
    if (!this.props.coords) {
      return;
    } if (this.state.didUpdateCount < 1) {
      this.pinToUserLocation(this.props.coords.latitude, this.props.coords.longitude)
      this.setState({
        didUpdateCount: this.state.didUpdateCount + 1
      })
    }
  }

  pinToUserLocation = (latitude, longitude) => {
    this.props.handleMapClick(latitude, longitude)
  }

  render() {
    return !this.props.isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
        <div></div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(UserLocation);

// render() {
//   return !this.props.isGeolocationAvailable ? (
//       <div>Your browser does not support Geolocation</div>
//   ) : !this.props.isGeolocationEnabled ? (
//       <div>Geolocation is not enabled</div>
//   ) : this.props.coords ? (
//       <table>
//           <tbody>
//               <tr>
//                   <td>latitude</td>
//                   <td>{this.props.coords.latitude}</td>
//               </tr>
//               <tr>
//                   <td>longitude</td>
//                   <td>{this.props.coords.longitude}</td>
//               </tr>
//           </tbody>
//       </table>
//   ) : (
//       <div>Getting the location data&hellip; </div>
//   );
// }