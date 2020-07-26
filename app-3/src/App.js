import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filter: '',
      list: ['eggs', 'soda', 'chicken', 'ground beef', 'veggies']
    }
  }


handleChange(filter) {
  this.setState( {filter: filter} );
}

render() {
  let listItems = this.state.list
      .filter((element, index) => {
        return element.includes(this.state.filter);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

  return (
      <div className="App">
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        {listItems}
      </div>
    );
  }

}
export default App;
