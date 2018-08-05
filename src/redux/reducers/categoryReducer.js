import * as Actions from '../actions/categoryActions';

const initialState = {
  list: [],
  loading: true,
  errorMessage: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_CATEGORIES:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case Actions.FETCH_FAIL_CATEGORY:
      return {
        ...state,
        errorMessage: 'Problem talking to the Server',
        loading: false
      };
    case Actions.NEW_CATEGORY:
      return {
        ...state,
        openCreation: false,
        list: [...state.list, action.payload]
      };
    case Actions.UPDATE_CATEGORY:
      return {
        ...state,
        list: state.list.map((item) => 
                item.id === action.payload.id
                ? action.payload
                : item)
      };
    case Actions.DELETE_CATEGORY:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload)
      };
    default:
      return state;
  }
}
