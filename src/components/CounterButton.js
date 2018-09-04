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
    return <h1 className='f2'>RoboFriends</h1>
  }
}

export default CounterButton;