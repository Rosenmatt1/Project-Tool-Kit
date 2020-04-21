import React from 'react';
import './Products.scss'
import Item from '../Item/Item.js'
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

function Products(props) {
  const products = props.products || null
  console.log("tabSelected!!", props.tab)

  return (
    <Grid container spacing={3}
      direction="row"
      justify="center"
      alignItems="center">

      {products ?
        products.map(product => {
          if (product.category_id === (props.tab + 1)) {
            return (
              <Grid item>
                <Item
                  category_id={props.tab + 1}
                  key={product.id}
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

export default connect(mapStateToProps)(Products)