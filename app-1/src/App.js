import React, { Component } from 'react';
import './App.css';


// Import from created .js files
import DisplayTextFunc from './Components/DisplayTextFunc.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    }
  }

  showTextInput(value) {
    this.setState( { displayText: value } );
  }

  render() {
    return (
      <div className="App">
        <h1>Original Assignment</h1>
        <input onChange={ e => this.showTextInput(e.target.value)} type='text' />
        <p>{this.state.displayText}</p>
      {/* Pass text on to DisplayTextFunc */}
        <h1>Passed to DisplayTextFunc Component</h1>
        <DisplayTextFunc 
          textMessage={this.state.displayText}
        />
      </div>
    );
  }

}

export default App;


//////////Original File//////////

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;