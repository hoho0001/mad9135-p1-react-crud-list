// Lien Ho Hoang - 2019/11/02

import React from 'react'
import cuid from 'cuid';
import { Container, Row } from 'reactstrap';
import {  Form, Col, Button, FormGroup, Label, Input } from 'reactstrap';

class NewItemView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.item.name,
      detail: props.item.detail,
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.detail) { 
      alert("Please enter information, Name and Detail are required!")
      return}
    this.props.handleAdd({
      id: cuid(),
      name: this.state.name,
      detail: this.state.detail,
      status: 'read'
    })

    this.setState({ name: '', detail: '' })
    this.props.history.push('/')
  };

  handleCancel = event => {
    this.props.history.push('/')
  }

  render() {
    return (
      <Container className="container">
        <Row>
          <Col>
            <Form>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="itemName" className="mr-sm-2">Name</Label>
                <Input type="text" name="name" id="itemName" placeholder="Item name" value={this.state.name} onChange={this.handleInputChange} />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="itemDetail" className="mr-sm-2">Detail</Label>
                <Input type="textarea" name="detail" id="itemDetail" placeholder="Item detail" value={this.state.detail} onChange={this.handleInputChange} />
              </FormGroup>
              <Button outline color="success" onClick={this.handleFormSubmit}>Save</Button>
              <Button outline onClick={this.handleCancel}>Cancel</Button>
            </Form>
          </Col>

        </Row>
      </Container>

    )
  }

}

export default NewItemView
