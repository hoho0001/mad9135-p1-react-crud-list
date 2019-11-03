// Lien Ho Hoang - 2019/11/02

import React from 'react';
import cuid from 'cuid';
import { HashRouter, Route, Switch } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import ListView from './components/ListView'
import NewItemView from './components/NewItemView';
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
      { id: cuid(), name: "19F_MAD9132_300", detail: 'Android Application Development', status: 'read' },
      { id: cuid(), name: "19F_MAD9135_300", detail: 'Developing HTML5 Mobile Apps', status: 'read' },
      { id: cuid(), name: "19F_MAD9137_300", detail: 'iOS Development', status: 'read' },
      { id: cuid(), name: "19F_MAD9034_300", detail: 'User Experience Design', status: 'read' },
      { id: cuid(), name: "19F_ENL8720_304", detail: 'Technical Report Writing', status: 'read' }
    ]}
  }

  componentDidMount() {
    // check localStorage for an array
    let _list = localStorage.getItem('myList')
    if (_list)
      this.setState({ list: JSON.parse(_list) })
    else
      localStorage.setItem('myList', JSON.stringify(this.state.list));
  }

  buildList = (data) => {
    this.setState({
      list: data
    })
    localStorage.setItem('myList', JSON.stringify(data));
  }

  addItem = (item) => {

    let newList = this.state.list.concat(item) // OR list.push(item)  add new value to the ending of the existing array
    // this.setState({ list: [item, ...this.state.list] }) // add new value to the beginning of the existing array
    this.buildList(newList)
  }

  editItem = (item) => {
    if (item) {
      let newList = this.state.list
      const index = newList.findIndex((e) => e.id === item.id)
      if (index !== -1) {
        newList[index] = item
        this.buildList(newList)
      }
    }
  }

  deleteItem = (targetItem) => {

    // remove item in this.state.list
    let newList = this.state.list.filter(item => item.id !== targetItem.id)
    // Update State
    this.buildList(newList)
  }

  render() {
    return (

      <HashRouter basename='/'>
        <div className="App">
          <AppHeader />
          <Switch>
            <Route path={`/item`} render={(props) => <NewItemView {...props} handleAdd={this.addItem} item={{ name: '', detail: '' }} />} />
            <Route exact path='/' render={(props) => <ListView {...props} items={this.state.list} handleDelete={this.deleteItem} handleEdit={this.editItem} />} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
