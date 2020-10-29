import { combineReducers } from 'redux';
import filters from './filters';
import pizzas from './pizzas';
import card from './card';
//?====================================================
const rootReducer = combineReducers({
  filters,
  pizzas,
  card,
});

export default rootReducer;
