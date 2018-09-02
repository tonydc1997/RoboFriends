import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('Expect to render CardList component', () => {
  expect(shallow(<CardList />)).toMatchSnapshot();
})

