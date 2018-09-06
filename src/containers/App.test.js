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

  it('App: maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      searchField: '',
      robots: [],
      isPending: true,

      onSearchChange: expect.any(Function),
      onRequestRobots: expect.any(Function)
    }));

  });

  it('App: maps onSearchChange to dispatch setSearchField', () => {
    wrapper.props().onSearchChange();
    expect(store.dispatch).toHaveBeenCalledWith();
  });


});
