import React, { useEffect } from 'react';
import { Route } from "react-router-dom";
import * as _ from 'lodash';
import './App.css';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
import LoginForm from './LoginForm/LoginForm.js';
import CreateAccount from './CreateAccount/CreateAccount.js';
import { Grid } from '@material-ui/core';
import Card from './Card/Card.js';
import Loader from './Loader/Loader.js';
// import Purchase from './Purchase/Purchase.js';
// import Button from '@material-ui/core/Button';
// import Button from './Button/Button.js';

import Keyframes from './Keyframes/Keyframes.js';
import Transitions from './Transitions/Transitions.js'
import { connect } from 'react-redux';
import { getCategories, getProducts, enterSite, showLoader } from './redux/actions';
// import { makeStyles } from '@material-ui/core/styles';
import './global.scss';
const axios = require('axios');

// const useStyles = makeStyles(theme => ({
//   root: {
//   },
// }));

function App(props) {

  const url = "https://my-store-toolkit.herokuapp.com/api"
  // "https://my-store-toolkit.herokuapp.com/api"
  // http://localhost:4000/api

  const fetchCategories = async () => {
    const response = await axios.get(`${url}/categories`)
    props.getCategories(response.data)
  }

  const fetchProducts = () => {
    axios.get(`${url}/products/`)
      .then(function (response) {
        props.getProducts(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    // .finally(function () {
    // })
  }

  const waitThree = () => {
    _.delay((val) => {
      props.showLoader(val)
    }, 2200, false)
  }

  useEffect(() => {
    waitThree()
    fetchCategories()
    fetchProducts()
    localStorage.removeItem('jwt')
  }, [])

  // const classes = useStyles();

  return (
    <Grid container>
      {/* <Keyframes /> */}
      <Transitions />

      {/* {props.loader ?
        <Loader />
        :
        !props.entered ?
          <Route exact path="/" component={Card} />
          :
          <Grid>
            <Navbar />
            {props.login &&
              <div>
                <Route path="/createAccount" component={CreateAccount} />
                <Route path="/loginForm" component={LoginForm} />
              </div>
            }
            <Footer />
          </Grid>
      } */}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    login: state.openLogIn,
    entered: state.enterSite,
    loader: state.showLoader
  }
}

export default connect(mapStateToProps, { getCategories, getProducts, enterSite, showLoader })(App)


