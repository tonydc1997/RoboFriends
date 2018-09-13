import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {

  let headerComponent;

  beforeEach(() => {
    headerComponent = shallow(<Header />);
  });

  it('Header: should return a div, h1, and button', () => {
    expect(headerComponent.html()).toContain('div');
    expect(headerComponent.html()).toContain('h1');
    expect(headerComponent.html()).toContain('button');
  });

  it('shouldComponentUpdate: should return false', () => {
    expect(headerComponent.instance().shouldComponentUpdate(null, null)).toBe(false);
    
  });


});
