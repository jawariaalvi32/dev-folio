import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Project.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 25,
    margin: 33,
  },
  button: {
    justifyContent: 'center',
    color: '#2196f3'
  },
  icon: {
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '20px'
  },
  btn: {
    justifyContent: 'center',

  }
});

export default function ViewProject({title, description, img, link, gitLink}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="projects">
      <CardContent>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
        />
        <Typography variant="h5" component="h2" style={{marginTop:"7px"}} >
          {title}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.btn}>
        <Button size="large">
          <a href={link}><i className="far fa-eye icon" size="28" style={{color:"#3f677b"}}></i></a>
        </Button>
        <Button size="large">
          <a href={gitLink}><i className="fab fa-github icon" size="28" style={{color:"#3f677b"}}></i></a>
        </Button>
      </CardActions>
    </Card>
  );
}