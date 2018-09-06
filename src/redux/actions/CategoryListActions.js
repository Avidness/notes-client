export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_FAIL_CATEGORY = 'FETCH_FAIL_CATEGORY';
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

export const updateCurCategory = newCategoryId => dispatch => {
  dispatch({
    type: UPDATE_CUR_CATEGORY,
    payload: newCategoryId
  })
};
