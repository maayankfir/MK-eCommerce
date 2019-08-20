import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react'
import ProductsList from '../components/ProductsList.js'
import Filter from '../components/Filter.js'

class ProductsContainer extends React.Component {

  state = {
  searchInput: ''
}

  handleSearchChange = (e) => {
    e.preventDefault()
    this.setState({
    searchInput: e.target.value
    })
  }

  render() {
    const filteredArr = this.props.allProducts.filter(item => {
      return item.product_type.includes(this.state.searchInput)
    })

    let productsArr = filteredArr.map(item => {
      return <ProductsList key={item.id} item={item}/>
    })

    return (
      <Grid textAlign='center'>
        <Grid.Row>
          <Filter searchInput={this.state.searchInput} handleSearchChange={this.handleSearchChange}/>
        </Grid.Row>
          {productsArr}
      </Grid>
    );
  }

}

export default ProductsContainer;
