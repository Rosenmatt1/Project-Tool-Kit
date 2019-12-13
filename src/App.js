import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import Card from './Card/Card.js';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
import { Grid } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Button from './Button/Button.js'
import { makeStyles } from '@material-ui/core/styles';
import './global.scss';

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

  const classes = useStyles();

  return (
    <Grid container>
      <Navbar />
      <Grid item sm className={classes.paper}>
        <Card />
      </Grid>
      <Grid item sm className={classes.paper}>
        <Card />
      </Grid>

      <Footer />
    </Grid>
    // <Router>
    //   <div>
    //     <Link to="card">
    //       <Button />
    //     </Link>

    //     <Route path="/card/" component={Card} />

    //   </div>
    // </Router>
  );
}

export default App;
