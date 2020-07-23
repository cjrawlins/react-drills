import React, { Component } from 'react';
import './App.css';
import Image from './Image.js'

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      image: 'https://httpstatusdogs.com/img/409.jpg'
    }
  }

  render() {
    return (
      <div className="App">
        <Image 
          pic={this.state.image}
        />
      </div>
    );
  }
  
  
}

export default App;