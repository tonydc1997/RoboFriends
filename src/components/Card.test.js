import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

it('Expect to render card component', () => {
  expect(shallow(<Card />).length).toEqual(1);
})

