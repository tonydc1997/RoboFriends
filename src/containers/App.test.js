import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App container', () => {
  it('App: renders correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
