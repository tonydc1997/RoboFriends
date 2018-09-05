import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('CounterButton component', () => {
  it('Counter: renders correctly', () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
  })
})