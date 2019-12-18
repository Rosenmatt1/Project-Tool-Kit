import React from 'react';
import './Button.scss'

function Card(props) {

  let cardFired = () => {
    console.log("card fired")
  }

  return (
    <div className="container-1">
      <div onClick={cardFired} className="btn btn-one">
        <span className="button-text">Enter</span>
      </div>
    </div>
  )
}

export default Card;
