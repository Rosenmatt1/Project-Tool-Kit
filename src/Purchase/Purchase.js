import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Route, Link } from "react-router-dom";

import Products from '../Products/Products.js'
// import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  purchase: {
    margin: theme.spacing(1),
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid red',
    zIndex: 3
  },
}));

function Purchase(props) {

  const classes = useStyles();

  console.log("props", props)

  return (
    // <h1 className={classes.purchase}>Purchase</h1>
    <Products />
    // <Card className={classes.card}>
    // <CardActionArea>
    //    <CardMedia 
    //       component="img"
    //       alt={props.name}
    //       height="140"
    //       image="//unsplash.it/250/250"
    //       title={props.name}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {props.name}
    //       </Typography>
    //       <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
    //         {props.description}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>


    //     <Button size="small" color="primary">
    //       Purchase
    //     </Button>

    //   </CardActions>
    // </Card>
  );
}

export default Purchase