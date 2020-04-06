import React from 'react';
import { connect } from 'react-redux';
import { enterSite } from '../redux/actions';
import Products from '../Products/Products.js';
import { Route, Link } from "react-router-dom";
import './Card.scss'
import home from '../pictures/home.jpg';
// const axios = require('axios');

function Card(props) {

  const handleEnterSite = (enter) => {
    props.enterSite(enter)
  }

  return (
    <div className="flex-column cardContainer">
      <div className="card">

        <img src={home} alt="" className="card__img" />

        <div className="card__body">
          <h3 className="card__title">Welcome</h3>
          <p className="card__text"> A discount store with the highest quality products.  </p>
        </div>

      </div>

      <Route path="/electronics" component={Products} />
      <Link to="electronics">
          <div className="yt" onClick={() => handleEnterSite(true)}>
            <div className="purchase" >Enter Store</div>
          </div>
      </Link>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state,
    authenticated: state.loggedIn,
  }
}

export default connect(mapStateToProps, { enterSite })(Card)