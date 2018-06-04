export const FETCH_ITEMS = 'FETCH_ITEMS';
export const NEW_ITEM = 'NEW_ITEM';

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

export const createItem = itemData => dispatch => {
  fetch('http://localhost:5000/api/item', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(itemData)
  })
  .then(res => res.json())
  .then(new_item =>
    dispatch({
      type: NEW_ITEM,
      payload: new_item
    })
  );
};
