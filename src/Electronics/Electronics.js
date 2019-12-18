import React from 'react';
import './Electronics.scss'
import Item from '../Item/Item.js'
import { Grid } from '@material-ui/core';
// const axios = require('axios');

function Electronics(props) {

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

export default Electronics;