import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// additional imports needed for redux store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/**
 * Reducer List Ideas
 * favorited images  
 * 
 */

//  const storeInstance = createStore(
//     combineReducers({
//         favorited,
//     }),
//     applyMiddleware(logger),
// );


ReactDOM.render(<App />, document.getElementById('root'));
