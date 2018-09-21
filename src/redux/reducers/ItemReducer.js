import * as Actions from '../actions/ItemActions';

const initialState = {
  list: null,
  loading: true,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_ITEMS:
      var new_list = action.payload
        .reduce(function(result, item) {
          result[item.id] = item;
          return result;
        }, {});
      return {
        ...state,
        list: new_list,
        loading: false
      };
    case Actions.FETCH_ITEM:
      var append_list = {};
      append_list[action.payload.id] = action.payload;
      return {
        ...state,
        list: append_list,
        loading: false
      };
    case Actions.NEW_ITEM:
      var add_list = {};
      add_list[action.payload.id] = action.payload;
      return {
        ...state,
        list: add_list
      };
    case Actions.UPDATE_ITEM:
      var update_list = {};
      update_list[action.payload.id] = action.payload;
      return {
        ...state,
        list: update_list
      };
    case Actions.DELETE_ITEM:
      var items = state.list;
      delete items[action.payload];
      return {
        ...state,
        list: items,
        loading: false
      };
    case Actions.SET_LOADING_ITEM:
      return {
        ...state,
        loading: true
      };
    case Actions.ITEM_FAIL:
      return {
        ...state,
        errorMessage: 'Problem talking to the Server',
        loading: false
      };
    default:
      return state;
  }
}
