import React, { Component } from 'react';
import { Card, Button, Header, Modal, Icon, Image, Grid } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';

class ProductsList extends Component {
  state = {
    modalOpen: false,
   }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  render() {
    return (
      <div className="ui link cards">
      <Card >
        <Modal className="modal"
        trigger={<Image onClick={this.handleOpen} className="img" size='small' src={this.props.item.image_link} centered/>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        >
         <Modal.Content image>
           <Image wrapped size='medium' size='medium' src={this.props.item.image_link} />
           <Modal.Description>
             <Header></Header>
             <p>${this.props.item.price}</p>
             <h3>Product Description</h3>
             <p className="lorem"> {this.props.item.description}</p>
           </Modal.Description>
         </Modal.Content>
         <Modal.Actions>
          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close' />
          </Button>
          <Button color='green' onClick={this.handleCart} inverted>
            <Icon name='cart plus' />
          </Button>
        </Modal.Actions>
        </Modal>

          <Card.Content>
            <Card.Header>{this.props.item.name}</Card.Header>
            <Card.Meta>{this.props.item.product_type}</Card.Meta>
            <Card.Description>{this.props.item.category}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='dollar sign' />
              {this.props.item.price}
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }

}

export default ProductsList;
