import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll Component', () => {
  it('Scroll: renders correctly', () => {
    const scrollComponent = shallow(<Scroll />);
    expect(scrollComponent.html()).toContain('div');
  });

  // it('Scroll: returns CardList when isPending is false', () => {

  // });

  // it('isPending: renders properly and returns cardList / filteredRobots when false', () => {
  //   expect(mockProps.isPending).toEqual(false);
  //   fdsdfb
  //   // Work on return assertion and decide if
  // });

  // it('isPending: renders properly and returns <h1>Loading</h1> when true', () => {
  //   mockProps = {
  //     onRequestRobots: jest.fn(),
  //     robots: [],
  //     searchField: '',
  //     isPending: true
  //   }

  //   expect(mockProps.isPending).toEqual(true);
  //   expect(afgsf)

  // });
});
