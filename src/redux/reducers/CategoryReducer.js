import * as Actions from '../actions/CategoryActions';

const initialState = {
  list: null,
  loading: true,
  errorMessage: null,
  curCategoryId: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_CATEGORIES:
      var new_list = action.payload
        .reduce(function(result, item) {
          result[item.id] = item;
          return result;
        }, {});
      return {
        ...state,
        list: new_list,
        curCategoryId: Object.keys(new_list)[0],
        loading: false
      };
    case Actions.FETCH_CATEGORY:
      var append_list = state.list;
      append_list[action.payload.id] = action.payload;
      return {
        ...state,
        list: append_list,
        loading: false
      };
    case Actions.UPDATE_CUR_CATEGORY:
      return {
        ...state,
        curCategoryId: action.payload,
        loading: false
      };
    case Actions.NEW_CATEGORY:
      var add_list = state.list;
      add_list[action.payload.id] = action.payload;
      return {
        ...state,
        list: add_list,
        loading: false
      };
    case Actions.UPDATE_CATEGORY:
      var update_list = state.list;
      update_list[action.payload.id] = action.payload;
      return {
        ...state,
        list: update_list,
        loading: false
      };
    case Actions.DELETE_CATEGORY:
      var items = state.list;
      delete items[action.payload];
      return {
        ...state,
        list: items,
        loading: false
      };
    case Actions.SET_LOADING_CATEGORY:
      return {
        ...state,
        loading: true
      };
    case Actions.CATEGORY_FAIL:
      return {
        ...state,
        errorMessage: 'Problem talking to the Server',
        loading: false
      };
    default:
      return state;
  }
}
