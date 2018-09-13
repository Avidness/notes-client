import * as Actions from '../actions/ItemActions';

const initialState = {
  list: {},
  item: null,
  loading: true,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_ITEMS:
      var dict = action.payload
        .reduce(function(result, item) {
          result[item.id] = item;
          return result;
        }, {});
      return {
        ...state,
        list: dict,
        loading: false
      };
    case Actions.ITEM_FAIL:
      return {
        ...state,
        errorMessage: 'Problem talking to the Server',
        loading: false
      };
    case Actions.FETCH_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    case Actions.NEW_ITEM:
      return {
        ...state,
        openCreation: false,
        list: [...state.list, action.payload]
      };
    case Actions.UPDATE_ITEM:
      return {
        ...state,
        list: state.list[action.payload.id] = action.payload
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
    default:
      return state;
  }
}
