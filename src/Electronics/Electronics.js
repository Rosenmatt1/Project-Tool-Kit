import React from 'react';
import './Electronics.scss'
import Item from '../Item/Item.js'
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

function Electronics(props) {

  console.log(props)

  return (
    <Grid container spacing={3}
      direction="row"
      justify="center"
      alignItems="center">

      {props.products.map((product, idx) => {
        if (product.category_id === 2) {
          return (
            <Grid item>
              <Item
                category_id={2}
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
    products: state.products.products,
    tab: state.tabSelected
  }
}

export default connect(mapStateToProps)(Electronics)