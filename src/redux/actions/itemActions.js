export const FETCH_ITEMS = 'FETCH_ITEMS';
export const NEW_ITEM = 'NEW_ITEM';

export const fetchItems = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(item_list =>
    dispatch({
      type: FETCH_ITEMS,
      payload: item_list
    })
  );
};

export const createItem = itemData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
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
