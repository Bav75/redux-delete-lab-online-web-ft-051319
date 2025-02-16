import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }
  
  render() {
    return(
      <div>
         <li>{this.props.name}</li>
         <button onClick={this.handleOnClick}></button>
      </div>
    );
  }
};

export default Band;
