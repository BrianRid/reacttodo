import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  render() {

    const { items, clearList, deleteItem, editItem } = this.props

    const todoItem = items.map((item) => {
      return(
        <TodoItem
          key={item.id}
          description={item.userInput}
          handleDelete={() => deleteItem(item.id)}
          handleEdit={()=> editItem(item.id)}
        />
      );
    });

    return (
      <div>
        <ul className="list-group my-5">
          {todoItem}
          <button type='button' className='btn btn-danger btn-block text-capitalize mt-5' onClick={clearList}>Effacer tous les éléments</button>
        </ul>
      </div>
    );
  }
}

export default TodoList;
