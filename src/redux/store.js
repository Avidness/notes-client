import thunk from 'redux-thunk';
import { applyMiddleware, compose, 
  combineReducers, createStore } from 'redux';

import itemsReducer from './reducers/itemsReducer';

const allReducers = combineReducers({
  items: itemsReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

export default createStore(
  allReducers, {},
  allStoreEnhancers
);