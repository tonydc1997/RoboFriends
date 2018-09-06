import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore();

describe('App container', () => {

  let wrapper, store; 

  beforeEach(() => {
    store = mockStore(1);
    store.dispatch = jest.fn();
    wrapper = shallow(<App store={store}/>);
  });

  it('App: renders correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

});
