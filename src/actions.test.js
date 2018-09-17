import * as actions from './actions';
import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_FAILED  
} from './constants.js';

describe('setSearchField action', () => {
  it('should create an action to search for robots', () => {
    const text = "NextGen";
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    }

    
  });
});

describe('requestRobots action', () => {
  
});
