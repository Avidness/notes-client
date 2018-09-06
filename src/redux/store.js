import thunk from 'redux-thunk';
import { applyMiddleware, compose, 
  combineReducers, createStore } from 'redux';

  import ItemReducer from './reducers/ItemReducer';
  import ItemListReducer from './reducers/ItemListReducer';
  import CategoryListReducer from './reducers/CategoryListReducer';
  import CategoryReducer from './reducers/CategoryReducer';

const allReducers = combineReducers({
  itemList: ItemListReducer,
  items: ItemReducer,
  categories: CategoryListReducer,
  category: CategoryReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

export default createStore(
  allReducers, {},
  allStoreEnhancers
);