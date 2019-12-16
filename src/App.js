import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Card from './Card/Card.js';
import Page2 from './Page2/Page2.js';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
import { Grid } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Button from './Button/Button.js';
import { makeStyles } from '@material-ui/core/styles';
import './global.scss';
// const axios = require('axios'); 

const useStyles = makeStyles(theme => ({
  root: {
  },
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }

}));

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(null);


  const classes = useStyles();

  return (
    <Grid container>
      <Navbar />

      <BrowserRouter>
        <div>
          <Link to="card">
            Card
        </Link>
          <Link to="page2">
            Page 2
        </Link>

          <Route path="/card" component={Card} />
          <Route path="/page2" component={Page2} />

        </div>
      </BrowserRouter>

      <Footer />
    </Grid>
  );
}

export default App;
