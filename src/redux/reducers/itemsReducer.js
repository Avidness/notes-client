import { FETCH_ITEMS, NEW_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions/itemActions';

const initialState = {
  list: []
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
        list: [...state.list, action.payload]
      };
    case UPDATE_ITEM:
      var updated_list = state.list.map((item) => 
        item.Id === action.payload.Id
        ? action.payload
        : item);
      return {
        ...state,
        list: updated_list
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload)
      };
    default:
      return state;
  }
}
