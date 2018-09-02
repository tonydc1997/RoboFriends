import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('Expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      
    }
  ]
  expect(shallow(<CardList />)).toMatchSnapshot();
})

