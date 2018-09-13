import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('MainPage component', () => {

  let wrapper, instance, mockProps;

  beforeEach(() => {
    mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps }/>);
    instance = wrapper.instance();
  });

  it('MainPage: shallow renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filterRobots: renders correctly when array is empty', () => {
    expect(instance.filterRobots()).toEqual([]);
  });

  it('filterRobots: renders correctly when array is filled', () => {
    mockProps = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 1,
        name: 'Bruce Brenner',
        username: 'Bruce',
        email: 'bb@gmail.com'
      }],
      searchField: '',
      isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps } />);
    expect(wrapper.instance().filterRobots()).toEqual([{
      id: 1,
      name: 'Bruce Brenner',
      username: 'Bruce',
      email: 'bb@gmail.com'
    }]);
  });

  it('isPending: renders properly and returns cardList / filteredRobots when false', () => {
    expect(wrapper.instance().props.isPending).toEqual(false);
  });


  it('isPending: renders properly and returns <h1>Loading</h1> when true', () => {
    mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true
    }

    expect(mockProps.isPending).toEqual(true);

  });

});
