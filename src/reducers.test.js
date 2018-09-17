import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_FAILED  
} from './constants.js';

import * as reducers from './reducers';

describe('searchRobots', () => {
const initialStateSearch = {
  searchField: ''
}

  it('returns the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''});
  });

  it('handles the CHANCE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''});
  });
});
