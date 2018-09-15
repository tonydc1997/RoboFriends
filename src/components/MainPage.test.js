import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
import Scroll from './Scroll';

describe('MainPage component', () => {

  let wrapper, mockProps;

  beforeEach(() => {
    mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps }/>);
  });

  it('MainPage: shallow renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filterRobots: renders correctly when array is empty', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
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

  describe('Scroll Component', () => {

    describe('When isPending returns true', () => {

      let scrollComponent;

      beforeEach(() => {
        scrollComponent = shallow(<Scroll><h1>Loading</h1></Scroll>);
      });

      it('isPending: should return <h1>Loading</h1>', () => {
        expect(scrollComponent.find('h1').exists()).toBeTruthy();
        expect(scrollComponent.html()).toContain(
          '<h1>Loading</h1>'
        );
      });
    });
  


    describe('When isPending returns false', () => {

      let scrollComponent;

      beforeEach(() => {
        scrollComponent = shallow(<Scroll><div>I have an ErrorBoundary, and a CardList full of Cards!</div></Scroll>);
      });
      
      it('isPending: should return children components', () => {
        expect(scrollComponent.find('h1').exists()).toBeFalsy();
        expect(scrollComponent.find('div').exists()).toBeTruthy();
        expect(scrollComponent.html()).toContain();
      });


    });


  });


  
  

});
