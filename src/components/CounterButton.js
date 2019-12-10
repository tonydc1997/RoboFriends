import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
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
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <button
        className="br2 white b--transparent pb1 pt1 grow"
        style={{
          background:
            'linear-gradient(to bottom, #5679f9, #5679f9, #5679f9, #5679f9, #5679f9)',
        }}
        onClick={this.updateCount}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
