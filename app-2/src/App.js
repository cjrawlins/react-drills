import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['Howdy!', 'Hola', 'Hi', 'Hello', 'Saludos']
    }
  }
  
  
  render () {
      let displayList = this.state.list.map( (e, i) => {
      return <h2 key={i}>{e}</h2>;
      } );

      return (
      <div className="App">{displayList}</div>
      )
  }
}

export default App;



/////////////////Original File//////////////////
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