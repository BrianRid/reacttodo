import React, { Component } from 'react'

class TodoItem extends Component {


  render(){

    const { description, handleDelete, handleEdit } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6>{description}</h6>
        <div className='todoIcon'>
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className='fas fa-pen'></i>
          </span>
          <span className='text-danger' onClick={handleDelete}>
            <i className='fas fa-trash'></i>
          </span>
        </div>
      </li>
    )
  }
};

export default TodoItem;
