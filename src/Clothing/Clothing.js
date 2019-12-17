import React from 'react';
import './Clothing.scss'
import { makeStyles } from '@material-ui/core/styles';

function Clothing(props) {

  const useStyles = makeStyles(theme => ({
    root: {
    },
  
  }));

  const classes = useStyles();

  return (
    <div className="flex-column">

      <div className="card">

        <img src="//unsplash.it/400/250" alt="" className="card__img" />

        <div className="card__body">
          <h3 className="card__title">Clothing</h3>
          <p className="card__text">Lorem ipsum dolor sit amet consectetur adipiscing elit hac ultrices bibendum. </p>
        </div>

      </div>

      <div className="yt"><a className="purchase" href="#/">Purchase product</a></div>

    </div>
  )
}

export default Clothing;