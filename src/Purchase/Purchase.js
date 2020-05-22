import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
// import { Route, Link } from "react-router-dom";
// import Products from '../Products/Products.js'
// import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  purchase: {
    margin: theme.spacing(1),
    width: '250px',
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
  },
}));

function Purchase(props) {
  const classes = useStyles();
  console.log("PURCHASE Rendered!!!")

  useEffect(() => {

  }, [])

  const [product, setProduct] = useState("");

  // componentDidMount() {
  //   console.log("this.props", this.props)
  //   const id = this.props.match.params.id
  //   fetch(`http://localhost:4000/api/products/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("data", data)
  //       this.setState({
  //         product: data.product,
  //         isLoaded: true
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  const initiateStripeCheckout = async () => {
    console.log("Stripe Checkout!")
    const stripe = window.Stripe('pk_test_KvKqn0sBllyJWVVK04UUBaQN00tZcJimdy')
    const { product } = this.state

    const lineItem = {
      name: product.name,
      description: product.description,
      images: [product.img_url],
      amount: product.price,
      currency: 'usd',
      quantity: 1,
    }

    try {
      // Initiate checkout session to get session id
      const response = await fetch('http://localhost:4000/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(lineItem)
      })

      const data = await response.json()
      const sessionId = data.session.id

      // Redirect to checkout
      const result = await stripe.redirectToCheckout({ sessionId })
      // TODO: add error handling for result.error
    } catch (error) {
      console.log('STRIPE ERROR', error)
    }
  }


  return (
    <Card className={classes.card}>
    <CardActionArea>
       <CardMedia 
          component="img"
          alt={props.name}
          height="140"
          image="//unsplash.it/250/250"
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


        <Button size="small" color="primary">
          Purchase
        </Button>

      </CardActions>
    </Card>
  );
}


const mapStateToProps = (state) => {
  return {
    tab: state.tabSelected
  }
}

export default connect(mapStateToProps)(Purchase)