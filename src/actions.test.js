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
// const jsonPlaceholder = nock('https://jsonplaceholder.typicode.com/users')
//   .get('/users/1')
//   .reply(200, {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//   });
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      count: 87,
      results: [0,1,2,3,4,5]
    })
  }))

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
    const expectedAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: 'users'
    }
    expect.assertions(1);
    return apiCall('https://jsonplaceholder.typicode.com/users');
  });

  


});
