import React, { createRef, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import { useStyles } from './styles';
import { Select, FormControl, Paper, InputLabel, Grid } from "@material-ui/core"
import { useState } from 'react';
import { MenuItem } from '@mui/material';
import PlaceDetails from '../placeDetails/PlaceDetails';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const List = ({ places, childClicked, isLoading }) => {
  const classes = useStyles();
  const placesType = ['Attractions', 'Hotels', 'Resturants']
  const ratings = [{ label: 'All', val: 0 }, { label: 'Above 3.0', val: 3 }, { label: 'Above 4.0', val: 4 }, { label: 'Above 4.5', val: 5 }]
  const [type, setType] = useState('Resturants');
  const [rating, setRating] = useState(0);
  const [eleRefs, seteleRefs] = useState([]);

  // console.log({refs});
  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => (eleRefs[i] || createRef()));
    seteleRefs(refs);
  }, [places])
  // seteleRefs(refs);
  // console.log({refs});
  // console.log(eleRefs);
  console.log(childClicked );
  return (<>{isLoading ?
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size='large'/>
    </Box>
    : (<div className={classes.container}>
      <Typography
        variant="h5"
        // sx={{ flexGrow: 1, display: { sm: 'block' } }}
        align='left'>
        Food and Dinning around you
      </Typography>

      <FormControl className={classes.dropDown}>
        <div className={classes.label}>
          <InputLabel >Type</InputLabel>
        </div>
        <Paper>
          <Select className={classes.select} value={type} onChange={(e) => { setType(e.target.value) }}>
            {
              placesType.map((item, i) => {
                return <MenuItem className={classes.list} key={i} value={item}>{item}</MenuItem>
              })
            }
          </Select>
        </Paper>
      </FormControl>
      <FormControl className={classes.dropDown}>
        <div className={classes.label}>
          <InputLabel >Ratings</InputLabel>
        </div>
        <Paper>
          <Select className={classes.select} value={rating} onChange={(e) => { setRating(e.target.value) }}>
            {
              ratings.map((item, i) => {
                return <MenuItem className={classes.list} key={i} value={item.val}>{item.label}</MenuItem>
              })
            }
          </Select>
        </Paper>
      </FormControl>
      <Grid sx={{ m: 8 }} container spacing={2} className={classes.listItems}>{
        places?.map((place, i) => {
          return (<Grid ref={eleRefs[i]} item key={i} xs={12} >
            <PlaceDetails
              selected={i === Number(childClicked)}
              places={place}
              refProp={eleRefs[i]}
            ></PlaceDetails>
          </Grid>)
        })
      }
      </Grid>
    </div>)}</>

  )
}

export default List;