import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount(){
        new GoogleMap.maps.Map(this.ref.map, {
            zoom: 12,
            center : {
                lat: this.props.lat,
                lon: this.props.lon
            }
        })
    }

    render() {
        return <div ref="map" />
    }
}

export default GoogleMap;
