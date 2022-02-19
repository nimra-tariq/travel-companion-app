
import './App.css';
import Header from './components/header/Header';
import List from './components/list/List';
import Map from './components/map/Map';
import PlaceOrder from './components/placeDetails/PlaceDetails';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getPlacesData } from './api/api';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    getPlacesData().then(data => console.log(data))
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <List></List>
          </Grid>
          <Grid item xs={12} md={8}>
            <Map></Map>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
