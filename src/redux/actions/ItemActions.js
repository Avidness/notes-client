export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ITEM_FAIL = 'ITEM_FAIL';
export const FETCH_ITEM = 'FETCH_ITEM';
export const NEW_ITEM = 'NEW_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM_LIST = 'UPDATE_ITEM_LIST';
export const UPDATE_ITEM_ORDER = 'UPDATE_ITEM_ORDER';
export const SET_LOADING_ITEM = 'SET_LOADING_ITEM';

export const fetchItems = (category_id) => dispatch => {
  dispatch({ type: SET_LOADING_ITEM });
  
  fetch('http://localhost:5000/api/item/category/' + category_id, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(item_list =>
    dispatch({
      type: FETCH_ITEMS,
      payload: item_list
    })
  ).catch(e => {
    dispatch({
      type: ITEM_FAIL,
      payload: e
    })
  });
};

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
  ).catch((e) => {
    dispatch({
      type: ITEM_FAIL,
      payload: e
    })
  });
};

export const createItem = item_to_create => dispatch => {
  dispatch({ type: SET_LOADING_ITEM });

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
  ).catch((e) => {
    dispatch({
      type: ITEM_FAIL,
      payload: e
    })
  });
};

export const updateItem = item_to_update => dispatch => {
  dispatch({ type: SET_LOADING_ITEM });

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
  ).catch((e) => {
    dispatch({
      type: ITEM_FAIL,
      payload: e
    })
  });
};

export const deleteItem = item_to_delete => dispatch => {
  dispatch({ type: SET_LOADING_ITEM });
  
  fetch('http://localhost:5000/api/item/' + item_to_delete.id, {
    method: 'DELETE'
  })
  .then((response) => {
    dispatch({
      type: DELETE_ITEM,
      payload: item_to_delete.id
    })
  }).catch((e) => {
    dispatch({
      type: ITEM_FAIL,
      payload: e
    })
  });
};

export const updateItemList = newItems => dispatch => {
  dispatch({
    type: UPDATE_ITEM_LIST,
    payload: newItems
  })
};

export const updateOrdering = (item, oldIndex, newIndex) => dispatch => {
  // TODO: update ordering via API

  // Item getting updated
  //console.log(item);

  // old index, new index
  //console.log(oldIndex + " " + newIndex);
  dispatch({
    type: UPDATE_ITEM_ORDER,
    payload: item
  })
};