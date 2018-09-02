import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('Expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Ham Sarris',
      email: 'hamSarris@gmail.com',
      key: '2341234'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})

