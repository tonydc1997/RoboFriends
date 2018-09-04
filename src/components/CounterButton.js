import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log('CounterButton');
    return (
      <button color={this.props.color} onClick={this.updateCount}></button>
    );
  }
}

export default CounterButton; 
