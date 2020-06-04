import React, { Component } from 'react'
import './App.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from 'uuid';


class App extends Component {

  state={
    items: [],
    id: uuid(),
    userInput:'',
    editItem: false
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Déclaration de l'objet qu'on va créer pour alimenter le state au submit du form
    const newItem = {
      id: this.state.id,
      userInput: this.state.userInput
    }
    this.setState({
      items: [...this.state.items, newItem],
      userInput:'',
      id:uuid(),
      editItem: false
    })
  };

  clearList = () => {
    this.setState({
      items: []
    })
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)

    const selectedItem = this.state.items.find(item => item.id === id)

    this.setState({
      items: filteredItems,
      userInput: selectedItem.userInput,
      id: id,
      editItem: true
    })

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h1 className='text text-center my-3'>Just Do It !</h1>

          <TodoInput
              userInput={this.state.userInput}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
           />

          <h3 className='text text-center'> {this.state.items.length > 0 ? "You got work to do !" : "You got nothing scheduled !"}</h3>

          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            deleteItem={this.handleDelete}
            editItem={this.handleEdit}
          />


          </div>
        </div>
      </div>
    );
  }
}

export default App;
