import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {

  it('Header: should return a div, h1, and button', () => {
    const headerComponent = shallow(<Header />).html();
    expect(headerComponent).toContain('div');
    expect(headerComponent).toContain('h1');
    expect(headerComponent).toContain('button');
  });


});
