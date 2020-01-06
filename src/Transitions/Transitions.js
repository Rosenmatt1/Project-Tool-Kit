import React from 'react';
import { connect } from 'react-redux';
import { enterSite } from '../redux/actions';
// import Products from '../Products/Products.js';
// import { Route, Link } from "react-router-dom";
import './Transitions.scss'
// const axios = require('axios');

function Transitions(props) {
  // const handleEnterSite = (enter) => {
  //   props.enterSite(enter)
  // }

  return (
    <div className="box1">
      Hello Transition
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { enterSite })(Transitions)