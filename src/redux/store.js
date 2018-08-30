import thunk from 'redux-thunk';
import { applyMiddleware, compose, 
  combineReducers, createStore } from 'redux';

  import ItemReducer from './reducers/ItemReducer';
  import CategoryReducer from './reducers/CategoryReducer';

const allReducers = combineReducers({
  items: ItemReducer,
  categories: CategoryReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

export default createStore(
  allReducers, {},
  allStoreEnhancers
);