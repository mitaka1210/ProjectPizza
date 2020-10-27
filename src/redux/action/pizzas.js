import * as axios from 'axios';
//?====================================================
const setPizzas = 'SET_PIZZAS';
const SET_LOADED = 'SET_LOADED';

//?====================================================
export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload: payload,
});
//?====================================================
export const setPizza = (items) => ({
  type: setPizzas,
  payload: items,
});
//?====================================================
export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizza(data));
    });
};
