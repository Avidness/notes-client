import * as Actions from '../actions/ItemActions';
import toastr from 'toastr';

const initialState = {
  list: null,
  loading: true,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_ITEMS:
      let new_list = action.payload
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
      let append_list = (state.list 
        ? Object.assign({}, state.list) 
        : {});
      append_list[action.payload.id] = action.payload;
      return {
        ...state,
        list: append_list,
        loading: false
      };
    case Actions.NEW_ITEM:
      let add_list = (state.list 
        ? Object.assign({}, state.list) 
        : {});
      add_list[action.payload.id] = action.payload;
      toastr.success('Success');
      return {
        ...state,
        list: add_list,
        loading: false
      };
    case Actions.UPDATE_ITEM:
      let update_list = Object.assign({}, state.list);
      update_list[action.payload.id] = action.payload;
      toastr.success('Success');
      return {
        ...state,
        list: update_list,
        loading: false
      };
    case Actions.DELETE_ITEM:
      let items = Object.assign({}, state.list);
      delete items[action.payload];
      toastr.success('Success');
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
    toastr.error('Error');
      return {
        ...state,
        errorMessage: 'Item: ' + action.payload.toString(),
        loading: false
      };
    default:
      return state;
  }
}
