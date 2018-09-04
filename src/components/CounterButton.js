import React, { Component } from 'react';

class CounterButton extends Component {
shouldComponentUpdate(nextProps, nextState) {
  return false;
}

  render() {
    console.log('CounterButton');
    return <h1 className='f2'>RoboFriends</h1>
  }
}

export default CounterButton;