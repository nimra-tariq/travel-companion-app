import React from 'react'
import { useStyles } from './styles';
import GoogleMapReact from 'google-map-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import { Paper } from '@material-ui/core';

const Map = ({ places, setCordinates, setBounds, cordinates,setchildClicked }) => {
  const classes = useStyles();
  const dummyImages = ['dummyResturant', 'dummyResturant1', 'dummyResturant2']
  //if min width is larger than 600px it is not a mobile
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
      onChildClick={(child)=>{setchildClicked(child)}}
      >
        {places.length && places?.map((place, i) => (
          <div
            className={classes.mapMarkerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {isNotMobile ? (
              <Paper elevation={3} className={classes.paper}>
                <img
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : dummyImages[Math.floor(Math.random() * 3)] + '.jpg'} alt="place.name" />
                <Typography gutterBottom variant="subtitle2" >
                  {place.name}
                </Typography>
                <Rating size='small' name="read-only" value={Number(place.rating)} readOnly />
              </Paper>)
              : <LocationOnIcon color='secondary' size='small'></LocationOnIcon>}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map;