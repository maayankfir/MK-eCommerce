import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react'
import ProductsList from '../components/ProductsList.js'

class ProductsContainer extends React.Component {

  state = {
  allProducts: []
}

componentDidMount(){
  fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
  .then(res => res.json())
  .then(res => {
    this.setState({
      allProducts: res
    })
  })
}

  render() {
    
    let productsArr = this.state.allProducts.map(item => {
      return <ProductsList key={item.id} item={item}/>
    })

    return (
      <Grid textAlign='center'>
        <Grid.Row>
        </Grid.Row>
          {productsArr}
      </Grid>
    );
  }

}

export default ProductsContainer;
