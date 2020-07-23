import React, { Component } from 'react';

class Image extends Component {
  
  constructor() {
    super();

    this.state = {
    
    }
  }

  render() {
    return (
      <div>
        <img src={this.props.pic}/>
      </div>
    );
  }
  
  
}

export default Image;