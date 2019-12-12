import React from 'react';
import './Card.scss'

function Card(props) {
  return (
    <div className="card">

      <img src="//unsplash.it/405/705" alt="" className="card__img" />

      <div className="card__body">
        <h3 className="card__title">This is a card</h3>
        <p className="card__text">Lorem ipsum dolor sit amet consectetur adipiscing elit hac ultrices bibendum. </p>
      </div>

    </div>


  )
}

export default Card;