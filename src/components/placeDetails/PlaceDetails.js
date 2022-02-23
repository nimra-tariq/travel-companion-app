import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardActions from "@mui/material/CardActions"
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating';

export default function PlaceDetails({ places,selected,refProp }) {
  const dummyImages = ['dummyResturant', 'dummyResturant1', 'dummyResturant2'];
  if(selected)(refProp?.current?.scrollIntoView({behaviour:'smooth',block: "start"}))
  return (
    <Card elevation={6} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={places.name}
        height="140"
        image={places.photo ? places.photo.images.large.url : dummyImages[Math.floor(Math.random() * 3)] + '.jpg'}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {places.name}
        </Typography>
        {places.ranking &&
          <Box display='flex' justifyContent='space-between'>
            <Rating name="read-only" value={Number(places.rating)} readOnly />
            <Typography variant="body2" color="text.secondary">
              out of {places.num_reviews} reviews
            </Typography>
          </Box>}
        <Box display='flex' justifyContent='space-between'>
          <Typography variant="body2" color="text.secondary">
            Price
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {places.price_level ? places.price_level : '$'}
          </Typography>
        </Box>
        {places.ranking &&
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="body2" color="text.secondary">
              Ranking
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {places.ranking}
            </Typography>
          </Box>}
        {places?.awards?.map((award) => {
          return <Box display='flex' justifyContent='space-between'>
            <Typography variant="body2" color="text.secondary">
              {award.images.small}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {award.display}
            </Typography>
          </Box>
        })}
        {places?.cuisine ?
          <Box >
            {places.cuisine?.map((name) => {
              return <Chip sixe='small' key={name.key} label={name.name} />
            })}
          </Box> : ''
        }{places.phone && <Box display='flex' justifyContent='space-between'>
          <LocalPhoneIcon></LocalPhoneIcon>
          <Typography variant="body2" color="text.secondary">
            {places.phone}
          </Typography>
        </Box>}
        {places.address && <Box display='flex' justifyContent='space-between'>
          <LocationOnIcon></LocationOnIcon>
          <Typography textAlign='right' variant="body2" color="text.secondary">
            {places.address}
          </Typography>
        </Box>}
      </CardContent>
      <CardActions>
        {places.website && <Button size="small" onClick={() => { window.open(places.website) }}>Website</Button>}
        {places.web_url && <Button size="small" onClick={() => { window.open(places.web_url, 'blank') }}>Trip Advisor</Button>}
      </CardActions>
    </Card>

  );
}