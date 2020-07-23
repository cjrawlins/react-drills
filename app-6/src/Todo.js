import React, { Component } from 'react';
import './App.css';


class Todo extends Component {
  
  constructor() {
    super();

    this.state = {
      
    }
  }

  render () {
    let displayList = this.props.tasks.map( (e, i) => {
    return <h2 key={i}>{e}</h2>;
    } );

    return (
    <div>{displayList}</div>
    )
}
  
  
}

export default Todo;