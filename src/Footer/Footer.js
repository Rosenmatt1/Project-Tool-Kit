import React, { useState } from 'react';
import './Footer.scss'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
// import Page2 from './Page2/Page2.js';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
});

function Footer(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Page 1" />
        <Tab label="Page 2" />
        <Tab label="Page 3" />
      </Tabs>
    </Paper>
  )
}

export default Footer;