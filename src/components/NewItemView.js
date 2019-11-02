// Lien Ho Hoang - 2019/11/02

import React from 'react'
import cuid from 'cuid';

class NewItemView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.item.name,
      price: props.item.price,

    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.price) return
    this.props.handleAdd({
      id: cuid(),
      name: this.state.name,
      price: this.state.price,
      status: 'read'
    })

    this.setState({ name: '', price: '' })
    this.props.history.push('/')
  };


  handleCancel = event => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h2>Add item</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          <label>Price</label>
          <input type="text" name="price" value={this.state.price} onChange={this.handleInputChange} />
          <button>Submit</button>
          <button onClick={() => this.handleCancel()}>Cancel</button>
        </form>
      </div>



    )
  }

}

export default NewItemView