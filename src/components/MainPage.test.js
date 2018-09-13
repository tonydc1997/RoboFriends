import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('MainPage component', () => {

  let wrapper, instance;
  beforeEach(() => {
    const mockProps = {
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
    const mockProps1 = {
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
    const wrapper2 = shallow(<MainPage { ...mockProps1 } />);
    expect(wrapper2.instance().filterRobots()).toEqual([{
      id: 1,
      name: 'Bruce Brenner',
      username: 'Bruce',
      email: 'bb@gmail.com'
    }]);
  });

  it('isPending: renders cardList / filteredRobots when true', () => {

  });

  it('isPending: renders <h1>Loading</h1> when true', () => {

  });

});
