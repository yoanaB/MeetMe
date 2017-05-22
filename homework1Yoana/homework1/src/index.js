import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import { combinedReducers } from './reducers';
import { Post } from './components/post';

const store = configureStore(combinedReducers);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={Post} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
