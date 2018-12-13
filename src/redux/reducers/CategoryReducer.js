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
      let new_list = action.payload
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
      let append_list = Object.assign({}, state.list);
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
      let add_list = Object.assign({}, state.list);
      add_list[action.payload.id] = action.payload;
      return {
        ...state,
        list: add_list,
        loading: false
      };
    case Actions.UPDATE_CATEGORY:
      let update_list = Object.assign({}, state.list);
      update_list[action.payload.id] = action.payload;
      return {
        ...state,
        list: update_list,
        loading: false
      };
    case Actions.DELETE_CATEGORY:
      let items = Object.assign({}, state.list);
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
        errorMessage: 'Category: ' + action.payload.toString(),
        loading: false
      };
    default:
      return state;
  }
}
