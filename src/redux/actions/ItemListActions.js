export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_FAIL = 'FETCH_ITEM_FAIL';
export const DELETE_ITEM = 'DELETE_ITEM';

export const fetchItems = (category_id) => dispatch => {
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
      type: FETCH_ITEMS_FAIL,
      payload: e
    })
  });
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