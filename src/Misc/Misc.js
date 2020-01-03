import React from 'react';
// import './Products.scss'
import Item from '../Item/Item.js'
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

function Misc(props) {
  const products = props.products || null

  return (
    <Grid container spacing={3}
      direction="row"
      justify="center"
      alignItems="center">

      {products ?
        products.map((product, idx) => {
          if (product.category_id === 3) {
            return (
              <Grid item>
                <Item
                  key={idx}
                  category_id={3}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  img_url={product.img_url}
                />
              </Grid>
            )
          }
        })
        : null
      }
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    tab: state.tabSelected
  }
}

export default connect(mapStateToProps)(Misc)