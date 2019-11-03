// Lien Ho Hoang - 2019/11/02

import React from 'react'
import { Col, Card, CardText, CardBody, CardTitle, Form, Button, FormGroup, Label, Input } from 'reactstrap';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.item.id,
      name: props.item.name,
      detail: props.item.detail,
      status: props.item.status
    }
  }

  toggle = (ev) => {
    let item = { ...this.state }
    item.status = (item.status === 'read') ? 'edit' : 'read'
    this.setState({ ...item })
  }
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.detail) return

    this.setState({ status: 'read' })

    this.props.handleEdit({
      id: this.state.id,
      name: this.state.name,
      detail: this.state.detail,
      status: 'read'
    })
  };

  handleCancel = event => {
    this.setState({
      status: 'read', name: this.props.item.name,
      detail: this.props.item.detail,
    })
  }
  handleDelete = event => {
    if (window.confirm("Do you want to remove the item?")) {
      this.props.handleDelete(this.props.item)
    }
  }

  render() {
    return (
      (this.state.status === 'read') ?
        <Col sm='6'>
          <Card>
            <CardBody>
              <CardTitle>{this.props.item.name}</CardTitle>
              <CardText>{this.props.item.detail}</CardText>
              <div><Button outline color="success" onClick={this.toggle}>Edit</Button>
                <Button outline color="danger" onClick={this.handleDelete}>Delete</Button>

              </div>
            </CardBody>
          </Card>
        </Col>
        :
        <Col sm='6'>
          <Form className='form'>
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
    )
  }
}

export default ListItem
