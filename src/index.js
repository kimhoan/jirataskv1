import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AuthReducer } from './redux'
import App from './App';

import * as serviceWorker from './serviceWorker';
const rootReducer = combineReducers({
  auth: AuthReducer
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
