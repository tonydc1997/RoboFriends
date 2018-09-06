import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';

describe('App container', () => {
  it('App: renders correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
