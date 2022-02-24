import React from 'react'
import { useStyles } from './styles';
import GoogleMapReact from 'google-map-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import { Paper } from '@material-ui/core';

const Map = ({ places, setCordinates, setBounds, cordinates, setchildClicked, weatherData }) => {
  const classes = useStyles();

  //if min width is larger than 600px it is not a mobile
  const isNotMobile = useMediaQuery('(min-width:600px)');

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={cordinates}
        defaultZoom={14}
        margin={[20, 20, 20, 20]}
        center={cordinates}
        options={''}
        onChange={(e) => {
          // console.log(e);
          setCordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne })
        }}
        onChildClick={(child) => { setchildClicked(child) }}
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
                  src={place.photo && place.photo.images.large.url ? place.photo.images.large.url : 'dummyImg.jpg'} alt={place.name} />
                <Typography gutterBottom variant="subtitle2" >
                  {place.name}
                </Typography>
                <Rating size='small' name="read-only" value={Number(place.rating)} readOnly />
              </Paper>)
              : <LocationOnIcon color='secondary' size='small'></LocationOnIcon>}
          </div>
        ))}
        {/* marker for weather */}
        {weatherData?.list?.length && weatherData.list.map((item, i) =>
        (<div
          className={classes.mapMarkerContainer}
          lat={Number(item.coord.lat)}
          lng={Number(item.coord.lon)}
          key={i}
        >
          <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} height="70px" />
        </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map;