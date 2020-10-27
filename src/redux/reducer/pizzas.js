const setPizzas = 'SET_PIZZAS';
const SET_LOADED = 'SET_LOADED';
//?====================================================
const initialState = {
  items: [],
  isLoaded: false,
};
//?====================================================
function pizzas(state = initialState, action) {
  switch (action.type) {
    case setPizzas:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
}

export default pizzas;
