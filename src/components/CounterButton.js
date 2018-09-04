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

  updateCount = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    console.log('CounterButton');
    return (
      <button className='br2 bg-light-green b--navy pb1 pt1 grow' onClick={this.updateCount} >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton; 
