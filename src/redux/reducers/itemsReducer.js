import * as Actions from '../actions/itemActions';

const initialState = {
  list: [],
  openCreation: false,
  loading: true,
  errorMessage: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_ITEMS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case Actions.FETCH_FAIL_ITEM:
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
    case Actions.START_EDITING:
      return {
        ...state,
        list: state.list.map((item) => 
                item.id === action.payload
                ?  {...item, editing: true}
                : item)
      };
    case Actions.CANCEL_EDITING:
      return {
        ...state,
        list: state.list.map((item) => 
                item.id === action.payload
                ?  {...item, editing: false}
                : item)
      };
    case Actions.START_CREATING:
      return {
        ...state,
        openCreation: true
      };
    case Actions.CANCEL_CREATING:
      return {
        ...state,
        openCreation: false
      };
    default:
      return state;
  }
}
