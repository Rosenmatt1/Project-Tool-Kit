import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
// import Card from './Card/Card.js';
// import Electronics from './Electronics/Electronics.js'
// import Clothing from './Clothing/Clothing.js';
// import Misc from './Misc/Misc.js';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
import { Grid } from '@material-ui/core';
import { Paper, Tabs, Tab } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Button from './Button/Button.js';
import { makeStyles } from '@material-ui/core/styles';
import './global.scss';
// const axios = require('axios'); 

const useStyles = makeStyles(theme => ({
  root: {
  },
 
}));

function App() {
  // const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState(null);
 
  useEffect(() => {
    
  })

  const classes = useStyles();

  return (
    <Grid container>
      <Navbar />



      <Footer />
    </Grid>
  );
}

export default App;
