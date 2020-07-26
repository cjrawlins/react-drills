import React, { Component } from 'react';
import '../App.css';
import Todo from './Todo'


class List extends Component {
  

  render () {
    let displayList = this.props.tasks.map( (e, i) => {
    return <Todo key={i} task={e} />;
    } );

    return (
    <div>{displayList}</div>
    )
}
  
  
}

export default List;