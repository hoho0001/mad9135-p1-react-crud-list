// Lien Ho Hoang - 2019/11/02

import React from 'react'


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.item.id,
      name: props.item.name,
      price: props.item.price,
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
    if (!this.state.name || !this.state.price) return

    this.setState({status: 'read' })

    this.props.handleEdit({
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      status: 'read'
    })
  };

  handleCancel = event => {
    this.setState({
      status: 'read', name: this.props.item.name,
      price: this.props.item.price,
    })
  }

  render() {
    return (
      (this.state.status === 'read') ?
        <div>
          <p>{this.props.item.name}</p>
          <p>{this.props.item.price}</p>
          <p>
            <button onClick={this.toggle} className="button muted-button" value="edit">Edit</button>
            <button onClick={() => { this.props.handleDelete(this.props.item) }} className="button muted-button">Delete</button>
          </p>
        </div>
        :
        <form >
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}
          />
          <label>Price</label>
          <input type="text" name="price" value={this.state.price} onChange={this.handleInputChange}
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>


    )
  }
}

export default ListItem
