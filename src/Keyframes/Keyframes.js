import React from 'react';
import { connect } from 'react-redux';
import { enterSite } from '../redux/actions';
// import Products from '../Products/Products.js';
// import { Route, Link } from "react-router-dom";
import './Keyframes.scss'
// const axios = require('axios');

function Transition(props) {
  // const handleEnterSite = (enter) => {
  //   props.enterSite(enter)
  // }

  return (
    <div className="box">
      Hello Transition
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { enterSite })(Transition)