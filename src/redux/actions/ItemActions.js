export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_ITEM_FAIL = 'FETCH_ITEM_FAIL';
export const NEW_ITEM = 'NEW_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const SET_LOADING_ITEM = 'SET_LOADING_ITEM';

export const fetchItem = (item_id) => dispatch => {
  dispatch({ type: SET_LOADING_ITEM });

  fetch('http://localhost:5000/api/item/' + item_id, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(item =>
    dispatch({
      type: FETCH_ITEM,
      payload: item.result
    })
  );
};

export const createItem = item_to_create => dispatch => {
  fetch('http://localhost:5000/api/item', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(item_to_create)
  })
  .then(res => res.json())
  .then(new_item =>
    dispatch({
      type: NEW_ITEM,
      payload: new_item
    })
  );
};

export const updateItem = item_to_update => dispatch => {
  fetch('http://localhost:5000/api/item/' + item_to_update.id, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(item_to_update)
  })
  .then(res => res.json())
  .then(updated_item =>
    dispatch({
      type: UPDATE_ITEM,
      payload: updated_item
    })
  );
};