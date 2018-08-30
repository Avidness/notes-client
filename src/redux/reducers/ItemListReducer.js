import * as Actions from '../actions/ItemListActions';

const initialState = {
  list: [],
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
    case Actions.FETCH_ITEMS_FAIL:
      return {
        ...state,
        errorMessage: 'Problem talking to the Server',
        loading: false
      };
    default:
      return state;
  }
}
