import thunk from 'redux-thunk';
import { applyMiddleware, compose, 
  combineReducers, createStore } from 'redux';

  import itemsReducer from './reducers/itemsReducer';
  import categoryReducer from './reducers/categoryReducer';

const allReducers = combineReducers({
  items: itemsReducer,
  categories: categoryReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

export default createStore(
  allReducers, {},
  allStoreEnhancers
);