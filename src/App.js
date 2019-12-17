import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Card from './Card/Card.js';
import Page2 from './Page2/Page2.js';
import Page3 from './Page3/Page3.js';
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
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },
  tabs: {
    flexGrow: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },

}));

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <Grid container>
      <Navbar />

      <BrowserRouter>

        <Paper className={classes.tabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Link to="card">
              <Tab label="Page 1" />
            </Link>

            <Link to="page2">
              <Tab label="Page 2" />
            </Link>

            <Link to="page3">
              <Tab label="Page 3" />
            </Link>
          </Tabs>
        </Paper>

        <Route exact path="/" component={Card} />
        <Route path="/card" component={Card} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </BrowserRouter>

      {/* <Footer /> */}
    </Grid>
  );
}

export default App;
