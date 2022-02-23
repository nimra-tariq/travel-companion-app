
import './App.css';
import Header from './components/header/Header';
import List from './components/list/List';
import Map from './components/map/Map';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getPlacesData } from './api/api';
import { useEffect, useState } from 'react';

function App() {
  const [places, setPlaces] = useState([]);
  const [cordinates, setCordinates] = useState({});
  const [bounds, setBounds] = useState({ sw: '', ne: '' });
  const [childClicked, setchildClicked] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCordinates({ lat: latitude, lng: longitude });
    })
  }, [])

  // useEffect(() => {
  //   getPlacesData(bounds.sw,bounds.ne).then(data => {
  //     setPlaces(data);
  //     console.log(data);
  //   });
  // }, [cordinates,bounds])

  useEffect(() => {
    setisLoading(true)
    getPlacesData().then(data => {
      setPlaces(data);
      setisLoading(false)
      console.log(data);
    });
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <List isLoading={isLoading} childClicked={childClicked} places={places}></List>
          </Grid>
          <Grid item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={8}>
            <Map setchildClicked={setchildClicked} places={places} setCordinates={setCordinates} setBounds={setBounds} cordinates={cordinates}></Map>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
