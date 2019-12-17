import React from 'react';
import './Electronics.scss'
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
    <div className="flex-column">

      <div className="card">

        <img src="//unsplash.it/400/250" alt="" className="card__img" />

        <div className="card__body">
          <h3 className="card__title">Electronics</h3>
          <p className="card__text">Lorem ipsum dolor sit amet consectetur adipiscing elit hac ultrices bibendum. </p>
        </div>

      </div>

      <div className="yt"><a className="purchase" href="#/">Purchase product</a></div>

    </div>
  )
}

export default Electronics;