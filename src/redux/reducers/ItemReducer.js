import * as Actions from '../actions/ItemActions';

const initialState = {
  list: [],
  item: null,
  openCreation: false,
  loading: true,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    case Actions.FETCH_ITEM_FAIL:
      return {
        ...state,
        errorMessage: 'Problem talking to the Server',
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
        list: state.list.map((item) => 
                item.id === action.payload.id
                ? action.payload
                : item)
      };
    case Actions.DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload)
      };
    default:
      return state;
  }
}
