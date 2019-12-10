import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('CounterButton component', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<CounterButton initialCountValue={1} />);
    instance = wrapper.instance();
  });

  it('Counter: returns a button', () => {
    expect(wrapper.html()).toContain('button');
  });

  it('Counter: snapshots CSS-in-JS for current UX', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('shouldComponentUpdate: should set the initialCountValue to state', () => {
    expect(instance.state.count).toBe(1);
  });

  it('updateCount: should update count by grabbing current state and incrementing by 1', () => {
    expect(instance.state.count).toBe(1);
    instance.updateCount();
    expect(instance.state.count).toBe(2);
  });

  it('shouldComponentUpdate: should not update count when nextState equals current state', () => {
    expect(instance.state.count).toBe(1);
    expect(instance.shouldComponentUpdate(null, 1)).toBe(false);
  });
});
