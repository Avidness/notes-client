import { FETCH_ITEMS, NEW_ITEM } from '../actions/itemActions';

const initialState = {
  list: [],
  new: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        list: action.payload
      };
    case NEW_ITEM:
      return {
        ...state,
        new: action.payload
      };
    default:
      return state;
  }
}
