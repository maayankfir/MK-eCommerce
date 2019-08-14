import React, { Component } from 'react';
import makeup from '../images/makeup.jpeg';
import { Header, Image } from 'semantic-ui-react'

class HomePage extends Component {

  render() {
    return (
      <div>
      <Image centered size='large' src={makeup} />
        <Header as='h2' icon textAlign='center'>
          <Header.Content>MK</Header.Content>
        </Header>
        <Header as='h3' icon textAlign='center'>
          <Header.Content>Makeup</Header.Content>
        </Header>
        <Header as='h4' icon textAlign='center'>
          <Header.Content>By Maayan Kfir</Header.Content>
        </Header>
      </div>
    );
  }

}

export default HomePage;
