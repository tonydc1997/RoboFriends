import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('CounterButton component', () => {
  it('Counter: renders correctly', () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
  });
  it('shouldComponentUpdate: should set the initialCountValue to state', () => {
    const shallowCounter = shallow(<CounterButton initialCountValue={1} />);
    expect(shallowCounter.instance().state.count).toBe(1);
  });
  it('updateCount: should update count by grabbing current state and incrementing by 1', () => {
    const shallowCounter = shallow(<CounterButton initialCountValue={1} />);
    const instance = shallowCounter.instance();
    expect(instance.state.count).toBe(1);
    instance.updateCount();
    expect(instance.state.count).toBe('5');
  });
});
