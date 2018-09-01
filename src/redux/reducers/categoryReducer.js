import * as Actions from '../actions/CategoryActions';

const initialState = {
  list: [],
  loading: true,
  errorMessage: null,
  curCategoryId: 1
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
    case Actions.UPDATE_CUR_CATEGORY:
      return {
        ...state,
        curCategoryId: action.payload
      };
    default:
      return state;
  }
}
