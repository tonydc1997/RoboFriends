import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('Card: render card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
})

