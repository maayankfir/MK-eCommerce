import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to="/"> Home </Link>
          </Menu.Item>
          <Menu.Item
            name='products'
            active={activeItem === 'products'}
            onClick={this.handleItemClick}
          >
          <Link to="/products"> Products List </Link>
          </Menu.Item>
          <Menu.Item position='right'
            name='cart'
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}
          >
          <Link to="/cart"> Cart </Link>
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }

}

export default NavBar;
