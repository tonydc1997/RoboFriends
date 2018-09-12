import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('MainPage component', () => {

  let wrapper;
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true
    }
    wrapper = shallow(<MainPage { ...mockProps }/>);
  });

  it('MainPage: shallow renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filterRobots: renders correctly when array is empty', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });

  it('filterRobots: renders correctly when array is filled'() => {
    
  })

});
