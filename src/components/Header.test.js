import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {

  let headerComponent;

  beforeEach(() => {
    headerComponent = shallow(<Header />).html();
  });

  it('Header: should return a div, h1, and button', () => {
    expect(headerComponent).toContain('div');
    expect(headerComponent).toContain('h1');
    expect(headerComponent).toContain('button');
  });

  it('shouldComponentUpdate: should return false', () => {

    expect(headerComponent.instance().shouldComponentUpdate(null, null)).toBe('falsey');
    
  });


});
