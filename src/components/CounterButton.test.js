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
  })
});
