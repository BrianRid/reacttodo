import React, { Component } from 'react';

class TodoInput extends Component {

  render(){
    const {userInput, handleChange, handleSubmit, editItem } = this.props

    return(
      <div className='card card-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend mx-1">
              <div className="input-group-text bg-primary text-white">
              <i className="fas fa-list"></i>
              </div>
            </div>
            <input type="text"
                   className='form-control'
                   placeholder='Ajouter une tache à réaliser'
                   value={userInput}
                   onChange={handleChange}
                   />
          </div>
          <button
            className={editItem ? "btn btn-success btn-block mt-3" : "btn btn-primary btn-block mt-3"}
            onClick={handleSubmit}>
              {editItem ? "Éditer votre tache" : "Ajouter une tache"}
          </button>
        </form>
      </div>
    )
  }
}

export default TodoInput;
