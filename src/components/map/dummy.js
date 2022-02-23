{
  places.length && places.map((place, i) => (
    <div
      className={classes.markerContainer}
      lat={Number(place.latitude)}
      lng={Number(place.longitude)}
      key={i}
    >
      {!matches
        ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
        : (
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
            <img
              className={classes.pointer}
              src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            />
            <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
          </Paper>
        )}
    </div>
  ))
}


{
  places.length && places.map((place, i) => (
    <div
      className={classes.markerContainer}
      lat={Number(place.latitude)}
      lng={Number(place.longitude)}
      key={i}
    >
      {!isNotMobile
        ? <LocationOnIcon color="primary" fontSize="large" />
        : (
          <Paper className={classes.paper} elevation={3} >
            <Typography
              className={classes.typography}
              variant="subtitle2" gutterBottom> {place.name}</Typography>
            <img
              className={classes.pointer}
              src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            />
            <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
          </Paper>
        )}
    </div>
  ))
}