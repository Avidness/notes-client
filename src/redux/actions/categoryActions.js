export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_FAIL_CATEGORY = 'FETCH_FAIL_CATEGORY';
export const NEW_CATEGORY = 'NEW_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_CUR_CATEGORY = 'UPDATE_CUR_CATEGORY';

export const fetchCategories = () => dispatch => {
  fetch('http://localhost:5000/api/category', {
    method: 'GET',
  })
  .then(res => res.json())
  .then(cateogry_list =>
    dispatch({
      type: FETCH_CATEGORIES,
      payload: cateogry_list
    })
  ).catch(e => {
    dispatch({
      type: FETCH_FAIL_CATEGORY,
      payload: e
    })
  });
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

export const updateItem = category_to_update => dispatch => {
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

export const updateCurCategory = newCategoryId => dispatch => {
  dispatch({
    type: UPDATE_CUR_CATEGORY,
    payload: newCategoryId
  })
};
