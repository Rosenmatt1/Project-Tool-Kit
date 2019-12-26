import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
import LoginForm from './LoginForm/LoginForm.js';
import CreateAccount from './CreateAccount/CreateAccount.js';
import { Grid } from '@material-ui/core';
import Card from './Card/Card.js';
// import Loader from './Loader/Loader.js';
// import Button from '@material-ui/core/Button';
// import Button from './Button/Button.js';
import { connect } from 'react-redux';
import { getCategories, getProducts, enterSite } from './redux/actions'
// import { makeStyles } from '@material-ui/core/styles';
import './global.scss';
const axios = require('axios');

// const useStyles = makeStyles(theme => ({
//   root: {
//   },

// }));

function App(props) {
  // const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [showLoader, setLoaderDelay] = useState(false);
  // console.log("props", props)

  const fetchCategories = async () => {
    const response = await axios.get('http://localhost:4000/api/categories')
    // setCategories(response.data)
    props.getCategories(response.data)
  }

  const fetchProducts = () => {
    axios.get('http://localhost:4000/api/products/')
      .then(function (response) {
        // setProducts(response.data)
        props.getProducts(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    // .finally(function () {
    // })
  }

  useEffect(() => {
    fetchCategories()
    fetchProducts()
    props.enterSite(false)
  }, [])

  // console.log("entered prop in App", props.entered)
  // console.log("App state props", props)

  // const classes = useStyles();

  return (
    // <Grid container>
    //   <Navbar />
    //   <Footer />
    // <Form />
    // </Grid>
    <Grid container>
      {!props.entered ?
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
      }
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    login: state.openLogIn,
    entered: state.enterSite
  }
}

export default connect(mapStateToProps, { getCategories, getProducts, enterSite })(App)


