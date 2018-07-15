import { FETCH_ITEMS, NEW_ITEM, UPDATE_ITEM, DELETE_ITEM, START_EDITING, CANCEL_EDITING } from '../actions/itemActions';

const initialState = {
  list: [],
  item: {}
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
        item.id === action.payload.id
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
    case START_EDITING:
      var new_list = state.list.map((item) => 
        item.id === action.payload
        ?  {...item, editing: true}
        : item);
      return {
        ...state,
        list: new_list
      };
    case CANCEL_EDITING:
      var new_list2 = state.list.map((item) => 
        item.id === action.payload
        ?  {...item, editing: false}
        : item);
      return {
        ...state,
        list: new_list2
      };
    default:
      return state;
  }
}
