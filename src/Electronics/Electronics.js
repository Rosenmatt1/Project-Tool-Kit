import React from 'react';
import './Electronics.scss'
import Item from '../Item/Item.js'
import { Grid } from '@material-ui/core';
const axios = require('axios');

function Electronics(props) {

  axios.get('http://localhost:4000/api/categories')
    .then(function (response) {
      // handle success
      // console.log(response);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  // .finally(function (response) {
  // })

  axios.get('http://localhost:4000/api/products/')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  // .finally(function () {
  //   console.log("finally products fired")
  // });

  axios({
    method: 'post',
    url: 'http://localhost:4000/api/categories',
    data: {
      name: "household"
    }
  });

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