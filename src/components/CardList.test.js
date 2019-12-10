import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

describe('CardList component', () => {
  it('CardList: renders CardList component', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'Ham Sarris',
        email: 'hamSarris@gmail.com',
        key: '2341234',
      },
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
});
