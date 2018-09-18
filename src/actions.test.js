import * as actions from './actions';
import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_FAILED  
} from './constants.js';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { apiCall } from './api/api';
import nock from 'nock';

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
const mockStore = configureMockStore([thunkMiddleware]);
const jsonPlaceholder = nock('https://jsonplaceholder.typicode.com/users')
  .get('/users/1')
  .reply(200, {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  });

  it('should handle initial dispatch and receive REQUEST_ROBOTS_PENDING', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction);  
  });

  it('should make apiCall', () => {
    expect(apiCall(jsonPlaceholder[0])).toBe();
  });

  


});
