
import './App.css';
import Header from './components/header/Header';
import List from './components/list/List';
import Map from './components/map/Map';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from './components/footer/footer'
import { getPlacesData } from './api/api';
import { getWeatherData } from './api/api';
import { useEffect, useState } from 'react';

function App() {
  const [places, setPlaces] = useState([]);

  const [cordinates, setCordinates] = useState({});
  const [bounds, setBounds] = useState({ sw: '', ne: '' });

  const [childClicked, setchildClicked] = useState(null)

  const [isLoading, setisLoading] = useState(false)

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);

  const [filteredPlaces, setfilteredPlaces] = useState([])

  const [weatherData, setweatherData] = useState([])

  //when the app loads pick the geo location 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCordinates({ lat: latitude, lng: longitude });
    })
  }, [])

  //when the cordinates change get new places data from api
  useEffect(() => {
    if (bounds.sw && bounds.ne) {

      setisLoading(true);

      getPlacesData(bounds.sw, bounds.ne, type).then(data => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setisLoading(false)
        setfilteredPlaces([]);
        console.log(data);
      });

      getWeatherData(cordinates.lat, cordinates.lng).then(data => {
        setweatherData(data)
        console.log('weather');
        console.log(data);
      })
    }
  }, [type])

  //when the filterplaces change
  useEffect(() => {//
    const filteredData = places.filter((place) => place.rating >= rating);
    console.log(filteredData);
    setfilteredPlaces(filteredData);
  }, [rating])

  return (
    <div className="App">
      <Header setCordinates={setCordinates}></Header>
      <Box sx={{ flexGrow: 1,my:2 }}>
        <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={1}>
          <Grid item xs={12} md={4}>
            <List isLoading={isLoading}
              childClicked={childClicked}
              places={filteredPlaces.length !== 0 ? filteredPlaces : places}
              type={type} setType={setType}
              rating={rating} setRating={setRating}
            ></List>
          </Grid>
          <Grid item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={8}>
            <Map setchildClicked={setchildClicked}
              places={filteredPlaces.length ? filteredPlaces : places}
              setCordinates={setCordinates} setBounds={setBounds}
              cordinates={cordinates}
              weatherData={weatherData}
            ></Map>
          </Grid>
        </Grid>
      </Box>
     <Footer></Footer>
    </div>
  );
}

export default App;
