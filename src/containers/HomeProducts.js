import React from 'react'
import { Select } from 'semantic-ui-react'
import ProductsContainer from './ProductsContainer'

const brands = [
  { key: 'almay', value: 'almay', text: 'almay' },
  { key: 'alva', value: 'alva', text: 'alva' },
  { key: 'annabelle', value: 'annabelle', text: 'annabelle' },
  { key: 'benefit', value: 'benefit', text: 'benefit' },
  { key: 'boosh', value: 'boosh', text: 'boosh' },
  { key: 'clinique', value: 'clinique', text: 'clinique' },
  { key: 'marcelle', value: 'marcelle', text: 'marcelle' },
  { key: 'revlon', value: 'revlon', text: 'revlon' },
  { key: 'nyx', value: 'nyx', text: 'nyx' },
  { key: 'suncoat', value: 'suncoat', text: 'suncoat' },
]

class HomeProducts extends React.Component {
  state = {
  allProducts: [],
  searchInput: '',
  brand: '',
  productsShowed: false
}

handleProductClick = (e, data) => {
  this.fetchProducts(data.value)
  this.setState({productsShowed: true})
}

fetchProducts = (brand) => {
  fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
  .then(res => res.json())
  .then(res => {
    this.setState({
      allProducts: res
    })
  })
}

  render() {
    return (
      <div>
      <Select placeholder='Select a brand' options={brands} onChange={this.handleProductClick} />
      {this.state.productsShowed === true ?
        <ProductsContainer allProducts={this.state.allProducts}/>
        : ''
      }

      </div>
    );
  }

}

export default HomeProducts;
