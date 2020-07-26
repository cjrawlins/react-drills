import React, { Component } from 'react';
import '../App.css';


class NewTask extends Component {
  
  constructor() {
    super();

    this.state = {
        textInputBuffer: ""
    }

    this.buttonAddToList = this.buttonAddToList.bind(this);
  }

  textInputAddBuffer(value) {
    this.setState( { textInputBuffer: value } )
  }


  buttonAddToList() {
    this.props.addTask(this.state.textInputBuffer);
  }


  render () {

    return (
    <div>
        <input
          value={this.state.textInputBuffer}
          placeholder='Add New Task'
          onChange={ e => this.textInputAddBuffer(e.target.value)} 
        />
        <button onClick={this.buttonAddToList}>Add</button>

    </div>
    )
}
  
  
}

export default NewTask;