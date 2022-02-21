import React from 'react'
import { useStyles } from './styles';
import GoogleMapReact from 'google-map-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';

const Map = ({ places, setCordinates, setBounds, cordinates }) => {
  const classes = useStyles();
  const dummyImages = ['dummyResturant', 'dummyResturant1', 'dummyResturant2']
  const isNotMobile = useMediaQuery('(min-width:600px)');
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAwLBHAOAdrYuDhNnlMMb-zXh80XaDdYRo' }}
        defaultCenter={cordinates}
        defaultZoom={14}
        margin={[20, 20, 20, 20]}
        center={cordinates}
        options={''}
        onChange={(e) => {
          // console.log(e);
          setCordinates({ latitude: e.center.lat, longitude: e.center.lng });
          setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne })
        }}
      // onChildClick={''}
      >
        {places?.map((place, i) => {
          <div key={i} lat={Number(place.latitude)} lng={Number(place.longitude)} className={classes.mapMarkerContainer}>
            {isNotMobile ? <Box display="flex">
              <img src={places.photo ? places.photo.images.small.url : dummyImages[Math.floor(Math.random() * 3)] + '.jpg'} alt="place.name" />
              <Typography gutterbottom='true' variant="h6" component="div">
                {places.name}
              </Typography>
              <Rating name="read-only" value={Number(places.rating)} readOnly />
            </Box> : <LocationOnIcon color='secondary' size='small'></LocationOnIcon>}
          </div>
        })}
      </GoogleMapReact>
    </div>
  )
}

export default Map;