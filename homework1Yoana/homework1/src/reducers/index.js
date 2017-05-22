// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export const initialState = {
  posts: [  ]
};

export function reducer(state = initialState) {
  return state;
}

export const combinedReducers = combineReducers({
  routing: routerReducer,
  reducer
});
