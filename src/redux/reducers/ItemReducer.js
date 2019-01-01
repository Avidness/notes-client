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
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case Actions.FETCH_ITEM:
      let append_list = (state.list ? state.list : []);
      append_list.push(action.payload);
      return {
        ...state,
        list: append_list,
        loading: false
      };
    case Actions.NEW_ITEM:
      let add_list = (state.list ? state.list : []);
      add_list.push(action.payload);
      toastr.success('Success');
      return {
        ...state,
        list: add_list,
        loading: false
      };
    case Actions.UPDATE_ITEM:
      let update_list = (state.list ? state.list : []);
      update_list = update_list.map(x => 
        (x.id === action.payload.id ? action.payload : x));
      toastr.success('Success');
      return {
        ...state,
        list: update_list,
        loading: false
      };
    case Actions.DELETE_ITEM:
      let items = (state.list ? state.list : []);
      items = items.filter(x => x.id !== action.payload);
      return {
        ...state,
        list: items,
        loading: false
      };
    case Actions.UPDATE_ITEM_LIST:
      return {
        ...state,
        list: action.payload
      };
    case Actions.UPDATE_ITEM_ORDER:
      // No notification needed unless it fails
      return {
        ...state
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
