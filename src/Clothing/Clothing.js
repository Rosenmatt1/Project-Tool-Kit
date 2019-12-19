import React from 'react';
import './Clothing.scss';
import { connect } from 'react-redux';
import Item from '../Item/Item.js';
import { Grid } from '@material-ui/core';

function Clothing(props) {

  return (
    <Grid container spacing={3}
      direction="row"
      justify="center"
      alignItems="center">

      {props.products.map((product, idx) => {
        if (product.category_id === 1) {
          return (
            <Grid item>
              <Item
                category_id={1}
                key={idx}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                img_url={product.img_url}
              />
            </Grid>
          )
        }
   
      })}

    </Grid>
  )
}


const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(Clothing)