import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

class SignupForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Segment inverted>
      <Form inverted onSubmit={ () => this.props.submitHandler(this.state)}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='User Name' name='username' placeholder='Enter User Name' value={this.state.username} onChange={this.handleChange}/>
          <Form.Input fluid label='Password' name='password' placeholder=' Enter Password' value={this.state.password} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit'>Submit</Button>
      </Form>
    </Segment>
    );
  }

}

export default SignupForm;
