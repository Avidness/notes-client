export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_FAIL = 'FETCH_ITEM_FAIL';

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
