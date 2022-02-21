import React from 'react'
import Typography from '@mui/material/Typography';
import { useStyles } from './styles';
import { Select, FormControl, Paper, InputLabel, Grid } from "@material-ui/core"
import { useState } from 'react';
import { MenuItem } from '@mui/material';
import PlaceDetails from '../placeDetails/PlaceDetails';

const List = ({ places }) => {
  const classes = useStyles();
  const placesType = ['Attractions', 'Hotels', 'Resturants']
  const ratings = [{ label: 'All', val: 0 }, { label: 'Above 3.0', val: 3 }, { label: 'Above 4.0', val: 4 }, { label: 'Above 4.5', val: 5 }]
  const [type, setType] = useState('Resturants');
  const [rating, setRating] = useState(0);
  return (
    <div className={classes.container}>
      <Typography
        variant="h5"
        // component="div"
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
          return (<Grid item key={i} xs={12} >
            <PlaceDetails places={place}></PlaceDetails>
          </Grid>)
        })
      }
      </Grid>
    </div>
  )
}

export default List;