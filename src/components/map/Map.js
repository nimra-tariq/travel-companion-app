import React from 'react'
import { useStyles } from './styles';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const classes = useStyles();
  const cordinates={lat:0,lng:0}
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAwLBHAOAdrYuDhNnlMMb-zXh80XaDdYRo' }}
        defaultCenter={cordinates}
        defaultZoom={14}
        margin={[20,20,20,20]}
        center={cordinates}
        options={''}
        // onChange={''}
        // onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  )
}

export default Map;