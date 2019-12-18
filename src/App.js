import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
// import Electronics from './Electronics/Electronics.js';
import { Grid } from '@material-ui/core';
// import { Paper, Tabs, Tab } from '@material-ui/core';
import Card from './Card/Card.js';
// import Loader from './Loader/Loader.js';
// import Button from '@material-ui/core/Button';
// import Button from './Button/Button.js';
import { connect } from 'react-redux';
import { getCategories } from './redux/actions'
import { makeStyles } from '@material-ui/core/styles';
import './global.scss';
const axios = require('axios');

const useStyles = makeStyles(theme => ({
  root: {
  },

}));

function App(props) {
  // const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [showLoader, setLoaderDelay] = useState(false);
  // console.log("props", props)

  // const fetchCategories = async () => {
  //   const response = await axios.get('http://localhost:4000/api/categories')
  //   setCategories(response.data)
  //   props.getCategories(response.data)
  // }

  // const fetchProducts = () => {
  //   axios.get('http://localhost:4000/api/products/')
  //     .then(function (response) {
  //       setProducts(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }

  useEffect(() => {
    // fetchCategories()
    // fetchProducts()
  }, [])

  console.log("entered prop in App", props.entered)

  // const classes = useStyles();

  return (
    <Grid container>
      {!props.entered ?
        <Route exact path="/" component={Card} />
        :
        <Grid>
          <Navbar />
          {/* <Loader /> */}
          <Footer />
        </Grid>
      }
    </Grid>
  );
}

const mapStateToProps = (state) => {
  console.log("redux state in App", state)
  return {
    categories: state.categories,
    entered: state.enterSite
  }
}

export default connect(mapStateToProps, { getCategories })(App)


