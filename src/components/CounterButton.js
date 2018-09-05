import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state.count) {
      return true;
    } else {
      return false;
    }
  }

  updateCount = () => {
    this.setState(state => {
      return {count: state.count + 1}
    })
  }

  render() {
    return (
      <button className='br2 bg-light-green b--navy pb1 pt1 grow' onClick={this.updateCount} >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton; 
