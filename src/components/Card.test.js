import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card component', () => {
  it('Card: renders card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
