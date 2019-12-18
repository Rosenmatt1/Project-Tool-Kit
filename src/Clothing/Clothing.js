import React from 'react';
import './Clothing.scss';
import Item from '../Item/Item.js';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Clothing(props) {

  const useStyles = makeStyles(theme => ({
    root: {
    },
  
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={3}
      direction="row"
      justify="center"
      alignItems="center">
      <Grid item >
        <Item />
      </Grid>
      <Grid item >
        <Item />
      </Grid>
    </Grid>
  )
}

export default Clothing;