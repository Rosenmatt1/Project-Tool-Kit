import React from 'react';
import './Misc.scss';
import Item from '../Item/Item.js'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  },

}));

function Misc(props) {

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

export default Misc;