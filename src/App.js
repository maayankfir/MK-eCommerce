import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage.js'
import ProductsContainer from './containers/ProductsContainer.js'
import Cart from './components/Cart.js'
import Details from './components/Details.js'
import Default from './components/Default.js'

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/products" component={ProductsContainer}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
