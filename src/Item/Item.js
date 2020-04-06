import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Purchase from '../Purchase/Purchase.js';
// import Clothing from '../Clothing/Clothing.js';
import { Route, Link } from "react-router-dom";
// import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: 345,
  },
  description: {
    height: 90,
  }
});

function Item(props) {
  const classes = useStyles();

  const itemClicked = (val) => {
    console.log("item clicked")
    console.log("propsID", val)
    // console.log("ITEM KEY", props.key)
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.name}
          height="140"
          src={props.img_url}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        {/* render={(props) => <Purchase name={props.name} description={props.description} category_id={props.category_id} id={props.id} key={props.key} price={props.price}
          img_url={props.img_url} />} */}

        {/* <Route path="/purchase" component={Purchase} />
        <Link to="purchase">
          <Button onClick={() => itemClicked(props.id)} size="small" color="primary">
            Purchase
          </Button>
        </Link> */}

      </CardActions>
    </Card>
  );
}
export default Item