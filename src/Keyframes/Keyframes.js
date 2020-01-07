import React from 'react';
import { connect } from 'react-redux';
import { enterSite } from '../redux/actions';
// import Products from '../Products/Products.js';
// import { Route, Link } from "react-router-dom";
import './Keyframes.scss'
// const axios = require('axios');

function Keyframes(props) {
  // const handleEnterSite = (enter) => {
  //   props.enterSite(enter)
  // }

  return (
    <div className="bodyKey"> 
      <div className="box">
        Hello Keyframe
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { enterSite })(Keyframes)