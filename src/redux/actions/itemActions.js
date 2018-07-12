export const FETCH_ITEMS = 'FETCH_ITEMS';
export const NEW_ITEM = 'NEW_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const fetchItems = () => dispatch => {
  fetch('http://localhost:5000/api/item', {
    method: 'GET',
  })
  .then(res => res.json())
  .then(item_list =>
    dispatch({
      type: FETCH_ITEMS,
      payload: item_list
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

export const deleteItem = item_to_delete => dispatch => {
  fetch('http://localhost:5000/api/item/' + item_to_delete.id, {
    method: 'DELETE'
  })
  .then((response) => {
    dispatch({
      type: DELETE_ITEM,
      payload: item_to_delete.id
    })
  }).catch((err) => {
      alert("There was a problem deleting the item.")
  });
};
