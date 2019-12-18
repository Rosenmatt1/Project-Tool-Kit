import React, { useState } from 'react';
import './Footer.scss'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { Route, Link } from "react-router-dom";
import Card from '../Card/Card.js';
import Electronics from '../Electronics/Electronics.js'
import Clothing from '../Clothing/Clothing.js';
import Misc from '../Misc/Misc.js';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'fixed',
    left: 0,
    bottom: 0,
    right: 0,
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },
  tabs: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
});

function Footer(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Paper >
        <Route path="/electronics" component={Electronics} />
        <Route path="/clothing" component={Clothing} />
        <Route path="/misc" component={Misc} />

        <Tabs
          value={value}
          className={classes.root}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Link to="electronics">
            <Tab onChange={(e) => handleChange(e, 0)} label="Electronics" />
          </Link>

          <Link to="clothing">
            <Tab onChange={(e) => handleChange(e, 1)} label="Clothing" />
          </Link>

          <Link to="misc">
            <Tab onChange={(e) => handleChange(e, 2)} label="Misc" />
          </Link>
        </Tabs>
      </Paper>
  )
}

export default Footer;