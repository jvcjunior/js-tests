import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center : new google.maps.LatLng(this.props.lat, this.props.lon)
        })
    }

    render() {
        return <div ref="map" />
    }
}

export default GoogleMap;
