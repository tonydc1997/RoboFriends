import React, { Component } from 'react';
import CounterButton from "./CounterButton";

class Header extends Component {
shouldComponentUpdate(nextProps, nextState) {
  return false;
}

  render() {
    console.log('Header');
    return <h1 className='f2'>RoboFriends</h1>
  }
}

export default Header;
