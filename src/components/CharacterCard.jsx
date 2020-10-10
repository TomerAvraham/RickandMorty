import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    minWidth: 400,
    minHeight: 170,
    backgroundColor: 'rgb(60, 62, 68)',
    color: 'rgb(250, 250, 250)',
    display: 'flex',
    justifyContent: 'space-between'
    
  },
  cardDetails: {
    height: '100%',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    width: '40%',
    objectFit: 'contain'
  },
  location: {
    color: '#9E9E9E',
    fontSize: 15
  },
  locationTitle: {
    fontSize: 17,
  },
  alive: {
    color: '#55CC44'
  },
  dead: {
    color: '#D63D2E'
  },
  unknown: {
    color: '#c8c8c8'
  },
});

export default function CharacterCard( {character} ) {
  const classes = useStyles();

  const handelStatusClass = status => {
    switch (status) {
      case 'Alive':
        return classes.alive
      case 'Dead':
        return classes.dead 
      case 'unknown':
        return classes.unknown
      default:
        break;
    }
  }


  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardDetails} >
        <Typography style={{fontWeight: 800}} variant="h5" component="h2">
          {character.name}
        </Typography>
        <Typography className={classes.title} >
          <span className={handelStatusClass(character.status)} >{character.status}</span> - {character.species} 
        </Typography>
        <Typography className={classes.locationTitle} variant="body2" component="p">
          <span className={classes.location} >Last Know location:</span>
          <br/>
          {character.location.name}
        </Typography>
        <Typography className={classes.locationTitle} variant="body2" component="p">
          <span className={classes.location} >First seen in:</span> 
          <br/>
          {character.origin.name}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.image}
        image={character.image}
        title='character image'
        />
    </Card>
  );
}
