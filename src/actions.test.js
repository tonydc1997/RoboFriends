import * as actions from './actions';
import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_FAILED  
} from './constants.js';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

describe('setSearchField action', () => {
  it('should create an action to search for robots', () => {
    const text = "NextGen";
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('requestRobots action', () => {
  it('should handle requestRobots api', () => {
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    }
    expect(actions.requestRobots()).toEqual(expectedAction);  
  });
});
