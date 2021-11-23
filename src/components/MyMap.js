import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class MyMap extends Component {
render() {
    const style = {
        width: '550px',
        height: '300px',
        marginLeft:'1.2vw',
        background:'red'
      }
    return (
        <Map style={style} google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
    </Map>
    );
}
}

export default GoogleApiWrapper({
apiKey: ('AIzaSyBTljpzTvGwt7esXMOueXcTTqOJZ5JO4Pg')
})(MyMap)
