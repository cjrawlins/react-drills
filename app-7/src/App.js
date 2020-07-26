import React, { Component } from 'react';
import './App.css';
import NewTask from './Components/NewTask.js';
import List from './Components/List.js'
import Todo from './Components/Todo'

class App extends Component {
  
  constructor() {
    super();

    this.addTaskToList = this.addTaskToList.bind(this);

    this.state = {
      list: []
    }
  
    this.addTaskToList = this.addTaskToList.bind(this);
  }

  addTaskToList(task) {
    this.setState( { list: [...this.state.list, task] } )
  }

  render() {
    
    return (
      <div className="App">
        
        <h4>To Do List:</h4>
        <NewTask 
          addTask = {this.addTaskToList}
        />
        <List 
          tasks = {this.state.list}
        />
      </div>
    );
  }
  
  
}

export default App;