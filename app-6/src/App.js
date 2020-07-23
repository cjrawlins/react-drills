import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'

class App extends Component {
  
  constructor() {
    super();

    this.buttonAddToList = this.buttonAddToList.bind(this);

    this.state = {
      list: [],
      textInputBuffer: ""
    }
  }

  textInputAddBuffer(value) {
    this.setState( { textInputBuffer: value } )
  }


  buttonAddToList() {
    this.setState({
      list: [...this.state.list, this.state.textInputBuffer],
      textInputAddBuffer: ""
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    
    return (
      <div className="App">
        <h1>My to-do list:</h1> 
        <input qdw
          value={this.state.textInputBuffer}
          placeholder='Add New Task'
          onChange={ e => this.textInputAddBuffer(e.target.value)} 
        />
        <button onClick={this.buttonAddToList}>Add</button>
        <Todo
            tasks={this.state.list}
        />
      </div>
    );
  }
  
  
}

export default App;