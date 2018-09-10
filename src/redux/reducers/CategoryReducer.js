import * as Actions from '../actions/CategoryActions';

const initialState = {
  list: [],
  loading: true,
  errorMessage: null,
  category: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_CATEGORY:
      return {
        ...state,
        category: action.payload,
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
    case Actions.SET_LOADING_CATEGORY:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
