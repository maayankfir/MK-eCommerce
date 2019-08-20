import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage.js'
import HomeProducts from './containers/HomeProducts.js'
import Cart from './components/Cart.js'
import SignupForm from './components/SignupForm.js'
import Details from './components/Details.js'
import Default from './components/Default.js'

class App extends React.Component {

  state = {
    user: {}
  }

  signUpSubmit = (e, user) => {

    console.log("Signup user");
    fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
        username: "test",
        password: "test"
      }
      })
    })
    .then(res=> res.json())
    .then(console.log)
  }
render () {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/signup" render={() => <SignupForm submitHandler={this.signUpSubmit}/>}/>
        <Route exact path="/products" component={HomeProducts}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
    </React.Fragment>
  );
  }
}

export default App;
