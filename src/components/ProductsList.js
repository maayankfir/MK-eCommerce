import React, { Component } from 'react';
import { Card, Button, Header, Modal, Icon, Image } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';

class ProductsList extends Component {

  render() {
    return (
      <div className="ui link cards">
      <Card>
        <Modal className="modal" trigger={<Image className="img" size='medium' src={this.props.item.image_link}/>}>
         <Modal.Content image>
           <Image wrapped size='medium' size='large' src={this.props.item.image_link} />
           <Modal.Description>
             <Header></Header>
             <p>${this.props.item.price}</p>
             <h3>Product Description</h3>
             <p className="lorem"> {this.props.item.description}</p>
           </Modal.Description>
         </Modal.Content>
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
