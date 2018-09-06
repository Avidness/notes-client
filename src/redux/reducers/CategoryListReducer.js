import * as Actions from '../actions/CategoryListActions';

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
    case Actions.UPDATE_CUR_CATEGORY:
      return {
        ...state,
        curCategoryId: action.payload
      };
    default:
      return state;
  }
}
