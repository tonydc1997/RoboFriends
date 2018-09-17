import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_FAILED  
} from './constants.js';

import * as reducers from './reducers';

describe('searchRobots Reducer', () => {
const initialStateSearch = {
  searchField: ''
}

  it('returns the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''});
  });

  it('handles the CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'Black Mirror'
    })).toEqual({
      searchField: 'Black Mirror'
    });
  });
});

describe('requestRobots Reducer', () => {
  
});
