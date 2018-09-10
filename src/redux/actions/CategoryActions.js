export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const NEW_CATEGORY = 'NEW_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const SET_LOADING_CATEGORY = 'SET_LOADING_CATEGORY';

export const fetchCategory = (cat_id) => dispatch => {
  dispatch({ type: SET_LOADING_CATEGORY });

  fetch('http://localhost:5000/api/category/' + cat_id, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(cat =>
    dispatch({
      type: FETCH_CATEGORY,
      payload: cat.result
    })
  );
};

export const createCategory = category_to_create => dispatch => {
  fetch('http://localhost:5000/api/category', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(category_to_create)
  })
  .then(res => res.json())
  .then(new_category =>
    dispatch({
      type: NEW_CATEGORY,
      payload: new_category
    })
  );
};

export const updateCategory = category_to_update => dispatch => {
  fetch('http://localhost:5000/api/category/' + category_to_update.id, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(category_to_update)
  })
  .then(res => res.json())
  .then(updated_category =>
    dispatch({
      type: UPDATE_CATEGORY,
      payload: updated_category
    })
  );
};

export const deleteCategory = category_to_delete => dispatch => {
  fetch('http://localhost:5000/api/category/' + category_to_delete.id, {
    method: 'DELETE'
  })
  .then((response) => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: category_to_delete.id
    })
  }).catch((err) => {
      alert("There was a problem deleting the category.")
  });
};
