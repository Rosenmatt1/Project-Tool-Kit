import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
import { Grid } from '@material-ui/core';
import { Paper, Tabs, Tab } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Button from './Button/Button.js';
import { makeStyles } from '@material-ui/core/styles';
import './global.scss';
const axios = require('axios'); 

const useStyles = makeStyles(theme => ({
  root: {
  },
 
}));

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  
  const fetchCategories = async () => {
    const response = await axios.get('http://localhost:4000/api/categories')
    setCategories(response.data)
  }

  const fetchProducts = () => {
    axios.get('http://localhost:4000/api/products/')
    .then(function (response) {
      setProducts(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [])

  const classes = useStyles();

  // console.log("categories", categories)
  // console.log("products", products)

  return (
    <Grid container>
      <Navbar />


      <Footer />
    </Grid>
  );
}

export default App;
