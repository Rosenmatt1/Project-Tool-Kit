import React from 'react';
import { connect } from 'react-redux';
import { enterSite } from '../redux/actions';
import Products from '../Products/Products.js';
import { Route, Link } from "react-router-dom";
import './Card.scss'
// const axios = require('axios');

function Card(props) {
  // axios.get('http://localhost:4000/api/categories')
  //   .then(function (response) {
  //     // handle success
  //     // console.log(response);

  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // // .finally(function (response) {
  // // })

  // axios.get('http://localhost:4000/api/products/')
  //   .then(function (response) {
  //     // handle success
  //     // console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })

  // axios({
  //   method: 'post',
  //   url: 'http://localhost:4000/api/categories',
  //   data: {
  //     name: "household"
  //   }
  // });

  const handleEnterSite = (enter) => {
    props.enterSite(enter)
  }

  return (
    <div className="flex-column">
      <div className="card">

        <img src="//unsplash.it/400/250" alt="" className="card__img" />

        <div className="card__body">
          <h3 className="card__title">Welcome</h3>
          <p className="card__text">Lorem ipsum dolor sit amet consectetur adipiscing elit hac ultrices bibendum. </p>
        </div>

      </div>

      <Route path="/electronics" component={Products} />
      <Link to="electronics">
        <div className="yt" onClick={() => handleEnterSite(true)}><a className="purchase" href="#/">Enter Store</a></div>
      </Link>

    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { enterSite })(Card)