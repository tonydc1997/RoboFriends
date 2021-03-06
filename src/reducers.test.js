import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants.js';

import * as reducers from './reducers';

describe('searchRobots Reducer', () => {
  const initialStateSearch = {
    searchField: '',
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle the CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'Black Mirror',
      })
    ).toEqual({
      searchField: 'Black Mirror',
    });
  });
});

describe('requestRobots Reducer', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      isPending: true,
      robots: [],
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '01',
            name: 'Tester',
            email: 'tester@gmail.com',
          },
        ],
      })
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: '01',
          name: 'Tester',
          email: 'tester@gmail.com',
        },
      ],
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Oops! Something went wrong!',
      })
    ).toEqual({
      isPending: false,
      robots: [],
      error: 'Oops! Something went wrong!',
    });
  });
});
